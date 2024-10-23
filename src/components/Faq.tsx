import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import BlurFade from "./ui/blur-fade";

const faqs = [
  {
    question: "Jakie usługi oferuje ASSISTLINE?",
    answer:
      "ASSISTLINE oferuje szeroki zakres usług wirtualnej asysty, w tym obsługę klienta, zarządzanie dokumentami, zarządzanie mediami społecznościowymi, wsparcie rekrutacyjne oraz badania rynkowe. Pomagamy firmom skoncentrować się na rozwoju, przejmując codzienne obowiązki.",
  },
  {
    question: "Czy mogę dostosować usługi do potrzeb mojej firmy?",
    answer:
      "Oczywiście! Nasze usługi są elastyczne i możesz wybrać te zadania lub pakiety, które najlepiej odpowiadają potrzebom Twojej firmy. Niezależnie od tego, czy chodzi o zarządzanie e-mailami, czy obsługę zapytań klientów, dostosujemy nasze usługi do Twojego przepływu pracy.",
  },
  {
    question: "Jak mogę rozpocząć współpracę z ASSISTLINE?",
    answer:
      "Rozpoczęcie współpracy jest proste! Skontaktuj się z nami przez naszą stronę internetową lub zarejestruj się, wybierając odpowiedni pakiet usług. Zajmiemy się resztą i szybko wdrożymy się w działanie Twojej firmy.",
  },
  {
    question: "Jakie są korzyści z korzystania z usług ASSISTLINE?",
    answer:
      "Korzystając z usług ASSISTLINE, zyskujesz więcej czasu na rozwój biznesu. Zajmujemy się administracyjnymi i operacyjnymi zadaniami, co pozwala Ci skupić się na kluczowych działaniach. Dodatkowo, nasze usługi mogą być skalowane, aby odpowiadać rosnącym potrzebom Twojej firmy.",
  },
  {
    question: "Czy oferujecie wsparcie techniczne?",
    answer:
      "Tak, oferujemy wsparcie techniczne, które obejmuje rozwiązywanie problemów z systemami, zarządzanie stronami internetowymi, a także inne zadania techniczne, aby zapewnić płynne działanie Twojej firmy.",
  },
  {
    question: "Jak długo trwa odpowiedź na zapytania w ramach wsparcia?",
    answer:
      "Czas odpowiedzi zależy od wybranego planu. W ramach naszych wyższych pakietów, takich jak PRO, oferujemy odpowiedzi w ciągu 1 godziny. Dla innych planów czas odpowiedzi wynosi do 24-48 godzin.",
  },
  {
    question: "Czy mogę przetestować usługi ASSISTLINE przed zakupem?",
    answer:
      "Tak, oferujemy bezpłatną konsultację, aby pomóc Ci zrozumieć, jak nasze usługi mogą wspierać Twój biznes. Po konsultacji możesz zdecydować, które usługi będą dla Ciebie najlepsze.",
  },
  {
    question: "Czy moje dane są bezpieczne z ASSISTLINE?",
    answer:
      "Zdecydowanie tak! Bezpieczeństwo Twoich danych jest dla nas priorytetem. Stosujemy najnowsze technologie zabezpieczeń, aby chronić poufne informacje i zapewnić pełną prywatność Twoich danych.",
  },
  {
    question: "Jakie są opcje płatności za usługi ASSISTLINE?",
    answer:
      "Oferujemy różne opcje płatności, w tym miesięczne i roczne subskrypcje. Wybierz plan, który najbardziej odpowiada Twoim potrzebom, a my zadbamy o resztę.",
  },
];

export default function Faq() {
  return (
    <section id="faq">
      <div className="bg-transparent p-16">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="mx-auto max-w-4xl divide-y divide-white/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-white/10">
              {faqs.map((faq, index) => (
                <BlurFade delay={0.1 + index * 0.1} inView>
                  <Disclosure key={faq.question} as="div" className="pt-6">
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                        <motion.span
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 1.05 }}
                          className="text-base font-semibold leading-7"
                        >
                          {faq.question}
                        </motion.span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusSmallIcon
                            aria-hidden="true"
                            className="h-6 w-6 group-data-[open]:hidden text-amber-400"
                          />
                          <MinusSmallIcon
                            aria-hidden="true"
                            className="h-6 w-6 [.group:not([data-open])_&]:hidden text-amber-400"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-left leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </Disclosure>
                </BlurFade>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
