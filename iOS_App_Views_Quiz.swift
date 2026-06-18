import SwiftUI

// MARK: - Quiz View

struct QuizView: View {
    @EnvironmentObject var quizManager: QuizManager
    @State private var showAlert = false
    @State private var alertMessage = ""
    
    var body: some View {
        ZStack {
            if quizManager.uiState.showingResults {
                QuizResultsView()
                    .environmentObject(quizManager)
            } else if let question = quizManager.currentQuestion {
                QuizQuestionView(question: question)
                    .environmentObject(quizManager)
            } else {
                ProgressView()
            }
        }
        .alert("Wyjście z quizu", isPresented: $showAlert) {
            Button("Anuluj", role: .cancel) { }
            Button("Wyjdź", role: .destructive) {
                quizManager.cancelQuiz()
            }
        } message: {
            Text("Czy na pewno chcesz zakończyć quiz? Twój postęp nie będzie zapisany.")
        }
        .navigationBarBackButtonHidden(true)
        .navigationBarItems(leading: Button(action: { showAlert = true }) {
            HStack {
                Image(systemName: "xmark.circle.fill")
                Text("Wyjście")
            }
            .foregroundColor(.red)
        })
    }
}

// MARK: - Quiz Question View

struct QuizQuestionView: View {
    @EnvironmentObject var quizManager: QuizManager
    let question: Question
    
    @State private var selectedAnswers: Set<String> = []
    @State private var questionOptions: [QuestionOption] = []
    
    var isMultipleChoice: Bool {
        question.type == "mc"
    }
    
    var isAnswered: Bool {
        quizManager.uiState.isAnswered
    }
    
    var canSubmit: Bool {
        !selectedAnswers.isEmpty && !isAnswered
    }
    
    var body: some View {
        VStack(spacing: 0) {
            // Header with progress and timer
            VStack(spacing: 12) {
                HStack {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("Test \(question.test)")
                            .font(.caption)
                            .foregroundColor(.gray)
                        Text("Pytanie \(quizManager.currentSession?.questionsAnswered.count ?? 0 + 1)/\(quizManager.currentSession?.totalQuestions ?? 0)")
                            .font(.caption)
                            .fontWeight(.semibold)
                    }
                    
                    Spacer()
                    
                    VStack(alignment: .trailing, spacing: 4) {
                        Text("Wynik: \(quizManager.uiState.currentScore)/\(quizManager.currentSession?.totalQuestions ?? 0)")
                            .font(.caption)
                            .fontWeight(.semibold)
                    }
                    
                    if quizManager.settings.timerEnabled {
                        VStack(alignment: .trailing, spacing: 4) {
                            Text(formatTime(quizManager.uiState.timeRemaining))
                                .font(.caption)
                                .fontWeight(.semibold)
                                .foregroundColor(quizManager.uiState.timeRemaining <= 5 ? .red : .blue)
                        }
                        .frame(width: 50)
                    }
                }
                
                // Progress bar
                ProgressView(value: Double(quizManager.currentSession?.questionsAnswered.count ?? 0), total: Double(quizManager.currentSession?.totalQuestions ?? 1))
            }
            .padding()
            .background(Color(.systemGray6))
            
            // Question and options
            ScrollView(.vertical, showsIndicators: false) {
                VStack(alignment: .leading, spacing: 24) {
                    // Question text
                    VStack(alignment: .leading, spacing: 8) {
                        Text("Pytanie")
                            .font(.caption)
                            .foregroundColor(.gray)
                        
                        Text(question.question)
                            .font(.headline)
                            .fontWeight(.semibold)
                            .lineLimit(nil)
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                    
                    // Answer options
                    VStack(spacing: 12) {
                        if isMultipleChoice {
                            ForEach(questionOptions, id: \.id) { option in
                                AnswerOptionView(
                                    option: option,
                                    isSelected: selectedAnswers.contains(option.text),
                                    isAnswered: isAnswered,
                                    action: {
                                        toggleAnswer(option.text)
                                    }
                                )
                            }
                        } else {
                            Text("To pytanie otwarte. Przeczytaj wyjaśnienie.")
                                .font(.body)
                                .foregroundColor(.gray)
                                .padding()
                                .background(Color(.systemGray6))
                                .cornerRadius(8)
                        }
                    }
                    
                    // Explanation (if shown)
                    if quizManager.uiState.showingExplanation && isAnswered {
                        VStack(alignment: .leading, spacing: 12) {
                            HStack {
                                Image(systemName: "lightbulb.fill")
                                    .foregroundColor(.orange)
                                Text("Wyjaśnienie")
                                    .fontWeight(.semibold)
                            }
                            
                            Text(question.explanation)
                                .font(.body)
                                .lineLimit(nil)
                        }
                        .padding()
                        .background(Color(.systemOrange).opacity(0.1))
                        .cornerRadius(12)
                    }
                    
                    // Feedback (if answered)
                    if isAnswered {
                        let correctAnswer = selectedAnswers == Set(question.correct)
                        HStack(spacing: 12) {
                            Image(systemName: correctAnswer ? "checkmark.circle.fill" : "xmark.circle.fill")
                                .foregroundColor(correctAnswer ? .green : .red)
                            
                            Text(correctAnswer ? "Poprawna odpowiedź!" : "Niepoprawna odpowiedź")
                                .fontWeight(.semibold)
                            
                            Spacer()
                        }
                        .padding()
                        .background(Color(correctAnswer ? .green : .red).opacity(0.1))
                        .cornerRadius(12)
                    }
                }
                .padding()
            }
            
            // Action buttons
            VStack(spacing: 12) {
                if !isAnswered {
                    Button(action: submitAnswer) {
                        HStack {
                            Image(systemName: "checkmark.circle")
                            Text("Odpowiedź")
                                .fontWeight(.semibold)
                        }
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(canSubmit ? Color.blue : Color.gray)
                        .foregroundColor(.white)
                        .cornerRadius(12)
                    }
                    .disabled(!canSubmit)
                } else {
                    Button(action: proceedToNext) {
                        HStack {
                            Image(systemName: "arrow.right.circle")
                            Text(quizManager.remainingQuestions.isEmpty ? "Wyniki" : "Następne")
                                .fontWeight(.semibold)
                        }
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(Color.green)
                        .foregroundColor(.white)
                        .cornerRadius(12)
                    }
                }
            }
            .padding()
        }
        .onAppear {
            setupQuestionOptions()
        }
        .onChange(of: question.id) { _ in
            selectedAnswers = []
            quizManager.uiState.showingExplanation = false
            setupQuestionOptions()
        }
    }
    
    private func setupQuestionOptions() {
        var options: [String] = []
        options.append(contentsOf: question.correct)
        options.append(contentsOf: question.wrong)
        
        if quizManager.settings.shuffleAnswers {
            options.shuffle()
        }
        
        questionOptions = options.map { text in
            QuestionOption(text: text, isCorrect: question.correct.contains(text))
        }
    }
    
    private func toggleAnswer(_ answer: String) {
        if selectedAnswers.contains(answer) {
            selectedAnswers.remove(answer)
        } else {
            if isMultipleChoice && !question.correct.isEmpty {
                selectedAnswers.insert(answer)
            } else {
                selectedAnswers = [answer]
            }
        }
    }
    
    private func submitAnswer() {
        quizManager.submitAnswer(selectedAnswers: selectedAnswers)
    }
    
    private func proceedToNext() {
        quizManager.proceedToNext()
    }
    
    private func formatTime(_ seconds: Int) -> String {
        let minutes = seconds / 60
        let secs = seconds % 60
        return String(format: "%02d:%02d", minutes, secs)
    }
}

// MARK: - Answer Option View

struct AnswerOptionView: View {
    let option: QuestionOption
    let isSelected: Bool
    let isAnswered: Bool
    let action: () -> Void
    
    var backgroundColor: Color {
        if isAnswered {
            if option.isCorrect {
                return Color.green.opacity(0.1)
            } else if isSelected && !option.isCorrect {
                return Color.red.opacity(0.1)
            }
        }
        
        if isSelected && !isAnswered {
            return Color.blue.opacity(0.1)
        }
        
        return Color(.systemGray6)
    }
    
    var borderColor: Color {
        if isAnswered {
            if option.isCorrect {
                return Color.green
            } else if isSelected && !option.isCorrect {
                return Color.red
            }
        }
        
        if isSelected && !isAnswered {
            return Color.blue
        }
        
        return Color.clear
    }
    
    var body: some View {
        Button(action: action) {
            HStack(spacing: 12) {
                Image(systemName: isSelected ? "checkmark.circle.fill" : "circle")
                    .foregroundColor(isSelected ? .blue : .gray)
                
                VStack(alignment: .leading, spacing: 4) {
                    Text(option.text)
                        .font(.body)
                        .lineLimit(nil)
                        .foregroundColor(.primary)
                    
                    if isAnswered && option.isCorrect {
                        Text("✓ Poprawna")
                            .font(.caption)
                            .foregroundColor(.green)
                    } else if isAnswered && isSelected && !option.isCorrect {
                        Text("✗ Błędna")
                            .font(.caption)
                            .foregroundColor(.red)
                    }
                }
                
                Spacer()
            }
            .padding()
            .background(backgroundColor)
            .cornerRadius(12)
            .overlay(
                RoundedRectangle(cornerRadius: 12)
                    .stroke(borderColor, lineWidth: 2)
            )
        }
        .disabled(isAnswered)
    }
}

// MARK: - Quiz Results View

struct QuizResultsView: View {
    @EnvironmentObject var quizManager: QuizManager
    
    var body: some View {
        VStack(spacing: 20) {
            // Results summary
            VStack(spacing: 20) {
                Image(systemName: (quizManager.currentSession?.isPassed ?? false) ? "checkmark.circle.fill" : "xmark.circle.fill")
                    .font(.system(size: 60))
                    .foregroundColor((quizManager.currentSession?.isPassed ?? false) ? .green : .red)
                
                Text((quizManager.currentSession?.isPassed ?? false) ? "Gratulacje!" : "Spróbuj Ponownie")
                    .font(.title)
                    .fontWeight(.bold)
                
                VStack(spacing: 12) {
                    ScoreRow(label: "Wynik", value: "\(quizManager.currentSession?.score ?? 0)/\(quizManager.currentSession?.totalQuestions ?? 0)")
                    ScoreRow(label: "Procent", value: String(format: "%.0f%%", quizManager.currentSession?.percentageScore ?? 0))
                    ScoreRow(label: "Status", value: (quizManager.currentSession?.isPassed ?? false) ? "Zaliczony" : "Niezaliczony")
                }
                .padding()
                .background(Color(.systemGray6))
                .cornerRadius(12)
            }
            .padding()
            
            Spacer()
            
            // Review button
            NavigationLink(destination: ResultsDetailView()) {
                HStack {
                    Image(systemName: "doc.text")
                    Text("Przejrzyj Odpowiedzi")
                        .fontWeight(.semibold)
                }
                .frame(maxWidth: .infinity)
                .padding()
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(12)
            }
            .padding(.horizontal)
            
            // Start new quiz button
            Button(action: startNewQuiz) {
                HStack {
                    Image(systemName: "arrow.clockwise")
                    Text("Nowy Quiz")
                        .fontWeight(.semibold)
                }
                .frame(maxWidth: .infinity)
                .padding()
                .background(Color.green)
                .foregroundColor(.white)
                .cornerRadius(12)
            }
            .padding(.horizontal)
            
            // Back to home button
            Button(action: backToHome) {
                HStack {
                    Image(systemName: "house.fill")
                    Text("Powrót do Domu")
                        .fontWeight(.semibold)
                }
                .frame(maxWidth: .infinity)
                .padding()
                .background(Color(.systemGray6))
                .foregroundColor(.blue)
                .cornerRadius(12)
            }
            .padding(.horizontal)
            .padding(.bottom)
        }
        .navigationBarBackButtonHidden(true)
    }
    
    private func startNewQuiz() {
        quizManager.cancelQuiz()
        // Start new quiz automatically
    }
    
    private func backToHome() {
        quizManager.cancelQuiz()
    }
}

// MARK: - Score Row Component

struct ScoreRow: View {
    let label: String
    let value: String
    
    var body: some View {
        HStack {
            Text(label)
                .foregroundColor(.gray)
            Spacer()
            Text(value)
                .fontWeight(.semibold)
        }
    }
}

// MARK: - Results Detail View

struct ResultsDetailView: View {
    @EnvironmentObject var quizManager: QuizManager
    
    var body: some View {
        VStack {
            ScrollView {
                VStack(spacing: 16) {
                    ForEach(Array((quizManager.currentSession?.questionsAnswered ?? [:]).sorted(by: { $0.key < $1.key })), id: \.key) { _, answer in
                        if let question = quizManager.questionRepository.getQuestion(by: answer.questionId) {
                            ResultRow(question: question, answer: answer)
                        }
                    }
                }
                .padding()
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .principal) {
                Text("Szczegóły Wyników")
                    .font(.headline)
            }
        }
    }
}

// MARK: - Result Row Component

struct ResultRow: View {
    let question: Question
    let answer: UserAnswer
    @State private var isExpanded = false
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    Text(question.question)
                        .font(.subheadline)
                        .fontWeight(.semibold)
                        .lineLimit(2)
                    
                    HStack {
                        Image(systemName: answer.isCorrect ? "checkmark.circle.fill" : "xmark.circle.fill")
                            .foregroundColor(answer.isCorrect ? .green : .red)
                        
                        Text(answer.isCorrect ? "Poprawnie" : "Błędnie")
                            .font(.caption)
                            .foregroundColor(answer.isCorrect ? .green : .red)
                    }
                }
                
                Spacer()
                
                Button(action: { isExpanded.toggle() }) {
                    Image(systemName: isExpanded ? "chevron.up" : "chevron.down")
                        .foregroundColor(.gray)
                }
            }
            
            if isExpanded {
                Divider()
                
                VStack(alignment: .leading, spacing: 12) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("Twoja odpowiedź:")
                            .font(.caption)
                            .foregroundColor(.gray)
                        
                        ForEach(answer.selectedAnswers, id: \.self) { ans in
                            Text("• \(ans)")
                                .font(.caption)
                        }
                    }
                    
                    VStack(alignment: .leading, spacing: 4) {
                        Text("Poprawna odpowiedź:")
                            .font(.caption)
                            .foregroundColor(.gray)
                        
                        ForEach(answer.correctAnswers, id: \.self) { ans in
                            Text("• \(ans)")
                                .font(.caption)
                                .foregroundColor(.green)
                        }
                    }
                }
            }
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(12)
    }
}

#Preview {
    QuizView()
        .environmentObject(QuizManager())
}
