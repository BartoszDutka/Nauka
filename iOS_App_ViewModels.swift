import Foundation
import SwiftUI

// MARK: - QuestionRepository

class QuestionRepository: ObservableObject {
    @Published var allQuestions: [Question] = []
    @Published var filteredQuestions: [Question] = []
    @Published var isLoading = false
    @Published var errorMessage: String?
    
    static let shared = QuestionRepository()
    
    private init() {
        loadQuestionsFromBundle()
    }
    
    func loadQuestionsFromBundle() {
        isLoading = true
        DispatchQueue.global(qos: .userInitiated).async { [weak self] in
            do {
                // Try to load from app bundle
                if let url = Bundle.main.url(forResource: "questions", withExtension: "json") {
                    let data = try Data(contentsOf: url)
                    let questions = try JSONDecoder().decode([Question].self, from: data)
                    DispatchQueue.main.async {
                        self?.allQuestions = questions
                        self?.filteredQuestions = questions
                        self?.isLoading = false
                    }
                } else {
                    // Create sample data if file not found
                    DispatchQueue.main.async {
                        self?.loadSampleData()
                        self?.isLoading = false
                    }
                }
            } catch {
                DispatchQueue.main.async {
                    self?.errorMessage = "Błąd ładowania pytań: \(error.localizedDescription)"
                    self?.isLoading = false
                    self?.loadSampleData()
                }
            }
        }
    }
    
    func filterQuestions(tests: Set<Int>, types: Set<String>) {
        if tests.isEmpty && types.isEmpty {
            filteredQuestions = allQuestions
        } else {
            filteredQuestions = allQuestions.filter { question in
                let testMatch = tests.isEmpty || tests.contains(question.test)
                let typeMatch = types.isEmpty || types.contains(question.type)
                return testMatch && typeMatch
            }
        }
    }
    
    func getQuestion(by id: Int) -> Question? {
        allQuestions.first { $0.id == id }
    }
    
    func getAllTests() -> [Int] {
        let tests = Set(allQuestions.map { $0.test })
        return Array(tests).sorted()
    }
    
    func getAllQuestionTypes() -> [String] {
        let types = Set(allQuestions.map { $0.type })
        return Array(types).sorted()
    }
    
    private func loadSampleData() {
        // This would be replaced with actual data loading
        allQuestions = []
        filteredQuestions = []
    }
}

// MARK: - Quiz Manager

class QuizManager: NSObject, ObservableObject {
    @Published var currentSession: QuizSession?
    @Published var currentQuestion: Question?
    @Published var remainingQuestions: [Question] = []
    @Published var uiState = QuizViewState()
    @Published var settings = QuizSettings()
    @Published var statistics = Statistics()
    
    @Published var quizInProgress = false
    @Published var sessionTimer: Timer?
    
    private let questionRepository = QuestionRepository.shared
    private let dataManager = DataManager.shared
    
    override init() {
        super.init()
        loadSettings()
        loadStatistics()
    }
    
    func startNewQuiz(questions: [Question]) {
        let session = QuizSession(totalQuestions: min(questions.count, settings.numberOfQuestions))
        currentSession = session
        
        var questionsToUse = questions
        if settings.shuffleQuestions {
            questionsToUse.shuffle()
        }
        
        remainingQuestions = Array(questionsToUse.prefix(settings.numberOfQuestions))
        quizInProgress = true
        uiState = QuizViewState()
        
        loadNextQuestion()
        
        if settings.timerEnabled {
            startTimer()
        }
    }
    
    func loadNextQuestion() {
        guard !remainingQuestions.isEmpty else {
            finishQuiz()
            return
        }
        
        currentQuestion = remainingQuestions.removeFirst()
        uiState = QuizViewState(timeRemaining: settings.timePerQuestion)
        
        if settings.timerEnabled {
            resetTimer()
        }
    }
    
    func submitAnswer(selectedAnswers: Set<String>) {
        guard let question = currentQuestion, var session = currentSession else { return }
        
        uiState.selectedAnswers = selectedAnswers
        uiState.isAnswered = true
        
        if settings.showExplanationAfterAnswer {
            uiState.showingExplanation = true
        }
        
        let isCorrect = selectedAnswers == Set(question.correct)
        
        let userAnswer = UserAnswer(
            questionId: question.id,
            selectedAnswers: Array(selectedAnswers),
            correctAnswers: question.correct,
            isCorrect: isCorrect,
            answeredAt: Date(),
            timeSpentSeconds: max(0, settings.timePerQuestion - uiState.timeRemaining)
        )
        
        session.questionsAnswered[question.id] = userAnswer
        
        if isCorrect {
            session.score += 1
            uiState.currentScore = session.score
        }
        
        currentSession = session
        
        stopTimer()
    }
    
    func proceedToNext() {
        if remainingQuestions.isEmpty {
            uiState.showingResults = true
            finishQuiz()
        } else {
            loadNextQuestion()
        }
    }
    
    func finishQuiz() {
        guard var session = currentSession else { return }
        
        session.dateEnded = Date()
        currentSession = session
        
        quizInProgress = false
        stopTimer()
        
        // Update statistics
        updateStatisticsWithSession(session)
        
        // Save session and statistics
        dataManager.saveSession(session)
        saveSettings()
        saveStatistics()
    }
    
    func cancelQuiz() {
        quizInProgress = false
        stopTimer()
        currentSession = nil
        remainingQuestions = []
        currentQuestion = nil
        uiState = QuizViewState()
    }
    
    // MARK: - Timer Management
    
    private func startTimer() {
        guard settings.timerEnabled else { return }
        
        sessionTimer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { [weak self] _ in
            self?.uiState.timeRemaining -= 1
            
            if self?.uiState.timeRemaining ?? 0 <= 0 {
                self?.autoSubmitAnswer()
            }
        }
    }
    
    private func resetTimer() {
        stopTimer()
        startTimer()
    }
    
    private func stopTimer() {
        sessionTimer?.invalidate()
        sessionTimer = nil
    }
    
    private func autoSubmitAnswer() {
        submitAnswer(selectedAnswers: uiState.selectedAnswers)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
            self.proceedToNext()
        }
    }
    
    // MARK: - Statistics Management
    
    private func updateStatisticsWithSession(_ session: QuizSession) {
        var stats = statistics
        
        stats.sessionsCompleted += 1
        stats.lastSessionDate = Date()
        
        for (_, answer) in session.questionsAnswered {
            stats.totalQuestionsAnswered += 1
            if answer.isCorrect {
                stats.totalCorrect += 1
            } else {
                stats.totalIncorrect += 1
            }
            stats.averageTimePerQuestion = (stats.averageTimePerQuestion + answer.timeSpentSeconds) / 2
        }
        
        // Update test-specific statistics
        if let question = currentQuestion {
            let testId = question.test
            if var testStats = stats.quizzesByTest[testId] {
                testStats.questionsAnswered += 1
                let answer = session.questionsAnswered[question.id]
                if answer?.isCorrect ?? false {
                    testStats.questionsCorrect += 1
                }
                stats.quizzesByTest[testId] = testStats
            } else {
                let testStats = TestStatistics(
                    testId: testId,
                    questionsAnswered: 1,
                    questionsCorrect: (session.questionsAnswered[question.id]?.isCorrect ?? false) ? 1 : 0
                )
                stats.quizzesByTest[testId] = testStats
            }
        }
        
        statistics = stats
    }
    
    private func loadSettings() {
        if let saved = dataManager.loadSettings() {
            settings = saved
        }
    }
    
    private func saveSettings() {
        dataManager.saveSettings(settings)
    }
    
    private func loadStatistics() {
        if let saved = dataManager.loadStatistics() {
            statistics = saved
        }
    }
    
    private func saveStatistics() {
        dataManager.saveStatistics(statistics)
    }
}

// MARK: - Data Manager

class DataManager: ObservableObject {
    static let shared = DataManager()
    
    private let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
    
    private init() {}
    
    // MARK: - Sessions
    
    func saveSession(_ session: QuizSession) {
        let fileURL = documentsDirectory.appendingPathComponent("session_\(session.sessionId).json")
        
        do {
            let data = try JSONEncoder().encode(session)
            try data.write(to: fileURL)
        } catch {
            print("Error saving session: \(error)")
        }
    }
    
    func loadSessions() -> [QuizSession] {
        do {
            let files = try FileManager.default.contentsOfDirectory(at: documentsDirectory, includingPropertiesForKeys: nil)
            let sessionFiles = files.filter { $0.lastPathComponent.hasPrefix("session_") }
            
            var sessions: [QuizSession] = []
            for fileURL in sessionFiles {
                let data = try Data(contentsOf: fileURL)
                let session = try JSONDecoder().decode(QuizSession.self, from: data)
                sessions.append(session)
            }
            
            return sessions.sorted { $0.dateStarted > $1.dateStarted }
        } catch {
            print("Error loading sessions: \(error)")
            return []
        }
    }
    
    // MARK: - Settings
    
    func saveSettings(_ settings: QuizSettings) {
        let fileURL = documentsDirectory.appendingPathComponent("settings.json")
        
        do {
            let data = try JSONEncoder().encode(settings)
            try data.write(to: fileURL)
        } catch {
            print("Error saving settings: \(error)")
        }
    }
    
    func loadSettings() -> QuizSettings? {
        let fileURL = documentsDirectory.appendingPathComponent("settings.json")
        
        guard FileManager.default.fileExists(atPath: fileURL.path) else { return nil }
        
        do {
            let data = try Data(contentsOf: fileURL)
            return try JSONDecoder().decode(QuizSettings.self, from: data)
        } catch {
            print("Error loading settings: \(error)")
            return nil
        }
    }
    
    // MARK: - Statistics
    
    func saveStatistics(_ statistics: Statistics) {
        let fileURL = documentsDirectory.appendingPathComponent("statistics.json")
        
        do {
            let data = try JSONEncoder().encode(statistics)
            try data.write(to: fileURL)
        } catch {
            print("Error saving statistics: \(error)")
        }
    }
    
    func loadStatistics() -> Statistics? {
        let fileURL = documentsDirectory.appendingPathComponent("statistics.json")
        
        guard FileManager.default.fileExists(atPath: fileURL.path) else { return nil }
        
        do {
            let data = try Data(contentsOf: fileURL)
            return try JSONDecoder().decode(Statistics.self, from: data)
        } catch {
            print("Error loading statistics: \(error)")
            return nil
        }
    }
}
