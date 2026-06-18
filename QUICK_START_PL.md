# Quick Start - Szybki Start 🚀

## 1. Otwórz Xcode i utwórz nowy projekt

```
File > New > Project > iOS > App
- Product Name: NaukaProMax
- Organization Identifier: com.yourname.naukaprogramowania
- Interface: SwiftUI
- Language: Swift
```

## 2. Dodaj Pliki Swift

Utwórz nowy folder "iOS_App_Files" w swoim projekcie i dodaj 6 plików:

### a) Models.swift
Zawiera: `Question`, `QuizSession`, `UserAnswer`, `Statistics`, `QuizSettings`, itd.
- Skopiuj zawartość z: `iOS_App_Models.swift`

### b) ViewModels.swift
Zawiera: `QuestionRepository`, `QuizManager`, `DataManager`
- Skopiuj zawartość z: `iOS_App_ViewModels.swift`
- **WAŻNE**: Dodaj extension do QuizManager dla `QuestionRepository` property:
```swift
extension QuizManager {
    var questionRepository: QuestionRepository {
        QuestionRepository.shared
    }
}
```

### c) MainViews.swift
Zawiera: `NaukaApp`, `ContentView`, `HomeView`, `StatCard`, `SessionRow`
- Skopiuj zawartość z: `iOS_App_Views_Main.swift`

### d) QuizView.swift
Zawiera: `QuizView`, `QuizQuestionView`, `AnswerOptionView`, `QuizResultsView`, `ResultsDetailView`
- Skopiuj zawartość z: `iOS_App_Views_Quiz.swift`

### e) BrowserView.swift
Zawiera: `QuizBrowserView`, `QuestionBrowserRow`, `QuestionDetailView`, `SearchBar`, `Badge`
- Skopiuj zawartość z: `iOS_App_Views_Browser.swift`

### f) StatsView.swift
Zawiera: `StatisticsView`, `StatisticCard`, `SettingsView`, `TestStatisticRow`, `SessionStatisticRow`
- Skopiuj zawartość z: `iOS_App_Views_Stats_Settings.swift`

## 3. Dodaj plik questions.json

```
File > Add Files to "NaukaProMax"...
Wybierz: questions.json
✓ Copy items if needed
✓ Add to targets: NaukaProMax
```

## 4. Uruchom aplikację

```
⌘ + R  (na symulatorze)
```

## 5. Struktura Projektu w Xcode

```
NaukaProMax
├── NaukaProMax.swift (main entry point)
├── iOS_App_Files/
│   ├── Models.swift
│   ├── ViewModels.swift
│   ├── MainViews.swift
│   ├── QuizView.swift
│   ├── BrowserView.swift
│   └── StatsView.swift
├── questions.json
├── Assets.xcassets
├── Preview Content/
└── Info.plist (jeśli potrzebny)
```

## 6. Jeśli pojawią się błędy

### "Cannot find 'QuestionRepository' in scope"
```swift
// Upewnij się, że ViewModels.swift zawiera kompletną klase QuestionRepository
// Sprawdź, czy wszystkie klasy są publiczne: class QuestionRepository: ObservableObject
```

### "Expression type 'Double' is ambiguous without more context"
```swift
// W Views, gdzie używasz Progress, zamiast:
ProgressView(value: Double(...))
// Wpisz:
ProgressView(value: 0.5) // do testowania
```

### "Cannot find 'questionRepository' in scope"
W `ResultsDetailView`, dodaj:
```swift
@EnvironmentObject var questionRepository: QuestionRepository
```

## 7. Zmiana Main App Entry Point (jeśli potrzeba)

Jeśli Xcode tworzy domyślny `NaukaProMaxApp.swift`, zamień go zawartością:

```swift
import SwiftUI

@main
struct NaukaApp: App {
    @StateObject private var quizManager = QuizManager()
    @StateObject private var questionRepository = QuestionRepository.shared
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(quizManager)
                .environmentObject(questionRepository)
        }
    }
}
```

## 8. Testy na Urządzeniu

- **iPhone Simulator**: ⌘ + R
- **Rzeczywisty iPhone**: 
  1. Podłącz iPhone
  2. Wybierz go w Xcode (u góry)
  3. ⌘ + R

## 9. Dostępne Zmienne w QuizManager

```swift
@Published var currentSession: QuizSession?           // Bieżąca sesja
@Published var currentQuestion: Question?              // Aktualne pytanie
@Published var remainingQuestions: [Question]          // Pozostałe pytania
@Published var uiState = QuizViewState()              // Stan UI
@Published var settings = QuizSettings()              // Ustawienia
@Published var statistics = Statistics()              // Statystyki
@Published var quizInProgress = false                 // Czy quiz trwa
```

## 10. Dostępne Metody w QuizManager

```swift
quizManager.startNewQuiz(questions: [Question])       // Rozpocznij quiz
quizManager.loadNextQuestion()                        // Następne pytanie
quizManager.submitAnswer(selectedAnswers: Set<String>) // Odpowiedź
quizManager.proceedToNext()                           // Dalej
quizManager.finishQuiz()                              // Koniec
quizManager.cancelQuiz()                              // Anuluj
```

## 11. Wczytywanie Pytań - Debugowanie

Jeśli pytania się nie wczytują:

```swift
// W QuestionRepository, dodaj:
print("Loading questions...")
print("Bundle URL: \(Bundle.main.url(forResource: "questions", withExtension: "json")?.absoluteString ?? "NOT FOUND")")
print("Loaded: \(allQuestions.count) questions")
```

## 12. Popularne Dostosowania

### Zmiana Motywu
```swift
.preferredColorScheme(quizManager.settings.darkMode ? .dark : nil)
```

### Zmiana Głównego Koloru
```swift
.foregroundColor(.blue)     // zmień na .green, .red, .orange, itd.
```

### Dodanie Nowych Testów
W `questions.json` zmień wartość `"test"` na wyższe numery.

### Wyłączenie Timera Domyślnie
```swift
quizManager.settings.timerEnabled = false
```

---

**Gotowe! 🎉** Aplikacja powinna teraz działać!

Jeśli potrzebujesz pomocy, sprawdź:
1. Xcode > Product > Scheme > Edit Scheme > Build
2. Build Phases > Compile Sources (czy są wszystkie Swift files?)
3. Build Settings > Swift Compiler Language > Minimum Deployment Target: iOS 15+
