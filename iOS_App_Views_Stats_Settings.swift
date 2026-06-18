import SwiftUI

// MARK: - Statistics View

struct StatisticsView: View {
    @EnvironmentObject var quizManager: QuizManager
    @State private var selectedPeriod: String = "all"
    
    var stats: Statistics {
        quizManager.statistics
    }
    
    var body: some View {
        NavigationView {
            VStack(spacing: 0) {
                // Overall statistics cards
                ScrollView(.vertical, showsIndicators: false) {
                    VStack(spacing: 20) {
                        // Main stats grid
                        VStack(spacing: 12) {
                            HStack(spacing: 12) {
                                StatisticCard(
                                    title: "Pytań Rozwiązanych",
                                    value: "\(stats.totalQuestionsAnswered)",
                                    icon: "questionmark.circle",
                                    color: .blue
                                )
                                
                                StatisticCard(
                                    title: "Poprawnych",
                                    value: "\(stats.totalCorrect)",
                                    icon: "checkmark.circle",
                                    color: .green
                                )
                            }
                            
                            HStack(spacing: 12) {
                                StatisticCard(
                                    title: "Błędnych",
                                    value: "\(stats.totalIncorrect)",
                                    icon: "xmark.circle",
                                    color: .red
                                )
                                
                                StatisticCard(
                                    title: "Dokładność",
                                    value: String(format: "%.1f%%", stats.overallAccuracy),
                                    icon: "target",
                                    color: .orange
                                )
                            }
                            
                            HStack(spacing: 12) {
                                StatisticCard(
                                    title: "Sesje",
                                    value: "\(stats.sessionsCompleted)",
                                    icon: "timer",
                                    color: .purple
                                )
                                
                                StatisticCard(
                                    title: "Średni Czas",
                                    value: "\(stats.averageTimePerQuestion)s",
                                    icon: "stopwatch",
                                    color: .pink
                                )
                            }
                        }
                        .padding()
                        
                        // Tests breakdown
                        if !stats.quizzesByTest.isEmpty {
                            VStack(alignment: .leading, spacing: 12) {
                                Text("Wyniki po Testach")
                                    .font(.headline)
                                    .padding(.horizontal)
                                
                                ForEach(stats.quizzesByTest.sorted(by: { $0.key < $1.key }), id: \.key) { testId, testStats in
                                    TestStatisticRow(testId: testId, stats: testStats)
                                }
                            }
                            .padding()
                        }
                        
                        // Recent sessions
                        VStack(alignment: .leading, spacing: 12) {
                            Text("Ostatnie Sesje")
                                .font(.headline)
                                .padding(.horizontal)
                            
                            let sessions = DataManager.shared.loadSessions().prefix(10)
                            
                            if sessions.isEmpty {
                                Text("Brak sesji")
                                    .font(.caption)
                                    .foregroundColor(.gray)
                                    .padding()
                            } else {
                                ForEach(Array(sessions), id: \.sessionId) { session in
                                    SessionStatisticRow(session: session)
                                }
                            }
                        }
                        .padding()
                    }
                    .padding(.vertical)
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    Text("Statystyki")
                        .font(.headline)
                }
            }
        }
    }
}

// MARK: - Statistic Card Component

struct StatisticCard: View {
    let title: String
    let value: String
    let icon: String
    let color: Color
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Image(systemName: icon)
                    .foregroundColor(color)
                    .font(.headline)
                
                Spacer()
            }
            
            Text(value)
                .font(.title2)
                .fontWeight(.bold)
            
            Text(title)
                .font(.caption)
                .foregroundColor(.gray)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding()
        .background(color.opacity(0.1))
        .cornerRadius(12)
    }
}

// MARK: - Test Statistic Row

struct TestStatisticRow: View {
    let testId: Int
    let stats: TestStatistics
    
    var body: some View {
        VStack(spacing: 8) {
            HStack {
                Text("Test \(testId)")
                    .fontWeight(.semibold)
                
                Spacer()
                
                Text(String(format: "%.0f%%", stats.accuracy))
                    .fontWeight(.semibold)
                    .foregroundColor(.blue)
            }
            
            HStack(spacing: 4) {
                Text("\(stats.questionsCorrect)/\(stats.questionsAnswered)")
                    .font(.caption)
                    .foregroundColor(.gray)
                
                Spacer()
                
                GeometryReader { geometry in
                    ZStack(alignment: .leading) {
                        RoundedRectangle(cornerRadius: 4)
                            .fill(Color(.systemGray4))
                        
                        RoundedRectangle(cornerRadius: 4)
                            .fill(Color.green)
                            .frame(width: geometry.size.width * CGFloat(stats.accuracy) / 100)
                    }
                }
                .frame(height: 6)
            }
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(12)
    }
}

// MARK: - Session Statistic Row

struct SessionStatisticRow: View {
    let session: QuizSession
    
    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 4) {
                Text("Quiz: \(session.questionsAnswered.count) pytań")
                    .font(.subheadline)
                    .fontWeight(.semibold)
                
                Text(session.dateStarted.formatted(date: .abbreviated, time: .shortened))
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            
            Spacer()
            
            VStack(alignment: .trailing, spacing: 4) {
                Text("\(session.score)/\(session.totalQuestions)")
                    .font(.subheadline)
                    .fontWeight(.semibold)
                
                Text(String(format: "%.0f%%", session.percentageScore))
                    .font(.caption)
                    .foregroundColor(session.isPassed ? .green : .red)
            }
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(12)
    }
}

// MARK: - Settings View

struct SettingsView: View {
    @EnvironmentObject var quizManager: QuizManager
    @State private var showResetAlert = false
    
    var settings: QuizSettings {
        quizManager.settings
    }
    
    var body: some View {
        NavigationView {
            Form {
                // Quiz Settings
                Section(header: Text("Ustawienia Quizu")) {
                    Stepper("Liczba pytań: \(quizManager.settings.numberOfQuestions)", 
                            value: $quizManager.settings.numberOfQuestions, 
                            in: 1...50)
                    
                    Toggle("Mieszaj pytania", isOn: $quizManager.settings.shuffleQuestions)
                    Toggle("Mieszaj odpowiedzi", isOn: $quizManager.settings.shuffleAnswers)
                    Toggle("Pokaż wyjaśnienie", isOn: $quizManager.settings.showExplanationAfterAnswer)
                }
                
                // Timer Settings
                Section(header: Text("Timer")) {
                    Toggle("Włącz timer", isOn: $quizManager.settings.timerEnabled)
                    
                    if quizManager.settings.timerEnabled {
                        Stepper("Czas na pytanie: \(quizManager.settings.timePerQuestion)s",
                                value: $quizManager.settings.timePerQuestion,
                                in: 5...300,
                                step: 5)
                    }
                }
                
                // Appearance Settings
                Section(header: Text("Wygląd")) {
                    Toggle("Tryb ciemny", isOn: $quizManager.settings.darkMode)
                    
                    Picker("Język", selection: $quizManager.settings.language) {
                        Text("Polski").tag("pl")
                        Text("English").tag("en")
                    }
                }
                
                // Data Management
                Section(header: Text("Dane")) {
                    Button(action: { showResetAlert = true }) {
                        HStack {
                            Image(systemName: "trash.circle.fill")
                                .foregroundColor(.red)
                            Text("Resetuj Statystyki")
                                .foregroundColor(.red)
                        }
                    }
                }
                
                // About
                Section(header: Text("Informacje")) {
                    HStack {
                        Text("Wersja")
                        Spacer()
                        Text("1.0.0")
                            .foregroundColor(.gray)
                    }
                    
                    HStack {
                        Text("Pytań w bazie")
                        Spacer()
                        Text("\(QuestionRepository.shared.allQuestions.count)")
                            .foregroundColor(.gray)
                    }
                    
                    HStack {
                        Text("Testów")
                        Spacer()
                        Text("\(QuestionRepository.shared.getAllTests().count)")
                            .foregroundColor(.gray)
                    }
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    Text("Ustawienia")
                        .font(.headline)
                }
            }
            .alert("Resetuj Statystyki", isPresented: $showResetAlert) {
                Button("Anuluj", role: .cancel) { }
                Button("Resetuj", role: .destructive) {
                    resetStatistics()
                }
            } message: {
                Text("Czy na pewno chcesz zresetować wszystkie statystyki? Tej operacji nie można cofnąć.")
            }
            .onChange(of: quizManager.settings) { newSettings in
                quizManager.saveSettings()
            }
        }
    }
    
    private func resetStatistics() {
        quizManager.statistics = Statistics()
        quizManager.saveStatistics()
    }
}

#Preview {
    TabView {
        StatisticsView()
            .tabItem {
                Label("Stats", systemImage: "chart.bar")
            }
        
        SettingsView()
            .tabItem {
                Label("Settings", systemImage: "gear")
            }
    }
    .environmentObject(QuizManager())
}
