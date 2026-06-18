# Aplikacja iOS - Nauka Programowania Równoległego 📱

Pełna aplikacja iOS do nauki pytań z zakresu programowania równoległego (Parallel Programming).

## 🎯 Funkcjonalności

### 1. **Quiz Mode** 🎓
- Rozwiązywanie pytań wielokrotnego wyboru (MC) i otwartych
- Automatyczne sprawdzanie odpowiedzi
- Wyświetlanie wyjaśnień do każdego pytania
- Wbudowany timer (opcjonalny)
- Mieszanie pytań i odpowiedzi

### 2. **Question Browser** 📚
- Przeglądanie wszystkich pytań
- Filtrowanie po testach i typach pytań
- Wyszukiwanie po tekście
- Wyświetlanie poprawnych i niepoprawnych odpowiedzi
- Czytanie wyjaśnień do każdego pytania

### 3. **Statistics** 📊
- Śledzenie ogólnego postępu
- Wyniki po każdym teście
- Historia ostatnich sesji
- Dokładność odpowiedzi
- Czas spędzony na pytaniach

### 4. **Settings** ⚙️
- Liczba pytań w quizie
- Włączanie/wyłączanie timera
- Mieszanie pytań i odpowiedzi
- Automatyczne wyświetlanie wyjaśnień
- Tryb ciemny
- Resetowanie statystyk

### 5. **Results & History** 📝
- Szczegółowy przegląd odpowiedzi po quizie
- Historia wszystkich sesji
- Podział wyników po testach

## 📋 Wymagania

- iOS 15.0 lub nowszy
- Xcode 14.0 lub nowszy
- Swift 5.7+
- iPad Air 2+ lub iPhone 11+

## 🚀 Instalacja

### Krok 1: Przygotowanie pliku projektu

1. Utwórz nowy projekt w Xcode:
   - Otwórz Xcode
   - Wybierz **File > New > Project**
   - Wybierz **iOS > App**
   - Wpisz nazwę: `NaukaProMax`
   - Wybierz **SwiftUI** jako User Interface

### Krok 2: Dodanie plików Swift

1. **iOS_App_Models.swift** - Modele danych
   - Przejdź do **File > Add Files to "NaukaProMax"...**
   - Wklej zawartość do nowego pliku `Models.swift`
   - Lub: Copy-paste do Xcode jako nowy plik

2. **iOS_App_ViewModels.swift** - ViewModels i zarządzanie danymi
   - Utwórz nowy plik `ViewModels.swift`
   - Wklej zawartość

3. **iOS_App_Views_Main.swift** - Główne widoki
   - Utwórz nowy plik `Views/MainViews.swift`
   - Wklej zawartość

4. **iOS_App_Views_Quiz.swift** - Widok quizu
   - Utwórz nowy plik `Views/QuizView.swift`
   - Wklej zawartość

5. **iOS_App_Views_Browser.swift** - Przeglądarka pytań
   - Utwórz nowy plik `Views/BrowserView.swift`
   - Wklej zawartość

6. **iOS_App_Views_Stats_Settings.swift** - Statystyki i ustawienia
   - Utwórz nowy plik `Views/StatsView.swift`
   - Wklej zawartość

### Krok 3: Dodanie pliku JSON z pytaniami

1. Skopiuj plik `questions.json` do projektu:
   - W Xcode: **File > Add Files to "NaukaProMax"...**
   - Wybierz `questions.json`
   - Zaznacz **Copy items if needed**
   - Zaznacz **Add to targets: NaukaProMax**

### Krok 4: Konfiguracja projektu

1. **Info.plist** - Uprawnienia (opcjonalnie)
   - Aplikacja nie wymaga specjalnych uprawnień

2. **App Icons** - Dodaj ikony (opcjonalnie)
   - Otwórz Assets.xcassets
   - Dodaj ikony o rozmiarach: 120x120, 180x180 (dla różnych urządzeń)

### Krok 5: Budowanie i testowanie

```bash
# Buduj projekt
⌘ + B

# Uruchom na symulatorze
⌘ + R

# Uruchom na urządzeniu rzeczywistym
⌘ + R (z podłączonym iPhonem)
```

## 📱 Struktura Aplikacji

```
NaukaProMax/
├── Models.swift
│   ├── Question
│   ├── QuizSession
│   ├── UserAnswer
│   ├── Statistics
│   ├── QuizSettings
│   └── QuizViewState
│
├── ViewModels.swift
│   ├── QuestionRepository
│   ├── QuizManager
│   └── DataManager
│
├── Views/
│   ├── MainViews.swift
│   │   ├── NaukaApp (Main App)
│   │   ├── ContentView (Tab Navigation)
│   │   ├── HomeView
│   │   ├── StatCard
│   │   └── SessionRow
│   │
│   ├── QuizView.swift
│   │   ├── QuizView
│   │   ├── QuizQuestionView
│   │   ├── AnswerOptionView
│   │   ├── QuizResultsView
│   │   └── ResultsDetailView
│   │
│   ├── BrowserView.swift
│   │   ├── QuizBrowserView
│   │   ├── QuestionBrowserRow
│   │   ├── QuestionDetailView
│   │   ├── SearchBar
│   │   └── Badge
│   │
│   └── StatsView.swift
│       ├── StatisticsView
│       ├── StatisticCard
│       ├── TestStatisticRow
│       └── SettingsView
│
└── questions.json
```

## 🎮 Użytkowanie

### Rozpoczynanie Quizu

1. Przejdź do karty "Nauka"
2. Kliknij "Rozpocznij Quiz"
3. Wybierz odpowiedzi i kliknij "Odpowiedź"
4. Przeczytaj wyjaśnienie (jeśli włączone)
5. Kliknij "Następne" aby przejść do kolejnego pytania

### Przeglądanie Pytań

1. Przejdź do karty "Pytania"
2. Użyj pola wyszukiwania lub filtrów
3. Kliknij na pytanie, aby zobaczyć szczegóły
4. Przeczytaj wyjaśnienia i odpowiedzi

### Sprawdzanie Statystyk

1. Przejdź do karty "Statystyki"
2. Przeglądaj ogólne wyniki
3. Sprawdzaj wyniki po poszczególnych testach
4. Przeglądaj historię sesji

### Konfiguracja Ustawień

1. Przejdź do karty "Ustawienia"
2. Dostosuj liczbę pytań
3. Włącz/wyłącz timer
4. Wybierz opcje wyświetlania
5. Zresetuj statystyki (jeśli potrzeba)

## 💾 Przechowywanie Danych

Aplikacja przechowuje dane lokalnie na urządzeniu:

- **Pytania**: Załadowane z `questions.json` do pamięci
- **Sesje**: Zapisywane jako `session_UUID.json` w Documents folder
- **Statystyki**: `statistics.json`
- **Ustawienia**: `settings.json`

Wszystkie dane są szyfrowane przez iOS i nie opuszczają urządzenia.

## 🎨 Dostosowywanie

### Zmiana Kolorów

W plikach widoków, zmień definicje kolorów:

```swift
.foregroundColor(.blue)      // Zmień na inny kolor
.background(Color.green)      // Zmień tło
```

### Dodanie Nowych Pytań

1. Edytuj lub zastąp `questions.json` nowym plikiem
2. Upewnij się, że struktura JSON jest poprawna
3. Przebuduj aplikację

### Zmiana Języka

1. Edytuj napisy w plikach Views
2. Zamień polskie teksty na angielskie/inne języki
3. W `SettingsView` dodaj obsługę dla nowego języka

## 🐛 Rozwiązywanie Problemów

### Problemy z Ładowaniem Pytań

```swift
// Sprawdź, czy questions.json jest dodany do target
// W Xcode: Select questions.json > File Inspector > Target Membership
```

### Problemy z Wyświetlaniem

- Czyszczenie build cache: ⌘ + Shift + K
- Restart Xcode: Zamknij i otwórz ponownie
- Usunięcie z device: Otwórz Settings > Nauka > Usuń

### Błędy Kompilacji

1. Sprawdź, czy masz Swift 5.7+
2. Sprawdź, czy iOS target to minimum 15.0
3. Czyszczenie: ⌘ + Shift + K, następnie ⌘ + B

## 📚 Format pliku questions.json

```json
[
  {
    "test": 1,
    "source_num": 1,
    "type": "mc",
    "question": "Pytanie do odpowiedzi?",
    "correct": ["Poprawna1", "Poprawna2"],
    "wrong": ["Błędna1", "Błędna2"],
    "explanation": "Wyjaśnienie...",
    "id": 1
  }
]
```

## 🚀 Wdrożenie

### Przygotowanie do publikacji

1. **Icons**: Dodaj ikony 1024x1024px w AppStore
2. **Screenshots**: Przygotuj screenshoty dla sklepu
3. **Description**: Napisz opis aplikacji
4. **Privacy Policy**: Dodaj politykę prywatności

### Publikacja na App Store

1. Załóż konto Apple Developer
2. Przygotuj certificate i provisioning profile
3. Ustaw wersję i build number
4. Archive aplikacji: Product > Archive
5. Wyślij do App Store Connect

## 📞 Wsparcie

W razie pytań lub problemów:
1. Sprawdź dokumentację Apple SwiftUI
2. Przejrzyj console error messages
3. Zweryfikuj plik questions.json

## 📄 Licencja

Projekt dostępny do użytku eduacyjnego i osobistego.

---

**Versionuj**: 1.0.0  
**Data**: 2026-06-18  
**Platforma**: iOS 15+
