// Auto-generowana baza pytan: Nauka-PRO-MAX.pdf + PW-egzamin.pdf
// Nie edytuj recznie - generowane przez build_db.py
const QUESTIONS = [
  {
    "id": 1,
    "source": "PRO-MAX",
    "source_num": 1,
    "extra": false,
    "type": "mc",
    "question": "Które miary są używane do oceny wydajności obliczeń równoległych?",
    "correct": [
      "Przyspieszenie",
      "Efektywność",
      "Narzut równoległego wykonania",
      "Skalowalność"
    ],
    "wrong": [
      "Ilość użytych semaforów w programie — dotyczy synchronizacji, ale sama w sobie nie jest miarą wydajności.",
      "Liczba wykonywanych wątków — opisuje konfigurację programu, ale nie mówi bezpośrednio, jak dobrze program działa równolegle."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Przyspieszenie\nPrzyspieszenie określa, ile razy szybciej program działa w wersji równoległej w porównaniu do wersji\nsekwencyjnej.\nNajczęściej zapisuje się je wzorem:\nT\n1\nS =\np T\np\ngdzie:\n• T — czas wykonania programu na jednym procesorze lub w jednym wątku,\n1\n• T — czas wykonania programu na pprocesorach lub wątkach,\np\n• S — przyspieszenie dla pjednostek wykonawczych.\np\nPrzykład:\nJeśli program sekwencyjny działa 100 sekund, a równoległy na 4 wątkach działa 25 sekund, to:\n100\nS = = 4\n4 25\nczyli program przyspieszył 4 razy.\nEfektywność\nEfektywność mówi, jak dobrze wykorzystywane są procesory, rdzenie lub wątki.\nWzór:\nS\np\nE =\np p\ngdzie:\n• S — przyspieszenie,\np\n• p— liczba procesorów, rdzeni lub wątków.\nEfektywność często podaje się jako liczbę od 0 do 1 albo jako procent.\nPrzykład:\nJeśli dla 4 wątków przyspieszenie wynosi 2, to:\n2\nE = = 0,5 =50%\n4 4\nOznacza to, że zasoby są wykorzystywane tylko w połowie.\nNarzut równoległego wykonania\nNarzut równoległego wykonania to dodatkowy koszt wynikający z użycia obliczeń równoległych.\nMoże obejmować między innymi:\n• tworzenie i kończenie wątków,\n• komunikację między procesami,\n• synchronizację,\n• oczekiwanie na blokady,\n• nierównomierny podział pracy,\n• konflikty dostępu do danych.\nProgram równoległy nie zawsze działa szybciej, ponieważ część czasu jest tracona właśnie na narzut.\nSkalowalność\nSkalowalność określa, czy program nadal dobrze przyspiesza po zwiększeniu liczby procesorów, rdzeni\nlub wątków.\nProgram jest dobrze skalowalny, jeśli po dodaniu większej liczby jednostek obliczeniowych jego czas\nwykonania nadal wyraźnie maleje.\nPrzykład:\nJeśli program na 2 wątkach działa prawie 2 razy szybciej, na 4 prawie 4 razy szybciej, a na 8 prawie 8\nrazy szybciej, to ma dobrą skalowalność.\n\nNajważniejsza intuicja:\nWydajność obliczeń równoległych oceniamy nie tylko po tym, czy program działa szybciej, ale też\npo tym, jak dobrze wykorzystuje dodatkowe zasoby i ile kosztuje synchronizacja oraz komunikacja."
  },
  {
    "id": 2,
    "source": "PRO-MAX",
    "source_num": 2,
    "extra": false,
    "type": "mc",
    "question": "Jakie są kluczowe zalety konteneryzacji w środowiskach HPC i chmurze?",
    "correct": [
      "Lekkość i szybkie uruchamianie",
      "Przenośność aplikacji niezależnie od infrastruktury",
      "Współdzielenie jądra systemu między kontenerami a systemem hosta"
    ],
    "wrong": [
      "Wymóg posiadania dedykowanego sprzętu — kontenery właśnie zmniejszają zależność od konkretnego sprzętu i środowiska.",
      "Możliwość współdzielenia kontenerów między użytkownikami w czasie rzeczywistym — kontenery można udostępniać jako obrazy, ale współdzielenie jednego działającego kontenera w czasie rzeczywistym nie jest typową zaletą.",
      "Każdy kontener wymaga osobnej licencji systemu operacyjnego — kontener nie uruchamia pełnego osobnego systemu operacyjnego, więc nie wymaga osobnej licencji OS tak jak maszyna wirtualna."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Konteneryzacja\nKonteneryzacja to technika uruchamiania aplikacji wraz z jej zależnościami w odizolowanym\nśrodowisku zwanym kontenerem.\nKontener zawiera zwykle:\n• aplikację,\n• biblioteki,\n• pliki konfiguracyjne,\n• zależności wymagane do działania programu.\nNie zawiera jednak pełnego osobnego systemu operacyjnego, tak jak maszyna wirtualna.\nLekkość kontenerów\nKontenery są lekkie, ponieważ współdzielą jądro systemu operacyjnego hosta.\nOznacza to, że nie trzeba uruchamiać całego osobnego systemu operacyjnego dla każdej aplikacji.\nDzięki temu kontenery:\n• zużywają mniej pamięci niż maszyny wirtualne,\n• uruchamiają się szybciej,\n• łatwiej je skalować,\n• są wygodne w środowiskach chmurowych i HPC.\nSzybkie uruchamianie\nKontenery startują zwykle znacznie szybciej niż maszyny wirtualne, ponieważ nie muszą uruchamiać\npełnego systemu operacyjnego.\nW HPC i chmurze jest to ważne, bo można szybko uruchamiać wiele zadań obliczeniowych lub usług.\nPrzenośność aplikacji\nPrzenośność oznacza, że aplikację zamkniętą w kontenerze można uruchomić na różnych\nśrodowiskach bez dużych zmian.\nTen sam kontener może działać na przykład:\n• na komputerze programisty,\n• na klastrze HPC,\n• w chmurze,\n• na serwerze produkcyjnym.\nDzięki temu zmniejsza się problem:\n„u mnie działa, a na serwerze nie”.\nWspółdzielenie jądra systemu\nKontenery korzystają ze wspólnego jądra systemu operacyjnego razem z systemem hosta.\nTo różni je od maszyn wirtualnych, które mają własny pełny system operacyjny.\nWspółdzielenie jądra daje:\n• mniejszy narzut,\n• szybsze działanie,\n• mniejsze zużycie zasobów.\nJednocześnie wymaga mechanizmów izolacji, aby kontenery nie przeszkadzały sobie nawzajem.\nHPC\nHPC, czyli High Performance Computing, oznacza obliczenia wysokiej wydajności.\nDotyczy to środowisk, w których wykonuje się bardzo wymagające obliczenia, na przykład:\n• symulacje naukowe,\n• obliczenia numeryczne,\n• analizę dużych zbiorów danych,\n• modelowanie klimatu,\n• obliczenia inżynierskie.\nW HPC kontenery pomagają łatwiej przenosić aplikacje między klastrami i kontrolować wersje\nbibliotek.\nChmura obliczeniowa\nChmura obliczeniowa to środowisko, w którym zasoby takie jak procesory, pamięć, dysk i sieć są\nudostępniane przez dostawcę jako usługa.\nKontenery są w chmurze popularne, ponieważ można je łatwo:\n• uruchamiać,\n• kopiować,\n• skalować,\n• aktualizować,\n• przenosić między środowiskami.\n\nNajważniejsza intuicja:\nKontenery są lekkie, szybkie i przenośne, bo izolują aplikację wraz z zależnościami, ale nie\nuruchamiają pełnego osobnego systemu operacyjnego"
  },
  {
    "id": 3,
    "source": "PRO-MAX",
    "source_num": 3,
    "extra": false,
    "type": "mc",
    "question": "Jakie są główne kroki metodologii PCAM w programowaniu równoległym?",
    "correct": [
      "Podział, Komunikacja, Agregacja, Odwzorowanie"
    ],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Metodologia PCAM\nPCAM to metodologia projektowania programów równoległych. Nazwa pochodzi od czterech etapów:\nP → C →A →M\nczyli:\n• Partitioning — podział,\n• Communication — komunikacja,\n• Agglomeration — agregacja,\n• Mapping — odwzorowanie.\nSłuży do systematycznego zaprojektowania programu równoległego: od rozbicia problemu na części\naż po przypisanie tych części do procesorów lub wątków.\nP — Podział\nPodział polega na rozbiciu problemu na mniejsze zadania, które mogą być wykonywane równolegle.\nMożna dzielić:\n• dane, na przykład tablicę na fragmenty,\n• zadania, na przykład różne etapy obliczeń,\n• obszary problemu, na przykład siatkę obliczeniową w symulacji.\nCelem jest znalezienie jak największej liczby niezależnych fragmentów pracy.\nC — Komunikacja\nKomunikacja określa, jakie dane muszą być wymieniane między zadaniami.\nPo podziale problemu trzeba ustalić:\n• które zadania są od siebie zależne,\n• jakie dane muszą przekazywać,\n• jak często muszą się komunikować,\n• czy potrzebna jest synchronizacja.\nIm mniej komunikacji, tym zwykle lepsza wydajność programu równoległego.\nA — Agregacja\nAgregacja polega na łączeniu mniejszych zadań w większe bloki pracy.\nRobi się to po to, aby:\n• zmniejszyć narzut zarządzania wieloma małymi zadaniami,\n• ograniczyć liczbę komunikatów,\n• poprawić lokalność danych,\n• uzyskać lepszą wydajność.\nZbyt drobny podział może być nieopłacalny, bo program więcej czasu traci na komunikację i\nsynchronizację niż na właściwe obliczenia.\nM — Odwzorowanie\nOdwzorowanie polega na przypisaniu zadań do konkretnych procesorów, rdzeni, procesów lub\nwątków.\nCelem odwzorowania jest:\n• równomierne obciążenie jednostek obliczeniowych,\n• ograniczenie kosztów komunikacji,\n• dobre wykorzystanie dostępnych zasobów.\nPrzykład:\nJeśli mamy 8 zadań i 4 rdzenie, można przypisać po 2 zadania do każdego rdzenia.\n\nNajważniejsza intuicja:\nPCAM mówi, że najpierw dzielimy problem na części, potem określamy komunikację między nimi,\nnastępnie łączymy zbyt małe zadania, a na końcu przypisujemy je do procesorów lub wątków."
  },
  {
    "id": 4,
    "source": "PRO-MAX",
    "source_num": 6,
    "extra": false,
    "type": "mc",
    "question": "Wskaż poprawne stwierdzenia dotyczące punktów szeregowania zadań OpenMP.",
    "correct": [
      "Punkt szeregowania występuje po / przy dyrektywie #pragma omp taskwait",
      "Punkt szeregowania może występować w barierze #pragma omp barrier",
      "Wątek może wznowić realizację zadania typu untied w dowolnym punkcie szeregowania"
    ],
    "wrong": [
      "Wszystkie zadania są wykonywane dokładnie w tej kolejności, w jakiej zostały utworzone",
      "Zadania OpenMP zawsze wykonują się równolegle, niezależnie od wartości klauzuli if",
      "Punkt szeregowania występuje przed wykonaniem sekcji krytycznej #pragma omp critical"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Punkt szeregowania zadania\nPunkt szeregowania zadania, czyli task scheduling point, to miejsce, w którym wykonywane\naktualnie zadanie może zostać zawieszone, a wątek może zacząć wykonywać inne zadanie albo\nwznowić inne zawieszone zadanie. Specyfikacja OpenMP opisuje taki punkt jako miejsce, w którym\nbieżący region zadania może zostać zawieszony i później wznowiony.\n#pragma omp taskwait\nDyrektywa:\n#pragma omp taskwait\npowoduje oczekiwanie na zakończenie zadań potomnych utworzonych przez bieżące zadanie.\nW kontekście szeregowania jest ważna, ponieważ w regionie taskwait występuje punkt szeregowania\nzadania. Specyfikacja OpenMP wymienia taskwait region jako jedno z miejsc, gdzie istnieją punkty\nszeregowania.\nPrzykład:\n#pragma omp task\n{\noblicz_A();\n}\n#pragma omp task\n{\noblicz_B();\n}\n#pragma omp taskwait\n// tutaj bieżące zadanie czeka na zakończenie wcześniejszych zadań potomnych\nBariera jako punkt szeregowania\nDyrektywa:\n#pragma omp barrier\nsynchronizuje wątki, czyli każdy wątek musi poczekać, aż pozostałe wątki również dojdą do bariery.\nW OpenMP punkt szeregowania może występować zarówno w barierze jawnej, czyli #pragma omp\nbarrier, jak i w barierze niejawnej, na przykład na końcu niektórych regionów równoległych.\nSpecyfikacja wymienia punkty szeregowania w regionie bariery jawnej i niejawnej.\nZadanie untied\nZadanie typu untied nie jest przypisane na stałe do jednego wątku.\nJeśli takie zadanie zostanie zawieszone w punkcie szeregowania, to później może zostać wznowione\nprzez dowolny wątek z tego samego zespołu wątków. W OpenMP zadanie untied jest zdefiniowane\njako takie, które po zawieszeniu może być wznowione przez dowolny wątek w zespole.\nPrzykład:\n#pragma omp task untied\n{\nwykonaj_prace();\n}\nTo różni się od zadania tied, które po zawieszeniu musi zostać wznowione przez ten sam wątek.\nKolejność wykonywania zadań\nZadania OpenMP nie muszą wykonywać się w kolejności, w jakiej zostały utworzone.\nKolejność wykonania może zależeć od:\n• dostępności wątków,\n• zależności między zadaniami,\n• punktów synchronizacji,\n• decyzji środowiska wykonawczego OpenMP.\nSpecyfikacja mówi, że gdy kilka zadań jest dostępnych do wykonania, wybór wykonywanego zadania\nmoże być nieokreślony.\nKlauzula if przy zadaniach\nZadania OpenMP nie zawsze wykonują się równolegle. Klauzula if może zdecydować, czy zadanie\nzostanie odłożone do późniejszego wykonania, czy wykonane od razu.\nPrzykład:\n#pragma omp task if(n > 1000)\n{\noblicz();\n}\nJeśli warunek if jest fałszywy, zadanie może zostać wykonane natychmiast przez bieżący wątek, czyli\nbez faktycznego równoległego odłożenia. Specyfikacja OpenMP podaje, że gdy if przy jawnym zadaniu\nma wartość fałszywą, zadanie jest wykonywane natychmiast po utworzeniu.\nSekcja krytyczna critical\nDyrektywa:\n#pragma omp critical\n{\n// kod wykonywany tylko przez jeden wątek naraz\n}\nsłuży do ochrony fragmentu kodu przed jednoczesnym wykonaniem przez wiele wątków.\nSama dyrektywa critical nie jest jednak standardowo wymieniana jako miejsce występowania punktu\nszeregowania zadania. Punkty szeregowania są związane między innymi z task, taskwait, taskyield,\ntaskgroup oraz barierami.\n\nNajważniejsza intuicja:\nPunkt szeregowania to miejsce, w którym OpenMP może przełączyć wątek z jednego zadania na\ninne; typowe miejsca to taskwait, bariery i operacje związane z zadaniami, ale nie zwykłe wejście\ndo sekcji critical."
  },
  {
    "id": 5,
    "source": "PRO-MAX",
    "source_num": 7,
    "extra": false,
    "type": "mc",
    "question": "Które technologie są wykorzystywane w systemach kolejkowych do zarządzania obciążeniem?",
    "correct": [
      "SLURM",
      "HTCondor",
      "PBS, czyli Portable Batch System"
    ],
    "wrong": [
      "MPI, czyli Message Passing Interface — to biblioteka/interfejs do komunikacji między procesami, a nie system kolejkowy."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "• Kubernetes — zarządza uruchamianiem zadań i kontenerów w klastrze, ale nie jest\nklasycznym systemem kolejkowym HPC.\n• Docker Swarm — zarządza kontenerami w klastrze, ale również nie jest typowym systemem\nkolejkowym HPC.\nSystem kolejkowy\nSystem kolejkowy to oprogramowanie, które zarządza uruchamianiem zadań obliczeniowych na\nklastrze.\nUżytkownik nie uruchamia programu bezpośrednio na wybranym komputerze, tylko zgłasza zadanie\ndo kolejki. System decyduje:\n• kiedy zadanie zostanie uruchomione,\n• na których węzłach klastra,\n• ile procesorów, rdzeni, pamięci lub GPU dostanie,\n• jak długo może działać,\n• jakie zadania mają priorytet.\nSystem kolejkowy pozwala wielu użytkownikom korzystać ze wspólnego klastra w uporządkowany\nsposób.\nSLURM\nSLURM to popularny system zarządzania zadaniami i zasobami w klastrach HPC.\nPozwala użytkownikom zgłaszać zadania do kolejki, na przykład za pomocą polecenia:\nsbatch skrypt.sh\nSLURM przydziela zasoby, uruchamia zadania i pilnuje ich wykonania.\nTypowe funkcje SLURM:\n• kolejkowanie zadań,\n• przydział węzłów i rdzeni,\n• obsługa zadań równoległych,\n• ustawianie limitów czasu,\n• monitorowanie stanu zadań.\nHTCondor\nHTCondor to system do zarządzania dużą liczbą zadań obliczeniowych, szczególnie w środowiskach\nrozproszonych.\nDobrze nadaje się do sytuacji, gdy mamy wiele niezależnych zadań, które można wykonywać na\nróżnych maszynach.\nPrzykład zastosowania:\n• analiza wielu plików danych,\n• uruchamianie wielu symulacji,\n• rozproszone przetwarzanie dużej liczby zadań.\nPBS — Portable Batch System\nPBS to klasyczny system kolejkowy używany w klastrach obliczeniowych.\nPodobnie jak SLURM, pozwala zgłaszać zadania wsadowe, przydzielać zasoby i zarządzać kolejkami.\nPrzykładowe cechy PBS:\n• obsługa kolejek zadań,\n• harmonogramowanie pracy,\n• przydział procesorów i pamięci,\n• kontrola czasu wykonania.\nKubernetes\nKubernetes to system orkiestracji kontenerów.\nNie jest typowym systemem kolejkowym HPC, ale również zarządza obciążeniem w klastrze.\nDecyduje, na których maszynach uruchomić kontenery i jak utrzymać ich działanie.\nW kontekście chmury Kubernetes może pełnić podobną rolę zarządzania zasobami, ale bardziej dla\naplikacji kontenerowych niż klasycznych zadań HPC.\nDocker Swarm\nDocker Swarm to narzędzie do zarządzania klastrem kontenerów Dockera.\nPodobnie jak Kubernetes, zajmuje się uruchamianiem usług i rozdzielaniem ich między węzły klastra.\nJest jednak mniej typowy dla klasycznych systemów kolejkowych HPC.\nMPI\nMPI, czyli Message Passing Interface, nie jest systemem kolejkowym.\nMPI służy do komunikacji między procesami w programach równoległych. Na przykład procesy mogą\nprzesyłać sobie wiadomości za pomocą funkcji takich jak:\nMPI_Send(...)\nMPI_Recv(...)\nMPI może być używane razem z systemem kolejkowym, na przykład zadanie MPI może zostać\nuruchomione przez SLURM, ale samo MPI nie zarządza kolejką zadań.\n\nNajważniejsza intuicja:\nSLURM, HTCondor i PBS to klasyczne systemy kolejkowe do zarządzania zadaniami w klastrach;\nKubernetes i Docker Swarm zarządzają obciążeniem kontenerów, a MPI służy do komunikacji, nie\ndo kolejkowania."
  },
  {
    "id": 6,
    "source": "PRO-MAX",
    "source_num": 8,
    "extra": false,
    "type": "mc",
    "question": "Jakie są kluczowe cechy obliczeń masowo równoległych?",
    "correct": [
      "Wykorzystują dużą liczbę wątków jednocześnie",
      "Najczęściej bazują na architekturze GPU"
    ],
    "wrong": [
      "Są stosowane głównie w systemach jednordzeniowych — nie, obliczenia masowo równoległe wymagają wielu jednostek wykonawczych.",
      "Wymagają globalnej pamięci współdzielonej — nie zawsze; wiele systemów masowo równoległych korzysta z pamięci rozproszonej albo hierarchicznej.",
      "Nie są stosowane w obliczeniach naukowych — przeciwnie, są bardzo często stosowane w nauce.",
      "Najczęściej bazują na architekturze CPU — CPU może brać udział w takich obliczeniach, ale typowym przykładem masowej równoległości są GPU."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Obliczenia masowo równoległe\nObliczenia masowo równoległe polegają na jednoczesnym wykonywaniu bardzo dużej liczby operacji\nprzez wiele jednostek obliczeniowych.\nZamiast kilku wątków mamy często setki, tysiące albo nawet więcej lekkich wątków.\nNajważniejsza idea: problem trzeba podzielić na bardzo wiele małych, podobnych zadań, które mogą\nbyć wykonywane jednocześnie.\nDuża liczba wątków\nW obliczeniach masowo równoległych wykorzystuje się ogromną liczbę wątków lub jednostek\nwykonawczych.\nPrzykład:\nZamiast liczyć elementy tablicy jeden po drugim, można przypisać osobny wątek do każdego\nelementu lub grupy elementów.\n// idea: wiele wątków liczy różne elementy tablicy jednocześnie\nC[i] = A[i] + B[i];\nTaki model dobrze pasuje do zadań, gdzie wiele operacji jest podobnych i niezależnych.\nGPU\nGPU, czyli Graphics Processing Unit, to procesor graficzny.\nGPU jest często używane w obliczeniach masowo równoległych, ponieważ zawiera bardzo dużo\nprostszych rdzeni/jednostek wykonawczych, które mogą wykonywać wiele podobnych operacji\njednocześnie.\nGPU dobrze sprawdza się w zadaniach takich jak:\n• operacje na macierzach,\n• przetwarzanie obrazów,\n• symulacje fizyczne,\n• uczenie maszynowe,\n• obliczenia naukowe.\nCPU a GPU\nCPU jest bardziej uniwersalne i dobrze radzi sobie z różnorodnymi zadaniami, logiką programu i\nsterowaniem.\nGPU jest mniej uniwersalne, ale bardzo wydajne, gdy trzeba wykonać tę samą lub podobną operację\nna wielu danych naraz.\nDlatego w obliczeniach masowo równoległych często CPU zarządza programem, a GPU wykonuje\nwłaściwe intensywne obliczenia.\nPamięć współdzielona i rozproszona\nObliczenia masowo równoległe nie muszą zawsze wymagać jednej globalnej pamięci współdzielonej.\nW praktyce mogą występować różne modele pamięci:\n• pamięć lokalna dla wątków,\n• pamięć współdzielona w obrębie grupy wątków,\n• pamięć globalna na GPU,\n• pamięć rozproszona między węzłami klastra.\nDlatego stwierdzenie, że masowa równoległość wymaga globalnej pamięci współdzielonej, jest zbyt\nmocne.\nZastosowania naukowe\nObliczenia masowo równoległe są bardzo często stosowane w nauce i technice.\nPrzykłady:\n• symulacje klimatu,\n• symulacje cząsteczek,\n• obliczenia numeryczne,\n• analiza dużych danych,\n• modelowanie zjawisk fizycznych,\n• sztuczna inteligencja.\n\nNajważniejsza intuicja:\nObliczenia masowo równoległe polegają na uruchomieniu bardzo wielu prostych operacji\njednocześnie; najczęściej kojarzą się z GPU, bo GPU ma architekturę stworzoną do pracy na\nogromnej liczbie wątków."
  },
  {
    "id": 7,
    "source": "PRO-MAX",
    "source_num": 9,
    "extra": false,
    "type": "mc",
    "question": "Które z poniższych cech dotyczą wątków jądra, czyli wątków systemowych?",
    "correct": [
      "Są zarządzane bezpośrednio przez system operacyjny",
      "Mają bezpośredni dostęp do zasobów sprzętowych",
      "Są wolniejsze w kontekście przełączania kontekstu niż wątki użytkownika"
    ],
    "wrong": [
      "Działają wyłącznie w środowisku JVM — nie, wątki jądra są mechanizmem systemu operacyjnego, niezależnym od JVM.",
      "Nie mogą wykonywać operacji systemowych — przeciwnie, są obsługiwane przez system operacyjny i mogą wykonywać operacje systemowe.",
      "Nie współdzielą zasobów z innymi wątkami — wątki jednego procesu zwykle współdzielą przestrzeń adresową i zasoby procesu."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Wątek jądra / wątek systemowy\nWątek jądra, inaczej wątek systemowy, to wątek zarządzany bezpośrednio przez jądro systemu\noperacyjnego.\nSystem operacyjny decyduje między innymi:\n• kiedy dany wątek ma być uruchomiony,\n• na którym rdzeniu procesora będzie wykonywany,\n• kiedy zostanie zatrzymany,\n• kiedy nastąpi przełączenie na inny wątek.\nZarządzanie przez system operacyjny\nWątki jądra są widoczne dla systemu operacyjnego.\nOznacza to, że systemowy planista zadań może je przydzielać do różnych rdzeni procesora.\nDzięki temu wątki jądra mogą rzeczywiście wykonywać się równolegle na wielu rdzeniach.\nDostęp do zasobów sprzętowych\nWątki jądra działają pod kontrolą systemu operacyjnego i mogą korzystać z mechanizmów\nsystemowych, takich jak:\n• operacje wejścia-wyjścia,\n• dostęp do plików,\n• komunikacja sieciowa,\n• synchronizacja,\n• przydział czasu procesora,\n• obsługa przerwań i wywołań systemowych.\nNie oznacza to, że wątek samodzielnie omija system operacyjny i bez kontroli steruje sprzętem, ale\nma dostęp do zasobów przez mechanizmy jądra.\nPrzełączanie kontekstu\nPrzełączanie kontekstu to operacja, w której procesor przestaje wykonywać jeden wątek i zaczyna\nwykonywać inny.\nPrzy przełączaniu trzeba zapisać stan aktualnego wątku i odtworzyć stan kolejnego.\nW przypadku wątków jądra przełączanie kontekstu jest zwykle droższe niż przy wątkach użytkownika,\nponieważ wymaga udziału systemu operacyjnego.\nWątki użytkownika\nWątki użytkownika są zarządzane przez bibliotekę lub środowisko uruchomieniowe w przestrzeni\nużytkownika, a nie bezpośrednio przez jądro systemu.\nIch przełączanie może być szybsze, bo nie zawsze wymaga interwencji systemu operacyjnego.\nMinusem jest to, że jeśli system operacyjny widzi tylko jeden wątek jądra, to wiele wątków\nużytkownika może nie korzystać w pełni z wielu rdzeni.\nWspółdzielenie zasobów przez wątki\nWątki należące do tego samego procesu zwykle współdzielą:\n• pamięć procesu,\n• otwarte pliki,\n• zmienne globalne,\n• uchwyty do zasobów,\n• przestrzeń adresową.\nKażdy wątek ma natomiast własny stos i własny stan wykonania, na przykład licznik instrukcji i\nrejestry.\n\nNajważniejsza intuicja:\nWątki jądra są „prawdziwie” widoczne dla systemu operacyjnego, więc mogą być planowane na\nwielu rdzeniach, ale ich przełączanie jest droższe niż w przypadku lekkich wątków użytkownika."
  },
  {
    "id": 8,
    "source": "PRO-MAX",
    "source_num": 10,
    "extra": false,
    "type": "mc",
    "question": "Które z poniższych cech są charakterystyczne dla systemów Grid Computing?",
    "correct": [
      "Skalowalność i heterogeniczność",
      "Współdzielenie zasobów między użytkownikami"
    ],
    "wrong": [
      "Wymóg jednolitej architektury sprzętowej — Grid Computing może łączyć różne typy komputerów, systemów i sieci.",
      "Brak potrzeby synchronizacji między węzłami — synchronizacja i koordynacja często są potrzebne.",
      "Praca wyłącznie w chmurze obliczeniowej — grid może działać poza chmurą, na przykład między instytucjami naukowymi.",
      "Ograniczenie do zastosowań korporacyjnych — grid jest często używany także w nauce, badaniach i dużych projektach obliczeniowych."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Grid Computing\nGrid Computing to model obliczeń rozproszonych, w którym wiele niezależnych komputerów,\nklastrów lub ośrodków obliczeniowych współpracuje nad wspólnymi zadaniami.\nZasoby mogą należeć do różnych organizacji i znajdować się w różnych lokalizacjach geograficznych.\nPrzykład:\nKilka uczelni lub instytutów badawczych udostępnia część swoich zasobów obliczeniowych do\nwspólnego projektu naukowego.\nSkalowalność\nSkalowalność oznacza możliwość zwiększania mocy obliczeniowej systemu przez dodawanie\nkolejnych zasobów.\nW Grid Computing można dołączać nowe:\n• komputery,\n• klastry,\n• serwery,\n• pamięci masowe,\n• ośrodki obliczeniowe.\nDzięki temu system może obsługiwać coraz większe problemy obliczeniowe.\nHeterogeniczność\nHeterogeniczność oznacza różnorodność zasobów w systemie.\nW gridzie mogą współpracować maszyny różniące się:\n• architekturą procesora,\n• systemem operacyjnym,\n• ilością pamięci,\n• mocą obliczeniową,\n• szybkością sieci,\n• lokalizacją,\n• oprogramowaniem.\nDlatego Grid Computing nie wymaga jednolitej architektury sprzętowej.\nWspółdzielenie zasobów\nW Grid Computing zasoby są współdzielone między wielu użytkowników, projekty lub instytucje.\nWspółdzielone mogą być:\n• procesory,\n• pamięć,\n• przestrzeń dyskowa,\n• dane,\n• aplikacje,\n• specjalistyczne urządzenia.\nCelem jest lepsze wykorzystanie dostępnej infrastruktury.\nSynchronizacja i koordynacja\nW systemach gridowych często potrzebna jest koordynacja między zadaniami i węzłami.\nMoże obejmować:\n• podział pracy,\n• przesyłanie danych,\n• zbieranie wyników,\n• kontrolę zależności,\n• uwierzytelnianie użytkowników,\n• zarządzanie dostępem do zasobów.\nNie zawsze każde zadanie wymaga ścisłej synchronizacji, ale nie można powiedzieć, że synchronizacja\nnigdy nie jest potrzebna.\nGrid Computing a chmura\nGrid Computing i chmura obliczeniowa są podobne, bo oba modele dotyczą korzystania z\nrozproszonych zasobów.\nRóżnica intuicyjna:\n• Grid Computing — często federacja zasobów należących do różnych organizacji.\n• Cloud Computing — zasoby dostarczane jako usługa przez konkretnego dostawcę chmury.\nGrid nie musi działać wyłącznie w chmurze.\n\nNajważniejsza intuicja:\nGrid Computing łączy wiele różnych, rozproszonych zasobów i pozwala współdzielić je między\nużytkownikami lub instytucjami, dlatego jego kluczowe cechy to skalowalność, heterogeniczność i\nwspółdzielenie zasobów."
  },
  {
    "id": 9,
    "source": "PRO-MAX",
    "source_num": 11,
    "extra": false,
    "type": "mc",
    "question": "Jakie operacje można wykonać na plikach w MPI-IO?",
    "correct": [
      "MPI_File_open()",
      "MPI_File_read()",
      "MPI_File_write_at()",
      "MPI_File_close()"
    ],
    "wrong": [
      "MPI_File_lock() — taka standardowa funkcja nie należy do typowych operacji MPI-IO. W MPI istnieje na przykład MPI_Win_lock() dla jednostronnej komunikacji RMA, ale nie jest to operacja na plikach MPI-IO."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "MPI-IO\nMPI-IO to część standardu MPI służąca do równoległych operacji wejścia-wyjścia na plikach.\nPozwala wielu procesom MPI czytać i zapisywać dane do tego samego pliku w sposób skoordynowany.\nJest używane szczególnie w programach HPC, gdzie wiele procesów generuje lub przetwarza duże\nilości danych.\nMPI_File_open()\nFunkcja:\nMPI_File_open(...)\nsłuży do otwarcia pliku w MPI-IO.\nPlik może być otwierany przez wiele procesów jednocześnie, na przykład w celu wspólnego odczytu\nlub zapisu.\nPrzykładowe tryby otwarcia:\nMPI_MODE_RDONLY\nMPI_MODE_WRONLY\nMPI_MODE_RDWR\nMPI_MODE_CREATE\nMPI_File_read()\nFunkcja:\nMPI_File_read(...)\nsłuży do odczytu danych z pliku.\nKażdy proces może odczytywać dane z aktualnej pozycji w pliku, zgodnie z ustawionym widokiem\npliku i wskaźnikiem pozycji.\nMPI_File_write_at()\nFunkcja:\nMPI_File_write_at(...)\nsłuży do zapisu danych w konkretnym miejscu pliku, podanym jako przesunięcie, czyli offset.\nPrzykład intuicyjny:\nProces 0 zapisuje dane od początku pliku, proces 1 od dalszej pozycji, proces 2 jeszcze dalej.\nDzięki temu wiele procesów może zapisywać różne fragmenty jednego pliku.\nMPI_File_close()\nFunkcja:\nMPI_File_close(...)\nzamyka plik otwarty wcześniej przez MPI-IO.\nPo zakończeniu operacji na pliku należy go zamknąć, aby system mógł poprawnie zakończyć zapis,\nzwolnić zasoby i uporządkować dane.\nMPI_File_lock()\nMPI_File_lock() nie jest standardową funkcją MPI-IO.\nW MPI można spotkać funkcje z nazwą lock, na przykład:\nMPI_Win_lock(...)\nale dotyczą one mechanizmu RMA, czyli zdalnego dostępu do pamięci, a nie operacji plikowych.\n\nNajważniejsza intuicja:\nMPI-IO pozwala procesom MPI wspólnie otwierać, czytać, zapisywać i zamykać pliki; operacje\nblokowania typu MPI_File_lock() nie należą do standardowego zestawu funkcji MPI-IO."
  },
  {
    "id": 10,
    "source": "PRO-MAX",
    "source_num": 12,
    "extra": false,
    "type": "mc",
    "question": "Które z poniższych technologii są uniwersalne i mogą działać na różnych platformach sprzętowych?",
    "correct": [
      "OpenCL",
      "Vulkan",
      "TensorFlow"
    ],
    "wrong": [
      "CUDA — głównie dla kart NVIDIA.",
      "DirectX Compute Shaders — związane z ekosystemem DirectX, głównie Windows/Xbox.",
      "PyCUDA — Pythonowy interfejs do CUDA, więc również zależny od NVIDIA."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "OpenCL\nOpenCL, czyli Open Computing Language, to otwarty standard do programowania równoległego na\nróżnych typach urządzeń.\nMoże działać na:\n• CPU,\n• GPU,\n• FPGA,\n• akceleratorach obliczeniowych różnych producentów.\nOpenCL jest uznawany za technologię bardziej uniwersalną niż CUDA, ponieważ nie jest ograniczony\ntylko do jednego producenta sprzętu.\nVulkan\nVulkan to niskopoziomowe API graficzne i obliczeniowe.\nMoże być używane na różnych platformach i przez różne układy graficzne. Vulkan obsługuje między\ninnymi compute shaders, czyli shadery obliczeniowe, które pozwalają używać GPU nie tylko do grafiki,\nale też do obliczeń ogólnego przeznaczenia.\nVulkan jest bardziej przenośny niż DirectX, ponieważ nie jest ograniczony wyłącznie do platform\nMicrosoftu.\nTensorFlow\nTensorFlow to framework do uczenia maszynowego i obliczeń tensorowych.\nJest dość uniwersalny, ponieważ może działać na różnych typach sprzętu, na przykład:\n• CPU,\n• GPU,\n• TPU,\n• różnych systemach operacyjnych.\nNie jest jednak tak niskopoziomową technologią jak OpenCL czy Vulkan. TensorFlow bardziej ukrywa\nszczegóły sprzętu przed programistą.\nCUDA\nCUDA to platforma programowania równoległego opracowana przez NVIDIA.\nPozwala pisać programy działające na GPU, ale głównie na kartach graficznych NVIDIA.\nDlatego CUDA jest bardzo wydajna i popularna w HPC oraz AI, ale nie jest uniwersalna sprzętowo.\nPyCUDA\nPyCUDA to biblioteka pozwalająca używać CUDA z poziomu języka Python.\nPonieważ opiera się na CUDA, również jest zależna od kart NVIDIA.\nCzyli:\nPyCUDA → CUDA → NVIDIA GPU\nDirectX Compute Shaders\nDirectX Compute Shaders to mechanizm wykonywania obliczeń na GPU w ramach DirectX.\nPozwala pisać programy obliczeniowe dla GPU, ale jest mocno związany z platformą Microsoftu,\nszczególnie Windows i Xbox.\nDlatego nie jest tak uniwersalny jak OpenCL czy Vulkan.\n\nNajważniejsza intuicja:\nTechnologie uniwersalne nie są silnie przywiązane do jednego producenta sprzętu lub jednej\nplatformy; dlatego OpenCL, Vulkan i TensorFlow są bardziej przenośne niż CUDA, PyCUDA czy\nDirectX Compute Shaders."
  },
  {
    "id": 11,
    "source": "PRO-MAX",
    "source_num": 13,
    "extra": false,
    "type": "mc",
    "question": "Które strategie mogą być używane do równoważenia obciążenia w programach równoległych?",
    "correct": [
      "Podział iteracji pętli, czyli Loop Partitioning",
      "Dynamiczny przydział pracy, czyli Task Pooling"
    ],
    "wrong": [
      "Wprowadzenie dodatkowej komunikacji między procesami — komunikacja może być potrzebna do równoważenia obciążenia, ale sama w sobie nie jest strategią; może też zwiększać narzut.",
      "Zmniejszenie liczby rdzeni procesora — zmniejsza równoległość, nie równoważy obciążenia.",
      "Wykorzystanie pamięci rozproszonej do synchronizacji — dotyczy modelu pamięci i synchronizacji, a nie bezpośrednio balansowania pracy.",
      "Serializacja kodu równoległego — usuwa równoległość, więc nie jest strategią równoważenia obciążenia."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Równoważenie obciążenia\nRównoważenie obciążenia, czyli load balancing, polega na takim podziale pracy między wątki,\nprocesy lub węzły, aby każdy z nich miał podobną ilość pracy.\nCelem jest uniknięcie sytuacji, w której jeden wątek nadal intensywnie pracuje, a pozostałe już\nskończyły i czekają.\nPrzykład problemu:\nWątek 1: 10 sekund pracy\nWątek 2: 10 sekund pracy\nWątek 3: 10 sekund pracy\nWątek 4: 60 sekund pracy\nCały program kończy się dopiero po 60 sekundach, mimo że większość wątków skończyła wcześniej.\nLoop Partitioning\nLoop Partitioning, czyli podział iteracji pętli, polega na rozdzieleniu iteracji pętli między wiele wątków\nlub procesów.\nPrzykład:\n#pragma omp parallel for\nfor (int i = 0; i < n; i++) {\noblicz(i);\n}\nJeżeli każda iteracja ma podobny koszt, można zastosować prosty podział statyczny, na przykład każdy\nwątek dostaje podobną liczbę iteracji.\nPodział statyczny\nPodział statyczny oznacza, że praca jest dzielona przed rozpoczęciem obliczeń.\nPrzykład:\nDla 100 iteracji i 4 wątków każdy wątek dostaje po 25 iteracji.\nZaleta:\n• mały narzut organizacyjny.\nWada:\n• działa słabo, jeśli różne iteracje mają różny czas wykonania.\nDynamiczny przydział pracy\nDynamiczny przydział pracy oznacza, że zadania są przydzielane w trakcie działania programu.\nWątek, który skończył swoją część pracy, pobiera kolejne zadanie z puli.\nTo pomaga, gdy nie wiadomo z góry, które zadania będą trwały długo, a które krótko.\nTask Pooling\nTask Pooling polega na utworzeniu puli zadań, z której wątki dynamicznie pobierają pracę.\nSchemat:\nPula zadań:\n[Zadanie 1] [Zadanie 2] [Zadanie 3] [Zadanie 4] ...\nWątek, który skończy pracę, pobiera następne dostępne zadanie.\nDzięki temu szybciej kończące wątki nie stoją bezczynnie, tylko wykonują kolejne zadania.\nNarzut komunikacji\nCzasem równoważenie obciążenia wymaga komunikacji między procesami, na przykład aby przekazać\nzadania z przeciążonego procesu do mniej obciążonego.\nNie należy jednak traktować samego „dodania komunikacji” jako celu. Komunikacja jest kosztem,\nktóry może pomóc w balansowaniu, ale jeśli jest jej za dużo, może pogorszyć wydajność.\nSerializacja kodu\nSerializacja kodu równoległego oznacza sprowadzenie wykonania do trybu sekwencyjnego lub\nograniczenie równoległości.\nNie jest to metoda równoważenia obciążenia, ponieważ zamiast lepiej rozdzielać pracę między wiele\njednostek, usuwa korzyści z równoległego wykonania.\n\nNajważniejsza intuicja:\nRównoważenie obciążenia polega na tym, żeby wszystkie wątki lub procesy miały podobną ilość\npracy; typowe metody to podział iteracji pętli oraz dynamiczne pobieranie zadań z puli."
  },
  {
    "id": 12,
    "source": "PRO-MAX",
    "source_num": 14,
    "extra": false,
    "type": "mc",
    "question": "Które z poniższych stwierdzeń są prawdziwe dla pamięci wspólnej?",
    "correct": [
      "Wszystkie procesory/wątki mają jednolitą przestrzeń adresową",
      "Umożliwia szybkie dzielenie danych między procesami",
      "Procesory muszą stosować synchronizację, aby uniknąć problemów współbieżności"
    ],
    "wrong": [
      "Wymaga komunikacji poprzez przesyłanie wiadomości — to cecha pamięci rozproszonej, np. MPI.",
      "Każdy procesor/wątek ma swoją własną, niezależną pamięć — to również bardziej pasuje do modelu pamięci rozproszonej.",
      "Jest wykorzystywana wyłącznie w systemach operacyjnych czasu rzeczywistego — pamięć wspólna występuje powszechnie, nie tylko w systemach RTOS."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Pamięć wspólna\nPamięć wspólna to model, w którym wiele procesorów, rdzeni lub wątków ma dostęp do tej samej\nprzestrzeni adresowej.\nOznacza to, że różne wątki mogą odwoływać się do tych samych zmiennych i struktur danych.\nPrzykład:\nint suma = 0;\n#pragma omp parallel\n{\nsuma += 1;\n}\nWszystkie wątki widzą zmienną suma, więc jest ona współdzielona.\nJednolita przestrzeń adresowa\nJednolita przestrzeń adresowa oznacza, że wątki korzystają ze wspólnego obszaru pamięci.\nJeśli jeden wątek zmieni wartość zmiennej, inne wątki mogą zobaczyć tę zmianę.\nTo upraszcza programowanie w porównaniu z przesyłaniem wiadomości, bo nie trzeba ręcznie\nwysyłać danych między procesami.\nDzielenie danych\nPamięć wspólna umożliwia szybkie dzielenie danych, ponieważ wiele wątków może korzystać z tych\nsamych struktur danych bez jawnego przesyłania komunikatów.\nPrzykłady współdzielonych danych:\n• tablice,\n• zmienne globalne,\n• kolejki zadań,\n• bufory,\n• struktury wyników.\nTo jest wygodne, ale wymaga ostrożności, bo wiele wątków może próbować modyfikować te same\ndane jednocześnie.\nSynchronizacja\nSynchronizacja jest potrzebna, aby uniknąć błędów wynikających z jednoczesnego dostępu do tych\nsamych danych.\nTypowe mechanizmy synchronizacji:\n• muteksy,\n• semafory,\n• sekcje krytyczne,\n• bariery,\n• operacje atomowe.\nPrzykład problemu:\nsuma = suma + 1;\nTa operacja wygląda prosto, ale składa się z kilku kroków:\nodczytaj suma\ndodaj 1\nzapisz suma\nJeśli dwa wątki wykonają te kroki jednocześnie, wynik może być błędny.\nRace condition\nRace condition, czyli wyścig, występuje wtedy, gdy wynik programu zależy od przypadkowej\nkolejności wykonania operacji przez wątki.\nPrzykład:\nDwa wątki jednocześnie zwiększają tę samą zmienną. Oba mogą odczytać starą wartość, a potem oba\nzapisać ten sam wynik, przez co jedno zwiększenie „ginie”.\nPamięć wspólna a przesyłanie wiadomości\nW modelu pamięci wspólnej wątki komunikują się przez wspólne zmienne.\nW modelu przesyłania wiadomości, na przykład w MPI, procesy mają osobne pamięci i muszą jawnie\nprzesyłać dane:\nMPI_Send(...);\nMPI_Recv(...);\nDlatego zdanie, że pamięć wspólna wymaga przesyłania wiadomości, jest niepoprawne.\n\nNajważniejsza intuicja:\nPamięć wspólna ułatwia dzielenie danych, bo wiele wątków widzi te same zmienne, ale przez to\ntrzeba stosować synchronizację, żeby uniknąć wyścigów i błędów współbieżności."
  },
  {
    "id": 13,
    "source": "PRO-MAX",
    "source_num": 15,
    "extra": false,
    "type": "mc",
    "question": "Jakie są główne wnioski wynikające z prawa Amdahla?",
    "correct": [
      "Przy nieskończonej liczbie procesorów czas wykonania jest ograniczony przez część sekwencyjną programu",
      "Przyspieszenie programu nie może przekroczyć odwrotności udziału części sekwencyjnej",
      "Efektywność zrównoleglenia spada, gdy liczba procesorów rośnie"
    ],
    "wrong": [
      "Wydajność równoległa może być nieskończenie zwiększana niezależnie od kodu — nie, ograniczeniem jest część sekwencyjna.",
      "Prawo Amdahla uwzględnia czas komunikacji między procesorami — klasyczna postać prawa Amdahla nie uwzględnia jawnie narzutu komunikacji.",
      "Skalowalność systemu nie zależy od udziału części sekwencyjnej — zależy bardzo mocno."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Prawo Amdahla\nPrawo Amdahla opisuje maksymalne możliwe przyspieszenie programu po jego zrównolegleniu.\nPokazuje, że nawet jeśli część programu wykonuje się równolegle bardzo szybko, to część\nsekwencyjna nadal ogranicza całkowity czas wykonania.\nWzór:\n1\nS =\np 1−s\ns+\np\ngdzie:\n• S — przyspieszenie dla pprocesorów,\np\n• s— część sekwencyjna programu,\n• 1−s— część możliwa do zrównoleglenia,\n• p— liczba procesorów, rdzeni lub wątków.\nCzęść sekwencyjna programu\nCzęść sekwencyjna to fragment programu, którego nie da się wykonać równolegle.\nMoże to być na przykład:\n• inicjalizacja danych,\n• wczytywanie konfiguracji,\n• fragment zależny od poprzednich wyników,\n• operacje wymagające wykonania krok po kroku.\nTo właśnie ta część ogranicza maksymalne przyspieszenie programu.\nMaksymalne przyspieszenie\nJeżeli liczba procesorów rośnie do nieskończoności, część równoległa może teoretycznie wykonać się\nprawie natychmiast.\nAle część sekwencyjna nadal pozostaje.\nDlatego maksymalne przyspieszenie wynosi:\n1\nS =\nmax s\nPrzykład:\nJeśli 10% programu jest sekwencyjne, czyli:\ns = 0,1\nto maksymalne przyspieszenie wynosi:\n1\nS = = 10\nmax 0,1\nNawet przy ogromnej liczbie procesorów program nie będzie szybszy niż 10 razy.\nSpadek efektywności\nEfektywność obliczeń równoległych to:\nS\np\nE =\np p\nPrawo Amdahla pokazuje, że po dodaniu kolejnych procesorów zysk jest coraz mniejszy.\nNa początku dodatkowe procesory mogą mocno przyspieszać program, ale później większość czasu i\ntak ogranicza część sekwencyjna.\nDlatego efektywność zwykle spada, gdy liczba procesorów rośnie.\nNarzut komunikacji\nKlasyczne prawo Amdahla zakłada uproszczony model i nie opisuje dokładnie kosztów takich jak:\n• komunikacja między procesorami,\n• synchronizacja,\n• oczekiwanie na dane,\n• nierówny podział pracy.\nW praktyce te narzuty mogą jeszcze bardziej ograniczać przyspieszenie.\n\nNajważniejsza intuicja:\nPrawo Amdahla mówi, że programu nie da się przyspieszać w nieskończoność, bo zawsze ogranicza\nnas fragment, którego nie da się zrównoleglić."
  },
  {
    "id": 14,
    "source": "PRO-MAX",
    "source_num": 16,
    "extra": false,
    "type": "mc",
    "question": "Dla poniższego kodu: #include <stdio.h> #include <omp.h> int main() { int id; // #pragma omp parallel private(id) #pragma omp parallel private(id) { id = omp_get_thread_num(); printf(\"Wątek %d przetwarza dane...\\n\", id); } return 0; } Co można powiedzieć o sposobie przetwarzania i dostępu do zmiennej id?",
    "correct": [
      "id jest prywatne dla każdego wątku, co oznacza, że każdy wątek ma swoją kopię.",
      "Jeśli nie użyto by klauzuli private(id), to id byłoby współdzielone i powodowało błędy.",
      "Program może wykonać się poprawnie nawet bez private(id), ale wynik mógłby być nieprzewidywalny.",
      "Wartość początkowa id nie jest zdefiniowana."
    ],
    "wrong": [
      "id jest wspólne, więc każdy wątek nadpisuje jego wartość — nie w tym kodzie, bo użyto private(id).",
      "private(id) oznacza, że id jest inicjalizowane domyślnie wartością 0 we wszystkich wątkach — nie, zmienna prywatna nie jest automatycznie zerowana."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Klauzula private w OpenMP\nKlauzula:\n#pragma omp parallel private(id)\noznacza, że każdy wątek dostaje własną kopię zmiennej id.\nCzyli zamiast jednej wspólnej zmiennej:\nid\nmamy osobne kopie:\nid dla wątku 0\nid dla wątku 1\nid dla wątku 2\n...\nDzięki temu wątki nie nadpisują sobie wzajemnie wartości.\nZmienna prywatna\nZmienna prywatna jest widoczna osobno dla każdego wątku.\nW kodzie:\nid = omp_get_thread_num();\nkażdy wątek zapisuje swój numer do swojej własnej kopii id.\nDlatego wypisanie:\nprintf(\"Wątek %d przetwarza dane...\\n\", id);\nkorzysta z lokalnej wartości danego wątku.\nZmienna współdzielona\nGdyby nie było:\nprivate(id)\nto zmienna id, zadeklarowana przed regionem równoległym, byłaby domyślnie współdzielona.\nWtedy wszystkie wątki zapisywałyby wartość do tej samej zmiennej:\nwątek 0 zapisuje id = 0\nwątek 1 zapisuje id = 1\nwątek 2 zapisuje id = 2\n...\nMogłoby dojść do sytuacji, w której jeden wątek zapisze swój numer, ale zanim go wypisze, inny\nwątek nadpisze zmienną.\nTo prowadzi do błędów współbieżności.\nRace condition\nRace condition, czyli wyścig, występuje wtedy, gdy wiele wątków jednocześnie odczytuje i zapisuje tę\nsamą zmienną, a wynik zależy od przypadkowej kolejności wykonania.\nBez private(id) kod mógłby czasem wyglądać poprawnie, ale nie byłoby gwarancji poprawności.\nNiezdefiniowana wartość początkowa\nZmienna oznaczona jako private nie przejmuje automatycznie wartości zmiennej oryginalnej.\nJej wartość początkowa jest niezdefiniowana, jeśli nie zostanie jawnie ustawiona.\nW tym kodzie nie jest to problem, bo każdy wątek od razu przypisuje wartość:\nid = omp_get_thread_num();\nGdybyśmy chcieli, aby zmienna prywatna dostała początkową wartość z oryginału, należałoby użyć\nfirstprivate.\n\nNajważniejsza intuicja:\nprivate(id) sprawia, że każdy wątek ma własne id, więc nie ma wyścigu przy zapisie numeru wątku;\nbez private zmienna byłaby wspólna i wynik mógłby być nieprzewidywalny."
  },
  {
    "id": 15,
    "source": "PRO-MAX",
    "source_num": 17,
    "extra": false,
    "type": "mc",
    "question": "Co przedstawia wykres roofline?",
    "correct": [
      "Ograniczenie wydajnościowe wynikające z mocy obliczeniowej oraz przepustowości pamięci"
    ],
    "wrong": [
      "Zależności pomiędzy liczbą operacji I/O a czasem wykonania programu — roofline dotyczy głównie relacji między obliczeniami a dostępem do pamięci.",
      "Wydajność obliczeniową procesora w stosunku do jego zużycia energii — to byłby raczej model energetyczny.",
      "Porównanie czasu wykonania programu dla różnych poziomów optymalizacji kompilatora — to zwykły wykres benchmarkowy, nie roofline.",
      "Liczbę operacji zmiennoprzecinkowych wykonywanych na różnych typach procesorów — roofline używa FLOPS jako miary wydajności, ale nie służy tylko do liczenia operacji.",
      "Skalowanie programu równoległego w zależności od liczby procesorów — to dotyczy np. wykresów skalowalności."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Wykres roofline\nWykres roofline to model wydajności pokazujący, co ogranicza szybkość programu:\n• moc obliczeniowa procesora/GPU,\n• przepustowość pamięci.\nPomaga odpowiedzieć na pytanie:\nczy program jest ograniczony przez obliczenia, czy przez dostęp do pamięci?\nOś X — intensywność arytmetyczna\nNa osi poziomej znajduje się zwykle intensywność arytmetyczna, czyli:\nliczba operacji\nintensywnosˊcˊ arytmetyczna =\nilosˊcˊ przesłanych danych\nNajczęściej wyrażana jako:\nFLOP / bajt\nCzyli: ile operacji zmiennoprzecinkowych program wykonuje na każdy bajt pobrany z pamięci.\nOś Y — wydajność\nNa osi pionowej znajduje się wydajność obliczeniowa, najczęściej mierzona w:\nFLOP/s\nczyli liczbie operacji zmiennoprzecinkowych wykonywanych na sekundę.\nOgraniczenie przez pamięć — memory-bound\nProgram jest memory-bound, gdy jego wydajność ogranicza szybkość pobierania danych z pamięci.\nDzieje się tak, gdy program wykonuje mało obliczeń na dużej ilości danych.\nPrzykład intuicyjny:\nfor (int i = 0; i < n; i++) {\nc[i] = a[i] + b[i];\n}\nNa każdy element wykonujemy mało obliczeń, ale trzeba dużo danych wczytać i zapisać.\nOgraniczenie przez obliczenia — compute-bound\nProgram jest compute-bound, gdy jego wydajność ogranicza maksymalna moc obliczeniowa\nprocesora lub GPU.\nDzieje się tak, gdy program wykonuje dużo operacji na stosunkowo małej ilości danych.\nPrzykładem mogą być intensywne obliczenia macierzowe, gdzie dane są wielokrotnie\nwykorzystywane.\nDach, czyli roof\nNazwa roofline pochodzi od kształtu wykresu przypominającego dach:\nwydajność\n^\n| __________ limit mocy obliczeniowej\n| /\n| /\n| / limit przepustowości pamięci\n|_________/________________> intensywność arytmetyczna\nCzęść ukośna oznacza ograniczenie przez pamięć, a część pozioma oznacza ograniczenie przez\nmaksymalną moc obliczeniową.\n\nNajważniejsza intuicja:\nWykres roofline pokazuje, czy program działa wolno dlatego, że procesor/GPU ma za małą moc\nobliczeniową, czy dlatego, że dane są zbyt wolno dostarczane z pamięci."
  },
  {
    "id": 16,
    "source": "PRO-MAX",
    "source_num": 18,
    "extra": false,
    "type": "mc",
    "question": "Które z poniższych stwierdzeń są prawdziwe dla systemów MNSP, czyli Multiple Nodes, Single Processor?",
    "correct": [
      "Każdy węzeł posiada jeden procesor",
      "Węzły komunikują się poprzez przesyłanie komunikatów",
      "Typowym środowiskiem programowania są PVM i MPI"
    ],
    "wrong": [
      "Procesory posiadają jednolitą przestrzeń adresową — to cecha pamięci współdzielonej, a nie systemu z wieloma oddzielnymi węzłami.",
      "Programowanie bazuje głównie na modelu pamięci współdzielonej — w MNSP dominuje model pamięci rozproszonej.",
      "Jest stosowany głównie w pojedynczych maszynach wielordzeniowych — MNSP dotyczy wielu węzłów, a nie jednej maszyny wielordzeniowej."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "MNSP — Multiple Nodes, Single Processor\nMNSP oznacza architekturę, w której system składa się z wielu węzłów, a każdy węzeł ma jeden\nprocesor.\nMożna to intuicyjnie przedstawić tak:\nWęzeł 1: procesor + pamięć lokalna\nWęzeł 2: procesor + pamięć lokalna\nWęzeł 3: procesor + pamięć lokalna\n...\nKażdy węzeł działa jako osobna jednostka obliczeniowa.\nWęzeł\nWęzeł to pojedynczy komputer lub jednostka obliczeniowa w systemie rozproszonym.\nW MNSP każdy węzeł ma:\n• jeden procesor,\n• własną pamięć lokalną,\n• połączenie sieciowe z innymi węzłami.\nPamięć rozproszona\nW systemach MNSP każdy węzeł posiada własną pamięć.\nOznacza to, że procesor z jednego węzła nie może bezpośrednio odwołać się do pamięci innego węzła\ntak jak do swojej lokalnej pamięci.\nDlatego nie ma jednej wspólnej przestrzeni adresowej dla wszystkich procesorów.\nPrzesyłanie komunikatów\nPonieważ węzły mają osobne pamięci, muszą wymieniać dane przez komunikaty.\nPrzykład:\nWęzeł 1 wysyła dane do Węzła 2\nWęzeł 2 odbiera dane i wykonuje dalsze obliczenia\nW praktyce robi się to za pomocą bibliotek takich jak MPI lub PVM.\nMPI\nMPI, czyli Message Passing Interface, to standard programowania równoległego w systemach z\npamięcią rozproszoną.\nTypowe operacje MPI:\nMPI_Send(...);\nMPI_Recv(...);\nSłużą one do wysyłania i odbierania danych między procesami działającymi na różnych węzłach.\nPVM\nPVM, czyli Parallel Virtual Machine, to starsze środowisko do programowania obliczeń równoległych\nw systemach rozproszonych.\nPozwalało traktować wiele połączonych komputerów jak jedną „wirtualną maszynę równoległą”.\nMNSP a maszyna wielordzeniowa\nMNSP nie oznacza pojedynczego komputera z wieloma rdzeniami.\nPojedyncza maszyna wielordzeniowa ma zwykle wspólną pamięć i wiele rdzeni w jednym systemie.\nMNSP oznacza wiele oddzielnych węzłów, które komunikują się przez sieć.\n\nNajważniejsza intuicja:\nMNSP to system z wieloma oddzielnymi węzłami, gdzie każdy ma jeden procesor i własną pamięć,\nwięc komunikacja odbywa się przez przesyłanie wiadomości, najczęściej z użyciem MPI lub PVM."
  },
  {
    "id": 17,
    "source": "PRO-MAX",
    "source_num": 19,
    "extra": false,
    "type": "mc",
    "question": "Jakie zalety posiada programowanie równoległe w modelu pamięci rozproszonej?",
    "correct": [
      "Umożliwia skalowalność systemu poprzez dodawanie nowych węzłów",
      "Pozwala na przetwarzanie danych na dużą skalę",
      "Umożliwia efektywne zarządzanie zasobami przez rozdzielanie obliczeń",
      "Pozwala na rozproszenie danych między różnymi komputerami"
    ],
    "wrong": [
      "Nie wymaga synchronizacji między węzłami — synchronizacja często jest potrzebna, np. przy zbieraniu wyników albo wymianie danych.",
      "Eliminuje konieczność stosowania przesyłania komunikatów — przeciwnie, w pamięci rozproszonej komunikacja zwykle odbywa się przez przesyłanie komunikatów, np. MPI."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Model pamięci rozproszonej\nPamięć rozproszona to model, w którym każdy procesor, proces lub węzeł posiada własną, lokalną\npamięć.\nNie ma jednej wspólnej przestrzeni adresowej dla całego systemu.\nSchematycznie:\nWęzeł 1: CPU + pamięć lokalna\nWęzeł 2: CPU + pamięć lokalna\nWęzeł 3: CPU + pamięć lokalna\nJeśli jeden węzeł potrzebuje danych z drugiego, musi je otrzymać przez komunikację.\nSkalowalność przez dodawanie węzłów\nJedną z największych zalet pamięci rozproszonej jest skalowalność.\nMożna zwiększać moc systemu przez dodawanie kolejnych komputerów lub węzłów do klastra.\nPrzykład:\n4 węzły → mniejsza moc obliczeniowa\n16 węzłów → większa moc obliczeniowa\n64 węzły → jeszcze większa moc obliczeniowa\nDzięki temu model pamięci rozproszonej dobrze nadaje się do dużych systemów HPC.\nPrzetwarzanie danych na dużą skalę\nModel pamięci rozproszonej pozwala przetwarzać dane, które są zbyt duże dla jednej maszyny.\nDane można podzielić między wiele komputerów.\nPrzykład:\nWęzeł 1 przetwarza część danych A\nWęzeł 2 przetwarza część danych B\nWęzeł 3 przetwarza część danych C\nPo zakończeniu pracy wyniki mogą zostać połączone.\nRozdzielanie obliczeń\nW pamięci rozproszonej można rozdzielać obliczenia między różne węzły.\nKażdy węzeł wykonuje swoją część pracy, co pozwala lepiej wykorzystać zasoby.\nTo daje:\n• możliwość równoległego wykonania zadań,\n• lepsze wykorzystanie wielu komputerów,\n• większą odporność na ograniczenia pojedynczej maszyny,\n• możliwość pracy na bardzo dużych problemach.\nRozproszenie danych\nDane mogą być przechowywane na różnych komputerach.\nJest to korzystne, gdy:\n• dane są bardzo duże,\n• dostępna pamięć jednej maszyny jest niewystarczająca,\n• chcemy przetwarzać dane blisko miejsca ich przechowywania,\n• różne części systemu odpowiadają za różne fragmenty danych.\nPrzesyłanie komunikatów\nW modelu pamięci rozproszonej procesy zwykle komunikują się przez wiadomości.\nNajczęściej używa się do tego MPI:\nMPI_Send(...);\nMPI_Recv(...);\nOznacza to, że programista często musi jawnie określić, jakie dane mają zostać wysłane i odebrane.\nSynchronizacja między węzłami\nSynchronizacja nadal może być potrzebna.\nPrzykładowo:\n• węzły muszą poczekać na zakończenie pewnego etapu obliczeń,\n• jeden proces musi zebrać wyniki od innych,\n• dane muszą zostać wymienione przed następną fazą programu.\nDlatego pamięć rozproszona nie usuwa problemu synchronizacji, tylko zmienia sposób, w jaki ją\nrealizujemy.\n\nNajważniejsza intuicja:\nPamięć rozproszona pozwala budować bardzo duże systemy z wielu komputerów, dzielić między nie\ndane i obliczenia, ale wymaga jawnej komunikacji oraz często synchronizacji między węzłami."
  },
  {
    "id": 18,
    "source": "PRO-MAX",
    "source_num": 21,
    "extra": false,
    "type": "mc",
    "question": "Czym różni się Proof-of-Work od Proof-of-Stake w systemach blockchain?",
    "correct": [
      "PoW wymaga intensywnych obliczeń, natomiast PoS opiera się na stakowaniu kryptowaluty",
      "PoS jest bardziej energooszczędny niż PoW",
      "PoW wykorzystuje proces kopania kryptowalut, a PoS nie wymaga takiej mocy obliczeniowej"
    ],
    "wrong": [
      "PoW bazuje na wyborze walidatora na podstawie ilości posiadanej kryptowaluty — to cecha PoS, nie PoW.",
      "PoS zwiększa decentralizację systemu blockchain w większym stopniu niż PoW — nie jest to ogólna reguła; zależy od konkretnej sieci.",
      "PoS wymaga użycia algorytmu SHA-256 — nie, SHA-256 jest znany głównie z Bitcoina i jego PoW, ale nie jest wymaganiem dla PoS."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Blockchain\nBlockchain to rozproszony rejestr danych, w którym informacje są zapisywane w blokach połączonych\nze sobą kryptograficznie.\nKażdy blok zawiera zwykle:\n• dane transakcji,\n• znacznik czasu,\n• hash poprzedniego bloku,\n• dodatkowe dane potrzebne do walidacji.\nCelem blockchaina jest utrzymanie wspólnej, trudnej do sfałszowania historii transakcji bez jednej\ncentralnej instytucji.\nMechanizm konsensusu\nMechanizm konsensusu to sposób, w jaki uczestnicy sieci blockchain zgadzają się, który blok jest\npoprawny i może zostać dodany do łańcucha.\nDwa popularne mechanizmy to:\nProof-of-Work → praca obliczeniowa\nProof-of-Stake → stakowanie kryptowaluty\nProof-of-Work, czyli PoW\nProof-of-Work polega na tym, że uczestnicy sieci, czyli górnicy, rozwiązują trudne zadania\nobliczeniowe.\nNajczęściej chodzi o znalezienie takiego wyniku funkcji hashującej, który spełnia określony warunek.\nProces ten nazywa się kopaniem, czyli miningiem.\nCechy PoW:\n• wymaga dużej mocy obliczeniowej,\n• zużywa dużo energii,\n• bezpieczeństwo opiera się na koszcie wykonania obliczeń,\n• przykład: Bitcoin.\nKopanie kryptowalut\nKopanie kryptowalut to proces tworzenia nowych bloków w systemie Proof-of-Work.\nGórnicy wykonują wiele prób obliczeniowych, aby znaleźć poprawny blok.\nTen, kto pierwszy znajdzie poprawne rozwiązanie, może dodać blok do blockchaina i zwykle otrzymuje\nnagrodę.\nProof-of-Stake, czyli PoS\nProof-of-Stake polega na tym, że walidatorzy bloków są wybierani na podstawie posiadanej i\nzablokowanej kryptowaluty, czyli stake’u.\nZamiast inwestować w moc obliczeniową, uczestnik „stawia” część swoich środków jako\nzabezpieczenie.\nCechy PoS:\n• nie wymaga energochłonnego kopania,\n• opiera się na stakowaniu kryptowaluty,\n• jest zwykle bardziej energooszczędny niż PoW,\n• walidator może stracić część stake’u za nieuczciwe działanie.\nStaking\nStaking oznacza zablokowanie określonej ilości kryptowaluty, aby uczestniczyć w walidowaniu bloków.\nIm większy stake, tym większa szansa na wybór jako walidator, choć konkretne zasady zależą od danej\nsieci blockchain.\nEnergooszczędność PoS\nPoS jest zwykle bardziej energooszczędny niż PoW, ponieważ nie wymaga masowego wykonywania\nobliczeń przez górników.\nW PoW wiele urządzeń konkuruje, wykonując ogromną liczbę prób.\nW PoS wybór walidatora odbywa się bez tak kosztownego obliczeniowo procesu.\nSHA-256\nSHA-256 to funkcja hashująca używana między innymi w Bitcoinie.\nNie jest jednak obowiązkową częścią każdego systemu PoW ani tym bardziej PoS.\nDlatego stwierdzenie, że PoS wymaga SHA-256, jest błędne.\n\nNajważniejsza intuicja:\nPoW zabezpiecza sieć przez kosztowną pracę obliczeniową, a PoS przez ekonomiczny zastaw\nkryptowaluty; dlatego PoS zwykle zużywa znacznie mniej energii niż PoW."
  },
  {
    "id": 19,
    "source": "PRO-MAX",
    "source_num": 22,
    "extra": false,
    "type": "mc",
    "question": "Które z poniższych etapów są typowe dla przetwarzania potokowego?",
    "correct": [
      "Pobranie instrukcji",
      "Dekodowanie instrukcji",
      "Zapis instrukcji — najpewniej chodzi o etap zapisu wyniku, czyli write-back"
    ],
    "wrong": [
      "Przerywanie — przerwania mogą zakłócić potok, ale nie są typowym etapem potoku.",
      "Komunikacja między procesami — to temat systemów operacyjnych i programowania równoległego, nie etap potoku procesora.",
      "Synchronizacja pamięci podręcznej — ważna w systemach wielordzeniowych, ale nie jest klasycznym etapem potoku instrukcji."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Przetwarzanie potokowe\nPrzetwarzanie potokowe, czyli pipelining, to technika wykonywania instrukcji procesora etapami.\nZamiast wykonywać jedną instrukcję od początku do końca, procesor dzieli jej wykonanie na fazy i\njednocześnie przetwarza różne instrukcje na różnych etapach.\nPrzykład intuicyjny:\nInstrukcja 1: pobieranie → dekodowanie → wykonanie → zapis\nInstrukcja 2: pobieranie → dekodowanie → wykonanie → zapis\nInstrukcja 3: pobieranie → dekodowanie → wykonanie → zapis\nDzięki temu procesor może zwiększyć przepustowość wykonywania instrukcji.\nPobranie instrukcji\nPobranie instrukcji, czyli instruction fetch, to etap, w którym procesor pobiera kolejną instrukcję z\npamięci.\nProcesor sprawdza adres instrukcji, zwykle zapisany w liczniku programu, czyli program counter.\nDekodowanie instrukcji\nDekodowanie instrukcji, czyli instruction decode, polega na rozpoznaniu, co dana instrukcja ma\nzrobić.\nProcesor ustala na przykład:\n• jaka operacja ma zostać wykonana,\n• jakie rejestry są używane,\n• czy potrzebny jest dostęp do pamięci,\n• jakie argumenty są wymagane.\nWykonanie instrukcji\nChociaż tej opcji nie ma na liście, jest to klasyczny etap potoku.\nWykonanie instrukcji polega na przeprowadzeniu właściwej operacji, na przykład dodawania,\nporównania albo obliczenia adresu.\nZapis wyniku\nW klasycznym potoku występuje etap write-back, czyli zapis wyniku.\nWynik operacji jest zapisywany na przykład do rejestru procesora.\nUwaga: w pytaniu jest sformułowanie „zapis instrukcji”, ale standardowo mówi się raczej „zapis\nwyniku”, nie „zapis instrukcji”.\n\nNajważniejsza intuicja:\nPotok procesora działa jak taśma produkcyjna: jedna instrukcja jest pobierana, druga dekodowana,\ntrzecia wykonywana, a czwarta zapisuje wynik."
  },
  {
    "id": 20,
    "source": "PRO-MAX",
    "source_num": 23,
    "extra": false,
    "type": "mc",
    "question": "Wykonanie poza kolejnością, czyli Out-of-Order Execution",
    "correct": [
      "Oznacza, że procesor może dynamicznie zmieniać kolejność wykonywania instrukcji, aby zoptymalizować wydajność",
      "Może prowadzić do problemów związanych z zależnościami między instrukcjamiW pytaniu jest literówka: „infrastrukturami” — najpewniej chodziło o instrukcjami."
    ],
    "wrong": [
      "Znaczy, że kolejność wykonywania instrukcji zawsze musi być zgodna z kolejnością w kodzie — to opis wykonania w kolejności, czyli in-order execution.",
      "Oznacza, że instrukcje są wykonywane zgodnie z priorytetem nadanym przez programistę — procesor sam decyduje o kolejności na podstawie dostępności danych i zasobów.",
      "Znaczy, że każda instrukcja musi być wykonywana na oddzielnym rdzeniu — out-of-order dotyczy wykonywania instrukcji wewnątrz procesora/rdzenia, nie koniecznie wielu rdzeni."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Out-of-Order Execution\nOut-of-Order Execution to technika stosowana w procesorach, która pozwala wykonywać instrukcje\nw innej kolejności niż ta, w której występują w kodzie programu.\nProcesor może zmienić kolejność wykonania instrukcji, jeśli nie łamie to zależności między nimi.\nCelem jest lepsze wykorzystanie jednostek wykonawczych procesora.\nWykonanie w kolejności — In-Order Execution\nW modelu in-order instrukcje są wykonywane dokładnie w takiej kolejności, w jakiej występują w\nprogramie.\nPrzykład:\nInstrukcja 1\nInstrukcja 2\nInstrukcja 3\nInstrukcja 4\nJeśli instrukcja 2 czeka na dane z pamięci, procesor może musieć czekać, nawet jeśli instrukcja 3\nmogłaby zostać wykonana wcześniej.\nWykonanie poza kolejnością\nW modelu out-of-order procesor może wykonać późniejszą instrukcję wcześniej, jeśli jest ona gotowa\ndo wykonania.\nPrzykład:\nInstrukcja 1: długo czeka na dane z pamięci\nInstrukcja 2: zależy od instrukcji 1\nInstrukcja 3: niezależna od instrukcji 1 i 2\nProcesor może wykonać instrukcję 3 wcześniej, zamiast bezczynnie czekać.\nZależności między instrukcjami\nProcesor nie może dowolnie przestawiać wszystkich instrukcji.\nMusi uważać na zależności, na przykład:\na = b + c;\nd = a * 2;\nDruga instrukcja zależy od wyniku pierwszej, więc nie może zostać wykonana wcześniej.\nOptymalizacja wydajności\nOut-of-order execution poprawia wydajność, ponieważ procesor może:\n• wykonywać gotowe instrukcje wcześniej,\n• ukrywać opóźnienia dostępu do pamięci,\n• lepiej wykorzystywać jednostki arytmetyczne,\n• zmniejszać czas bezczynności rdzenia.\nKolejność widoczna dla programu\nMimo że procesor może wykonywać instrukcje poza kolejnością wewnętrznie, wynik programu\npowinien wyglądać tak, jakby instrukcje zostały wykonane zgodnie z kolejnością programu.\nTo znaczy, że procesor musi zachować poprawność semantyczną programu.\n\nNajważniejsza intuicja:\nOut-of-order execution pozwala procesorowi wykonywać najpierw te instrukcje, które są już\ngotowe, zamiast czekać na instrukcje opóźnione przez dane lub pamięć.\nTest 2"
  },
  {
    "id": 21,
    "source": "PRO-MAX",
    "source_num": 1,
    "extra": false,
    "type": "mc",
    "question": "Jakiego mechanizmu używamy w POSIX Threads do zabezpieczania dostępu do sekcji krytycznej?",
    "correct": [
      "pthread_mutex_lock i pthread_mutex_unlock"
    ],
    "wrong": [
      "#pragma omp critical należy do OpenMP, nie do POSIX Threads.",
      "MPI_Send i MPI_Recv służą do komunikacji między procesami w MPI, a nie do ochrony sekcji krytycznej w Pthreads.",
      "atomic może chronić pojedyncze operacje atomowe, ale klasycznym mechanizmem sekcji krytycznej w Pthreads jest mutex."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "POSIX Threads / Pthreads\nPOSIX Threads, czyli Pthreads, to standard programowania wielowątkowego w językach C/C++ na\nsystemach zgodnych z POSIX, np. Linux.\nPozwala tworzyć i synchronizować wątki za pomocą funkcji zaczynających się od pthread_.\nSekcja krytyczna\nSekcja krytyczna to fragment kodu, w którym wątek korzysta ze współdzielonych danych.\nPrzykład:\nlicznik++;\nJeśli kilka wątków jednocześnie modyfikuje licznik, może dojść do błędów współbieżności.\nMutex\nMutex to mechanizm wzajemnego wykluczania.\nPozwala zagwarantować, że w danym momencie tylko jeden wątek wykonuje chroniony fragment\nkodu.\nW Pthreads używa się:\npthread_mutex_lock(&mutex);\n// sekcja krytyczna\npthread_mutex_unlock(&mutex);\npthread_mutex_lock blokuje mutex, a pthread_mutex_unlock go odblokowuje.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\nW Pthreads sekcję krytyczną zabezpieczamy muteksem: przed wejściem robimy\npthread_mutex_lock, a po wyjściu pthread_mutex_unlock."
  },
  {
    "id": 22,
    "source": "PRO-MAX",
    "source_num": 2,
    "extra": false,
    "type": "mc",
    "question": "Co oznacza #pragma omp parallel for w kontekście OpenMP?",
    "correct": [
      "Uruchamia pętlę równolegle, dzieląc jej iteracje na dostępne wątki"
    ],
    "wrong": [
      "Uruchamia pętlę sekwencyjnie w równoległym obszarze — nie, celem parallel for jest równoległe wykonanie iteracji.",
      "Uruchamia nowy wątek dla każdej iteracji pętli — nie, liczba wątków zwykle jest ograniczona, a iteracje są między nie dzielone.",
      "Nie jest związane z pętlą, tworzy równoległy blok kodu — to bardziej opisuje #pragma omp parallel, a nie parallel for."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "OpenMP\nOpenMP to technologia do programowania równoległego w modelu pamięci wspólnej.\nPozwala łatwo zrównoleglić fragmenty programu za pomocą dyrektyw kompilatora, np.:\n#pragma omp parallel\nalbo:\n#pragma omp parallel for\n#pragma omp parallel for\nDyrektywa:\n#pragma omp parallel for\nfor (int i = 0; i < n; i++) {\noblicz(i);\n}\noznacza, że iteracje pętli for zostaną podzielone między dostępne wątki.\nNa przykład dla 8 iteracji i 4 wątków może wyglądać to tak:\nWątek 0: iteracje 0, 1\nWątek 1: iteracje 2, 3\nWątek 2: iteracje 4, 5\nWątek 3: iteracje 6, 7\nKażdy wątek wykonuje część iteracji, dzięki czemu cała pętla może zakończyć się szybciej.\nRóżnica między parallel a parallel for\nSama dyrektywa:\n#pragma omp parallel\ntworzy równoległy obszar kodu. Każdy wątek wykonuje ten sam blok.\nNatomiast:\n#pragma omp parallel for\ntworzy zespół wątków i dzieli iteracje pętli między te wątki.\nCzyli:\nparallel → wiele wątków wykonuje blok kodu\nparallel for → wiele wątków dzieli między siebie iteracje pętli\nCzy tworzony jest osobny wątek dla każdej iteracji?\nNie. #pragma omp parallel for nie tworzy osobnego wątku dla każdej iteracji.\nTworzona jest grupa wątków, a iteracje są między nie rozdzielane. Jeden wątek może wykonać wiele\niteracji.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\n#pragma omp parallel for mówi OpenMP: podziel iteracje tej pętli między wiele wątków i wykonuj\nje równolegle."
  },
  {
    "id": 23,
    "source": "PRO-MAX",
    "source_num": 3,
    "extra": false,
    "type": "mc",
    "question": "Jak w MPI można zrealizować komunikację jednego do wielu?",
    "correct": [
      "MPI_Bcast"
    ],
    "wrong": [
      "MPI_Gather działa odwrotnie: zbiera dane od wielu procesów do jednego procesu.",
      "Wielu → jeden",
      "MPI_Barrier służy do synchronizacji procesów, a nie do przesyłania danych.",
      "MPI_Allgather zbiera dane od wszystkich procesów i rozsyła wynik do wszystkich.",
      "Wielu → wielu"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Komunikacja jeden-do-wielu\nKomunikacja jeden-do-wielu oznacza, że jeden proces wysyła tę samą informację do wielu innych\nprocesów.\nSchemat:\nProces 0 → Proces 1\nProces 0 → Proces 2\nProces 0 → Proces 3\nProces 0 → Proces 4\nW MPI typową funkcją do tego jest MPI_Bcast.\nMPI_Bcast\nMPI_Bcast, czyli broadcast, służy do rozgłoszenia danych z jednego procesu do wszystkich procesów\nw danym komunikatorze.\nPrzykład:\nMPI_Bcast(&x, 1, MPI_INT, 0, MPI_COMM_WORLD);\nOznacza to, że proces o numerze 0 wysyła wartość zmiennej x do wszystkich pozostałych procesów w\nMPI_COMM_WORLD.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\nMPI_Bcast to rozgłoszenie: jeden proces ma dane, a MPI rozsyła je do wszystkich pozostałych\nprocesów."
  },
  {
    "id": 24,
    "source": "PRO-MAX",
    "source_num": 4,
    "extra": false,
    "type": "mc",
    "question": "Co oznacza zależność WAW, czyli Write After Write?",
    "correct": [
      "Pierwszy zapis musi zostać wykonany przed drugim zapisem"
    ],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "WAW — Write After Write\nWAW, czyli Write After Write, oznacza zależność między dwoma zapisami do tego samego miejsca, na\nprzykład do tej samej zmiennej lub rejestru.\nChodzi o to, że zapisy muszą zachować właściwą kolejność, żeby końcowa wartość była poprawna.\nPrzykład:\nx = 5; // pierwszy zapis\nx = 10; // drugi zapis\nPo wykonaniu programu końcowa wartość x powinna wynosić 10.\nJeśli procesor lub kompilator zmieniłby kolejność zapisów, mogłoby powstać:\nx = 10;\nx = 5;\nWtedy końcowa wartość byłaby błędna, bo x wynosiłoby 5.\nZależność wyjściowa\nWAW nazywa się też zależnością wyjściową, ponieważ dwie instrukcje zapisują do tego samego\nmiejsca docelowego.\nNie chodzi tu o odczyt danych, tylko o kolejność zapisów.\nZnaczenie w wykonaniu poza kolejnością\nWAW jest ważne przy:\n• wykonywaniu poza kolejnością, czyli out-of-order execution,\n• optymalizacjach kompilatora,\n• potokowym wykonaniu instrukcji,\n• równoległym wykonywaniu instrukcji.\nProcesor może zmieniać kolejność instrukcji tylko wtedy, gdy nie zmieni to wyniku programu.\nPorównanie z innymi zależnościami\nRAW — Read After Write\nOdczyt po zapisie. Instrukcja musi najpierw zapisać wartość, zanim kolejna ją odczyta.\nx = 5;\ny = x;\nWAR — Write After Read\nZapis po odczycie. Najpierw trzeba odczytać starą wartość, zanim zostanie nadpisana.\ny = x;\nx = 5;\nWAW — Write After Write\nZapis po zapisie. Kolejność zapisów musi zostać zachowana.\nx = 5;\nx = 10;\n\nNajważniejsza intuicja:\nWAW oznacza, że jeśli dwie instrukcje zapisują do tego samego miejsca, to drugi zapis nie może\n„wyprzedzić” pierwszego, bo zmieniłoby to końcowy wynik."
  },
  {
    "id": 25,
    "source": "PRO-MAX",
    "source_num": 5,
    "extra": false,
    "type": "mc",
    "question": "Które stwierdzenia dotyczące POSIX Threads i zmiennych warunkowych są prawdziwe?",
    "correct": [
      "pthread_cond_wait() powoduje, że wątek czeka na zmiennej warunkowej, a w tym czasie zwalnia blokadę, którą wątek może posiadać",
      "pthread_cond_signal() budzi jeden wątek czekający na zmiennej warunkowej"
    ],
    "wrong": [
      "pthread_cond_broadcast() budzi tylko jeden wątek czekający na zmiennej warunkowej — błędne, bo pthread_cond_broadcast() budzi wszystkie wątki czekające na danej zmiennej warunkowej.",
      "pthread_mutex_lock() może być użyte do zablokowania zmiennej warunkowej — błędne. pthread_mutex_lock() blokuje mutex, a nie zmienną warunkową. Mutex jest zwykle używany razem ze zmienną warunkową, ale nie blokuje jej bezpośrednio.",
      "pthread_cond_t jest używany do inicjalizacji mutexów — błędne. pthread_cond_t to typ zmiennej warunkowej. Do mutexów używa się pthread_mutex_t."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Zmienna warunkowa\nZmienna warunkowa w Pthreads służy do usypiania wątku do momentu, aż zostanie spełniony\nokreślony warunek.\nPrzykład sytuacji:\nWątek czeka, aż bufor nie będzie pusty.\nWątek czeka, aż pojawi się nowe zadanie.\nWątek czeka, aż inny wątek zakończy etap pracy.\nZmienna warunkowa zwykle działa razem z muteksem.\npthread_cond_wait()\nFunkcja:\npthread_cond_wait(&cond, &mutex);\npowoduje, że wątek zaczyna czekać na zmiennej warunkowej cond.\nBardzo ważne: podczas czekania funkcja zwalnia mutex, aby inne wątki mogły wejść do sekcji\nkrytycznej i zmienić warunek.\nPo przebudzeniu wątek ponownie przejmuje mutex.\nSchemat:\n1. Wątek ma mutex.\n2. Wywołuje pthread_cond_wait().\n3. Mutex zostaje zwolniony.\n4. Wątek śpi.\n5. Inny wątek sygnalizuje warunek.\n6. Czekający wątek budzi się i ponownie blokuje mutex.\npthread_cond_signal()\nFunkcja:\npthread_cond_signal(&cond);\nbudzi jeden wątek czekający na danej zmiennej warunkowej.\nJeśli nie ma żadnego czekającego wątku, sygnał zwykle przepada.\npthread_cond_broadcast()\nFunkcja:\npthread_cond_broadcast(&cond);\nbudzi wszystkie wątki czekające na danej zmiennej warunkowej.\nJest używana wtedy, gdy zmiana warunku może dotyczyć wielu wątków naraz.\nMutex a zmienna warunkowa\nMutex chroni dane współdzielone, a zmienna warunkowa pozwala czekać na zmianę stanu tych\ndanych.\nTypowy schemat:\npthread_mutex_lock(&mutex);\nwhile (!warunek) {\npthread_cond_wait(&cond, &mutex);\n}\n// sekcja wykonywana, gdy warunek jest spełniony\npthread_mutex_unlock(&mutex);\nUżywa się while, a nie if, ponieważ wątek po przebudzeniu powinien ponownie sprawdzić, czy\nwarunek rzeczywiście jest spełniony.\n\nNajważniejsza intuicja:\nZmienna warunkowa pozwala wątkowi spać do czasu spełnienia warunku, a pthread_cond_wait()\npodczas czekania zwalnia mutex, żeby inne wątki mogły ten warunek zmienić."
  },
  {
    "id": 26,
    "source": "PRO-MAX",
    "source_num": 6,
    "extra": false,
    "type": "mc",
    "question": "Jakie jest główne zadanie dyrektywy #pragma omp critical w OpenMP?",
    "correct": [
      "Zabezpieczenie sekcji krytycznej"
    ],
    "wrong": [
      "Utworzenie nowego wątku — wątki tworzy np. #pragma omp parallel.",
      "Synchronizacja wątków — to ogólne określenie; critical synchronizuje dostęp, ale konkretnie zabezpiecza sekcję krytyczną.",
      "Uruchomienie pętli w równoległym bloku kodu — to robi np. #pragma omp parallel for."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "#pragma omp critical\nDyrektywa:\n#pragma omp critical\n{\n// sekcja krytyczna\n}\noznacza, że dany fragment kodu może być wykonywany tylko przez jeden wątek naraz.\nPozostałe wątki muszą poczekać, aż aktualny wątek opuści sekcję krytyczną.\nSekcja krytyczna\nSekcja krytyczna to fragment programu, w którym wiele wątków może odwoływać się do tych\nsamych danych współdzielonych.\nPrzykład:\n#pragma omp critical\n{\nsuma += wynik_lokalny;\n}\nBez zabezpieczenia kilka wątków mogłoby jednocześnie zmieniać zmienną suma, powodując błędny\nwynik.\nSynchronizacja wątków\n#pragma omp critical jest jedną z form synchronizacji, ale jej główne zadanie to ochrona sekcji\nkrytycznej.\nDlatego odpowiedź b. Synchronizacja wątków jest częściowo ogólna, ale mniej precyzyjna niż c.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\n#pragma omp critical działa jak bramka: do chronionego fragmentu kodu może wejść tylko jeden\nwątek naraz."
  },
  {
    "id": 27,
    "source": "PRO-MAX",
    "source_num": 7,
    "extra": false,
    "type": "mc",
    "question": "Co jest celem funkcji pthread_join?",
    "correct": [
      "Czekanie na zakończenie wątku i pobranie jego wartości zwracanej."
    ],
    "wrong": [
      "Tworzenie nowego wątku — do tego służy pthread_create.",
      "Zakończenie wątku — wątek może zakończyć się sam przez return z funkcji wątku albo przez pthread_exit.",
      "Zainicjowanie mutexa — do tego służy pthread_mutex_init."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "pthread_join\nFunkcja:\npthread_join(thread, &retval);\nsłuży do tego, aby jeden wątek poczekał na zakończenie innego wątku.\nNajczęściej używa jej wątek główny, aby poczekać, aż utworzone wcześniej wątki zakończą pracę.\nCzekanie na zakończenie wątku\nJeśli wątek główny utworzy dodatkowy wątek przez:\npthread_create(&thread, NULL, funkcja, NULL);\nto może potem poczekać na jego zakończenie:\npthread_join(thread, NULL);\nDzięki temu program nie kończy się zanim wątki wykonają swoją pracę.\nWartość zwracana przez wątek\nWątek może zakończyć się i zwrócić pewną wartość, którą można odebrać przez pthread_join.\nPrzykład ogólny:\nvoid *wynik;\npthread_join(thread, &wynik);\nJeśli nie interesuje nas wartość zwracana, można podać NULL.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\npthread_join oznacza: poczekaj, aż wskazany wątek skończy działanie, a opcjonalnie odbierz wynik\njego pracy."
  },
  {
    "id": 28,
    "source": "PRO-MAX",
    "source_num": 8,
    "extra": false,
    "type": "mc",
    "question": "W MPI, co robi funkcja MPI_Reduce?",
    "correct": [
      "Zbiera dane od wszystkich procesów i wykonuje na nich operację redukującą."
    ],
    "wrong": [
      "Wysyła dane od jednego procesu do wszystkich innych — to opisuje MPI_Bcast.",
      "Synchronizuje wszystkie procesy — do tego służy MPI_Barrier.",
      "Rozsyła dane od jednego procesu do wielu — to również opisuje MPI_Bcast, czyli broadcast."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "MPI_Reduce\nMPI_Reduce to funkcja komunikacji zbiorowej w MPI.\nSłuży do zebrania danych od wielu procesów i wykonania na nich jednej operacji, na przykład:\n• sumowania,\n• wyznaczenia maksimum,\n• wyznaczenia minimum,\n• mnożenia,\n• operacji logicznej.\nWynik trafia do jednego wybranego procesu, nazywanego root.\nRedukcja\nRedukcja oznacza połączenie wielu wartości w jedną wartość wynikową.\nPrzykład:\nProces 0 ma: 2\nProces 1 ma: 5\nProces 2 ma: 3\nProces 3 ma: 10\nPo wykonaniu redukcji z operacją sumowania:\n2 + 5 + 3 + 10 = 20\nWynik 20 trafia do procesu root.\nPrzykład użycia\nint lokalna_suma;\nint globalna_suma;\nMPI_Reduce(\n&lokalna_suma,\n&globalna_suma,\n1,\nMPI_INT,\nMPI_SUM,\n0,\nMPI_COMM_WORLD\n);\nTutaj każdy proces ma swoją lokalna_suma, a proces 0 otrzymuje sumę wszystkich wartości w\nglobalna_suma.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\nMPI_Reduce działa jak „zbierz wartości od wszystkich, wykonaj na nich operację, a wynik zapisz u\njednego procesu”."
  },
  {
    "id": 29,
    "source": "PRO-MAX",
    "source_num": 9,
    "extra": false,
    "type": "mc",
    "question": "Jak można zapobiec zależnościom WAR, czyli Write After Read, w pętli?",
    "correct": [
      "Zastosowanie zmiennych lokalnych dla wątków."
    ],
    "wrong": [
      "Zastosowanie operacji atomowych — operacje atomowe chronią pojedyncze odczyty/zapisy lub modyfikacje, ale nie rozwiązują ogólnie problemu zależności WAR w pętli.",
      "Zastosowanie mechanizmu mutex — mutex może wymusić kolejność i zabezpieczyć dostęp, ale zwykle serializuje wykonanie i nie jest typowym sposobem usuwania zależności WAR w pętli.",
      "Zastosowanie metody MPI_Allreduce — to operacja zbiorowa MPI do redukcji danych między procesami, nie mechanizm usuwania zależności WAR."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "WAR — Write After Read\nWAR, czyli Write After Read, oznacza zależność, w której najpierw musi nastąpić odczyt starej\nwartości, a dopiero potem można wykonać zapis do tego samego miejsca.\nPrzykład:\ny = x; // najpierw odczyt x\nx = 10; // potem zapis do x\nJeśli zapis x = 10 wykonałby się za wcześnie, to instrukcja y = x odczytałaby już nową wartość, a nie\nstarą.\nWAR w pętli\nW pętli zależność WAR może pojawić się wtedy, gdy jedna iteracja odczytuje zmienną, a inna iteracja\npóźniej ją nadpisuje.\nPrzykład intuicyjny:\nfor (int i = 1; i < n; i++) {\na[i - 1] = a[i];\n}\nTutaj jedna iteracja zapisuje do elementu tablicy, który inna iteracja może chcieć wcześniej odczytać.\nZmienne lokalne dla wątków\nJednym ze sposobów unikania zależności WAR jest użycie zmiennych lokalnych, czyli prywatnych kopii\ndanych dla wątków.\nZamiast wiele wątków odczytywało i zapisywało tę samą zmienną, każdy wątek pracuje na swojej\nkopii.\nPrzykład:\n#pragma omp parallel private(tmp)\n{\nint tmp;\ntmp = oblicz_lokalnie();\n}\nDzięki temu wątki nie nadpisują sobie danych, które inne wątki muszą jeszcze odczytać.\nPrywatne dane w OpenMP\nW OpenMP można użyć klauzuli:\nprivate(zmienna)\nalbo zadeklarować zmienną wewnątrz bloku równoległego:\n#pragma omp parallel\n{\nint lokalna; // osobna zmienna dla każdego wątku\n}\nTo pomaga uniknąć konfliktów dostępu do wspólnych zmiennych.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\nWAR oznacza konflikt: ktoś musi jeszcze odczytać starą wartość, a ktoś inny chce ją już nadpisać;\nużycie zmiennych lokalnych/prywatnych kopii pomaga uniknąć takiego nadpisywania."
  },
  {
    "id": 30,
    "source": "PRO-MAX",
    "source_num": 10,
    "extra": false,
    "type": "mc",
    "question": "Jakie są zalety i wady użycia #pragma omp parallel for schedule(dynamic, X) w OpenMP?",
    "correct": [
      "Zalety to łatwość implementacji i dynamiczne przypisanie iteracji; wady to potencjalne narzuty czasowe.",
      "Zalety to równomierne rozłożenie obciążenia; wady to narzuty czasowe."
    ],
    "wrong": [
      "Zalety to brak narzutów czasowych i pełna kontrola nad iteracjami; wady to trudność implementacji — błędne, bo dynamic ma narzut czasowy, a implementacja jest raczej prosta.",
      "Zalety to szybkość i brak narzutów czasowych; wady to trudność implementacji — błędne, bo dynamiczne planowanie nie jest pozbawione narzutów."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "schedule(dynamic, X) w OpenMP\nKlauzula:\n#pragma omp parallel for schedule(dynamic, X)\noznacza, że iteracje pętli są przydzielane wątkom dynamicznie, w porcjach o rozmiarze X.\nCzyli wątek nie dostaje całej swojej pracy od razu. Zamiast tego pobiera kolejną paczkę iteracji, gdy\nskończy poprzednią.\nDynamiczne przypisywanie iteracji\nW schedule(dynamic, X) OpenMP dzieli iteracje na porcje, czyli chunki.\nPrzykład:\n#pragma omp parallel for schedule(dynamic, 2)\nfor (int i = 0; i < 10; i++) {\noblicz(i);\n}\nDla X = 2 iteracje są rozdawane w paczkach po 2:\npaczka 1: iteracje 0, 1\npaczka 2: iteracje 2, 3\npaczka 3: iteracje 4, 5\n...\nWątek, który skończy szybciej, bierze następną dostępną paczkę.\nZaleta: lepsze równoważenie obciążenia\ndynamic jest przydatne, gdy iteracje pętli mają różny czas wykonania.\nPrzykład:\niteracja 0: krótka\niteracja 1: długa\niteracja 2: krótka\niteracja 3: bardzo długa\nPrzy statycznym podziale jeden wątek mógłby dostać dużo cięższej pracy niż pozostałe.\nPrzy dynamicznym podziale szybciej kończące wątki pobierają kolejne iteracje, więc obciążenie\nrozkłada się równomierniej.\nZaleta: łatwość implementacji\nProgramista nie musi samodzielnie pisać mechanizmu kolejki zadań.\nWystarczy dopisać:\nschedule(dynamic, X)\ni OpenMP zajmuje się przydzielaniem iteracji w czasie działania programu.\nWada: narzut czasowy\nDynamiczne przydzielanie iteracji ma koszt.\nOpenMP musi zarządzać tym, które porcje pracy zostały już wykonane i które można przydzielić\nkolejnym wątkom.\nNarzut może wynikać z:\n• częstszego przydzielania pracy,\n• synchronizacji przy pobieraniu kolejnych paczek,\n• zarządzania kolejką/chunkami iteracji.\nIm mniejsze X, tym lepsze balansowanie, ale większy narzut.\nIm większe X, tym mniejszy narzut, ale słabsze równoważenie obciążenia.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\nschedule(dynamic, X) pomaga, gdy iteracje mają różny koszt, bo wątki dobierają sobie kolejne\nporcje pracy, ale płacimy za to dodatkowym narzutem zarządzania."
  },
  {
    "id": 31,
    "source": "PRO-MAX",
    "source_num": 11,
    "extra": false,
    "type": "mc",
    "question": "Co oznacza MPI_Barrier(MPI_COMM_WORLD)?",
    "correct": [
      "Synchronizuje wszystkie procesy w MPI."
    ],
    "wrong": [
      "Zakańcza komunikację w MPI — nie, MPI_Barrier tylko synchronizuje procesy.",
      "Inicjuje MPI — do inicjalizacji MPI służy:",
      "MPI_Init(...);",
      "Zakańcza MPI — do zakończenia pracy z MPI służy:",
      "MPI_Finalize();"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "MPI_Barrier\nMPI_Barrier to funkcja synchronizująca procesy w MPI.\nWywołanie:\nMPI_Barrier(MPI_COMM_WORLD);\noznacza, że każdy proces należący do komunikatora MPI_COMM_WORLD musi dojść do tej bariery.\nProces, który dojdzie wcześniej, czeka na pozostałe.\nBariera synchronizacyjna\nBariera działa jak punkt kontrolny.\nSchemat:\nProces 0 dochodzi do bariery → czeka\nProces 1 dochodzi do bariery → czeka\nProces 2 dochodzi do bariery → czeka\nProces 3 dochodzi do bariery → wszyscy mogą iść dalej\nDopiero gdy wszystkie procesy osiągną barierę, każdy z nich może kontynuować wykonanie programu.\nMPI_COMM_WORLD\nMPI_COMM_WORLD to domyślny komunikator obejmujący wszystkie procesy uruchomione w\nprogramie MPI.\nCzyli:\nMPI_Barrier(MPI_COMM_WORLD);\nsynchronizuje wszystkie procesy programu.\nDlaczego pozostałe odpowiedzi są błędne?\nMPI_Init(...);\nd. Zakańcza MPI — do zakończenia pracy z MPI służy:\nMPI_Finalize();\n\nNajważniejsza intuicja:\nMPI_Barrier(MPI_COMM_WORLD) oznacza: wszystkie procesy mają poczekać w tym miejscu, aż\nkażdy z nich tam dotrze."
  },
  {
    "id": 32,
    "source": "PRO-MAX",
    "source_num": 12,
    "extra": false,
    "type": "mc",
    "question": "W jaki sposób można zainicjować mutex w Pthreads?",
    "correct": [
      "pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;",
      "pthread_mutex_init(&mutex); — z doprecyzowaniem: w praktyce poprawne wywołanie ma zwykle postać:",
      "pthread_mutex_init(&mutex, NULL);"
    ],
    "wrong": [
      "pthread_mutex_t mutex = PTHREAD_CREATE_INITIALIZER; — taka stała nie służy do inicjalizacji mutexa.",
      "#pragma omp critical — to mechanizm OpenMP, nie Pthreads.",
      "MPI_Init(&mutex); — MPI_Init inicjuje środowisko MPI, a nie mutex."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "pthread_mutex_init(&mutex, NULL);\nMutex w Pthreads\nMutex to mechanizm synchronizacji służący do ochrony sekcji krytycznej.\nDeklaracja mutexa:\npthread_mutex_t mutex;\nPrzed użyciem mutex musi zostać zainicjalizowany.\nInicjalizacja statyczna\nMutex można zainicjalizować statycznie:\npthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;\nTen sposób jest prosty i często używany dla mutexów globalnych lub statycznych.\nPrzykład:\npthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;\npthread_mutex_lock(&mutex);\n// sekcja krytyczna\npthread_mutex_unlock(&mutex);\nInicjalizacja dynamiczna\nMutex można też zainicjalizować funkcją:\npthread_mutex_init(&mutex, NULL);\nDrugi argument określa atrybuty mutexa. Jeśli podamy NULL, używane są atrybuty domyślne.\nPrzykład:\npthread_mutex_t mutex;\npthread_mutex_init(&mutex, NULL);\npthread_mutex_lock(&mutex);\n// sekcja krytyczna\npthread_mutex_unlock(&mutex);\npthread_mutex_destroy(&mutex);\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\nMutex w Pthreads inicjalizujemy albo statycznie przez PTHREAD_MUTEX_INITIALIZER, albo\ndynamicznie przez pthread_mutex_init(&mutex, NULL)."
  },
  {
    "id": 33,
    "source": "PRO-MAX",
    "source_num": 13,
    "extra": false,
    "type": "mc",
    "question": "Jakie są główne różnice między przetwarzaniem równoległym a rozproszonym?",
    "correct": [
      "Równoległe wykonuje się na jednym komputerze, rozproszone na wielu maszynach.",
      "Równoległe używa pamięci wspólnej, rozproszone pamięci rozproszonej.",
      "W równoległym istnieje globalny zegar, w rozproszonym nie."
    ],
    "wrong": [
      "Równoległe zawsze jest szybsze od rozproszonego — nie zawsze. Wydajność zależy od problemu, komunikacji, synchronizacji, liczby maszyn, sieci i narzutów."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Przetwarzanie równoległe\nPrzetwarzanie równoległe polega na jednoczesnym wykonywaniu wielu części programu.\nNajczęściej kojarzy się z jednym komputerem wielordzeniowym, gdzie wiele wątków działa w ramach\njednej maszyny.\nPrzykład:\nJeden komputer\n├── rdzeń 1 wykonuje część A\n├── rdzeń 2 wykonuje część B\n├── rdzeń 3 wykonuje część C\n└── rdzeń 4 wykonuje część D\nTypowe technologie:\nOpenMP\nPthreads\nCUDA\nPrzetwarzanie rozproszone\nPrzetwarzanie rozproszone polega na wykonywaniu obliczeń na wielu niezależnych komputerach\npołączonych siecią.\nKażda maszyna może mieć własny procesor, pamięć, system operacyjny i lokalne zasoby.\nPrzykład:\nKomputer 1 wykonuje część A\nKomputer 2 wykonuje część B\nKomputer 3 wykonuje część C\nKomputer 4 wykonuje część D\nTypowe technologie:\nMPI\nPVM\nsystemy gridowe\nsystemy chmurowe\nPamięć wspólna a pamięć rozproszona\nW przetwarzaniu równoległym często używa się pamięci wspólnej.\nOznacza to, że wiele wątków ma dostęp do tych samych zmiennych i struktur danych.\nWątki → wspólna pamięć\nW przetwarzaniu rozproszonym używa się zwykle pamięci rozproszonej.\nKażdy komputer ma własną pamięć, a dane trzeba przesyłać przez sieć.\nProces 1: własna pamięć\nProces 2: własna pamięć\nProces 3: własna pamięć\nGlobalny zegar\nW systemach rozproszonych zwykle nie ma jednego globalnego zegara, który idealnie synchronizuje\nwszystkie maszyny.\nKażdy komputer ma własny zegar, który może działać minimalnie inaczej.\nTo powoduje problemy z:\n• ustalaniem kolejności zdarzeń,\n• synchronizacją,\n• wykrywaniem awarii,\n• spójnością danych.\nW systemach równoległych na jednej maszynie synchronizacja jest zwykle łatwiejsza, bo wszystko\ndziała w ramach jednego systemu.\nDlaczego równoległe nie zawsze jest szybsze?\n• narzut tworzenia wątków,\n• synchronizacja,\n• konflikty dostępu do danych,\n• część sekwencyjna programu,\n• nierówny podział pracy.\nPodobnie przetwarzanie rozproszone może być bardzo wydajne, ale komunikacja przez sieć jest\nzwykle wolniejsza niż dostęp do pamięci lokalnej.\n\nNajważniejsza intuicja:\nPrzetwarzanie równoległe kojarzymy głównie z wieloma rdzeniami jednej maszyny i pamięcią\nwspólną, a rozproszone z wieloma komputerami, pamięcią rozproszoną i komunikacją przez sieć."
  },
  {
    "id": 34,
    "source": "PRO-MAX",
    "source_num": 14,
    "extra": false,
    "type": "mc",
    "question": "Co wykonuje dyrektywa #pragma omp single w kontekście OpenMP?",
    "correct": [
      "Uruchamia blok kodu tylko w jednym wątku"
    ],
    "wrong": [
      "Ogranicza liczbę wątków do jednego — nie, liczba wątków się nie zmienia.",
      "Działa jak #pragma omp critical — nie, critical chroni dostęp wielu wątków do sekcji krytycznej, a single wybiera jeden wątek do wykonania bloku.",
      "Tworzy wątek, który nie wykonuje żadnej pracy — nie, single nie tworzy nowego wątku."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "#pragma omp single\nDyrektywa:\n#pragma omp single\n{\n// kod wykonany tylko przez jeden wątek\n}\noznacza, że dany blok kodu zostanie wykonany tylko przez jeden wątek z zespołu wątków.\nPozostałe wątki pomijają ten blok.\nDo czego służy single?\nsingle stosuje się wtedy, gdy pewien fragment programu powinien zostać wykonany tylko raz, mimo\nże znajduje się wewnątrz regionu równoległego.\nPrzykład:\n#pragma omp parallel\n{\n#pragma omp single\n{\nprintf(\"Ten komunikat wypisze tylko jeden wątek.\\n\");\n}\n// dalsza praca równoległa\n}\nsingle a liczba wątków\n#pragma omp single nie ogranicza liczby wątków do jednego.\nWątki nadal istnieją, ale tylko jeden z nich wykonuje oznaczony blok kodu.\nCzyli:\nparallel → działa wiele wątków\nsingle → tylko jeden z tych wątków wykonuje wskazany blok\nsingle a critical\nsingle i critical są różne.\nsingle oznacza:\njeden wątek wykonuje blok raz.\ncritical oznacza:\nwiele wątków może chcieć wykonać blok, ale tylko jeden naraz.\nPrzykład różnicy:\n#pragma omp single\n{\ninicjalizacja();\n}\nKod wykona się tylko raz.\n#pragma omp critical\n{\nsuma += wynik;\n}\nKod może wykonać wiele wątków, ale po kolei.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\n#pragma omp single oznacza: z całej grupy wątków tylko jeden ma wykonać ten konkretny\nfragment kodu."
  },
  {
    "id": 35,
    "source": "PRO-MAX",
    "source_num": 15,
    "extra": false,
    "type": "open",
    "question": "Wypisz zależności pojawiające się w kodzie: Treść / kod / warianty: 1: y = 4 * sin(2 * 3.14);2: x = 2 * i + z * y;3: z = x * y;",
    "correct": [
      "1 → 2, zmienna y, RAW",
      "1 → 3, zmienna y, RAW",
      "2 → 3, zmienna x, RAW",
      "2 → 3, zmienna z, WAR"
    ],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź:\n1 → 2, zmienna y, RAW\n1 → 3, zmienna y, RAW\n2 → 3, zmienna x, RAW\n2 → 3, zmienna z, WAR\n\nNajważniejsza intuicja:\nW tym kodzie najważniejsze są zależności RAW przez y i x, bo późniejsze instrukcje potrzebują\nwyników wcześniejszych, oraz zależność WAR na z, bo linia 2 musi odczytać stare z, zanim linia 3 je\nnadpisze."
  },
  {
    "id": 36,
    "source": "PRO-MAX",
    "source_num": 16,
    "extra": false,
    "type": "open",
    "question": "Jakie będą wartości zmiennych a, b i c w dowolnym wątku? Treść / kod / warianty: Kod: int a = 3; int b = 2; int c = 1;#pragma omp parallel firstprivate(a) num_threads(4){ int b = a * c; #pragma omp barrier #pragma omp atomic c += 2; a += 3; b += 4 #pragma omp barrier}",
    "correct": [
      "a = 6",
      "b = 7",
      "c = 9"
    ],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź:\na = 6\nb = 7\nc = 9\n\nNajważniejsza intuicja:\nW wątku: a jest prywatną kopią, b jest lokalne dla bloku, a c jest wspólne i zwiększane atomowo\nprzez wszystkie 4 wątki."
  },
  {
    "id": 37,
    "source": "PRO-MAX",
    "source_num": 17,
    "extra": false,
    "type": "open",
    "question": "Zanalizuj zależności przenoszone w pętli. Wpisz obok typu zależności nazwe tablicy której dotyczy, jeśli nie ma wpisz kreske Treść / kod / warianty: WAW WAR RAW Kod: for (i = 1; i < N; i++){ A[i] = D[i-1] - C[i-1]; D[i-1] = 2 * D[i+1];}",
    "correct": [
      "zależności wyjścia (WAW): -antyzależności (WAR): Dzależności rzeczywiste (RAW): -"
    ],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź:\nzależności wyjścia (WAW): -antyzależności (WAR): Dzależności rzeczywiste (RAW): -\n\nS1: A[i] = D[i-1] - C[i-1];\nS2: D[i-1] = 2 * D[i+1];\nS1\nA[i] = D[i-1] - C[i-1];\n• zapisuje: A[i]\n• odczytuje: D[i-1], C[i-1]\nS2\nD[i-1] = 2 * D[i+1];\n• zapisuje: D[i-1]\n• odczytuje: D[i+1]\nWAW — Write After Write\nWAW oznacza, że dwie iteracje zapisują do tego samego miejsca.\nTutaj:\nA[i]\njest zapisywane dla różnych wartości i, więc każdy zapis trafia w inny element tablicy.\nD[i-1]\nrównież jest zapisywane dla różnych wartości i, czyli też do różnych elementów.\nDlatego:\nWAW: -\nRAW — Read After Write\nRAW oznacza, że późniejsza iteracja odczytuje wartość zapisaną przez wcześniejszą iterację.\nTutaj wcześniejsza iteracja zapisuje:\nD[i-1]\nale późniejsze iteracje nie odczytują tego samego elementu jako wyniku wcześniejszego zapisu.\nDlatego:\nRAW: -\nWAR — Write After Read\nWAR oznacza, że wcześniejsza iteracja odczytuje element, który późniejsza iteracja zapisze.\nW instrukcji S2 mamy odczyt:\nD[i+1]\noraz zapis:\nD[i-1]\nSprawdźmy przykład:\ni = 1 → odczyt D[2]\ni = 3 → zapis D[2]\nCzyli iteracja wcześniejsza odczytuje D[2], a późniejsza iteracja zapisuje do D[2].\nTo jest zależność:\nWAR na tablicy D\n\nNajważniejsza intuicja:\nW tej pętli występuje zależność WAR na tablicy D, bo wcześniejsza iteracja czyta element D[i+1],\nktóry późniejsza iteracja może nadpisać jako D[i-1]."
  },
  {
    "id": 38,
    "source": "PRO-MAX",
    "source_num": 18,
    "extra": false,
    "type": "mc",
    "question": "Które stwierdzenia dotyczące wątków w Javie są prawdziwe?",
    "correct": [
      "Thread.sleep(long millis) wprowadza wątek w stan oczekiwania na określony czas, ale nie uwalnia blokad, które wątek może posiadać.",
      "Thread.yield() powoduje, że wątek oddaje procesor planisty, umożliwiając wykonanie innych wątków.",
      "Metoda join() w klasie Thread blokuje bieżący wątek do momentu, aż wątek, na którym wywołano join(), zakończy swoje działanie."
    ],
    "wrong": [
      "synchronized na metodzie statycznej synchronizuje dostęp do niej na poziomie instancji klasy — błędne, bo metoda statyczna synchronizuje się na poziomie obiektu klasy, czyli Class, a nie konkretnej instancji.",
      "Klasa Runnable ma metodę run(), która musi być jawnie wywołana przez użytkownika — błędne. Metodę run() implementujemy, ale zwykle nie wywołujemy jej ręcznie. Uruchamiamy wątek przez start()."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Thread.sleep()\nMetoda:\nThread.sleep(1000);\nusypia bieżący wątek na określony czas, tutaj na 1000 ms, czyli 1 sekundę.\nWażne: sleep() nie zwalnia blokad.\nPrzykład:\nsynchronized (lock) {\nThread.sleep(1000);\n}\nWątek śpi, ale nadal trzyma blokadę lock.\nThread.yield()\nMetoda:\nThread.yield();\nsugeruje planiście systemu, że bieżący wątek może ustąpić procesora innym wątkom.\nNie daje jednak gwarancji, że inny wątek natychmiast się wykona.\nTo bardziej „podpowiedź” dla planisty niż twarde polecenie.\njoin()\nMetoda:\nthread.join();\npowoduje, że bieżący wątek czeka, aż wątek thread zakończy działanie.\nPrzykład:\nThread t = new Thread(() -> {\nSystem.out.println(\"Praca wątku\");\n});\nt.start();\nt.join();\nSystem.out.println(\"Ten kod wykona się po zakończeniu t\");\njoin() jest używane, gdy chcemy zsynchronizować zakończenie pracy wielu wątków.\nsynchronized na metodzie statycznej\nDla metody statycznej:\npublic static synchronized void metoda() {\n// kod\n}\nblokada zakładana jest na obiekcie klasy, czyli na:\nNazwaKlasy.class\nNie jest to blokada konkretnego obiektu utworzonego przez new.\nDla porównania metoda niestatyczna:\npublic synchronized void metoda() {\n// kod\n}\nblokuje konkretną instancję, czyli this.\nRunnable i metoda run()\nInterfejs Runnable wymaga zdefiniowania metody:\npublic void run() {\n// kod wątku\n}\nAle żeby uruchomić ją jako osobny wątek, używamy:\nThread t = new Thread(runnable);\nt.start();\nNie robimy zwykle:\nrunnable.run();\nbo wtedy kod wykona się zwyczajnie w bieżącym wątku, a nie w nowym.\n\nNajważniejsza intuicja:\nW Javie sleep() usypia wątek, ale nie zwalnia blokad, yield() tylko sugeruje oddanie procesora, a\njoin() pozwala poczekać na zakończenie innego wątku."
  },
  {
    "id": 39,
    "source": "PRO-MAX",
    "source_num": 19,
    "extra": false,
    "type": "mc",
    "question": "Co umożliwia klauzula private w OpenMP?",
    "correct": [
      "Każdy wątek otrzymuje własną kopię zmiennej"
    ],
    "wrong": [
      "Każdy wątek korzysta z tej samej zmiennej — to opis zmiennej współdzielonej, czyli shared.",
      "Ustala dostęp tylko dla wątku głównego — do kodu wykonywanego przez wątek główny służy raczej master lub masked.",
      "Zmienia zakres zmiennej na globalny — private nie robi zmiennej globalnej.",
      "Zabrania dostępu do zmiennej dla innych wątków — nie chodzi o zakaz dostępu, tylko o utworzenie osobnych kopii."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Klauzula private\nKlauzula private w OpenMP sprawia, że wskazana zmienna staje się prywatna dla każdego wątku.\nPrzykład:\n#pragma omp parallel private(x)\n{\nx = omp_get_thread_num();\n}\nKażdy wątek ma własną kopię zmiennej x, więc nie nadpisuje wartości zapisanych przez inne wątki.\nZmienna prywatna\nZmienna prywatna istnieje osobno w każdym wątku.\nSchemat:\nWątek 0 → własne x\nWątek 1 → własne x\nWątek 2 → własne x\nWątek 3 → własne x\nDzięki temu zmienna może być używana lokalnie przez każdy wątek bez konfliktów dostępu.\nWartość początkowa zmiennej prywatnej\nZmienna oznaczona jako private nie przejmuje automatycznie wartości początkowej zmiennej\noryginalnej.\nJej wartość początkowa jest nieokreślona, dopóki wątek sam jej nie przypisze.\nJeżeli chcemy, aby każdy wątek dostał kopię z wartością początkową, używa się:\nfirstprivate(x)\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\nprivate(x) oznacza: każdy wątek ma swoje własne x, więc nie współdzieli tej zmiennej z innymi\nwątkami."
  },
  {
    "id": 40,
    "source": "PRO-MAX",
    "source_num": 20,
    "extra": false,
    "type": "mc",
    "question": "W jaki sposób można zminimalizować narzut czasowy związany z tworzeniem wątków?",
    "correct": [
      "Poprzez zastosowanie puli wątków"
    ],
    "wrong": [
      "Algorytm Round Robin — dotyczy sposobu planowania czasu procesora, a nie zmniejszania kosztu tworzenia wątków.",
      "Ograniczenie liczby wątków do jednego — zmniejszyłoby narzut, ale usuwa równoległość, więc nie jest właściwą metodą optymalizacji programu równoległego.",
      "Model aktorów — może korzystać z puli wątków, ale sam w sobie nie jest bezpośrednim mechanizmem minimalizacji kosztu tworzenia wątków.",
      "Algorytmy lock-free — zmniejszają narzut synchronizacji i blokowania, ale nie rozwiązują bezpośrednio problemu tworzenia wątków."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Narzut tworzenia wątków\nTworzenie nowego wątku nie jest darmowe. System musi między innymi:\n• przydzielić pamięć na stos wątku,\n• utworzyć struktury systemowe,\n• zarejestrować wątek w planisty systemu,\n• rozpocząć jego wykonanie.\nJeśli program często tworzy i niszczy wątki, może tracić dużo czasu na samo zarządzanie nimi.\nPula wątków\nPula wątków, czyli thread pool, to zestaw wcześniej utworzonych wątków, które czekają na zadania.\nZamiast tworzyć nowy wątek dla każdego zadania, program przekazuje zadanie do puli, a jeden z\nistniejących wątków je wykonuje.\nSchemat:\nZadania → kolejka zadań → pula gotowych wątków\nDzięki temu zmniejsza się koszt tworzenia i niszczenia wątków.\nDlaczego pula wątków zmniejsza narzut?\nBez puli:\nzadanie 1 → utwórz wątek → wykonaj → usuń wątek\nzadanie 2 → utwórz wątek → wykonaj → usuń wątek\nZ pulą:\nutwórz kilka wątków raz\nzadanie 1 → użyj gotowego wątku\nzadanie 2 → użyj gotowego wątku\nTo jest szczególnie korzystne, gdy mamy dużo krótkich zadań.\n\nNajważniejsza intuicja:\nNajlepszym sposobem ograniczenia kosztu tworzenia wątków jest utworzenie ich raz i wielokrotne\nużywanie, czyli zastosowanie puli wątków.\nTEST 3"
  },
  {
    "id": 41,
    "source": "PRO-MAX",
    "source_num": 1,
    "extra": false,
    "type": "mc",
    "question": "Wykonywanie współbieżne oznacza, że:",
    "correct": [
      "Dwa lub więcej procesów lub wątków wykonuje się / współpracuje w celu rozwiązania jednego zadania",
      "Może być realizowane zarówno na jednym procesorze, jak i na wielu"
    ],
    "wrong": [
      "Procesy wykonywane są wyłącznie sekwencyjnie — nie, współbieżność oznacza przeplatanie lub równoczesny postęp wielu zadań.",
      "Wszystkie procesy muszą być wykonywane równolegle na wielu rdzeniach — nie muszą. Współbieżność może działać nawet na jednym rdzeniu.",
      "Każdy proces wykonuje się w izolacji, bez możliwości komunikacji — nie, procesy lub wątki współbieżne mogą się komunikować i synchronizować."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Wykonywanie współbieżne\nWykonywanie współbieżne oznacza, że kilka procesów lub wątków jest aktywnych w tym samym\nokresie czasu.\nNie oznacza to koniecznie, że wykonują się dokładnie w tej samej chwili. Na jednym procesorze\nsystem może szybko przełączać się między nimi.\nPrzykład:\nczas →\nWątek 1: działa --- czeka --- działa\nWątek 2: czeka --- działa --- czeka\nZ perspektywy użytkownika oba wątki „postępują” współbieżnie.\nWspółbieżność a równoległość\nWspółbieżność oznacza, że kilka zadań jest obsługiwanych w tym samym czasie logicznym.\nRównoległość oznacza, że kilka zadań faktycznie wykonuje się jednocześnie, np. na kilku rdzeniach.\nCzyli:\nwspółbieżność → zadania mogą się przeplatać\nrównoległość → zadania wykonują się jednocześnie fizycznie\nKażde wykonanie równoległe jest współbieżne, ale nie każde współbieżne jest równoległe.\nWspółbieżność na jednym procesorze\nWspółbieżność może istnieć na jednym procesorze dzięki przełączaniu kontekstu.\nProcesor wykonuje przez chwilę jeden wątek, potem drugi, potem kolejny.\nNie ma wtedy prawdziwego równoległego wykonania, ale program nadal jest współbieżny.\nWspółbieżność na wielu procesorach\nNa wielu rdzeniach lub procesorach współbieżne zadania mogą wykonywać się naprawdę\njednocześnie.\nWtedy mamy również równoległość.\n\nNajważniejsza intuicja:\nWspółbieżność oznacza, że kilka zadań robi postęp w tym samym czasie logicznym; może to być\nprzeplatanie na jednym rdzeniu albo rzeczywiste równoległe wykonanie na wielu rdzeniach."
  },
  {
    "id": 42,
    "source": "PRO-MAX",
    "source_num": 2,
    "extra": false,
    "type": "mc",
    "question": "Do modeli przetwarzania według taksonomii Flynna należą:",
    "correct": [
      "SISD, SIMD, MISD, MIMD"
    ],
    "wrong": [
      "SISO, SIMO, MISO, MIMO to pojęcia znane raczej z systemów komunikacyjnych i antenowych, nie z taksonomii Flynna.",
      "SMR, NUMA, UMA, MPP dotyczą organizacji pamięci lub typów systemów wieloprocesorowych, ale nie są podstawowymi kategoriami Flynna.",
      "RISC, CISC, superskalarność, potokowość dotyczą architektury procesora i sposobu wykonywania instrukcji, ale nie są klasyfikacją Flynna."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Taksonomia Flynna\nTaksonomia Flynna to klasyfikacja architektur komputerowych według tego, ile strumieni instrukcji i\nile strumieni danych jest przetwarzanych jednocześnie.\nOpiera się na dwóch pojęciach:\nInstruction stream → strumień instrukcji\nData stream → strumień danych\nZ połączenia tych dwóch kryteriów powstają cztery modele:\nSISD\nSIMD\nMISD\nMIMD\nSISD — Single Instruction, Single Data\nSISD oznacza: jeden strumień instrukcji i jeden strumień danych.\nTo klasyczny model przetwarzania sekwencyjnego.\nPrzykład:\njeden procesor wykonuje jeden program na jednym zbiorze danych\nSIMD — Single Instruction, Multiple Data\nSIMD oznacza: jeden strumień instrukcji i wiele strumieni danych.\nTa sama instrukcja jest wykonywana równocześnie na wielu danych.\nPrzykład:\ndodaj 1 do wielu elementów tablicy jednocześnie\nTypowe zastosowania:\n• procesory wektorowe,\n• instrukcje SSE/AVX,\n• GPU.\nMISD — Multiple Instruction, Single Data\nMISD oznacza: wiele strumieni instrukcji i jeden strumień danych.\nJest to rzadko spotykany model.\nMoże występować w systemach specjalnych, np. odpornych na błędy, gdzie te same dane są\nprzetwarzane różnymi metodami.\nMIMD — Multiple Instruction, Multiple Data\nMIMD oznacza: wiele strumieni instrukcji i wiele strumieni danych.\nRóżne procesory lub rdzenie mogą wykonywać różne instrukcje na różnych danych.\nPrzykłady:\n• komputery wielordzeniowe,\n• klastry,\n• systemy rozproszone,\n• programy MPI,\n• programy wielowątkowe.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\nTaksonomia Flynna dzieli komputery według liczby strumieni instrukcji i danych: SISD, SIMD, MISD\noraz MIMD."
  },
  {
    "id": 43,
    "source": "PRO-MAX",
    "source_num": 3,
    "extra": false,
    "type": "mc",
    "question": "Wykonanie poza kolejnością, czyli Out-of-Order Execution, oznacza:",
    "correct": [
      "Procesor może dynamicznie zmieniać kolejność wykonania instrukcji dla optymalizacji wydajności",
      "Może prowadzić do problemów związanych z zależnościami między instrukcjami"
    ],
    "wrong": [
      "Kolejność wykonywania instrukcji zawsze musi być zgodna z kolejnością w kodzie — to opis wykonania in-order, a nie out-of-order.",
      "Instrukcje są wykonywane zgodnie z priorytetem nadanym przez programistę — procesor sam decyduje o kolejności na podstawie dostępności danych i zasobów.",
      "Każda instrukcja musi być wykonywana na oddzielnym rdzeniu — nie, out-of-order dotyczy głównie wykonywania instrukcji wewnątrz jednego rdzenia/procesora."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Out-of-Order Execution\nOut-of-Order Execution to technika stosowana w procesorach, która pozwala wykonywać instrukcje\nw innej kolejności niż ta, w której występują w kodzie programu.\nProcesor robi to po to, aby nie czekać bezczynnie, gdy jakaś instrukcja czeka na dane, np. z pamięci.\nPrzykład:\nInstrukcja 1: czeka na dane z pamięci\nInstrukcja 2: zależy od instrukcji 1\nInstrukcja 3: jest niezależna\nProcesor może wykonać instrukcję 3 wcześniej, zamiast czekać na zakończenie instrukcji 1.\nCel wykonania poza kolejnością\nCelem jest zwiększenie wydajności procesora.\nProcesor może lepiej wykorzystać swoje jednostki wykonawcze, wykonując te instrukcje, które są już\ngotowe.\nDzięki temu można ograniczyć czas bezczynności rdzenia.\nZależności między instrukcjami\nProcesor nie może dowolnie przestawiać instrukcji.\nMusi uważać na zależności, np.:\nx = a + b;\ny = x * 2;\nDruga instrukcja zależy od wyniku pierwszej, więc nie może zostać wykonana wcześniej.\nTypowe zależności:\n• RAW — Read After Write,\n• WAR — Write After Read,\n• WAW — Write After Write.\nDlaczego pozostałe odpowiedzi są błędne?\n\nNajważniejsza intuicja:\nOut-of-order execution oznacza, że procesor może przestawiać kolejność instrukcji, aby działać\nszybciej, ale musi zachować poprawność wynikającą z zależności między instrukcjami."
  },
  {
    "id": 44,
    "source": "PRO-MAX",
    "source_num": 4,
    "extra": false,
    "type": "mc",
    "question": "Race condition, czyli wyścig, występuje, gdy:",
    "correct": [
      "Wynik programu zależy od niezaplanowanej kolejności wykonywania wątków",
      "Dwa lub więcej wątków jednocześnie modyfikuje tę samą zmienną bez synchronizacji",
      "Może prowadzić do niespójnych lub nieprzewidywalnych wyników"
    ],
    "wrong": [
      "Każdy wątek działa na oddzielnej przestrzeni adresowej — wtedy ryzyko wyścigu na wspólnej zmiennej jest mniejsze, bo wątki/procesy nie współdzielą bezpośrednio danych.",
      "Program nie zawiera sekcji krytycznych — samo to nie oznacza jeszcze wyścigu. Wyścig pojawia się wtedy, gdy jest współdzielony zasób i brak synchronizacji dostępu."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Race condition / wyścig\nRace condition występuje wtedy, gdy wynik programu zależy od przypadkowej kolejności wykonania\noperacji przez wątki lub procesy.\nNajczęściej chodzi o sytuację, w której kilka wątków jednocześnie odczytuje i zapisuje tę samą\nzmienną bez odpowiedniej synchronizacji.\nPrzykład wyścigu\nlicznik++;\nTa operacja wygląda jak jedna instrukcja, ale w rzeczywistości może składać się z kilku kroków:\n1. odczytaj wartość licznik\n2. dodaj 1\n3. zapisz nową wartość\nJeśli dwa wątki wykonają to jednocześnie, oba mogą odczytać tę samą starą wartość i zapisać ten sam\nwynik. Wtedy jedno zwiększenie zostanie utracone.\nSekcja krytyczna\nSekcja krytyczna to fragment kodu, w którym wątek korzysta ze współdzielonego zasobu, np.\nzmiennej, tablicy, pliku albo bufora.\nAby uniknąć race condition, sekcję krytyczną zabezpiecza się np. przez:\n#pragma omp critical\nalbo w Pthreads:\npthread_mutex_lock(&mutex);\n// sekcja krytyczna\npthread_mutex_unlock(&mutex);\n\nNajważniejsza intuicja:\nRace condition pojawia się wtedy, gdy kilka wątków ściga się o dostęp do tych samych danych, a\nwynik zależy od tego, który wątek wykona operację pierwszy."
  },
  {
    "id": 45,
    "source": "PRO-MAX",
    "source_num": 5,
    "extra": false,
    "type": "mc",
    "question": "Jakie są możliwe rozwiązania problemu ucztujących filozofów?",
    "correct": [
      "Ograniczenie liczby filozofów mogących jednocześnie jeść",
      "Nadanie priorytetów filozofom, aby uniknąć zagłodzenia",
      "Wprowadzenie globalnego semafora ograniczającego liczbę jednocześnie jedzących filozofów",
      "Użycie strategii, w której filozof podnosi oba widelce jednocześnie lub żaden"
    ],
    "wrong": [
      "Pozostawienie filozofów bez żadnej synchronizacji — prowadziłoby do zakleszczeń, wyścigów albo zagłodzenia."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Problem ucztujących filozofów\nProblem ucztujących filozofów to klasyczny problem synchronizacji w programowaniu współbieżnym.\nKilku filozofów siedzi przy stole. Każdy potrzebuje dwóch widelców, aby jeść: lewego i prawego.\nWidelec jest współdzielony z sąsiadem.\nProblem pokazuje, co może się stać, gdy wiele wątków konkuruje o ograniczone zasoby.\nZakleszczenie — deadlock\nDeadlock występuje wtedy, gdy każdy filozof podniesie jeden widelec i czeka na drugi.\nPrzykład:\nFilozof 1 trzyma lewy widelec i czeka na prawy\nFilozof 2 trzyma lewy widelec i czeka na prawy\nFilozof 3 trzyma lewy widelec i czeka na prawy\n...\nNikt nie może kontynuować, bo każdy czeka na zasób trzymany przez kogoś innego.\nZagłodzenie — starvation\nStarvation oznacza, że dany wątek bardzo długo albo nigdy nie dostaje dostępu do zasobu.\nW problemie filozofów oznacza to sytuację, w której jeden filozof ciągle przegrywa dostęp do\nwidelców i nie może jeść.\nSemafor globalny\nJednym z rozwiązań jest użycie semafora ograniczającego liczbę filozofów, którzy mogą próbować jeść\njednocześnie.\nNa przykład dla N filozofów można dopuścić maksymalnie N - 1 filozofów do próby podnoszenia\nwidelców.\nDzięki temu nie powstanie sytuacja, w której wszyscy jednocześnie trzymają po jednym widelcu i\nczekają na drugi.\nPodnoszenie obu widelców naraz\nInna strategia polega na tym, że filozof może podnieść oba widelce jednocześnie, albo nie podnosi\nżadnego.\nCzyli nie może dojść do sytuacji:\nmam jeden widelec i czekam na drugi\nTo eliminuje jedną z przyczyn zakleszczenia.\nPriorytety\nMożna też stosować priorytety lub mechanizmy sprawiedliwego dostępu.\nCelem jest uniknięcie sytuacji, w której jeden filozof jest stale pomijany.\nPrzykład: filozof, który długo czeka, dostaje wyższy priorytet.\n\nNajważniejsza intuicja:\nProblem ucztujących filozofów pokazuje, że samo współdzielenie zasobów nie wystarczy — trzeba\ndodać synchronizację, aby uniknąć zakleszczenia i zagłodzenia."
  },
  {
    "id": 46,
    "source": "PRO-MAX",
    "source_num": 6,
    "extra": false,
    "type": "mc",
    "question": "W języku C, w bibliotekach POSIX, mutex służy do:",
    "correct": [
      "Zapewnienia wzajemnego wykluczania przy dostępie do zasobów współdzielonych",
      "Ochrony sekcji krytycznych przed jednoczesnym dostępem wielu wątków",
      "Synchronizacji operacji poprzez blokowanie wątku do momentu zwolnienia zasobu"
    ],
    "wrong": [
      "Wymiany informacji między wątkami bez konieczności blokowania — do komunikacji między wątkami służą raczej zmienne warunkowe, kolejki, semafory itp.",
      "Przyspieszania wykonywania kodu przez równoległe wykonywanie instrukcji — mutex nie przyspiesza programu; często wręcz wprowadza narzut, ale zapewnia poprawność."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Mutex\nMutex, czyli mutual exclusion, to mechanizm wzajemnego wykluczania.\nSłuży do tego, aby tylko jeden wątek naraz mógł korzystać z chronionego zasobu.\nPrzykład zasobu współdzielonego:\nint licznik;\nJeśli wiele wątków jednocześnie wykonuje:\nlicznik++;\nmoże dojść do błędnego wyniku. Mutex zabezpiecza taki fragment kodu.\nSekcja krytyczna\nSekcja krytyczna to fragment kodu, w którym wątek korzysta ze wspólnych danych.\nPrzykład w Pthreads:\npthread_mutex_lock(&mutex);\n// sekcja krytyczna\nlicznik++;\npthread_mutex_unlock(&mutex);\nTylko jeden wątek może znajdować się między pthread_mutex_lock a pthread_mutex_unlock.\nBlokowanie wątku\nJeżeli jeden wątek już zablokował mutex, to drugi wątek próbujący wykonać:\npthread_mutex_lock(&mutex);\nmusi poczekać.\nWątek zostaje zablokowany do momentu, aż mutex zostanie zwolniony przez:\npthread_mutex_unlock(&mutex);\n\nNajważniejsza intuicja:\nMutex działa jak klucz do sekcji krytycznej: tylko jeden wątek może mieć klucz naraz, a reszta musi\nczekać."
  },
  {
    "id": 47,
    "source": "PRO-MAX",
    "source_num": 7,
    "extra": false,
    "type": "mc",
    "question": "Zmienne warunkowe w POSIX, czyli condition variables, służą do:",
    "correct": [
      "Synchronizacji między wątkami poprzez umożliwienie wątkowi czekania na określony stan",
      "Unikania aktywnego czekania, czyli busy-wait, w pętlach synchronizacyjnych",
      "Budzenia jednego lub wielu oczekujących wątków w odpowiednim momencie"
    ],
    "wrong": [
      "Blokowania dostępu do pamięci współdzielonej na stałe — do ochrony dostępu służy mutex, a nie zmienna warunkowa.",
      "Definiowania priorytetów wątków w systemie POSIX — zmienne warunkowe nie służą do ustawiania priorytetów."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Zmienna warunkowa\nZmienna warunkowa pozwala wątkowi czekać, aż zostanie spełniony określony warunek.\nPrzykład sytuacji:\nWątek konsument czeka, aż w buforze pojawią się dane.\nWątek producent dodaje dane i budzi konsumenta.\npthread_cond_wait()\nFunkcja:\npthread_cond_wait(&cond, &mutex);\npowoduje, że wątek zasypia i czeka na sygnał.\nWażne: podczas czekania pthread_cond_wait() zwalnia mutex, aby inne wątki mogły zmienić stan\nprogramu.\nTypowy schemat:\npthread_mutex_lock(&mutex);\nwhile (!warunek) {\npthread_cond_wait(&cond, &mutex);\n}\n// kod wykonywany po spełnieniu warunku\npthread_mutex_unlock(&mutex);\nUżywa się while, ponieważ po przebudzeniu trzeba ponownie sprawdzić warunek.\nUnikanie busy-wait\nBez zmiennych warunkowych wątek mógłby stale sprawdzać warunek:\nwhile (!warunek) {\n// aktywne czekanie\n}\nTo marnuje czas procesora.\nZmienna warunkowa pozwala wątkowi spać, aż inny wątek go obudzi.\npthread_cond_signal() i pthread_cond_broadcast()\nDo budzenia wątków służą:\npthread_cond_signal(&cond);\nBudzi jeden oczekujący wątek.\npthread_cond_broadcast(&cond);\nBudzi wszystkie oczekujące wątki.\n\nNajważniejsza intuicja:\nZmienna warunkowa pozwala wątkowi spać do momentu spełnienia warunku, zamiast marnować\nprocesor na ciągłe sprawdzanie."
  },
  {
    "id": 48,
    "source": "PRO-MAX",
    "source_num": 8,
    "extra": false,
    "type": "mc",
    "question": "W MPI komunikacja między procesami odbywa się za pomocą:",
    "correct": [
      "Modelu „send-receive”",
      "Komunikatorów, takich jak MPI_COMM_WORLD",
      "Grupowych operacji przesyłania, takich jak MPI_Bcast i MPI_Gather"
    ],
    "wrong": [
      "Wspólnej pamięci, bez konieczności przesyłania komunikatów — MPI opiera się głównie na przesyłaniu komunikatów, a nie na pamięci wspólnej.",
      "Mechanizmów dostępu do plików w systemie lokalnym — dostęp do plików nie jest podstawowym mechanizmem komunikacji między procesami MPI."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "MPI\nMPI, czyli Message Passing Interface, to standard komunikacji między procesami w programach\nrównoległych i rozproszonych.\nMPI jest często używane w systemach z pamięcią rozproszoną, gdzie każdy proces ma własną pamięć i\nmusi jawnie wysyłać dane do innych procesów.\nModel send-receive\nPodstawowy sposób komunikacji w MPI to wysyłanie i odbieranie komunikatów.\nPrzykład:\nMPI_Send(...);\nMPI_Recv(...);\nMPI_Send wysyła dane z jednego procesu, a MPI_Recv odbiera dane w innym procesie.\nSchemat:\nProces 0 -- MPI_Send --> Proces 1\nProces 1 -- MPI_Recv <-- Proces 0\nKomunikator\nKomunikator określa grupę procesów, które mogą się ze sobą komunikować.\nNajbardziej znany komunikator to:\nMPI_COMM_WORLD\nObejmuje on wszystkie procesy uruchomione w danym programie MPI.\nPrzykład:\nMPI_Comm_rank(MPI_COMM_WORLD, &rank);\nMPI_Comm_size(MPI_COMM_WORLD, &size);\nOperacje grupowe\nMPI udostępnia także komunikację zbiorową, czyli operacje wykonywane przez wiele procesów naraz.\nPrzykłady:\nMPI_Bcast(...);\nMPI_Gather(...);\nMPI_Bcast rozsyła dane z jednego procesu do wszystkich.\njeden → wielu\nMPI_Gather zbiera dane z wielu procesów do jednego.\nwielu → jeden\n\nNajważniejsza intuicja:\nMPI komunikuje procesy przez jawne przesyłanie komunikatów: pojedynczo przez\nMPI_Send/MPI_Recv albo zbiorowo przez funkcje takie jak MPI_Bcast i MPI_Gather."
  },
  {
    "id": 49,
    "source": "PRO-MAX",
    "source_num": 9,
    "extra": false,
    "type": "mc",
    "question": "Procedury przesyłania komunikatów w MPI można podzielić na:",
    "correct": [
      "Blokujące, np. MPI_Send, MPI_Recv",
      "Nieblokujące, np. MPI_Isend, MPI_Irecv",
      "Punkt-do-punktu, np. MPI_Send, MPI_Recv, i grupowe, np. MPI_Bcast, MPI_Gather",
      "Operacje z użyciem MPI_Request, pozwalające na asynchroniczne przesyłanie"
    ],
    "wrong": [
      "Wyłącznie na procedury synchroniczne, ponieważ nie istnieją metody asynchroniczne — błędne, bo MPI posiada komunikację nieblokującą/asynchroniczną, np. MPI_Isend i MPI_Irecv."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Komunikacja blokująca w MPI\nKomunikacja blokująca oznacza, że funkcja nie kończy się, dopóki operacja komunikacyjna nie\nosiągnie stanu pozwalającego bezpiecznie kontynuować program.\nPrzykład:\nMPI_Send(...);\nMPI_Recv(...);\nMPI_Recv zwykle czeka, aż wiadomość zostanie odebrana.\nKomunikacja nieblokująca w MPI\nKomunikacja nieblokująca rozpoczyna wysyłanie lub odbieranie danych, ale program może\nwykonywać dalsze instrukcje bez czekania na zakończenie komunikacji.\nPrzykład:\nMPI_Isend(..., &request);\nMPI_Irecv(..., &request);\nDo sprawdzenia lub oczekiwania na zakończenie używa się później np.:\nMPI_Wait(&request, &status);\nMPI_Request\nMPI_Request to uchwyt opisujący rozpoczętą operację nieblokującą.\nPozwala MPI śledzić, czy dana operacja, np. MPI_Isend albo MPI_Irecv, została już zakończona.\nTypowy schemat:\nMPI_Request request;\nMPI_Isend(..., &request);\n// tutaj można wykonywać inne obliczenia\nMPI_Wait(&request, MPI_STATUS_IGNORE);\nKomunikacja punkt-do-punktu\nKomunikacja punkt-do-punktu odbywa się między dwoma konkretnymi procesami.\nPrzykład:\nProces 0 → Proces 1\nTypowe funkcje:\nMPI_Send(...);\nMPI_Recv(...);\nKomunikacja grupowa\nKomunikacja grupowa, czyli zbiorowa, obejmuje wiele procesów naraz.\nPrzykłady:\nMPI_Bcast(...);\nMPI_Gather(...);\nMPI_Bcast rozsyła dane z jednego procesu do wszystkich.\nMPI_Gather zbiera dane od wielu procesów do jednego.\n\nNajważniejsza intuicja:\nW MPI komunikację można klasyfikować jako blokującą lub nieblokującą oraz jako punkt-do-\npunktu lub zbiorową; operacje nieblokujące korzystają z MPI_Request, aby później sprawdzić ich\nzakończenie."
  },
  {
    "id": 50,
    "source": "PRO-MAX",
    "source_num": 11,
    "extra": false,
    "type": "mc",
    "question": "Interkomunikatory w MPI służą do:",
    "correct": [
      "Komunikacji między niezależnymi grupami procesów MPI",
      "Obsługi dynamicznego tworzenia nowych procesów, np. MPI_Comm_spawn",
      "Zarządzania / organizowania hierarchii procesów, np. w architekturze master-workerZ doprecyzowaniem: interkomunikator sam nie „zarządza” procesami automatycznie, ale umożliwia komunikację między grupami, co można wykorzystać w układzie master-worker."
    ],
    "wrong": [
      "Przesyłania danych tylko w ramach jednego procesu — MPI służy do komunikacji między procesami.",
      "Synchronizacji wątków w aplikacji wielowątkowej — to dotyczy np. mutexów, semaforów, OpenMP lub Pthreads, a nie interkomunikatorów MPI."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Interkomunikator\nInterkomunikator w MPI służy do komunikacji między dwiema oddzielnymi grupami procesów.\nSchemat:\nGrupa A: P0, P1, P2\n↕\nGrupa B: P3, P4, P5\nInterkomunikator łączy te dwie grupy i pozwala im wymieniać komunikaty.\nRóżnica: intrakomunikator a interkomunikator\nIntrakomunikator służy do komunikacji wewnątrz jednej grupy procesów.\nPrzykład:\nMPI_COMM_WORLD\nobejmuje wszystkie procesy programu MPI.\nInterkomunikator służy natomiast do komunikacji między dwiema różnymi grupami procesów.\nMPI_Comm_spawn\nFunkcja:\nMPI_Comm_spawn(...)\npozwala dynamicznie utworzyć nowe procesy MPI w trakcie działania programu.\nPo utworzeniu procesów potomnych MPI tworzy interkomunikator między grupą procesów\nrodzicielskich a grupą procesów potomnych.\nSchemat:\nProcesy rodzica ↔ procesy potomne\nMaster-worker\nW architekturze master-worker jeden proces lub grupa procesów pełni rolę nadrzędną, a inne\nprocesy wykonują przydzielone zadania.\nInterkomunikatory mogą być użyte do oddzielenia i połączenia takich grup, np.:\nMaster / grupa masterów ↔ workerzy\n\nNajważniejsza intuicja:\nInterkomunikator w MPI łączy dwie osobne grupy procesów, np. procesy rodzicielskie i procesy\npotomne utworzone przez MPI_Comm_spawn."
  },
  {
    "id": 51,
    "source": "PRO-MAX",
    "source_num": 12,
    "extra": false,
    "type": "mc",
    "question": "Które stwierdzenia dotyczące OpenMP są prawdziwe?",
    "correct": [
      "OpenMP działa tylko / głównie w systemach z pamięcią wspólną",
      "OpenMP umożliwia zarówno grubo-, jak i drobnoziarnistą równoległość",
      "OpenMP obsługuje model SPMD poprzez tworzenie zespołów wątków"
    ],
    "wrong": [
      "OpenMP wymaga, aby wszystkie pętle były zrównoleglone — nie, programista wybiera, które pętle lub fragmenty kodu mają być równoległe.",
      "OpenMP wymaga ręcznego przydzielania pamięci współdzielonej — nie, OpenMP działa w modelu pamięci wspólnej, a zmienne mogą być automatycznie współdzielone lub prywatne zależnie od klauzul."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "OpenMP\nOpenMP to standard programowania równoległego dla systemów z pamięcią wspólną.\nOznacza to, że wiele wątków działa w ramach jednego procesu i może korzystać ze wspólnej\nprzestrzeni adresowej.\nPrzykład:\n#pragma omp parallel\n{\nprintf(\"Praca równoległa\\n\");\n}\nPamięć wspólna w OpenMP\nW OpenMP wątki mogą współdzielić zmienne.\nPrzykład:\nint suma = 0;\n#pragma omp parallel\n{\n// wszystkie wątki widzą zmienną suma\n}\nNie trzeba ręcznie przesyłać danych między wątkami tak jak w MPI.\nMożna jednak określać, które zmienne mają być wspólne, a które prywatne:\n#pragma omp parallel shared(suma) private(i)\nRównoległość gruboziarnista\nRównoległość gruboziarnista oznacza podział programu na większe fragmenty pracy.\nPrzykład:\n#pragma omp parallel sections\n{\n#pragma omp section\nzadanie_A();\n#pragma omp section\nzadanie_B();\n}\nKażdy wątek może wykonywać większe, osobne zadanie.\nRównoległość drobnoziarnista\nRównoległość drobnoziarnista oznacza podział pracy na małe części, na przykład iteracje pętli.\nPrzykład:\n#pragma omp parallel for\nfor (int i = 0; i < n; i++) {\noblicz(i);\n}\nTutaj iteracje pętli są dzielone między wątki.\nModel SPMD\nSPMD, czyli Single Program, Multiple Data, oznacza, że wiele wątków wykonuje ten sam program, ale\nmoże pracować na różnych danych.\nW OpenMP wygląda to tak:\n#pragma omp parallel\n{\nint id = omp_get_thread_num();\n// każdy wątek wykonuje ten sam kod,\n// ale może pracować na innych danych\n}\nKażdy wątek wykonuje ten sam fragment kodu, ale może używać własnego numeru wątku i\nprzetwarzać inną część danych.\n\nNajważniejsza intuicja:\nOpenMP służy do programowania równoległego w pamięci wspólnej: pozwala łatwo dzielić pracę\nmiędzy wątki, zarówno na poziomie dużych zadań, jak i pojedynczych iteracji pętli."
  },
  {
    "id": 52,
    "source": "PRO-MAX",
    "source_num": 13,
    "extra": false,
    "type": "mc",
    "question": "Które dyrektywy OpenMP służą do synchronizacji wątków? Treść / kod / warianty: Z obrazu widać odpowiedzi: a. #pragma omp barrierb. #pragma omp criticalc. #pragma omp atomicd. #pragma omp distributee. #pragma omp master",
    "correct": [
      "#pragma omp barrier",
      "#pragma omp critical",
      "#pragma omp atomic"
    ],
    "wrong": [
      "#pragma omp distribute — służy do rozdzielania iteracji między zespoły wątków, a nie bezpośrednio do synchronizacji.",
      "#pragma omp master — wskazuje, że blok wykona tylko wątek główny, ale sama dyrektywa nie synchronizuje wszystkich wątków."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Synchronizacja w OpenMP\nSynchronizacja oznacza kontrolowanie kolejności wykonywania operacji przez wątki, aby uniknąć\nbłędów współbieżności.\nJest potrzebna, gdy wiele wątków:\n• korzysta z tych samych danych,\n• musi poczekać na siebie nawzajem,\n• wykonuje operacje na wspólnej zmiennej.\n#pragma omp barrier\nDyrektywa:\n#pragma omp barrier\npowoduje, że wszystkie wątki muszą dojść do tego miejsca.\nWątek, który dotrze wcześniej, czeka na pozostałe.\nWątek 0 → czeka\nWątek 1 → czeka\nWątek 2 → czeka\nWątek 3 → wszyscy idą dalej\n#pragma omp critical\nDyrektywa:\n#pragma omp critical\n{\n// sekcja krytyczna\n}\npozwala tylko jednemu wątkowi naraz wykonać dany fragment kodu.\nStosuje się ją do ochrony sekcji krytycznych, np.:\n#pragma omp critical\n{\nsuma += lokalny_wynik;\n}\n#pragma omp atomic\nDyrektywa:\n#pragma omp atomic\nx++;\nzapewnia atomowe wykonanie pojedynczej operacji na zmiennej współdzielonej.\nJest lżejsza niż critical, ale działa tylko dla prostych operacji, takich jak:\nx++;\nx += 2;\nsuma += wynik;\n#pragma omp master\nDyrektywa:\n#pragma omp master\n{\n// kod wykonany tylko przez wątek główny\n}\nsprawia, że blok kodu wykona tylko wątek master, czyli zwykle wątek o numerze 0.\nNie jest to jednak typowa dyrektywa synchronizacyjna, bo pozostałe wątki nie muszą na nią czekać.\n\nNajważniejsza intuicja:\nDo synchronizacji w OpenMP służą głównie barrier, critical i atomic: barrier każe wątkom czekać na\nsiebie, critical wpuszcza jeden wątek do sekcji krytycznej, a atomic chroni pojedynczą operację na\nzmiennej."
  },
  {
    "id": 53,
    "source": "PRO-MAX",
    "source_num": 14,
    "extra": false,
    "type": "open",
    "question": "Wartości zmiennych po zakończeniu pętli OpenMP. Treść / kod / warianty: Kod z obrazka: int a = 1, b = 4, c = 5, d = 0, i;#pragma omp parallel for private(b) shared(c) lastprivate(d) num_threads(3)for (i = 0; i < 3; i++) { b += 1; 4 c += b; 7 9 d = omp_get_thread_num(); 2}",
    "correct": [
      "a = 1",
      "b = 4",
      "c = ?",
      "d = 2"
    ],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź:\na = 1\nb = 4\nc = ?\nd = 2\n\nNajważniejsza intuicja:\nprivate(b) zostawia zewnętrzne b bez zmian, shared(c) bez synchronizacji daje wynik losowy, a\nlastprivate(d) przepisuje wartość z ostatniej iteracji pętli."
  },
  {
    "id": 54,
    "source": "PRO-MAX",
    "source_num": 15,
    "extra": false,
    "type": "mc",
    "question": "Które stwierdzenia dotyczące modeli równoległości są prawdziwe?",
    "correct": [
      "ILP, czyli Instruction Level Parallelism, jest zarządzane na poziomie procesora, a nie bezpośrednio przez programistę",
      "Loop Level Parallelism wymaga od programisty lub kompilatora podziału iteracji pętli między procesory",
      "Task Level Parallelism polega na przypisaniu różnych części programu do różnych wątków lub procesów"
    ],
    "wrong": [
      "Job Level Parallelism oznacza równoczesne wykonywanie kodu w ramach jednego procesu — to bardziej pasuje do równoległości wątków lub zadań. Job-level dotyczy raczej równoczesnego wykonywania wielu niezależnych zadań/programów.",
      "ILP jest kontrolowane wyłącznie przez kod źródłowy programu — nie, ILP zależy głównie od procesora, kompilatora i zależności między instrukcjami."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "ILP — Instruction Level Parallelism\nILP, czyli równoległość na poziomie instrukcji, polega na tym, że procesor wykonuje kilka instrukcji\njednocześnie lub częściowo nakłada ich wykonanie.\nPrzykłady mechanizmów ILP:\npotokowość\nsuperskalarność\nwykonanie poza kolejnością\npredykcja skoków\nProgramista zwykle nie zarządza tym bezpośrednio. Robi to procesor oraz kompilator.\nLoop Level Parallelism\nLoop Level Parallelism oznacza równoległość na poziomie pętli.\nPolega na podziale iteracji pętli między wiele wątków lub procesów.\nPrzykład w OpenMP:\n#pragma omp parallel for\nfor (int i = 0; i < n; i++) {\noblicz(i);\n}\nTutaj iteracje pętli są rozdzielane między dostępne wątki.\nTask Level Parallelism\nTask Level Parallelism oznacza równoległość na poziomie zadań.\nProgram dzieli się na różne części, które mogą być wykonywane równocześnie.\nPrzykład:\nWątek 1 → wczytywanie danych\nWątek 2 → przetwarzanie danych\nWątek 3 → zapis wyników\nKażdy wątek lub proces wykonuje inne zadanie.\nJob Level Parallelism\nJob Level Parallelism oznacza równoległe wykonywanie wielu niezależnych zadań lub programów.\nPrzykład:\nZadanie 1 → symulacja A\nZadanie 2 → symulacja B\nZadanie 3 → analiza danych C\nTo często występuje w systemach kolejkowych HPC, np. SLURM, gdzie wiele niezależnych zadań działa\nna klastrze.\n\nNajważniejsza intuicja:\nILP dzieje się głównie wewnątrz procesora, loop-level dzieli iteracje pętli, task-level dzieli program\nna zadania, a job-level uruchamia wiele niezależnych zadań lub programów."
  },
  {
    "id": 55,
    "source": "PRO-MAX",
    "source_num": 16,
    "extra": false,
    "type": "mc",
    "question": "Równoważenie obciążenia w programach równoległych wymaga:",
    "correct": [
      "Podziału pracy między wątki w taki sposób, aby uniknąć wąskich gardeł",
      "Zapewnienia, że najwolniejszy wątek nie determinuje całkowitego czasu wykonania",
      "Minimalizacji komunikacji między wątkami/procesami"
    ],
    "wrong": [
      "Wyłącznie statycznego przydzielania zadań, aby uniknąć kosztów dynamicznego zarządzania — nie zawsze. Czasem lepsze jest dynamiczne przydzielanie zadań.",
      "Ignorowania opóźnień wynikających z operacji synchronizacji — nie, opóźnienia synchronizacji trzeba brać pod uwagę."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Równoważenie obciążenia\nRównoważenie obciążenia, czyli load balancing, polega na takim podziale pracy między wątki,\nprocesy lub węzły, aby każdy z nich miał podobną ilość pracy.\nCelem jest uniknięcie sytuacji, w której część wątków już skończyła, a jeden nadal pracuje.\nPrzykład złego podziału:\nWątek 1: 5 sekund pracy\nWątek 2: 5 sekund pracy\nWątek 3: 5 sekund pracy\nWątek 4: 30 sekund pracy\nCały program zakończy się dopiero po 30 sekundach, bo najwolniejszy wątek blokuje zakończenie\nobliczeń.\nWąskie gardło\nWąskie gardło to fragment programu lub zasób, który ogranicza wydajność całego systemu.\nMoże nim być:\n• przeciążony wątek,\n• zbyt duża komunikacja,\n• sekcja krytyczna,\n• wolny dostęp do pamięci,\n• nierówny podział danych.\nW równoważeniu obciążenia staramy się tak rozdzielić pracę, żeby żaden wątek nie stał się wąskim\ngardłem.\nNajwolniejszy wątek\nW programie równoległym czas wykonania często zależy od tego, kiedy skończy najwolniejszy wątek.\nDlatego jeśli jeden wątek dostanie dużo więcej pracy niż pozostałe, cały program będzie czekał\nwłaśnie na niego.\nRównoważenie obciążenia ma zmniejszyć ten problem.\nStatyczny przydział pracy\nStatyczny przydział pracy oznacza, że zadania są rozdzielane przed rozpoczęciem obliczeń.\nPrzykład:\n100 iteracji, 4 wątki → każdy dostaje po 25 iteracji\nTo działa dobrze, gdy każda iteracja ma podobny koszt.\nJeśli jednak jedne iteracje są dużo cięższe od innych, statyczny podział może prowadzić do\nnierównowagi.\nDynamiczny przydział pracy\nDynamiczny przydział pracy oznacza, że wątki pobierają kolejne zadania w trakcie działania\nprogramu.\nWątek, który skończy szybciej, dostaje następną porcję pracy.\nTo pomaga przy nierównych zadaniach, ale wprowadza dodatkowy narzut zarządzania.\nMinimalizacja komunikacji\nKomunikacja między wątkami lub procesami może spowalniać program.\nW modelu rozproszonym, np. MPI, przesyłanie danych między procesami jest dużo droższe niż lokalne\nobliczenia.\nDlatego dobry podział pracy powinien:\n• równoważyć obciążenie,\n• ograniczać przesyłanie danych,\n• zmniejszać liczbę synchronizacji,\n• unikać niepotrzebnego czekania.\n\nNajważniejsza intuicja:\nRównoważenie obciążenia polega na tym, żeby wszystkie wątki miały podobną ilość pracy i żeby\nżaden z nich nie spowalniał całego programu."
  },
  {
    "id": 56,
    "source": "PRO-MAX",
    "source_num": 17,
    "extra": false,
    "type": "mc",
    "question": "Które mechanizmy zapewniają współbieżność w Javie?",
    "correct": [
      "Klasa Thread oraz interfejs Runnable",
      "Operacje atomowe, takie jak compareAndSet() i getAndIncrement()",
      "Mechanizmy synchronizacji: zamki Lock, zmienne warunku Condition",
      "Klasy przystosowane do współbieżności, np. BlockingQueue i ConcurrentMap"
    ],
    "wrong": [
      "Metody synchronized() w konstruktorach klas — zapis jest niepoprawny. W Javie istnieje słowo kluczowe synchronized, ale nie metoda synchronized(). Dodatkowo konstruktorów nie deklaruje się jako synchronized."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Thread\nKlasa Thread reprezentuje wątek w Javie.\nPrzykład:\nThread t = new Thread(() -> {\nSystem.out.println(\"Kod wykonywany w osobnym wątku\");\n});\nt.start();\nMetoda start() uruchamia nowy wątek. Nie należy mylić jej z run(), bo ręczne wywołanie run()\nwykona kod w bieżącym wątku.\nRunnable\nRunnable to interfejs opisujący zadanie, które może zostać wykonane przez wątek.\nZawiera metodę:\npublic void run()\nPrzykład:\nRunnable zadanie = () -> {\nSystem.out.println(\"Praca wątku\");\n};\nThread t = new Thread(zadanie);\nt.start();\nOperacje atomowe\nOperacje atomowe wykonują się jako jedna niepodzielna operacja.\nPrzykład:\nAtomicInteger licznik = new AtomicInteger(0);\nlicznik.getAndIncrement();\nMetody takie jak:\ncompareAndSet()\ngetAndIncrement()\nincrementAndGet()\npozwalają bezpiecznie modyfikować dane współdzielone bez klasycznej blokady synchronized.\ncompareAndSet()\ncompareAndSet() działa według schematu:\njeśli aktualna wartość jest taka, jak oczekuję,\nto zamień ją na nową wartość\nJest to ważna operacja w algorytmach lock-free.\nLock\nLock to bardziej elastyczny mechanizm blokady niż synchronized.\nPrzykład:\nLock lock = new ReentrantLock();\nlock.lock();\ntry {\n// sekcja krytyczna\n} finally {\nlock.unlock();\n}\nBlokada chroni sekcję krytyczną przed jednoczesnym dostępem wielu wątków.\nCondition\nCondition działa podobnie do zmiennych warunkowych.\nPozwala wątkom czekać na określony warunek i być budzonym przez inne wątki.\nPrzykład mechanizmu:\nwątek czeka, aż bufor nie będzie pusty\ninny wątek dodaje dane i budzi oczekujący wątek\nKolekcje współbieżne\nJava posiada specjalne klasy przystosowane do pracy wielowątkowej, np.:\nBlockingQueue\nConcurrentMap\nConcurrentHashMap\nSą one zaprojektowane tak, aby wiele wątków mogło bezpiecznie z nich korzystać.\n\nNajważniejsza intuicja:\nW Javie współbieżność zapewniają zarówno mechanizmy tworzenia wątków (Thread, Runnable),\njak i mechanizmy bezpiecznej synchronizacji danych: atomiki, zamki, warunki oraz kolekcje\nwspółbieżne."
  },
  {
    "id": 57,
    "source": "PRO-MAX",
    "source_num": 18,
    "extra": false,
    "type": "mc",
    "question": "Co można powiedzieć o sposobie przetwarzania i dostępu do zmiennej id? Treść / kod / warianty: Kod używa: #pragma omp parallel private(id)",
    "correct": [
      "id jest prywatne dla każdego wątku, co oznacza, że każdy wątek ma swoją kopię",
      "Jeśli nie użyto by klauzuli private(id), to id byłoby współdzielone i powodowało błędy",
      "Program może wykonać się poprawnie nawet bez private(id), ale wyniki mogłyby być nieprzewidywalne"
    ],
    "wrong": [
      "id jest wspólne, więc każdy wątek nadpisuje jego wartość — nie, bo w kodzie użyto private(id).",
      "private(id) oznacza, że id jest inicjalizowane domyślnie wartością 0 we wszystkich wątkach — nie, zmienna prywatna nie jest automatycznie zerowana."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "private(id) w OpenMP\nKlauzula private(id) oznacza, że każdy wątek dostaje własną kopię zmiennej id.\nCzyli:\nWątek 0 → własne id\nWątek 1 → własne id\nWątek 2 → własne id\n...\nDzięki temu wątki nie nadpisują sobie wzajemnie wartości.\nZmienna prywatna\nZmienna prywatna istnieje osobno dla każdego wątku.\nW kodzie:\nid = omp_get_thread_num();\nkażdy wątek zapisuje swój numer do swojej prywatnej kopii id.\nCo gdyby nie było private(id)?\nGdyby id było zadeklarowane przed regionem równoległym i nie użyto by private(id), wtedy id byłoby\nzmienną współdzieloną.\nWtedy wiele wątków mogłoby jednocześnie wykonywać:\nid = omp_get_thread_num();\ni nadpisywać sobie wartość. Mogłoby dojść do race condition, czyli wyniki mogłyby być przypadkowe.\nWartość początkowa zmiennej prywatnej\nprivate(id) nie oznacza, że zmienna ma wartość początkową 0.\nWartość początkowa prywatnej kopii jest niezdefiniowana, dopóki wątek sam jej nie przypisze.\nW tym kodzie nie ma problemu, bo od razu wykonywane jest:\nid = omp_get_thread_num();\n\nNajważniejsza intuicja:\nprivate(id) sprawia, że każdy wątek ma własne id, więc nie ma wyścigu przy zapisywaniu numeru\nwątku."
  },
  {
    "id": 58,
    "source": "PRO-MAX",
    "source_num": 19,
    "extra": false,
    "type": "mc",
    "question": "Które stwierdzenia dotyczące OpenMP Task są poprawne?",
    "correct": [
      "Dyrektywa #pragma omp task umożliwia tworzenie zadań, które mogą być dynamicznie przydzielane do różnych wątków",
      "#pragma omp taskwait powoduje, że wątek czeka na zakończenie utworzonych przez siebie zadań",
      "Zagnieżdżanie zadań OpenMP jest możliwe, ale wymaga odpowiedniego zarządzania synchronizacją"
    ],
    "wrong": [
      "Zadania domyślnie są typu tied, co oznacza, że muszą być wykonane przez ten sam wątek, który je utworzył — zdanie jest podchwytliwe. Zadania domyślnie są typu tied, ale nie muszą być wykonane przez wątek, który je utworzył. Formalnie zadanie tied, jeśli zostanie rozpoczęte przez jakiś wątek i później zawieszone, musi zostać wznowione przez ten sam wątek.",
      "Zadania typu untied zawsze są wykonywane natychmiast po ich stworzeniu — nie, untied oznacza elastyczne wznawianie zadania przez różne wątki, a nie natychmiastowe wykonanie."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "#pragma omp task\nDyrektywa:\n#pragma omp task\n{\n// kod zadania\n}\ntworzy zadanie, które może zostać wykonane przez jeden z dostępnych wątków w zespole OpenMP.\nZadanie nie musi wykonać się natychmiast. Może zostać odłożone i wykonane później przez inny\nwątek.\nZadania dynamiczne\nZadania OpenMP są przydatne wtedy, gdy praca nie ma prostego kształtu pętli.\nPrzykłady:\n• rekurencja,\n• drzewa zadań,\n• grafy zależności,\n• algorytmy typu dziel i zwyciężaj.\nPrzykład:\n#pragma omp task\noblicz_lewa_czesc();\n#pragma omp task\noblicz_prawa_czesc();\ntaskwait\nDyrektywa:\n#pragma omp taskwait\npowoduje, że bieżący wątek czeka, aż zakończą się zadania potomne utworzone przez bieżące\nzadanie.\nPrzykład:\n#pragma omp task\nzadanie_A();\n#pragma omp task\nzadanie_B();\n#pragma omp taskwait\n// tutaj mamy pewność, że A i B się zakończyły\nZadanie tied\nZadania OpenMP domyślnie są typu tied.\nOznacza to, że jeśli zadanie zacznie wykonywać się na danym wątku, to po ewentualnym zawieszeniu\nmusi zostać wznowione przez ten sam wątek.\nWażne: nie chodzi o wątek, który zadanie utworzył, tylko o wątek, który rozpoczął jego wykonywanie.\nZadanie untied\nZadanie typu untied może zostać zawieszone i później wznowione przez inny wątek.\nPrzykład:\n#pragma omp task untied\n{\nwykonaj_prace();\n}\nNie oznacza to jednak, że zadanie wykona się natychmiast po utworzeniu.\nZagnieżdżanie zadań\nZadania OpenMP mogą tworzyć kolejne zadania.\nPrzykład:\n#pragma omp task\n{\n#pragma omp task\n{\nzadanie_zagniezdzone();\n}\n}\nTakie zagnieżdżanie jest możliwe, ale trzeba uważać na synchronizację, np. przez taskwait, aby nie\nużyć wyników zanim zadania się zakończą.\n\nNajważniejsza intuicja:\nOpenMP Task pozwala tworzyć dynamiczne zadania, które mogą być wykonywane przez różne\nwątki; do czekania na ich zakończenie służy taskwait, a różnica między tied i untied dotyczy tego,\nktóry wątek może wznowić zawieszone zadanie."
  },
  {
    "id": 59,
    "source": "PRO-MAX",
    "source_num": 20,
    "extra": false,
    "type": "mc",
    "question": "Jakie są różnice między implementacją wielowątkowości za pomocą Thread i Runnable?",
    "correct": [
      "Klasa dziedzicząca Thread nie może dziedziczyć po innej klasie, co ogranicza jej elastyczność",
      "Implementacja interfejsu Runnable pozwala na większą elastyczność kodu, ponieważ klasa może implementować inne interfejsy",
      "Thread posiada dodatkowe metody, takie jak join(), interrupt(), których Runnable nie ma"
    ],
    "wrong": [
      "Metoda start() interfejsu Runnable automatycznie uruchamia nowy wątek — błędne, bo Runnable nie ma metody start(). Metodę start() ma klasa Thread.",
      "Runnable jest bardziej wydajny niż Thread, ponieważ działa na wyższym poziomie abstrakcji — błędne. Runnable jest bardziej elastyczny projektowo, ale nie oznacza automatycznie większej wydajności."
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Klasa Thread\nThread to klasa reprezentująca wątek w Javie.\nMożna utworzyć wątek przez dziedziczenie po Thread:\nclass MojWatek extends Thread {\npublic void run() {\nSystem.out.println(\"Praca wątku\");\n}\n}\nMojWatek t = new MojWatek();\nt.start();\nMinusem jest to, że Java nie pozwala dziedziczyć po wielu klasach. Jeśli klasa dziedziczy po Thread, nie\nmoże już dziedziczyć po innej klasie.\nInterfejs Runnable\nRunnable opisuje zadanie, które może zostać wykonane przez wątek.\nPrzykład:\nclass MojeZadanie implements Runnable {\npublic void run() {\nSystem.out.println(\"Praca zadania\");\n}\n}\nThread t = new Thread(new MojeZadanie());\nt.start();\nTen sposób jest bardziej elastyczny, bo klasa może implementować Runnable, a jednocześnie\ndziedziczyć po innej klasie.\nstart() a run()\nMetoda start() należy do klasy Thread.\nt.start();\nuruchamia nowy wątek i powoduje wykonanie metody run() w tym nowym wątku.\nNatomiast ręczne wywołanie:\nt.run();\nnie tworzy nowego wątku — wykonuje kod zwyczajnie w bieżącym wątku.\nMetody klasy Thread\nKlasa Thread ma metody służące do zarządzania wątkiem, np.:\njoin()\ninterrupt()\nsleep()\nstart()\nInterfejs Runnable ma zasadniczo tylko metodę:\nrun()\nDlatego Runnable opisuje samo zadanie, a Thread reprezentuje mechanizm wykonania tego zadania\nw osobnym wątku.\n\nNajważniejsza intuicja:\nThread to konkretny wątek i ma metody zarządzania nim, a Runnable to samo zadanie do\nwykonania; Runnable jest zwykle bardziej elastyczny, bo nie blokuje dziedziczenia po innej klasie."
  },
  {
    "id": 60,
    "source": "PW",
    "source_num": 1,
    "extra": false,
    "type": "mc",
    "question": "Model programowania SPMD (single program multiple data):",
    "correct": [
      "może być realizowany i w MPI, i w OpenMP",
      "w standardowych środowiskach programowania jest ogólniejszy niż MPMD (każdy program MPMD można sprowadzić do SPMD)"
    ],
    "wrong": [
      "może być realizowany tylko na maszynach SIMD",
      "zawsze polega na wzbogaceniu kodu sekwencyjnego dyrektywami kompilatora",
      "wymaga, aby każda linijka kodu była wykonywana przez wszystkie procesy (wątki), tyle że pracujące na różnych danych"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 61,
    "source": "PW",
    "source_num": 2,
    "extra": false,
    "type": "open",
    "question": "Wypisz zależności pojawiające się w przykładowym kodzie: y += 4 * sin (i * 3.14); A [i] = 3 * x + z * y; z = x * y",
    "correct": [],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź: nr linii nr liniizmiennatyp zależności 12YRAW 13YRAW 23ZWAR"
  },
  {
    "id": 62,
    "source": "PW",
    "source_num": 3,
    "extra": false,
    "type": "open",
    "question": "Przeanalizuj zależności w przykładowym kodzie. Jeżeli w kodzie występuje określona zależność przenoszona w pętli wpisz obok typu zależności nazwę tablicy, której dotyczy; jeśli danej zależności nie ma w kodzie, wpisz kreskę: for (i = 1; i < N; ++i) { A [i] = D [i + 1] – C [i – 1]; D [i + 1] = 2 * D [i – 1]; }",
    "correct": [],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź: zależności wyjścia (WAW): - anty-zależności (WAR): - zależności rzeczywiste (RAW):D"
  },
  {
    "id": 63,
    "source": "PW",
    "source_num": 4,
    "extra": false,
    "type": "mc",
    "question": "Operacją komunikacji grupowej, która przekształca stan pamięci procesów: P1 (rank = 0): a = {11, 12, 13},b = {0, 0, 0} P2 (rank = 1): a = {21, 22, 23},b = {0, 0, 0} P3 (rank = 2): a = {31, 32, 33},b = {0, 0, 0} w stan: P1 (rank = 0): a = {11, 12, 13},b = {21, 0, 0} P2 (rank = 1): a = {21, 22, 23},b = {22, 0, 0} P3 (rank = 2): a = {31, 32, 33},b = {23, 0, 0} Jest:",
    "correct": [
      "MPI_Scatter (a, 1, MPI_INT, b, 1, MPI_INT, 1, MPI_COMM_WORLD);"
    ],
    "wrong": [
      "MPI_Gather (a, 1, MPI_INT, b, 1, MPI_INT, 1, MPI_COMM_WORLD);",
      "MPI_Allgather (a, 1, MPI_INT, b, 1, MPI_INT, MPI_COMM_WORLD);",
      "MPI_Alltoall (a, 1, MPI_INT, b, 1, MPI_INT, MPI_COMM_WORLD);",
      "MPI_Reduce (a, b, 1, MPI_INT, MPI_MAX, 1, MPI_COMM_WORLD);",
      "MPI_Allreduce (a, b, 1, MPI_INT, MPI_MAX, MPI_COMM_WORLD);",
      "MPI_Allreduce (a, b, 1, MPI_INT, MPI_MIN, MPI_COMM_WORLD);"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 64,
    "source": "PW",
    "source_num": 5,
    "extra": false,
    "type": "open",
    "question": "Stosując notację taką jak w poprzednim zadaniu i zakładając, że stan pamięci przed wykonaniem operacji był następujący: P1 (rank = 0): a = {11, 12, 13},b = {0, 0, 0} P2 (rank = 1): a = {21, 22, 23},b = {0, 0, 0} P3 (rank = 2): a = {31, 32, 33},b = {0, 0, 0} zilustruj stan pamięci procesów po wykonaniu operacji: MPI_REDUCE (a, b, 2, MPI_INT, MPI_MIN, 1, MPI_COMM_WORLD);",
    "correct": [],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź: P1 (rank = 0): a = {11, 12, 13},b = {0, 0, 0} P2 (rank = 1): a = {21, 22, 23},b = {11, 12, 0} P3 (rank = 2): a = {31, 32, 33},b = {0, 0, 0}"
  },
  {
    "id": 65,
    "source": "PW",
    "source_num": 6,
    "extra": false,
    "type": "mc",
    "question": "Standardowe programy w stosunku do programu rozważanego w analizie Amdahla mają najczęściej:",
    "correct": [
      "większy udział części nie dającej się zrównoleglić",
      "większy czas komunikacji",
      "gorsze przyspieszenie obliczeń równoległych (dla dużych p)"
    ],
    "wrong": [
      "mniejszy udział części nie dającej się zrównoleglić",
      "mniejszy czas komunikacji",
      "lepsze przyspieszenie obliczeń równoległych (dla dużych p)"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 66,
    "source": "PW",
    "source_num": 7,
    "extra": false,
    "type": "mc",
    "question": "Sposób podziału iteracji równoległej pętli for pomiędzy wątki przy zastosowaniu klauzuli schedule (dynamic) oznacza, że:",
    "correct": [
      "przydział będzie dokonywany w trakcie działania programu",
      "liczba iteracji przydzielanych poszczególnym wątkom może być różna",
      "narzut związany z wykonaniem równoległym będzie duży",
      "rozmiar porcji będzie równy 1"
    ],
    "wrong": [
      "jeden wątek może dostać wszystkie iteracje",
      "rozmiar porcji będzie zmienny (określany dynamicznie)",
      "sposób podziału w ostateczności zależeć będzie od wartości odpowiedniej zmiennej środowiskowej"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 67,
    "source": "PW",
    "source_num": 8,
    "extra": false,
    "type": "mc",
    "question": "Klauzula firstprivate oznacza, że objęta nią zmienna:",
    "correct": [
      "będzie zmienną prywatną wątków, inicjalizowaną wartością sprzed rozpoczęcia wykonywania dyrektywy"
    ],
    "wrong": [
      "będzie prywatna dla pierwszego wątku",
      "będzie pierwszą zmienną prywatną wątków",
      "będzie zmienną prywatną wątków inicjalizowaną jako pierwsza",
      "będzie zmienną prywatną wątków, której wartość z pierwszego wątku zostanie skopiowana do wątku głównego po zakończeniu wykonywania dyrektywy"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 68,
    "source": "PW",
    "source_num": 9,
    "extra": false,
    "type": "mc",
    "question": "W analizie Gustafsona rozważa się zadania, których czas rozwiązania programem równoległym przy rosnącej liczbie procesorów jest stały, albowiem:",
    "correct": [
      "rozmiar zadania rośnie wraz z liczbą procesorów (rośnie więc czas rozwiązania na jednym procesorze)",
      "udział procentowy części sekwencyjnej w czasie rozwiązania na jednym procesorze maleje wraz ze wzrostem rozmiaru zadania"
    ],
    "wrong": [
      "czas komunikacji rośnie wolniej niż czas obliczeń",
      "część równoległa osiąga przyspieszenie ponadliniowe"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 69,
    "source": "PW",
    "source_num": 13,
    "extra": false,
    "type": "open",
    "question": "Kod: #pragma omp parallel num_threads (4) #pragma omp for schedule (static, 3) for (i = 0l i < 15; ++i) {...} powoduje rozdzielenie iteracji równoległej pętli for pomiędzy wątki w następujący sposób (napisać jak)",
    "correct": [],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź: W0: 0, 1, 2, 12, 13, 14 W1: 3, 4, 5 W2: 6, 7, 8 W3: 9, 10, 11"
  },
  {
    "id": 70,
    "source": "PW",
    "source_num": 14,
    "extra": false,
    "type": "mc",
    "question": "Monitor w programowaniu współbieżnym:",
    "correct": [
      "jest strukturą danych gwarantującą wzajemne wykluczanie przy realizacji jego procedur",
      "jest jednym z mechanizmów wbudowanych w model obiektów Javy"
    ],
    "wrong": [
      "jest strukturą danych zawierającą informacje o sekcjach krytycznych",
      "służy do monitorowania ewentualnych konfliktów wątków w dostępie do pamięci wspólnej",
      "jest jednym z mechanizmów wbudowanych w model muteksów pthreads"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 71,
    "source": "PW",
    "source_num": 18,
    "extra": false,
    "type": "open",
    "question": "Jakie będą wartości zmiennych a, b i c w dowolnym wątku po wykonaniu następującego fragmentu kodu (wciąż wewnątrz obszaru równoległego) (jeśli nie wiadomo wstaw „?”)? int a = 3 , int b = 1 , int c = 2; #pragma omp parallel firstprivate (c) num_threads (4) { int b = a + c; #pragma omp barrier #pragma omp atomic c += 1; a += 2; b += 3; }",
    "correct": [],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź: a = ?, b = 8, c= 3"
  },
  {
    "id": 72,
    "source": "PW",
    "source_num": 19,
    "extra": false,
    "type": "mc",
    "question": "Operacją komunikacji grupowej, która przekształca stan pamięci procesów: P1 (rank = 0): a = {11, 12, 13},b = {0, 0, 0} P2 (rank = 1): a = {21, 22, 23},b = {0, 0, 0} P3 (rank = 2): a = {31, 32, 33},b = {0, 0, 0} w stan: P1 (rank = 0): a = {11, 12, 13},b = {11, 21, 31} P2 (rank = 1): a = {21, 22, 23},b = {11, 21, 31} P3 (rank = 2): a = {31, 32, 33},b = {11, 21, 31} Jest:",
    "correct": [
      "MPI_Allgather (a, 1, MPI_INT, b, 1, MPI_INT, MPI_COMM_WORLD);"
    ],
    "wrong": [
      "MPI_Gather (a, 1, MPI_INT, b, 1, MPI_INT, 1, MPI_COMM_WORLD);",
      "MPI_Scatter (a, 1, MPI_INT, b, 1, MPI_INT, 1, MPI_COMM_WORLD);",
      "MPI_Alltoall (a, 1, MPI_INT, b, 1, MPI_INT, MPI_COMM_WORLD);",
      "MPI_Reduce (a, b, 1, MPI_INT, MPI_MAX, 1, MPI_COMM_WORLD);",
      "MPI_Allreduce (a, b, 1, MPI_INT, MPI_MAX, MPI_COMM_WORLD);",
      "MPI_Allreduce (a, b, 1, MPI_INT, MPI_MIN, MPI_COMM_WORLD);"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 73,
    "source": "PW",
    "source_num": 20,
    "extra": false,
    "type": "open",
    "question": "Stosując notację taką jak w poprzednim zadaniu i zakładając, że stan pamięci przed wykonaniem operacji był następujący: P1 (rank = 0): a = {11, 12, 13},b = {0, 0, 0} P2 (rank = 1): a = {21, 22, 23},b = {0, 0, 0} P3 (rank = 2): a = {31, 32, 33},b = {0, 0, 0} zilustruj stan pamięci procesów po wykonaniu operacji: MPI_Reduce (a, b, 1, MPI_INT, MPI_MAX, 1, MPI_COMM_WORLD);",
    "correct": [],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź: P1 (rank = 0): a = {11, 12, 13},b = {0, 0, 0} P2 (rank = 1): a = {21, 22, 23},b = {31, 0, 0} P3 (rank = 2): a = {31, 32, 33},b = {0, 0, 0}"
  },
  {
    "id": 74,
    "source": "PW",
    "source_num": 21,
    "extra": false,
    "type": "open",
    "question": "Kod: #pragma omp parallel num_threads (3) #pragma omp for schedule (static, 4) for (i = 0l i < 15; ++i) {...} powoduje rozdzielenie iteracji równoległej pętli for pomiędzy wątki w następujący sposób (wypisać):",
    "correct": [],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź: W0:0,1,2,3, 12,13,14 W1:4,5,6,7 W2: 8, 9, 10, 11"
  },
  {
    "id": 75,
    "source": "PW",
    "source_num": 22,
    "extra": false,
    "type": "open",
    "question": "Jakie będą wartości zmiennych a, b i c w dowolnym wątku po wykonaniu następującego fragmentu kodu (wciąż wewnątrz obszaru równoległego) (jeśli nie wiadomo wstaw „?”)? int a = 2, int b = 3, int c = 4; #pragma omp parallel firstprivate (a) num_threads (4) { int b = a + c; #pragma omp barrier #pragma omp atomic c += 1; a += 2; b += 3; }",
    "correct": [],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": "Odpowiedź: a = 4, b = 9, c = ?"
  },
  {
    "id": 76,
    "source": "PW",
    "source_num": 23,
    "extra": false,
    "type": "mc",
    "question": "W wyniku wykonania procedury systemowej fork powstają dwa procesy realizujące ten sam kod, które:",
    "correct": [
      "pełnią różne role: jeden jest procesem nadrzędnym, drugi potomnym",
      "proces nadrzędny może synchronizować swoje działanie z działaniem procesu potomnego"
    ],
    "wrong": [
      "posiadają wspólne zmienne globalne",
      "posiadają wspólne zmienne lokalne",
      "otrzymują jako wartość zwracaną funkcji fork nazwajem swoje identyfikatory",
      "są w pełnie niezależne i nie mogą być synchronizowane"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 77,
    "source": "PW",
    "source_num": 24,
    "extra": false,
    "type": "mc",
    "question": "Przetwarzanie w przeplocie oznacza sytuację kiedy:",
    "correct": [
      "system operacyjny realizuje przetwarzanie współbieżne na jednym procesorze (rdzeniu)",
      "procesor(rdzeń) stosuje tzw. simultaneous multithreading",
      "pojedynczy procesor (rdzeń) na przemian wykonuje fragmenty wielu wątków"
    ],
    "wrong": [
      "system operacyjny przydziela wątki tego samego zadania różnym rdzeniom (procesom)",
      "pojedynczy proces korzysta na przemian z wielu rdzeni"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 78,
    "source": "PW",
    "source_num": 25,
    "extra": false,
    "type": "mc",
    "question": "Argumentami procedury tworzenia nowego wątku pthread_create są m.in.:",
    "correct": [
      "nazwa funkcji, którą zacznie wykonywać wątek – funkcji startowej wątku (będąca w rzeczywistości wskaźnikiem do funkcji)",
      "obiekt określający atrybuty (m. in. sposób funkcjonowania) wątku",
      "argument dla funkcji startowej wątku będący wskaźnikiem"
    ],
    "wrong": [
      "rozmiar stosu przydzielonego wątkowi",
      "zadany przez użytkownika identyfikator wątku"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 79,
    "source": "PW",
    "source_num": 26,
    "extra": false,
    "type": "mc",
    "question": "Cechami charakterystycznymi funkcjonowania wątków Pthreads są m.in.",
    "correct": [
      "konieczność używania jako funkcji startowej wątków, funkcji o tylko jednym argumencie"
    ],
    "wrong": [
      "istnienie odrębnych funkcji tworzenia i uruchamiania wątków",
      "brak możliwości zmiany domyślnego sposobu funkcjonowania wątków w trakcie ich tworzenia",
      "posługiwanie się identyfikatorami wątków tożsamymi z identyfikatorami z systemu operacyjnego"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 80,
    "source": "PW",
    "source_num": 27,
    "extra": false,
    "type": "mc",
    "question": "Każdy wątek Pthreads posiada własne, niezależne od innych wątków:",
    "correct": [
      "zestaw rejestrów",
      "własny stos",
      "ciąg rozkazów"
    ],
    "wrong": [
      "przestrzeń adresową"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 81,
    "source": "PW",
    "source_num": 28,
    "extra": false,
    "type": "mc",
    "question": "Przyspieszenie równoległe programu rozwiązującego pewien problem jako funkcję liczby procesorów p można zdefiniować jako stosunek:",
    "correct": [
      "czasu rozwiązania problemu najlepszym programem sekwencyjnym do czasu rozwiązania problemu rozważanym programem na p procesorach"
    ],
    "wrong": [
      "czasu rozwiązania problemu najlepszym programem sekwencyjnym do czasu rozwiązania problemu p-razy większego rozważanym programem na p procesorach",
      "czasu pracy jednego procesora przy rozwiązaniu problemu rozważanym programem na p procesorach do czasu pracy na wszystkich procesorach"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 82,
    "source": "PW",
    "source_num": 29,
    "extra": false,
    "type": "mc",
    "question": "Liniowe (idealne) przyspieszenie obliczeń równoległych można scharakteryzować jako:",
    "correct": [
      "przyspieszenie w sytuacji gdy czas obliczeń równoległych na p procesorach jest p razy krótszy niż czas obliczeń sekwencyjnych"
    ],
    "wrong": [
      "nie dającego się nigdy przewyższyć",
      "przewidywane przez analizę Amdhala"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 83,
    "source": "PW",
    "source_num": 30,
    "extra": false,
    "type": "mc",
    "question": "Przyspieszenie programu rozważanego w analize Amdhala ulega nasyceniu (przestaje rosnąć) mimo zwiększajacej się liczby procesów ponieważ program:",
    "correct": [
      "posiada część sekwencyjną, którą zawsze musi wykonać tylko jeden proces (wątek)"
    ],
    "wrong": [
      "ma rozmiar rosnący wraz z liczbą procesorów",
      "wykazuje duży narzut na komunikację"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 84,
    "source": "PW",
    "source_num": 31,
    "extra": false,
    "type": "mc",
    "question": "Błedne założenie (w stosunku do praktyki stosowania rzeczywistych programów równoległych) w ramach analizy Amdhala polega na rozważaniu:",
    "correct": [
      "zadań o stałym rozmiarze przy rosnącej liczbie procesorów"
    ],
    "wrong": [
      "zbyt dużej liczbie procesorów",
      "zadań zbyt trudnych do zrównoleglenia"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 85,
    "source": "PW",
    "source_num": 35,
    "extra": false,
    "type": "mc",
    "question": "Procesory wielordzeniowe:",
    "correct": [
      "są nazywane inaczej układami scalonymi wieloprocesorowymi"
    ],
    "wrong": [
      "pracują w modelu SIMD (single instruction multiple data)",
      "nigdy nie przekroczą liczby rdzeni ok. kilkunastu",
      "nie posiadają pamięci podręcznej L2 i L3",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 86,
    "source": "PW",
    "source_num": 37,
    "extra": false,
    "type": "mc",
    "question": "Klastry:",
    "correct": [
      "powstają przez połączenie wielu komputerów siecią i wyposażenie ich w specjalne oprogramowanie pozwalające traktować je jak pojedynczy system do uruchamiania programów",
      "zakładają najczęściej model programowania bez pamięci wspólnej",
      "skalują się (dają się praktycznie wykorzystywać) dla liczb procesorów (rdzeni) do rzędu kilku dziesięciu"
    ],
    "wrong": [
      "są specjalistycznymi superkomputerami",
      "są najdroższymi komputerami równoległymi",
      "skalują się (dają się praktycznie wykorzystywać) dla liczb procesorów (rdzeni) do rzędu kilku tysięcy",
      "skalują się (dają się praktycznie wykorzystywać) dla liczb procesorów (rdzeni) do rzędu kilkuset tysięcy"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 87,
    "source": "PW",
    "source_num": 38,
    "extra": false,
    "type": "mc",
    "question": "Klastry realizują model przetwarzania:",
    "correct": [
      "MIMD",
      "MPMD"
    ],
    "wrong": [
      "MISD",
      "SISD",
      "SIMD",
      "eSPMD"
    ],
    "uncertain": [
      "MPMD"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 88,
    "source": "PW",
    "source_num": 40,
    "extra": false,
    "type": "mc",
    "question": "Potokowe przetwarzanie rozkazów oznacza przetwarzanie:",
    "correct": [
      "zbliżone do pracy na taśmie produkcyjnej – pojedyncza jednostka funkcjonalna procesora realizuje tylko część przetwarzania rozkazu",
      "dzięki któremu procesor może współbieżnie przetwarzać wiele rozkazów",
      "wymagające istnienia złożonych procesorów o wielu jednostkach funkcjonalnych"
    ],
    "wrong": [
      "potoku rozkazów – kolejny rozkaz po zakończeniu poprzedniego",
      "takie jak w kartach graficznych (inaczej przetwarzanie strumieniowe)"
    ],
    "uncertain": [
      "wymagające istnienia złożonych procesorów o wielu jednostkach funkcjonalnych"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 89,
    "source": "PW",
    "source_num": 46,
    "extra": false,
    "type": "mc",
    "question": "Wskaż prawidłową kolejność etapów przetwarzania potokowego (ID – dekodowanie rozkazu, IE – wykonanie rozkazu, IF – pobranie rozkazu, OF – pobranie argumentów, WB – zapis wyniku):",
    "correct": [
      "IF ID OF IE WB"
    ],
    "wrong": [
      "IE ID OF IF WB",
      "ID IF WB IE OF",
      "IE IF WB ID OF",
      "WB IE IF ID OF"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 90,
    "source": "PW",
    "source_num": 48,
    "extra": false,
    "type": "mc",
    "question": "Na stosie w trakcie realizacji programu przechowywane są:",
    "correct": [
      "dane programu",
      "dane wejściowe (argumenty) procedur",
      "dane prywatne (lokalne) procedur",
      "dane wspólne procedur"
    ],
    "wrong": [
      "dane do komunikacji procedur z systemem operacyjnym",
      "dane do komunikacji międzyprocesowej"
    ],
    "uncertain": [
      "dane wspólne procedur"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 91,
    "source": "PW",
    "source_num": 49,
    "extra": false,
    "type": "mc",
    "question": "Współbieżność wykonania programów P1 i P2 oznacza:",
    "correct": [
      "nakładanie się czasów wykonania (możliwe wykonanie w przeplocie na jednym procesorze)",
      "konieczność zarządzania przez system operacyjny dostępem do urządzeń wejścia/wyjścia przez P1 i P2"
    ],
    "wrong": [
      "wykonanie równoległe (wymaga systemu wieloprocesorowego)",
      "posiadanie wspólnej przestrzeni adresowej przez P1 i P2",
      "żadne z powyższych stwierdzeń nie jest prawdziwe"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 92,
    "source": "PW",
    "source_num": 50,
    "extra": false,
    "type": "mc",
    "question": "Współbieżność wykonania programów wprowadzona została w celu:",
    "correct": [
      "usprawnienia pracy komputera przy realizacji operacji wejścia/wyjścia",
      "szybszej obsługi połączeń sieciowych",
      "umożliwienia funkcjonowania procesów wielowątkowych"
    ],
    "wrong": [
      "umożliwienia działania procesorów wielordzeniowych",
      "żadne z powyższych stwierdzeń nie jest prawdziwe"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 93,
    "source": "PW",
    "source_num": 51,
    "extra": false,
    "type": "mc",
    "question": "Proces od wątku różni się m.in.:",
    "correct": [
      "posiadaniem własnej przestrzeni adresowej (wątek współdzieli przestrzeń adresową z innymi wątkami tego samego procesu)",
      "posiadaniem bardziej rozbudowanej struktury umożliwiającej zarządzanie przez system operacyjny"
    ],
    "wrong": [
      "posiadaniem własnego zestawu rejestrów w trakcie wykonania (wątek współdzieli rejestry z innymi wątkami tego samego procesu)",
      "posiadaniem wyższego priorytetu wykonania",
      "żadne z powyższych stwierdzeń nie jest prawdziwe"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 94,
    "source": "PW",
    "source_num": 52,
    "extra": false,
    "type": "mc",
    "question": "W skład narzędzi programowania OpenMP wchodzą:",
    "correct": [
      "dyrektywy kompilatora",
      "funkcje biblioteczne",
      "zmienne środowiskowe"
    ],
    "wrong": [
      "predefiniowane obiekty (struktury)",
      "typy danych",
      "żadna odpowiedź nie jest prawidłowaamdh"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 95,
    "source": "PW",
    "source_num": 53,
    "extra": false,
    "type": "mc",
    "question": "W trakcie wykonania programu OpenMP obszar równoległy:",
    "correct": [
      "zaczyna się po dyrektywie parallel",
      "oznacza, że program może być wykonywany wielowątkowo (w przeciwieństwie do obszaru sekwencyjnego)",
      "oznacza, że zmienne prywatne funkcjonują w wielu kopiach (po jednej dla każdego wątku)"
    ],
    "wrong": [
      "zaczyna się po dowolnej dyrektywie podziału pracy",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 96,
    "source": "PW",
    "source_num": 54,
    "extra": false,
    "type": "mc",
    "question": "Liczba wątków tworzonych przy wchodzeniu do obszaru równoległego może (jeśli system pozwala) zostać jawnie określona za pomocą:",
    "correct": [
      "klauzuli num_threads dyrektywy parallel",
      "procedury omp_set_num_threads przed wejściem do obszaru równoległego",
      "zmiennej środowiskowej OMP_NUM_THREADS ustawianej przed uruchomieniem programu"
    ],
    "wrong": [
      "klauzuli num_threads dowolnej dyrektywy podziału pracy",
      "procedury omp_set_num_threads wewnątrz obszaru równoległego",
      "zmiennej środowiskowej OMP_NUM_THREADS ustawianej przed wejściem przez program do obszaru równoległego",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 97,
    "source": "PW",
    "source_num": 55,
    "extra": false,
    "type": "mc",
    "question": "Zmiana wartości zmiennej wspólnej w OpenMP:",
    "correct": [
      "może, a czasami powinna odbywać się w sekcji krytycznej",
      "może być dokonana przez dowolny wątek w obszarze równoległym",
      "może zostać zrealizowana niepodzielnie (dyrektywa atomic)",
      "dokonana przez jeden wątek jest widoczna dla wszystkich wątków"
    ],
    "wrong": [
      "musi odbywać się w sekcji krytycznej",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 98,
    "source": "PW",
    "source_num": 56,
    "extra": false,
    "type": "mc",
    "question": "Zmiana wartości zmiennej prywatnej w OpenMP:",
    "correct": [
      "może być dokonana przez dowolny wątek w obszarze równoległym",
      "może zostać zrealizowana niepodzielnie (dyrektywa atomic)"
    ],
    "wrong": [
      "musi odbywać się w sekcji krytycznej",
      "powinna odbywać się w sekcji krytycznej",
      "dokonana przez jeden wątek jest widoczna dla wszystkich wątków",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 99,
    "source": "PW",
    "source_num": 57,
    "extra": false,
    "type": "mc",
    "question": "Zmienna lokalna funkcji staje się zmienną prywatną wątków w obszarze równoległym jeśli w kodzie:",
    "correct": [
      "jest objęta dyrektywą threadprivate w tej samej funkcji, w której znajduje się dyrektywa parallel",
      "jest zmienną sterującą równoległej pętli for",
      "jest objęta jedną z klauzul private, firstprivate itp. w dyrektywie parallel danego obszaru równoległego",
      "jest objęta jedną z klauzul private, firstprivate itp. w dyrektywie parallel danego obszaru równoległego w danej funkcji"
    ],
    "wrong": [
      "jest objęta dyrektywą threadprivate w dowolnej funkcji",
      "jest zmienną sterującą pętli for",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [
      "jest objęta jedną z klauzul private, firstprivate itp. w dyrektywie parallel danego obszaru równoległego",
      "jest objęta jedną z klauzul private, firstprivate itp. w dyrektywie parallel danego obszaru równoległego w danej funkcji"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 100,
    "source": "PW",
    "source_num": 58,
    "extra": false,
    "type": "mc",
    "question": "Zakończenie operacji wysyłania danych procedurą MPI_Send (powrót z procedury) lub MPI_Isend (np. powrót z procedury MPI_Wait) oznacza zawsze, że:",
    "correct": [
      "obszary danych objęte poleceniem wysyłania mogą być zmieniane, co nie spowoduje zmiany zawartości komunikatu"
    ],
    "wrong": [
      "dane dotarły do adresata",
      "system odnalazł adresata gotowego do odebrania komunikatu (adresata, który wywołał procedurę MPI_Recv z pasującymi argumentami)",
      "system skopiował dane do wewnętrznego bufora przesyłania danych",
      "system potwierdził rozpoczęcie operacji przesyłania danych",
      "żadna z powyższych odpowiedzi nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 101,
    "source": "PW",
    "source_num": 59,
    "extra": false,
    "type": "mc",
    "question": "Po powrocie z procedury odbierania nieblokującego MPI_Irecv( &a, ......... &req), gdzie a oznacza pewną zmienną, mamy pewność, że wartość a jest wartością otrzymaną w komunikacie P:",
    "correct": [
      "dopiero po powrocie z procedury MPI_Wait (& req, & stat)",
      "dopiero po powrocie z procedury MPI_Test (& req, & flag, & stat)"
    ],
    "wrong": [
      "od razu",
      "dopiero po sprawdzeniu zawartości obiektu req (type MPI_Request)",
      "dopiero po powrocie z procedury MPI_Wait (& req, & stat) i sprawdzeniu odpowiedniej zmiany wartości obiektu stat",
      "dopiero po powrocie z procedury MPI_Test (& req, & flag, & stat) i sprawdzeniu odpowiedniej zmiany wartości obiektu stat",
      "dopiero po powrocie z procedury MPI_Test (& req, & flag, & stat) i sprawdzeniu odpowiedniej zmiany wartości zmiennej flag",
      "żadna z powyższych odpowiedzi nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 102,
    "source": "PW",
    "source_num": 60,
    "extra": false,
    "type": "mc",
    "question": "Komunikator w MPI:",
    "correct": [
      "jest konieczny do realizacji dowolnego przesyłania komunikatów",
      "oznacza grupę procesów i związane z nią informacje umożliwiające wymianę komunikatów",
      "jest co najmniej jeden w programie; jeśli jeden, to jest to MPI_COMM_WORLD",
      "jest co najmniej jeden w programie, zawsze typu MPI_Comm"
    ],
    "wrong": [
      "jest konieczny tylko do przeprowadzenia komunikacji grupowej",
      "oznacza proces pośredniczący w wymianie komunikatów",
      "jest reprezentowany zawsze przez obiekt MPI_COMM_WORLD",
      "jest zawsze tylko jeden w programie",
      "żadne z powyższych twierdzeń nie jest prawdziwe"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 103,
    "source": "PW",
    "source_num": 61,
    "extra": false,
    "type": "mc",
    "question": "Zakładając początkowy stan zmiennych w kolejnych procesach w postaci: P1 (rank = 0), a = {11, 12, 13}, b = {0, 0, 0} P2 (rank = 1), a = {21, 22, 23}, b = {0, 0, 0} P3 (rank = 2), a = {31, 32, 33}, b = {0, 0, 0} operacja MPI_Scatter (a, 1, MPI_INT, b, 1, MPI_INT, 2, MPI_COMM_WORLD); prowadzi do stanu zmiennej b:",
    "correct": [
      "P1: {31, 0, 0}, P2: {32, 0, 0}, P3: {33, 0, 0}"
    ],
    "wrong": [
      "P1: {11, 12, 13}, P2: {21, 22, 23}, P3: {31, 32, 33}",
      "P1: {11, 12, 13}, P2: {11, 12, 13}, P3: {11, 12, 13}",
      "P1: {31, 32, 33}, P2: {31, 32, 33}, P3: {31, 32, 33}",
      "P1: {11, 0, 0}, P2: {12, 0, 0}, P3: {13, 0, 0}",
      "P1: {11, 12, 13}, P2: {12, 0, 0}, P3: {13, 0, 0}",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 104,
    "source": "PW",
    "source_num": 62,
    "extra": false,
    "type": "mc",
    "question": "Operacją komunikacji grupowej, która przekształca stan pamięci procesów: P1 (rank = 0): a = {11, 12, 13}, b = {0, 0, 0} P2 (rank = 1): a = {21, 22, 23}, b = {0, 0, 0} P3 (rank = 2): a = {31, 32, 33}, b = {0, 0, 0} w stan P1 (rank = 0): a = {11, 12, 13}, b = {31, 0, 0} P2 (rank = 1): a = {21, 22, 23}, b = {31, 0, 0} P3 (rank = 2): a = {31, 32, 33}, b = {31, 0, 0} jest:",
    "correct": [
      "MPI_Allreduce (a, b, 1, MPI_INT, MPI_MAX, MPI_COMM_WORLD); (!)"
    ],
    "wrong": [
      "MPI_Gather (a, 1, MPI_INT, b, 1, MPI_INT, 2, MPI_COMM_WORLD);",
      "MPI_Allgather (a, 1, MPI_INT, b, 1, MPI_INT, 2, MPI_COMM_WORLD);",
      "MPI_Scatter (a, 1, MPI_INT, b, 1, MPI_INT, 2, MPI_COMM_WORLD);",
      "MPI_Alltoall (a, 1, MPI_INT, b, 1, MPI_INT, MPI_COMM_WORLD);",
      "MPI_Reduce (a, b, 1, MPI_INT, MPI_SUM, 2, MPI_COMM_WORLD);",
      "MPI_Allreduce (a, b, 1, MPI_INT, MPI_SUM, MPICOMM_WORLD);"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 105,
    "source": "PW",
    "source_num": 63,
    "extra": false,
    "type": "mc",
    "question": "Jakie będą wartości zmiennych a, b i c po wykonaniu następującego fragmentu kodu: int a = 1; int b = 2; int c = 4; #pragma omp threadprivate b #pragma omp parallel firstprivate(c) num_threads(4) { int d = a + c; #pragma omp atomic c += 1; #pragma omp atomic a += 2; #pragma omp atomic d += 3; b = d; }",
    "correct": [
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "wrong": [
      "a = 3, b = 8, c = 4",
      "a = 3, b = 8, c = 5",
      "a = 3, b = 8, c = 5",
      "a = 3, b = 8, c = 8",
      "a = 9, b = 8, c = 4",
      "a = 9, b = 8, c = 5",
      "a = 9, b = 8, c = 8",
      "a = 3, b = 17, c = 4",
      "a = 3, b = 17, c = 5",
      "a = 3, b = 17, c = 8",
      "a = 9, b = 17, c = 4",
      "a = 9, b = 17, c = 5",
      "a = 9, b = 17, c = 8"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 106,
    "source": "PW",
    "source_num": 64,
    "extra": false,
    "type": "mc",
    "question": "Jakie wartości zmiennych a, b i c zostaną wypisane przez polecenie printf po wykonaniu następującego fragmentu kodu: int a = 1; int b = 2; int c = 3; #pragma omp threadprivate(b) #pragma omp parallel firstprivate (a) num_threads (4) { int d = a + c; #pragma omp atomic c += 1; #pragma omp atomic a += 2; #pragma omp atomic d += 3; b = d; printf (“a = %d, b = %d, c = %d\\n”, a, b, c); }",
    "correct": [
      "żadna odpowiedź nie jest prawdłowa"
    ],
    "wrong": [
      "a = 9, b = 16, c = 4",
      "a = 9, b = 16, c = 7",
      "a = 9, b = 7, c = 4",
      "a = 9, b = 7, c = 7",
      "a = 9, b = 16, c = 4"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 107,
    "source": "PW",
    "source_num": 65,
    "extra": false,
    "type": "mc",
    "question": "Jakie wartości zmiennych a, b i c zostaną wypisane przez polecenie printf po wykonaniu następującego fragmentu kodu: int a = 1; int b = 2; int c = 3; #pragma omp threadprivate (b) #pragma omp parallel firstprivate (c) num_threads (4) { int d = a + c; #pragma omp atomic c += 1; #pragma omp atomic a += 2; #pragma omp atomic d += 3; b =d; printf (“a = %d, b = %d, c = %d\\n”, a, b, c); }",
    "correct": [
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "wrong": [
      "a = 3, b = 16, c = 7;",
      "a = 3, b = 16, c = 4;",
      "a = 9, b = 7, c = 7;",
      "a = 9, b = 7, c = 4;",
      "a = 9, b = 7, c = 7;"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 108,
    "source": "PW",
    "source_num": 66,
    "extra": false,
    "type": "mc",
    "question": "Jakie będą wartości zmiennych a, b i c po wykonaniu następującego fragmentu kodu: int a = 1, int b = 2, int c = 3; #pragma omp threadprivate (b) #pragma omp parallel firstprivate (c) num_threads (4) { int d = a + c; #pragma omp atomic c += 1; #pragma omp atomic a += 2; #pragma omp atomic d += 3; b = d; }",
    "correct": [
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "wrong": [
      "a = 3, b = 7, c = 3",
      "a = 3, b = 7, c = 4",
      "a = 3, b = 7, c = 7",
      "a = 9, b = 7, c = 3",
      "a = 9, b = 7, c = 4",
      "a = 9, b = 7, c = 7",
      "a = 3, b = 16, c = 3",
      "a = 3, b = 16, c = 4",
      "a = 3, b = 16, c = 7",
      "a = 9, b = 16, c = 3",
      "a = 9, b = 16, c = 4",
      "a = 9, b = 16, c = 7"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 109,
    "source": "PW",
    "source_num": 67,
    "extra": false,
    "type": "mc",
    "question": "Kod: #pragma omp parallel for schedule (static, 3) for (i = 0; i < 13; ++i) {...} powoduje rozdzielenie iteracji równoległej pętli for pomiędzy 3 wątki (W1, W2, W3) wykonujące program w następujący sposób:",
    "correct": [
      "W1 – 0, 1, 2, 9, 10, 11; W2 – 3, 4, 5, 12; W3 – 6, 7, 8"
    ],
    "wrong": [
      "W1 – 0, 3, 6, 9, 12; W2 – 1, 4, 7, 10; W3 – 2, 5, 8, 11",
      "W1 – 0, 1, 6, 7, 12; W2 – 2, 3, 8, 9; W3 – 4, 5, 10, 11",
      "W1 – 0, 1, 2, 9, 10; W2 – 3, 4, 5, 11; W3 – 5, 7, 8, 12",
      "W1 – 0, 1, 2, 3, 4; W2 – 5, 6, 7, 8, 9; W3 – 10, 11, 12"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 110,
    "source": "PW",
    "source_num": 68,
    "extra": false,
    "type": "mc",
    "question": "Kod: #pragma omp parallel for schedule (static, 2) for (i = 0; i < 13; ++i) {...} powoduje rozdzielenie iteracji równoległej pętli for pomiędzy 3 wątki (W1, W2, W3) wykonujące program w następujący sposób:",
    "correct": [
      "W1 – 0, 1, 6, 7, 12; W2 – 2, 3, 8, 9; W3 – 4, 5, 10, 11;"
    ],
    "wrong": [
      "W1 – 0, 3, 6, 9, 12; W2 – 1, 4, 7, 10; W3 – 2, 5, 8, 11;",
      "W1 – 0, 1, 2, 9, 10, 11; W2 – 3, 4, 5, 12; W3 – 6, 7, 8;",
      "W1 – 0, 1, 2, 9, 10; W2 – 3, 4, 5, 11; W3 – 6, 7, 8, 12;",
      "W1 – 0, 1, 2, 3, 4; W2 – 5, 6, 7, 8, 9; W3 – 10, 11, 12;"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 111,
    "source": "PW",
    "source_num": 69,
    "extra": false,
    "type": "mc",
    "question": "Jakie zależności występują w poniższym kodzie (pominięto inicjalizowanie zmiennych): for (i = 2; i < N; ++i) { A [i] = B [i + 1] - C [i - 2]; A [i + 2] = 2 * D [i - 1]; }",
    "correct": [
      "występują zaleności wyjścia(WAW) przenoszone w pętli"
    ],
    "wrong": [
      "występują zależności wyjścia (WAW)",
      "występują anty-zależności (WAR)",
      "występują zależności rzeczywiste (RAW)",
      "występują anty-zależności (WAR) przenoszone w pętli",
      "występują zależności rzeczywiste (RAW) przenoszone w pętli"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 112,
    "source": "PW",
    "source_num": 70,
    "extra": false,
    "type": "mc",
    "question": "W przykładowym kodzie (pominięte inicjowanie zmiennych): for (i = 0; i < N; ++i) { A [i] =B [i + 1] – C [i - 2]; D [i + 2] = 2 * A [i - 1]; }",
    "correct": [
      "występują zależności rzeczywiste (RAW) przenoszone w pętli"
    ],
    "wrong": [
      "występują zależności wyjścia (WAW)",
      "występują anty-zależności (WAR)",
      "występują zależności rzeczywiste (RAW)",
      "występują zależności wyjścia (WAW) przenoszone w pętli",
      "występują anty-zależności (WAR) przenoszone w pętli",
      "nie ma zależności"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 113,
    "source": "PW",
    "source_num": 71,
    "extra": false,
    "type": "mc",
    "question": "W przykładowym kodzie (pominięto inicjalizowanie zmiennych) for (i = 0; i < N; ++i) { x += 2 * y + z; A [i] = 3 * x + w * y; y = 4 * i; }",
    "correct": [
      "występują anty-zależności (WAR)",
      "występują zależności rzeczywiste (RAW)"
    ],
    "wrong": [
      "występują zależności wyjścia (WAW)",
      "występują zależności wyjścia (WAW) przenoszone w pętli",
      "występują anty-zależności (WAR) przenoszone w pętli",
      "występują zależności rzeczywiste (RAW) przenoszone w pętli",
      "nie ma zależności"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 114,
    "source": "PW",
    "source_num": 72,
    "extra": false,
    "type": "mc",
    "question": "Umieszczenie jakiej pętli w połączeniu ze zmianą jednej z linijek kodu wewnątrz pętli usuwa zależność przenoszoną w następującej pętli (pominięte szczegóły na początku i końcu pętli): for (i = 0; i < N; ++i) { A [i] = B [i + 1] - C [i - 1]; D [i] = A [i]; }",
    "correct": [
      "w pętli jest zależność nieusuwalna",
      "w pętli nie ma żadnej przenoszonej zależności"
    ],
    "wrong": [
      "for (i = 0; i < N; ++i) E [i] = A [i]; oraz zmianaE [i] = B [i + 1] - C [i - 1];",
      "for (i = 0; i < N; ++i) E [i] = A [i]; oraz zmianaD [i + 1] = E [i + 1]",
      "for (i = 0; i < N; ++i) E [i] = A [i]; *+oraz zmianaD [i + 1] = E [i]",
      "for (i = 0; i < N; ++i) E [i] = A [i]; oraz zmianaD [i + 1] = E [i - 1]",
      "for (i = 0; i < N; ++i) E [i] = A [i]; oraz zmianaD [i] = E [i]"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 115,
    "source": "PW",
    "source_num": 73,
    "extra": false,
    "type": "mc",
    "question": "Umieszczenie jakiej pętli w połączeniu ze zmianą jednej z linijek kodu wewnątrz pętli usuwa zależność przenoszoną w następującej pętli (pominięte szczegóły na początku i na końcu pętli): for (i = 0; i < N; ++i) { A [i] = B [i + 1] – C [i - 1]; D [i + 1] = 2 * A [i - 1]; }",
    "correct": [
      "w pętli jest zależność nieusuwalna"
    ],
    "wrong": [
      "for (i = 0; i < N; ++i) E [i] = A [i]; oraz zmianaE [i] = B [i + 1] - C [i - 1];",
      "for (i = 0; i < N; ++i) E [i] = A [i]; oraz zmianaD [i + 1] = E [i + 1]",
      "for (i = 0; i < N; ++i) E [i] = A [i]; oraz zmianaD [i + 1] = E [i]",
      "for (i = 0; i < N; ++i) E [i] = A [i]; oraz zmianaD [i + 1] = E [i - 1]",
      "for (i = 0; i < N; ++i) E [i] = A [i]; oraz zmianaD [i] = E [i]",
      "w pętli nie ma żadnej przenoszonej zależności"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 116,
    "source": "PW",
    "source_num": 84,
    "extra": false,
    "type": "mc",
    "question": "Przyspieszenie programu rozważanego w analizie Amdahla ulega nasyceniu (przestaje rosnąć) mimo zwiększającej się liczby procesorów ponieważ program:",
    "correct": [
      "posiada część sekwencyjną, którą zawsze musi wykonywać tylko jeden proces (wątek)"
    ],
    "wrong": [
      "ma rozmiar rosnący wraz z liczbą procesorów",
      "wykazuje duży narzut na komunikację"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 117,
    "source": "PW",
    "source_num": 85,
    "extra": false,
    "type": "mc",
    "question": "Błędne założenie (w stosunku do praktyki stosowania rzeczywistych programów równoległych) w ramach analizy Amdahla polega na rozważaniu:",
    "correct": [
      "zadań o stałym rozmiarze przy rosnącej liczbie procesorów"
    ],
    "wrong": [
      "zbyt dużej liczby procesorów",
      "zadań zbyt trudnych do zrównoleglenia"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 118,
    "source": "PW",
    "source_num": 86,
    "extra": false,
    "type": "mc",
    "question": "W analizie Gustaffsona rozważa się zadania w których rozmiar rośnie wraz z liczbą procesorów ale czas rozwiązania programem równoległym na p procesorach jest stały albowiem zakłada się że:",
    "correct": [
      "udział procentowy części sekwencyjnej w czasie rozwiązania na jednym procesorze maleje wraz z wzrostem rozmiaru zadania"
    ],
    "wrong": [
      "czas komunikacji rośnie wolniej niż czas obliczeń",
      "część równoległa osiąga przyspieszenie ponadliniowe"
    ],
    "uncertain": [
      "udział procentowy części sekwencyjnej w czasie rozwiązania na jednym procesorze maleje wraz z wzrostem rozmiaru zadania"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 119,
    "source": "PW",
    "source_num": 87,
    "extra": false,
    "type": "mc",
    "question": "W analizie Amdahla rozważa się zrównoleglenie programu:",
    "correct": [
      "którego czas wykonania sekwencyjnego jest równy sumie czasu wykonania części sekwencyjnej i części dającej się zrównoleglić",
      "który posiada część, którą zawsze musi wykonywać jeden proces (wątek)",
      "który posiada część dającą się zrównoleglić idealnie",
      "który daje się wydajniej (efektywniej) zrównoleglić niż zdecydowana większość programów rzeczywistych"
    ],
    "wrong": [
      "którego sekwencyjny czas rozwiązania problemu jest najkrótszy z możliwych",
      "który posiada część dającą się zrównoleglić z idealną komunikacją"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 120,
    "source": "PW",
    "source_num": 88,
    "extra": false,
    "type": "mc",
    "question": "W analizie Amdahla graniczną wartość przyspieszenia obliczeń , której nie może przekroczy program o czasie wykonywania T(p) = s+r/p jest (w poniższych wzorach f oznacza t.zw. udział części sekwencyjnej f = s/(s+r))",
    "correct": [
      "1/f"
    ],
    "wrong": [
      "f",
      "1+f",
      "1+ 1/f",
      "1/(1+f)",
      "1/( 1+ 1/f)",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 121,
    "source": "PW",
    "source_num": 89,
    "extra": false,
    "type": "mc",
    "question": "Złożoność obliczeniowa algorytmu to:",
    "correct": [
      "ilość zasobów komputera wymaganych do realizacji algorytmu",
      "ilość zasobów komputera wymaganych do realizacji algorytmu jako funkcja rozmiaru danych wejściowych"
    ],
    "wrong": [
      "stopień skomplikowania algorytmu",
      "wymagany stopień skomplikowania komputera konieczny do realizacji algorytmu",
      "ilość zasobów komputera wymaganych do realizacji algorytmu dla najbardziej wymagających (skomplikowanych) danych"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 122,
    "source": "PW",
    "source_num": 90,
    "extra": false,
    "type": "mc",
    "question": "Złożoność pesymistyczna algorytmu oznacza:",
    "correct": [
      "złożoność dla najmniej korzystnych przypadków danych wejściowych"
    ],
    "wrong": [
      "złożoność dla największych dopuszczalnych danych",
      "złożoność dla najmniej korzystnych warunków realizacji zadania",
      "złożoność dla najmniej korzystnych architektur procesorów"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 123,
    "source": "PW",
    "source_num": 91,
    "extra": false,
    "type": "mc",
    "question": "Algorytmy sortowania posiadają złożoność czasową:",
    "correct": [
      "problem nie posiada rozwiązania, prowadzi do sprzeczności"
    ],
    "wrong": [
      "liniową (problem „łatwy”)",
      "wielomianową (problem „łatwy”)",
      "wykładniczą (problem „trudny”)",
      "silnia (problem „trudny”)",
      "nie można określić nie podając o jaką złożoność chodzi (optymistyczną, pesymistyczną czy oczekiwaną)"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 124,
    "source": "PW",
    "source_num": 92,
    "extra": false,
    "type": "mc",
    "question": "Złożoność czasowa algorytmu obliczania średniej ciągu liczb jest funkcją liczby liczb w ciągu:",
    "correct": [
      "nie można określić nie podając o jaką złożoność chodzi (optymistyczną, pesymistyczną czy oczekiwaną)"
    ],
    "wrong": [
      "liniową (problem „łatwy”)",
      "wielomianową (problem „łatwy”)",
      "wykładniczą (problem „trudny”)",
      "silnia (problem „trudny”)",
      "problem nie posiada rozwiązania, prowadzi do sprzeczności"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 125,
    "source": "PW",
    "source_num": 15,
    "extra": true,
    "type": "mc",
    "question": "Środowisko RPC:",
    "correct": [
      "korzysta zawsze z protokołu TCP/IP",
      "stosuje transformację argumentów przesyłanych przez sieć do wspólnego formatu",
      "wymusza określanie argumentów jako strumieni bajtów",
      "posługuje się mechanizmem wersji programów"
    ],
    "wrong": [
      "może prowadzić system operacyjny do konfliktów przy ustalaniu numerów portów serwera",
      "umożliwia zdalne wywołanie procedur z wieloma argumentami"
    ],
    "uncertain": [
      "korzysta zawsze z protokołu TCP/IP",
      "stosuje transformację argumentów przesyłanych przez sieć do wspólnego formatu",
      "wymusza określanie argumentów jako strumieni bajtów",
      "posługuje się mechanizmem wersji programów"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 126,
    "source": "PW",
    "source_num": 16,
    "extra": true,
    "type": "mc",
    "question": "Model dostępu do pamięci wspólnej UMA (uniform memory access):",
    "correct": [
      "jest charakterystyczny dla systemów SMP (symmetric multiprocessing)",
      "oznacza, że zawartość każdej komórki pamięci jest dostępna dla każdego procesora",
      "oznacza, że zawartość każdej komórki jest dostępna dla każdego procesora w takim samym czasie"
    ],
    "wrong": [
      "jest charakterystyczny dla systemów DSM (distributed shared memory)"
    ],
    "uncertain": [
      "oznacza, że zawartość każdej komórki jest dostępna dla każdego procesora w takim samym czasie"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 127,
    "source": "PW",
    "source_num": 32,
    "extra": true,
    "type": "mc",
    "question": "Maszyna SIMD to:",
    "correct": [
      "komputer wektorowy",
      "komputer macierzowy",
      "komputer wieloprocesorowy",
      "komputer SMP"
    ],
    "wrong": [],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 128,
    "source": "PW",
    "source_num": 33,
    "extra": true,
    "type": "mc",
    "question": "SMP – czym się charakteryzuje:",
    "correct": [
      "słabo skalowalne",
      "związek z NUMA",
      "związek z UMA",
      "związek z ccNUMA"
    ],
    "wrong": [
      "niski koszt"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 129,
    "source": "PW",
    "source_num": 34,
    "extra": true,
    "type": "mc",
    "question": "Architektura komputerów równoległych, w której występuje wiele strumieni danych i jeden strumień rozkazów jest nazywana w klasyfikacji Flynna architekturą:",
    "correct": [
      "SIMD"
    ],
    "wrong": [
      "MISD",
      "SISD",
      "MIMD",
      "MISD",
      "SISD",
      "MPMD",
      "SPMD",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 130,
    "source": "PW",
    "source_num": 36,
    "extra": true,
    "type": "mc",
    "question": "Współczesne procesory wielordzeniowe realizują model przetwarzania (na poziomie wielu rdzeni, nie na poziomie pojedynczego rdzenia):",
    "correct": [
      "MIMD",
      "MPMD",
      "SPMD"
    ],
    "wrong": [
      "MISD",
      "SIMD",
      "SISD",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [
      "MPMD",
      "SPMD"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 131,
    "source": "PW",
    "source_num": 39,
    "extra": true,
    "type": "mc",
    "question": "Rozkazy typu SIMD we współczesnych procesorach oznaczają rozkazy:",
    "correct": [
      "wykonywane równolegle na kilku liczbach",
      "dotyczące zawartości rejestrów zawierających kilka spakowanych liczb",
      "wykonywane we współpracy z koprocesorem wektorowym"
    ],
    "wrong": [
      "dotyczące wyłącznie grafiki",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [
      "dotyczące zawartości rejestrów zawierających kilka spakowanych liczb",
      "wykonywane we współpracy z koprocesorem wektorowym"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 132,
    "source": "PW",
    "source_num": 41,
    "extra": true,
    "type": "mc",
    "question": "Nazwa NUMA oznacza systemy wieloprocesorowe (wielordzeniowe):",
    "correct": [
      "z niejednolitym dostępem do pamięci(zawartości różnych komórek pamięci operacyjnej mogą być dostarczane procesorowi w różnych czasach)",
      "skalujące się (dające się praktycznie wykorzystywać) dla liczb procesorów do rzędu kilkuset"
    ],
    "wrong": [
      "z jednolitym dostępem do pamięci (zawartość każdej komórki pamięci operacyjnej dostarczana procesorowi w takim samym czasief)",
      "skalujące się (dające się praktycznie wykorzystywać) dla liczb procesorów do rzędu kilkunastu",
      "skalujące się (dające się praktycznie wykorzystywać) dla liczb procesorów do rzędu kilkudziesięciu"
    ],
    "uncertain": [
      "z niejednolitym dostępem do pamięci(zawartości różnych komórek pamięci operacyjnej mogą być dostarczane procesorowi w różnych czasach)",
      "skalujące się (dające się praktycznie wykorzystywać) dla liczb procesorów do rzędu kilkuset"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 133,
    "source": "PW",
    "source_num": 42,
    "extra": true,
    "type": "mc",
    "question": "Model dostępu do pamięci wspólnej ccNUMA (cache-coherent non-uniform memory access):",
    "correct": [
      "jest charakterystyczny dla systemów DSM (distributed shared memory)",
      "oznacza że zawartość każdej komórki pamięci jest dostępna dla każdego procesora",
      "jest charakterystyczny dla systemów SMP (symmetric multiprocessing)"
    ],
    "wrong": [
      "oznacza że zawartość każdej komórki jest dostępna dla każdego procesora w takim samym czasie",
      "żadna odpowiedź nie jest prawdziwa"
    ],
    "uncertain": [
      "jest charakterystyczny dla systemów SMP (symmetric multiprocessing)"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 134,
    "source": "PW",
    "source_num": 43,
    "extra": true,
    "type": "mc",
    "question": "Architektura DSM (distributed shared memory):",
    "correct": [
      "jest najczęściej związana z modelem dostępu do pamięci NUMA (non-uniform memory access)",
      "może być stosowana w systemach o liczbie procesorów przekraczającej kilka tysięcy",
      "jest najczęściej związana z modelem dostępu do pamięci ccNUMA (cache-coherent non-uniform memory access)",
      "jest najlepiej skalującą się architekturą maszyn z pamięcią wspólną"
    ],
    "wrong": [
      "jest najczęściej związana z modelem dostępu do pamięci UMA (uniform memory access)",
      "jest najtańszą architekturą komputerów wieloprocesorowych",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [
      "jest najczęściej związana z modelem dostępu do pamięci ccNUMA (cache-coherent non-uniform memory access)",
      "jest najlepiej skalującą się architekturą maszyn z pamięcią wspólną"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 135,
    "source": "PW",
    "source_num": 44,
    "extra": true,
    "type": "mc",
    "question": "Nazwa SMP (symmetric multiprocessing) oznacza systemy:",
    "correct": [
      "wieloprocesorowe, tzw. symetryczne (każdy procesor widzi system tak samo)",
      "z niejednolitym dostępem do pamięci NUMA (zawartości różnych komórek pamięci operacyjnej mogą być dostarczane procesorowi w różnych czasach)",
      "z jednolitym dostępem do pamięci UMA (zawartość każdej komórki pamięci operacyjnej dostarczana procesorowi w takim samym czasie)"
    ],
    "wrong": [
      "jednoprocesorowe",
      "jednoprocesorowe z kartami graficznymi używanymi do obliczeń ogólnego przeznaczenia"
    ],
    "uncertain": [
      "z jednolitym dostępem do pamięci UMA (zawartość każdej komórki pamięci operacyjnej dostarczana procesorowi w takim samym czasie)"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 136,
    "source": "PW",
    "source_num": 45,
    "extra": true,
    "type": "mc",
    "question": "Komputery SMP realizują model przetwarzania:",
    "correct": [
      "MIMD"
    ],
    "wrong": [
      "SIMD",
      "MISD",
      "SISD"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 137,
    "source": "PW",
    "source_num": 47,
    "extra": true,
    "type": "mc",
    "question": "Rdzeń procesora wielordzeniowego:",
    "correct": [
      "może mieć własny dostęp do fragmentu pamięci głównej (architektura NUMA)"
    ],
    "wrong": [
      "jest bardzo zbliżony do dawnych procesorów (jednordzeniowych), ale nie potrafi wykonywać bardziej złożonych rozkazów",
      "jest bardzo zbliżony do dawnych procesorów (jednordzeniowych), ale bez pamięci podręcznej L2 i L3",
      "wydziela znacznie mniej ciepła niż procesor jednordzeniowy o tej samej częstotliwości pracy",
      "żadne stwierdzenie nie jest prawdziwe"
    ],
    "uncertain": [
      "może mieć własny dostęp do fragmentu pamięci głównej (architektura NUMA)"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 138,
    "source": "PW",
    "source_num": 74,
    "extra": true,
    "type": "mc",
    "question": "Szerokość połowienia danego układu (topologii) procesorów oznacza:",
    "correct": [
      "minimalną liczbę krawędzi, których usunięcie dzieli układ na pół"
    ],
    "wrong": [
      "minimalną liczbę procesorów na przekroju połowiczym układu",
      "maksymalną liczbę krawędzi łączących połowę liczby procesorów",
      "każda odpowiedź jest prawidłowa",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 139,
    "source": "PW",
    "source_num": 75,
    "extra": true,
    "type": "mc",
    "question": "Szerokość połowienia danego układu (topologii) procesorów w największym stopniu informuje o:",
    "correct": [
      "przepustowości układu"
    ],
    "wrong": [
      "odporności układu na awarie",
      "zdolności efektywnej realizacji rozgłaszania",
      "koszcie układu",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [
      "przepustowości układu"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 140,
    "source": "PW",
    "source_num": 76,
    "extra": true,
    "type": "mc",
    "question": "Liczba krawędzi układu (topologii) procesorów w największym stopniu informuje o:",
    "correct": [
      "koszcie układu",
      "odporności układu na awarie"
    ],
    "wrong": [
      "przepustowości układu",
      "koszcie stworzenia sieci dla danego układu"
    ],
    "uncertain": [
      "koszcie układu",
      "odporności układu na awarie"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 141,
    "source": "PW",
    "source_num": 77,
    "extra": true,
    "type": "mc",
    "question": "Średnica topologii hiperkostki dla p procesorów wynosi:",
    "correct": [
      "log p"
    ],
    "wrong": [
      "1/2 p",
      "p",
      "p log p",
      "1/2 p log p",
      "żadna odpowiedź nie jest poprawna"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 142,
    "source": "PW",
    "source_num": 78,
    "extra": true,
    "type": "mc",
    "question": "Liczba krawędzi topologii hiperkostki dla p procesów wynosi",
    "correct": [
      "1/2 log p"
    ],
    "wrong": [
      "2p",
      "p*p log p"
    ],
    "uncertain": [
      "1/2 log p"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 143,
    "source": "PW",
    "source_num": 79,
    "extra": true,
    "type": "mc",
    "question": "Średnica topologii torusa 2D dla p procesów wynosi:",
    "correct": [
      "sqrt(p)"
    ],
    "wrong": [
      "1/2 sqrt(p)",
      "p * sqrt(p) d 1/2 *p * sqrt(p)",
      "żadna odpowiedź nie jest prawidłowa"
    ],
    "uncertain": [],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 144,
    "source": "PW",
    "source_num": 80,
    "extra": true,
    "type": "mc",
    "question": "Szerokość połowienia topologii torusa 2D dla p procesów wynosi:",
    "correct": [
      "2*sqrt(p)"
    ],
    "wrong": [
      "p",
      "1/2p*sqrt(p)"
    ],
    "uncertain": [
      "2*sqrt(p)"
    ],
    "uncertainOpen": false,
    "explanation": ""
  },
  {
    "id": 145,
    "source": "PW",
    "source_num": 81,
    "extra": true,
    "type": "mc",
    "question": "Połączalność krawędziowa (arc connectivity) danego układu (topologii) procesorów oznacza:",
    "correct": [
      "minimalną liczbę krawędzi, których usunięcie dzieli układ na dwie sieci rozłączne Historia zmian v.1.03 - zmiany w zadaniach 7, 16, 25, 27, 32, 33, 37, 42, 44, 50, 57, 58, 59, 69, 87, 91, 92 Przeniesione z powrotem do sekcji obowiązkowych 35, 37, 38, 40, 46, 48 v.1.02 - zmiany w zadaniach 1, 2, 9, 14, 27, 32, 48, 49, 51, 52, 57, 58, 60, 90 v.1.01 - zadania nieobowiązkowe przesunięte na koniec - zmiany w zadaniach: 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 24, 25, 26, 55, 56, 69, 71, 87 - zlikwidowane powtórzenia zadań: (1, 17), (28, 82), (29, 83)"
    ],
    "wrong": [
      "maksymalną liczbę krawędzi łączących połowę liczby procesorów",
      "minimalną liczbę krawędzi, których usunięcie dzieli układ na pół"
    ],
    "uncertain": [
      "minimalną liczbę krawędzi, których usunięcie dzieli układ na dwie sieci rozłączne Historia zmian v.1.03 - zmiany w zadaniach 7, 16, 25, 27, 32, 33, 37, 42, 44, 50, 57, 58, 59, 69, 87, 91, 92 Przeniesione z powrotem do sekcji obowiązkowych 35, 37, 38, 40, 46, 48 v.1.02 - zmiany w zadaniach 1, 2, 9, 14, 27, 32, 48, 49, 51, 52, 57, 58, 60, 90 v.1.01 - zadania nieobowiązkowe przesunięte na koniec - zmiany w zadaniach: 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 24, 25, 26, 55, 56, 69, 71, 87 - zlikwidowane powtórzenia zadań: (1, 17), (28, 82), (29, 83)"
    ],
    "uncertainOpen": false,
    "explanation": ""
  }
];
