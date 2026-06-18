import SwiftUI

// MARK: - Quiz Browser View

struct QuizBrowserView: View {
    @EnvironmentObject var questionRepository: QuestionRepository
    @EnvironmentObject var quizManager: QuizManager
    @State private var searchText = ""
    @State private var selectedTest: Int?
    @State private var selectedType: String?
    @State private var selectedQuestion: Question?
    @State private var showDetailView = false
    
    var filteredQuestions: [Question] {
        var results = questionRepository.filteredQuestions
        
        if !searchText.isEmpty {
            results = results.filter { question in
                question.question.localizedCaseInsensitiveContains(searchText) ||
                question.explanation.localizedCaseInsensitiveContains(searchText)
            }
        }
        
        if let test = selectedTest {
            results = results.filter { $0.test == test }
        }
        
        if let type = selectedType {
            results = results.filter { $0.type == type }
        }
        
        return results
    }
    
    var body: some View {
        NavigationView {
            VStack(spacing: 0) {
                // Search bar
                SearchBar(text: $searchText)
                    .padding()
                
                // Filter tabs
                ScrollView(.horizontal, showsIndicators: false) {
                    VStack {
                        HStack(spacing: 12) {
                            // Test filter
                            Menu {
                                Button("Wszystkie testy", action: { selectedTest = nil })
                                Divider()
                                
                                ForEach(questionRepository.getAllTests(), id: \.self) { test in
                                    Button("Test \(test)") {
                                        selectedTest = test
                                    }
                                }
                            } label: {
                                HStack {
                                    Image(systemName: "list.number")
                                    Text(selectedTest.map { "Test \($0)" } ?? "Testy")
                                        .font(.caption)
                                    Image(systemName: "chevron.down")
                                        .font(.caption2)
                                }
                                .padding(8)
                                .background(Color(.systemGray6))
                                .cornerRadius(8)
                            }
                            
                            // Type filter
                            Menu {
                                Button("Wszystkie typy", action: { selectedType = nil })
                                Divider()
                                
                                ForEach(questionRepository.getAllQuestionTypes(), id: \.self) { type in
                                    Button(type == "mc" ? "Wielokrotny wybór" : "Otwarte") {
                                        selectedType = type
                                    }
                                }
                            } label: {
                                HStack {
                                    Image(systemName: "ellipsis.circle")
                                    Text(selectedType.map { $0 == "mc" ? "MC" : "Otwarte" } ?? "Typy")
                                        .font(.caption)
                                    Image(systemName: "chevron.down")
                                        .font(.caption2)
                                }
                                .padding(8)
                                .background(Color(.systemGray6))
                                .cornerRadius(8)
                            }
                            
                            Spacer()
                            
                            Text("\(filteredQuestions.count) pytań")
                                .font(.caption)
                                .foregroundColor(.gray)
                        }
                        .padding(.horizontal)
                    }
                }
                .padding(.vertical, 8)
                
                // Questions list
                if filteredQuestions.isEmpty {
                    VStack(spacing: 12) {
                        Image(systemName: "magnifyingglass")
                            .font(.system(size: 40))
                            .foregroundColor(.gray)
                        
                        Text("Nie znaleziono pytań")
                            .font(.headline)
                        
                        Text("Spróbuj zmienić filtry lub szukany tekst")
                            .font(.caption)
                            .foregroundColor(.gray)
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
                } else {
                    List {
                        ForEach(filteredQuestions) { question in
                            NavigationLink(destination: QuestionDetailView(question: question)) {
                                QuestionBrowserRow(question: question)
                            }
                        }
                    }
                    .listStyle(.plain)
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    Text("Przegląd Pytań")
                        .font(.headline)
                }
            }
        }
    }
}

// MARK: - Question Browser Row

struct QuestionBrowserRow: View {
    let question: Question
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    Text(question.question)
                        .font(.subheadline)
                        .fontWeight(.semibold)
                        .lineLimit(2)
                    
                    HStack(spacing: 8) {
                        Badge(text: "Test \(question.test)", color: .blue)
                        Badge(text: question.type == "mc" ? "MC" : "Open", color: .orange)
                    }
                }
                
                Spacer()
                
                Image(systemName: "chevron.right")
                    .foregroundColor(.gray)
            }
        }
        .padding(.vertical, 4)
    }
}

// MARK: - Question Detail View

struct QuestionDetailView: View {
    let question: Question
    @State private var selectedAnswers: Set<String> = []
    @State private var isExpanded = false
    
    var isMultipleChoice: Bool {
        question.type == "mc"
    }
    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                // Question info
                VStack(alignment: .leading, spacing: 12) {
                    HStack {
                        Badge(text: "Test \(question.test)", color: .blue)
                        Badge(text: question.type == "mc" ? "Wielokrotny Wybór" : "Otwarte", color: .orange)
                        Spacer()
                    }
                    
                    Text(question.question)
                        .font(.headline)
                        .fontWeight(.semibold)
                }
                .padding()
                .background(Color(.systemGray6))
                .cornerRadius(12)
                
                // Correct answers
                VStack(alignment: .leading, spacing: 12) {
                    HStack {
                        Image(systemName: "checkmark.circle.fill")
                            .foregroundColor(.green)
                        Text("Poprawne Odpowiedzi")
                            .fontWeight(.semibold)
                    }
                    
                    VStack(alignment: .leading, spacing: 8) {
                        ForEach(question.correct, id: \.self) { answer in
                            HStack {
                                Text("✓")
                                    .foregroundColor(.green)
                                Text(answer)
                                    .font(.body)
                            }
                        }
                    }
                }
                .padding()
                .background(Color.green.opacity(0.1))
                .cornerRadius(12)
                
                // Wrong answers
                if !question.wrong.isEmpty {
                    VStack(alignment: .leading, spacing: 12) {
                        HStack {
                            Image(systemName: "xmark.circle.fill")
                                .foregroundColor(.red)
                            Text("Niepoprawne Odpowiedzi")
                                .fontWeight(.semibold)
                        }
                        
                        VStack(alignment: .leading, spacing: 8) {
                            ForEach(question.wrong, id: \.self) { answer in
                                HStack(alignment: .top) {
                                    Text("✗")
                                        .foregroundColor(.red)
                                    Text(answer)
                                        .font(.body)
                                }
                            }
                        }
                    }
                    .padding()
                    .background(Color.red.opacity(0.1))
                    .cornerRadius(12)
                }
                
                // Explanation
                VStack(alignment: .leading, spacing: 12) {
                    Button(action: { isExpanded.toggle() }) {
                        HStack {
                            Image(systemName: "lightbulb.fill")
                                .foregroundColor(.orange)
                            Text("Wyjaśnienie")
                                .fontWeight(.semibold)
                            Spacer()
                            Image(systemName: isExpanded ? "chevron.up" : "chevron.down")
                                .foregroundColor(.gray)
                        }
                    }
                    
                    if isExpanded {
                        Text(question.explanation)
                            .font(.body)
                            .lineLimit(nil)
                    }
                }
                .padding()
                .background(Color.orange.opacity(0.1))
                .cornerRadius(12)
            }
            .padding()
        }
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .principal) {
                Text("Szczegóły Pytania")
                    .font(.headline)
            }
        }
    }
}

// MARK: - Search Bar

struct SearchBar: View {
    @Binding var text: String
    
    var body: some View {
        HStack {
            Image(systemName: "magnifyingglass")
                .foregroundColor(.gray)
            
            TextField("Szukaj pytań...", text: $text)
                .textFieldStyle(.roundedBorder)
            
            if !text.isEmpty {
                Button(action: { text = "" }) {
                    Image(systemName: "xmark.circle.fill")
                        .foregroundColor(.gray)
                }
            }
        }
        .padding(8)
        .background(Color(.systemGray6))
        .cornerRadius(10)
    }
}

// MARK: - Badge Component

struct Badge: View {
    let text: String
    let color: Color
    
    var body: some View {
        Text(text)
            .font(.caption)
            .fontWeight(.semibold)
            .padding(.horizontal, 8)
            .padding(.vertical, 4)
            .background(color.opacity(0.2))
            .foregroundColor(color)
            .cornerRadius(6)
    }
}

#Preview {
    QuizBrowserView()
        .environmentObject(QuestionRepository.shared)
        .environmentObject(QuizManager())
}
