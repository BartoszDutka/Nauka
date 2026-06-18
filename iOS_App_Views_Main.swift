import SwiftUI

// MARK: - Main App View

@main
struct NaukaApp: App {
    @StateObject private var quizManager = QuizManager()
    @StateObject private var questionRepository = QuestionRepository.shared
    @Environment(\.scenePhase) var scenePhase
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(quizManager)
                .environmentObject(questionRepository)
                .onReceive(NotificationCenter.default.publisher(for: UIApplication.willTerminateNotification)) { _ in
                    quizManager.saveSettings()
                    quizManager.saveStatistics()
                }
        }
    }
}

// MARK: - Content View (Main Screen)

struct ContentView: View {
    @EnvironmentObject var quizManager: QuizManager
    @EnvironmentObject var questionRepository: QuestionRepository
    @State private var selectedTab: Int = 0
    
    var body: some View {
        ZStack {
            TabView(selection: $selectedTab) {
                // Home Tab
                HomeView()
                    .tabItem {
                        Image(systemName: "house.fill")
                        Text("Nauka")
                    }
                    .tag(0)
                
                // Quiz Browser Tab
                QuizBrowserView()
                    .tabItem {
                        Image(systemName: "book.fill")
                        Text("Pytania")
                    }
                    .tag(1)
                
                // Statistics Tab
                StatisticsView()
                    .tabItem {
                        Image(systemName: "chart.bar.fill")
                        Text("Statystyki")
                    }
                    .tag(2)
                
                // Settings Tab
                SettingsView()
                    .tabItem {
                        Image(systemName: "gear")
                        Text("Ustawienia")
                    }
                    .tag(3)
            }
            .preferredColorScheme(quizManager.settings.darkMode ? .dark : nil)
            
            if quizManager.quizInProgress {
                QuizView()
                    .environmentObject(quizManager)
                    .transition(.move(edge: .trailing))
            }
        }
    }
}

// MARK: - Home View

struct HomeView: View {
    @EnvironmentObject var quizManager: QuizManager
    @EnvironmentObject var questionRepository: QuestionRepository
    @State private var selectedTestId: Int?
    
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                // Header
                VStack(spacing: 10) {
                    HStack {
                        VStack(alignment: .leading, spacing: 5) {
                            Text("Nauka Programowania")
                                .font(.title)
                                .fontWeight(.bold)
                            Text("Równoległego")
                                .font(.title)
                                .fontWeight(.bold)
                                .foregroundColor(.blue)
                        }
                        Spacer()
                        VStack(alignment: .trailing, spacing: 5) {
                            Text("Postęp")
                                .font(.caption)
                                .foregroundColor(.gray)
                            Text("\(quizManager.statistics.totalCorrect)/\(quizManager.statistics.totalQuestionsAnswered)")
                                .font(.headline)
                        }
                    }
                    .padding()
                    .background(Color(.systemGray6))
                    .cornerRadius(12)
                }
                .padding()
                
                // Quick Stats
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 12) {
                        StatCard(
                            title: "Testy",
                            value: "\(questionRepository.getAllTests().count)",
                            icon: "list.number",
                            color: .blue
                        )
                        
                        StatCard(
                            title: "Pytania",
                            value: "\(questionRepository.filteredQuestions.count)",
                            icon: "questionmark.circle",
                            color: .orange
                        )
                        
                        StatCard(
                            title: "Dokładność",
                            value: String(format: "%.0f%%", quizManager.statistics.overallAccuracy),
                            icon: "target",
                            color: .green
                        )
                        
                        StatCard(
                            title: "Sesje",
                            value: "\(quizManager.statistics.sessionsCompleted)",
                            icon: "timer",
                            color: .red
                        )
                    }
                    .padding(.horizontal)
                }
                .frame(height: 100)
                
                // Quick Start Section
                VStack(spacing: 12) {
                    Text("Szybki Start")
                        .font(.headline)
                        .padding(.horizontal)
                    
                    Button(action: startQuickQuiz) {
                        HStack {
                            Image(systemName: "play.fill")
                            Text("Rozpocznij Quiz")
                                .fontWeight(.semibold)
                        }
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(12)
                    }
                    .padding(.horizontal)
                    
                    NavigationLink(destination: QuizBrowserView()) {
                        HStack {
                            Image(systemName: "book.fill")
                            Text("Przeglądaj Pytania")
                                .fontWeight(.semibold)
                        }
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(Color(.systemGray6))
                        .foregroundColor(.blue)
                        .cornerRadius(12)
                    }
                    .padding(.horizontal)
                }
                
                // Recent Sessions
                VStack(alignment: .leading, spacing: 12) {
                    Text("Ostatnie Sesje")
                        .font(.headline)
                        .padding(.horizontal)
                    
                    let recentSessions = DataManager.shared.loadSessions().prefix(3)
                    
                    if recentSessions.isEmpty {
                        Text("Brak sesji. Rozpocznij quiz, aby zobaczyć tutaj wyniki!")
                            .font(.caption)
                            .foregroundColor(.gray)
                            .padding()
                    } else {
                        ForEach(Array(recentSessions), id: \.sessionId) { session in
                            SessionRow(session: session)
                        }
                    }
                }
                .padding(.horizontal)
                
                Spacer()
            }
            .navigationBarTitleDisplayMode(.inline)
        }
    }
    
    private func startQuickQuiz() {
        let questions = questionRepository.filteredQuestions
        quizManager.startNewQuiz(questions: questions)
    }
}

// MARK: - Stat Card Component

struct StatCard: View {
    let title: String
    let value: String
    let icon: String
    let color: Color
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Image(systemName: icon)
                    .foregroundColor(color)
                Spacer()
            }
            
            Text(value)
                .font(.headline)
            
            Text(title)
                .font(.caption)
                .foregroundColor(.gray)
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(12)
        .frame(width: 140)
    }
}

// MARK: - Session Row Component

struct SessionRow: View {
    let session: QuizSession
    
    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 4) {
                Text("Quiz: \(session.questionsAnswered.count) pytań")
                    .font(.subheadline)
                    .fontWeight(.semibold)
                
                Text("Wynik: \(session.score)/\(session.totalQuestions)")
                    .font(.caption)
                    .foregroundColor(.gray)
                
                Text(session.dateStarted.formatted(date: .abbreviated, time: .shortened))
                    .font(.caption2)
                    .foregroundColor(.gray)
            }
            
            Spacer()
            
            VStack(alignment: .trailing, spacing: 4) {
                Text(String(format: "%.0f%%", session.percentageScore))
                    .font(.headline)
                    .foregroundColor(session.isPassed ? .green : .red)
                
                Text(session.isPassed ? "Zaliczony" : "Niezaliczony")
                    .font(.caption2)
                    .foregroundColor(session.isPassed ? .green : .red)
            }
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(12)
    }
}

#Preview {
    ContentView()
        .environmentObject(QuizManager())
        .environmentObject(QuestionRepository.shared)
}
