# iOS App - Nauka Programowania Równoległego 📱

## 📦 Co Otrzymałeś

Kompletna, gotowa do użycia aplikacja iOS (SwiftUI) do nauki pytań z programowania równoległego. Aplikacja zawiera wszystkie funkcje z Twojej wersji webowej i wiele dodatkowych.

---

## 📂 Pliki Projektu

Wszystkie poniższe pliki znajdują się w katalogu `Nauka`:

### **Pliki Swift (Kod Aplikacji)**

| Plik | Zawartość | Rozmiar |
|------|-----------|---------|
| `iOS_App_Models.swift` | Modele danych (Question, QuizSession, Statistics, etc.) | ~200 linii |
| `iOS_App_ViewModels.swift` | ViewModels (QuestionRepository, QuizManager, DataManager) | ~400 linii |
| `iOS_App_Views_Main.swift` | Główne widoki (Home, Stats Card, Navigation) | ~300 linii |
| `iOS_App_Views_Quiz.swift` | Quiz Screen, Question View, Results | ~550 linii |
| `iOS_App_Views_Browser.swift` | Question Browser, Search, Detail View | ~300 linii |
| `iOS_App_Views_Stats_Settings.swift` | Statistics, Settings, Results Analysis | ~400 linii |

**Razem: ~2000 linii kodu Swift**

### **Dokumentacja**

| Plik | Przeznaczenie |
|------|---------------|
| `iOS_APP_SETUP_GUIDE_PL.md` | Pełny przewodnik instalacji (tym dokument) |
| `QUICK_START_PL.md` | Szybki start - instrukcja krok po kroku |
| `README_iOS_APP.md` | Ten plik - opis kompletny |

### **Dane**

| Plik | Zawartość |
|------|-----------|
| `questions.json` | Baza all 100+ pytań (już w twoim repo) |

---

## ✨ Główne Funkcjonalności

### 1️⃣ **Quiz Mode** 🎓
- ✅ Wielokrotny wybór (MC) i pytania otwarte
- ✅ Automatyczne sprawdzanie odpowiedzi
- ✅ Wyjaśnienia do każdego pytania
- ✅ Timer z odliczaniem
- ✅ Mieszanie pytań i odpowiedzi
- ✅ Śledzenie wyników

### 2️⃣ **Question Browser** 📚
- ✅ Przeglądanie wszystkich pytań
- ✅ Wyszukiwanie po tekście
- ✅ Filtrowanie po testach
- ✅ Filtrowanie po typie pytania (MC/Open)
- ✅ Wyświetlanie poprawnych/błędnych odpowiedzi
- ✅ Czytanie wyjaśnień

### 3️⃣ **Statistics** 📊
- ✅ Ogólny postęp
- ✅ Wyniki po testach
- ✅ Historia sesji
- ✅ Dokładność %
- ✅ Średni czas na pytanie
- ✅ Liczba sesji

### 4️⃣ **Settings** ⚙️
- ✅ Liczba pytań (1-50)
- ✅ Timer (włącz/wyłącz, długość)
- ✅ Mieszanie pytań
- ✅ Mieszanie odpowiedzi
- ✅ Auto-show wyjaśnień
- ✅ Tryb ciemny
- ✅ Resetowanie statystyk

### 5️⃣ **Results & History** 📝
- ✅ Szczegółowy przegląd odpowiedzi
- ✅ Historia wszystkich sesji
- ✅ Wyświetlanie co było błędem
- ✅ Przechowywanie lokalnie na urządzeniu

---

## 🎯 Cechy Techniczne

### Architektura
- **Pattern**: MVVM (Model-View-ViewModel)
- **UI Framework**: SwiftUI (modern iOS UI)
- **Data Storage**: Local file system (JSON)
- **Threading**: DispatchQueue for async loading

### Wydajność
- Lazy loading pytań
- Background data loading
- Efficient filtering
- Memory-optimized

### Bezpieczeństwo
- Dane trzymane lokalnie na urządzeniu
- iOS data encryption
- No internet required
- No data collection

### Kompatybilność
- iOS 15.0+
- iPad, iPhone
- Light & Dark Mode
- Multiple screen sizes

---

## 🚀 Instalacja w 5 Minut

### Opcja 1: Ręczna Instalacja (Rekomendowana)

1. **Otwórz Xcode i utwórz nowy projekt**
   ```
   File > New > Project
   iOS > App
   Name: NaukaProMax
   Interface: SwiftUI
   ```

2. **Usuń ContentView.swift** - zamienimy go na nasz

3. **Utwórz nowe pliki Swift** - 6 plików:
   ```
   Models.swift          ← iOS_App_Models.swift
   ViewModels.swift      ← iOS_App_ViewModels.swift
   MainViews.swift       ← iOS_App_Views_Main.swift
   QuizView.swift        ← iOS_App_Views_Quiz.swift
   BrowserView.swift     ← iOS_App_Views_Browser.swift
   StatsView.swift       ← iOS_App_Views_Stats_Settings.swift
   ```
   
4. **Dodaj questions.json**
   ```
   File > Add Files to Project
   Zaznacz: Copy items if needed
   Target: NaukaProMax ✓
   ```

5. **Uruchom** ⌘ + R

### Opcja 2: Szybka Instalacja (Copy-Paste)

1. Utwórz nowy projekt w Xcode
2. Otwórz każdy `iOS_App_*.swift` i copy-paste całą zawartość
3. Dodaj `questions.json`
4. ⌘ + R

---

## 📊 Struktura Bazy Danych

### Pytanie (Question)
```json
{
  "id": 1,
  "test": 1,
  "source_num": 1,
  "type": "mc",
  "question": "Pytanie tekst...",
  "correct": ["Odp1", "Odp2"],
  "wrong": ["Błąd1", "Błąd2"],
  "explanation": "Wyjaśnienie..."
}
```

### Sesja Quizu (QuizSession)
```swift
{
  sessionId: UUID,
  questionsAnswered: [Int: UserAnswer],
  score: Int,
  totalQuestions: Int,
  dateStarted: Date,
  dateEnded: Date?,
  isPassed: Bool (score >= 60%)
}
```

### Statystyki (Statistics)
```swift
{
  totalQuestionsAnswered: Int,
  totalCorrect: Int,
  totalIncorrect: Int,
  averageTimePerQuestion: Int,
  sessionsCompleted: Int,
  overallAccuracy: Double,
  quizzesByTest: [Int: TestStatistics]
}
```

---

## 🎮 Instrukcja Użytkowania

### Rozpoczęcie Quizu

1. **Home Screen** → "Rozpocznij Quiz"
2. Pobiera pytania (mieszane jeśli włączone)
3. Wyświetla pytanie #1
4. Wybierz odpowiedź → Kliknij "Odpowiedź"
5. Zobacz wyjaśnienie (jeśli włączone)
6. Kliknij "Następne" → Pytanie #2
7. Po ostatnim pytaniu → "Wyniki"

### Przeglądanie Pytań

1. Tab: "Pytania"
2. Szukaj po tekście lub filtruj
3. Kliknij na pytanie
4. Przeczytaj wyjaśnienie
5. Wróć na listę

### Śledzenie Postępu

1. Tab: "Statystyki"
2. Przejrzyj karty ze statystykami
3. Sprawdź wyniki po testach
4. Przeczytaj historię sesji

### Dostosowanie

1. Tab: "Ustawienia"
2. Zmień liczbę pytań
3. Włącz/wyłącz timer
4. Zmień inne opcje
5. Auto-save ✓

---

## 🔧 Dostosowywanie Aplikacji

### Zmiana Liczby Pytań
```swift
quizManager.settings.numberOfQuestions = 20  // domyślnie 10
```

### Wyłączenie Timera
```swift
quizManager.settings.timerEnabled = false
```

### Zmiana Głównego Koloru
W Views, zamień `.blue` na:
```swift
.green      // zielony
.red        // czerwony
.orange     // pomarańczowy
.purple     // fioletowy
```

### Dodanie Nowych Pytań
1. Edytuj `questions.json`
2. Zachowaj strukturę JSON
3. Przebuduj aplikację

### Tłumaczenie na Angielski
1. W Settings dodaj English option
2. Zamień polskie teksty w Views
3. Utwórz LocalizedStrings

---

## 💾 Przechowywanie Danych

### Gdzie są Dane?
- **Pytania**: Załadowane z `questions.json` → Memory
- **Sesje**: `Documents/session_UUID.json` (dla każdej sesji)
- **Statystyki**: `Documents/statistics.json`
- **Ustawienia**: `Documents/settings.json`

### Debugowanie
Aby zobaczyć gdzie są dane:
```swift
let docs = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
print("Data path: \(docs.path)")
```

---

## 🐛 Rozwiązywanie Problemów

### Problemy z Ładowaniem Pytań

**Problem**: "Cannot find variable 'questions'"

**Rozwiązanie**:
```swift
// Upewnij się, że questions.json jest w Build Phases > Copy Bundle Resources
// W Xcode: Select questions.json > File Inspector > Target Membership > ✓ NaukaProMax
```

### Build Error: "Type 'QuestionRepository' has no member..."

**Rozwiązanie**:
- Czyszczenie: ⌘ + Shift + K
- Budowanie: ⌘ + B
- Restart Xcode

### Problemy z Wyświetlaniem

**Problem**: Białe ekrany lub tekst nie wyświetla się

**Rozwiązanie**:
```swift
// Uruchom na innym symulatorze
// Lub reset Data & Settings na symulatorze
```

### Aplikacja Zawisa

**Rozwiązanie**:
- Zmniejsz liczbę pytań w settings
- Wyłącz shuffle
- Restart app

---

## 📱 Testowanie

### Na Symulatorze
```
⌘ + R              // Uruchom aktualny target
⌘ + Shift + K      // Czyszczenie
⌘ + B              // Budowanie
```

### Na Prawdziwym iPhone
1. Podłącz iPhone kablelem
2. Wybierz go w Xcode (u góry)
3. ⌘ + R
4. Zaakceptuj trust na telefonie

### Testowe Sceńariusze

1. **Start Quiz** → Ukończ → Sprawdź Results
2. **Browser** → Szukaj → Filtruj → Open Detail
3. **Stats** → Sprawdź liczby → History
4. **Settings** → Zmień ustawienia → Restart quiz
5. **Session** → Zamknij app → Otwórz → Sprawdź dane

---

## 🎓 Nauka Kodu

Aplikacja jest dobra do nauki:
- **SwiftUI** - nowoczesny UI framework
- **MVVM** - architektura
- **Combine** - reactive programming (@Published)
- **FileManager** - zarządzanie plikami
- **JSON** - kodowanie/dekodowanie
- **Navigation** - TabView, NavigationLink

---

## 📚 Dodatkowe Pliki

Wszystkie potrzebne pliki są już w folderze `Nauka`:
- `iOS_App_*.swift` - kod Swift (6 plików)
- `iOS_APP_SETUP_GUIDE_PL.md` - pełny manual
- `QUICK_START_PL.md` - szybki start
- `questions.json` - pytania (już masz)

---

## ✅ Checklist przed Publikacją

- [ ] Przetestuj na iPhone i iPad
- [ ] Przygotuj App Icon (1024x1024 px)
- [ ] Napisz Description w App Store
- [ ] Przygotuj Screenshots
- [ ] Ustaw Version (1.0.0)
- [ ] Ustaw Build Number (1)
- [ ] Testuj wszystkie funkcje
- [ ] Sprawdź polskie znaki (ą, ę, ć, ł, ó, ś, ź, ż)
- [ ] Przetestuj w Light i Dark Mode
- [ ] Sprawdź Performance (battery, memory)

---

## 📞 FAQ

**P: Ile miejsca zajmuje aplikacja?**  
O: ~10-20 MB (zależy od liczby pytań)

**P: Czy działa offline?**  
O: Tak! Wszystko lokalnie na urządzeniu

**P: Czy mogę dodać więcej pytań?**  
O: Tak! Edytuj questions.json

**P: Czy mogę zmienić kolory?**  
O: Tak! W każdym pliku View

**P: Czy działa na iPad?**  
O: Tak! Automatycznie dostosowuje się

**P: Czy mogę eksportować wyniki?**  
O: Nie w obecnej wersji, ale można dodać

**P: Czy są reklamy?**  
O: Nie! To aplikacja edukacyjna

**P: Czy dane są bezpieczne?**  
O: Tak! Lokalnie, bez internetu

---

## 🎉 Podsumowanie

Masz teraz:
- ✅ Kompletną aplikację iOS w Swift/SwiftUI
- ✅ Wszystkie funkcje z wersji webowej
- ✅ Tracking statystyk i postępu
- ✅ Lokalnym przechowywaniem danych
- ✅ Responsywny design
- ✅ Pełną dokumentację

**Gotowe do uruchomienia! 🚀**

---

**Wersja**: 1.0.0  
**Data**: 2026-06-18  
**Platform**: iOS 15.0+  
**Framework**: SwiftUI  
**Language**: Swift 5.7+

Powodzenia! 💪
