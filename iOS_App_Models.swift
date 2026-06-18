import Foundation

// MARK: - Models

struct Question: Codable, Identifiable {
    let id: Int
    let test: Int
    let source_num: Int
    let type: String  // "mc" = multiple choice, "open" = open question
    let question: String
    let correct: [String]
    let wrong: [String]
    let explanation: String
}

struct QuizSession: Codable {
    var sessionId: UUID = UUID()
    var questionsAnswered: [Int: UserAnswer] = [:]  // [questionId: UserAnswer]
    var score: Int = 0
    var totalQuestions: Int = 0
    var dateStarted: Date = Date()
    var dateEnded: Date?
    
    var isPassed: Bool {
        guard totalQuestions > 0 else { return false }
        let percentage = Double(score) * 100 / Double(totalQuestions)
        return percentage >= 60.0
    }
    
    var percentageScore: Double {
        guard totalQuestions > 0 else { return 0 }
        return Double(score) * 100 / Double(totalQuestions)
    }
}

struct UserAnswer: Codable {
    let questionId: Int
    let selectedAnswers: [String]  // Selected answers by user
    let correctAnswers: [String]   // Correct answers
    let isCorrect: Bool
    let answeredAt: Date
    let timeSpentSeconds: Int
}

struct Statistics: Codable {
    var totalQuestionsAnswered: Int = 0
    var totalCorrect: Int = 0
    var totalIncorrect: Int = 0
    var averageTimePerQuestion: Int = 0
    var sessionsCompleted: Int = 0
    var quizzesByTest: [Int: TestStatistics] = [:]  // [testId: stats]
    var lastSessionDate: Date?
    var questionsReviewedCount: Int = 0
    
    var overallAccuracy: Double {
        guard totalQuestionsAnswered > 0 else { return 0 }
        return Double(totalCorrect) * 100 / Double(totalQuestionsAnswered)
    }
}

struct TestStatistics: Codable {
    var testId: Int
    var questionsAnswered: Int
    var questionsCorrect: Int
    var accuracy: Double {
        guard questionsAnswered > 0 else { return 0 }
        return Double(questionsCorrect) * 100 / Double(questionsAnswered)
    }
}

struct QuizSettings: Codable {
    var numberOfQuestions: Int = 10
    var showExplanationAfterAnswer: Bool = true
    var shuffleAnswers: Bool = true
    var shuffleQuestions: Bool = true
    var selectedTests: Set<Int> = []  // Empty = all tests
    var selectedQuestionTypes: Set<String> = []  // Empty = all types ("mc", "open")
    var timerEnabled: Bool = false
    var timePerQuestion: Int = 30  // seconds
    var darkMode: Bool = false
    var language: String = "pl"  // Polish by default
    
    enum CodingKeys: String, CodingKey {
        case numberOfQuestions, showExplanationAfterAnswer, shuffleAnswers
        case shuffleQuestions, showExplanation = "showExplanationAfterAnswer"
        case timerEnabled, timePerQuestion, darkMode, language
    }
}

// MARK: - UI Models

struct QuestionOption: Identifiable {
    let id = UUID()
    let text: String
    let isCorrect: Bool
    var isSelected: Bool = false
}

struct QuizViewState {
    var currentQuestionIndex: Int = 0
    var selectedAnswers: Set<String> = []
    var showingExplanation: Bool = false
    var timeRemaining: Int = 30
    var isAnswered: Bool = false
    var currentScore: Int = 0
    var showingResults: Bool = false
}
