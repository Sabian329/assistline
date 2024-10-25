import {
  CalendarIcon,
  ClipboardDocumentIcon,
  CubeTransparentIcon,
  PhoneIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  ShareIcon,
  ChartBarIcon,
  DocumentIcon,
} from "@heroicons/react/20/solid";

export const faqs = [
  {
    question: "Czy usługi można dostosować do potrzeb mojej firmy?",
    answer:
      "Tak! Nasze usługi są elastyczne i możesz wybrać te zadania lub pakiety, które najlepiej odpowiadają Twoim potrzebom. Niezależnie od tego, czy chodzi o zarządzanie e-mailami, czy obsługę zapytań klientów, dostosujemy zakres działań do specyfiki Twojej firmy.",
  },
  {
    question: "Jak rozpocząć współpracę z ASSISTLINE?",
    answer:
      "To proste! Skontaktuj się z nami przez stronę internetową lub wybierz pakiet usług. Zajmiemy się resztą i wdrożymy nasze działania tak, by płynnie wspierały Twój biznes.",
  },
  {
    question: "Jakie korzyści daje współpraca z ASSISTLINE?",
    answer:
      "Korzystając z ASSISTLINE, zyskujesz więcej czasu na kluczowe działania biznesowe. My zajmiemy się zadaniami administracyjnymi i operacyjnymi, co pozwoli Ci skoncentrować się na rozwoju firmy. Nasze usługi można również skalować, aby odpowiadały Twoim rosnącym potrzebom.",
  },
  {
    question: "Czy oferujecie wsparcie techniczne?",
    answer:
      "Tak, świadczymy wsparcie techniczne, obejmujące m.in. zarządzanie stronami internetowymi i rozwiązywanie problemów z systemami, aby zapewnić płynne funkcjonowanie Twojej firmy.",
  },
  {
    question: "Jak długo czekam na odpowiedź na zapytanie?",
    answer:
      "Czas odpowiedzi zależy od wybranego planu. Dla pakietu PRO zapewniamy odpowiedź w ciągu godziny, a dla pozostałych planów maksymalnie w ciągu 24-48 godzin.",
  },
  {
    question: "Czy mogę przetestować usługi ASSISTLINE przed zakupem?",
    answer:
      "Tak, oferujemy bezpłatną konsultację, dzięki której możesz zobaczyć, jak nasze usługi mogą wspierać Twoją firmę. Po konsultacji zdecydujesz, które usługi będą dla Ciebie najlepsze.",
  },
  {
    question: "Czy moje dane są bezpieczne z ASSISTLINE?",
    answer:
      "Oczywiście. Bezpieczeństwo danych to nasz priorytet. Korzystamy z nowoczesnych zabezpieczeń, aby zapewnić pełną ochronę i prywatność Twoich danych.",
  },
  {
    question: "Jakie są dostępne opcje płatności za usługi ASSISTLINE?",
    answer:
      "Oferujemy płatności miesięczne i roczne. Wybierz opcję, która najlepiej odpowiada Twoim preferencjom, a my zajmiemy się resztą.",
  },
];

export const mainCards = [
  {
    name: "Obsługa Klienta",
    description:
      "Profesjonalne wsparcie w obsłudze telefonów, maili i zapytań klientów, aby Twoja firma mogła skupić się na rozwoju.",
    icon: PhoneIcon,
  },
  {
    name: "Wsparcie Administracyjne",
    description:
      "Oferujemy kompleksowe wsparcie administracyjne, w tym zarządzanie dokumentami, przygotowywanie raportów oraz organizację zadań biurowych.",
    icon: ClipboardDocumentIcon,
  },
  {
    name: "Zarządzanie Projektami",
    description:
      "Oferujemy kompleksowe wsparcie w zarządzaniu projektami, w tym koordynację zadań, organizację spotkań oraz monitorowanie postępów.",
    icon: CubeTransparentIcon,
  },
  {
    name: "Zarządzanie Kalendarzem",
    description:
      "Pomagamy w organizacji spotkań, terminów i harmonogramów, abyś mógł efektywnie zarządzać swoim czasem.",
    icon: CalendarIcon,
  },
  {
    name: "Zarządzanie Dokumentacją",
    description:
      "Dbamy o porządek i organizację dokumentacji firmowej, w tym umów, raportów oraz pism administracyjnych.",
    icon: DocumentIcon,
  },
  {
    name: "Wsparcie w Rekrutacji",
    description:
      "Pomagamy w procesie rekrutacji – od przeglądania CV, przez wstępną weryfikację po organizowanie rozmów kwalifikacyjnych.",
    icon: UserGroupIcon,
  },
  {
    name: "Research Rynkowy",
    description:
      "Przeprowadzamy dokładne badania rynkowe, aby dostarczyć Ci aktualnych danych potrzebnych do podejmowania decyzji biznesowych.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Prowadzenie Social Media",
    description:
      "Zajmujemy się kompleksowym prowadzeniem Twoich mediów społecznościowych, tworząc treści, publikując posty oraz odpowiadając na interakcje z obserwującymi.",
    icon: ShareIcon,
  },
  {
    name: "Tworzenie Raportów",
    description:
      "Generujemy szczegółowe raporty, które pomogą Ci śledzić postępy w pracy i podejmować świadome decyzje biznesowe.",
    icon: ChartBarIcon,
  },
];

export const pricingTiers = [
  {
    name: "Basic",
    id: 0,
    href: "#email-section",
    price: "699 zł",
    hours: "10h",
    description:
      "Idealny dla małych firm i freelancerów, którzy potrzebują wsparcia administracyjnego i organizacyjnego.",
    features: [
      "Profesjonalna obsługa administracyjna",
      "Zarządzanie dokumentami i plikami",
      "Pomoc w organizacji kalendarza",
      "Wsparcie w zarządzaniu pocztą e-mail",
    ],
    mostPopular: false,
  },
  {
    name: "Medium",
    id: 1,
    href: "#email-section",
    price: "1399 zł",
    hours: "20h",
    description:
      "Dla firm, które potrzebują zaawansowanego wsparcia administracyjnego oraz automatyzacji procesów biznesowych.",
    features: [
      "Zarządzanie wieloma projektami",
      "Automatyzacja zadań administracyjnych",
      "Wsparcie w prowadzeniu mediów społecznościowych",
      "Zaawansowane narzędzia analityczne",
    ],
    mostPopular: true,
  },
  {
    name: "PRO",
    id: 3,
    href: "#email-section",
    price: "2199 zł",
    hours: "30h",
    description:
      "Kompleksowe wsparcie dla dużych firm, w tym pełna automatyzacja procesów i dedykowane narzędzia zarządzania.",
    features: [
      "Dedykowany zespół wsparcia",
      "Pełne zarządzanie projektami i dokumentacją",
      "Automatyzacja procesów HR, marketingu i finansów",
      "Tworzenie niestandardowych raportów i analiz",
    ],
    mostPopular: false,
  },
];
