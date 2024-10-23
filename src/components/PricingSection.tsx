import { CheckIcon } from "@heroicons/react/20/solid";
import BlurFade from "./ui/blur-fade";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Basic",
    id: "tier-freelancer",
    href: "#",
    price: "699 zł",
    hours: "10h",
    description:
      "Idealny dla freelancerów, którzy potrzebują wsparcia w organizacji zadań administracyjnych i zarządzaniu dokumentacją.",
    features: [
      "Profesjonalna obsługa administracyjna",
      "Zarządzanie dokumentami i plikami",
      "Wsparcie w organizacji harmonogramów",
      "Pomoc w zarządzaniu komunikacją e-mailową",
    ],
    mostPopular: false,
  },
  {
    name: "Medium",
    id: "tier-startup",
    href: "#",
    price: "1399 zł",
    hours: "20h",
    description:
      "Skierowany do dynamicznie rozwijających się firm, które potrzebują zaawansowanej pomocy administracyjnej i automatyzacji procesów.",
    features: [
      "Zarządzanie większą liczbą projektów",
      "Automatyzacja zadań administracyjnych",
      "Wsparcie w prowadzeniu mediów społecznościowych",
      "Zaawansowane narzędzia do analizy działań",
    ],
    mostPopular: true,
  },
  {
    name: "Pro",
    id: "tier-enterprise",
    href: "#",
    price: "2099 zł",
    hours: "30h",
    description:
      "Kompleksowe wsparcie dla dużych firm, obejmujące pełną automatyzację procesów oraz dedykowane narzędzia do zarządzania na poziomie korporacyjnym.",
    features: [
      "Dedykowany zespół wsparcia",
      "Nieograniczone zarządzanie projektami i dokumentacją",
      "Automatyzacja procesów HR, marketingu i finansów",
      "Narzędzia do tworzenia niestandardowych raportów i analiz",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <section id="pricing">
      <div className="bg-transparent p-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mt-2 text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-600 via-gray-200 to-white bg-clip-text text-transparent sm:text-5xl">
                Plany cenowe dla zespołów każdej wielkości
              </h2>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
              Wybierz plan, który najlepiej odpowiada Twoim potrzebom.
              Zapewniamy wsparcie, które pomaga usprawnić pracę Twojej firmy i
              skupić się na tym, co ważne.
            </p>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {tiers.map((tier) => (
                <motion.div whileHover={{ scale: 1.03 }}>
                  <div
                    key={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? "bg-gray-950 ring-1 ring-amber-400 ring-offset-amber-300 "
                        : " bg-gray-900 ring-1 ring-white",
                      "rounded-3xl p-8 xl:p-10 min-h-full"
                    )}
                  >
                    <div className="flex items-center justify-between gap-x-4">
                      <div className="flex gap-2">
                        <h3
                          id={tier.id}
                          className="text-lg font-semibold leading-8 text-white"
                        >
                          {tier.name}
                        </h3>
                        <h3
                          id={tier.id}
                          className="text-lg font-semibold leading-8 text-white "
                        >
                          {tier.hours}
                        </h3>
                      </div>
                      {tier.mostPopular ? (
                        <p className="rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                          Most popular
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-300">
                      {tier.description}
                    </p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-white">
                        {tier.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-gray-300">
                        /miesięcznie
                      </span>
                    </p>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={classNames(
                        tier.mostPopular
                          ? "bg-amber-400 text-white shadow-sm bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500"
                          : "bg-white/30 text-white hover:bg-white/20 focus-visible:outline-white",
                        "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      )}
                    >
                      Zamów
                    </a>
                    <ul
                      role="list"
                      className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                    >
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex justify-start text-left gap-x-3"
                        >
                          <CheckIcon
                            aria-hidden="true"
                            className={classNames(
                              tier.mostPopular
                                ? "h-6 w-5 flex-none text-amber-400"
                                : "h-6 w-5 flex-none text-white"
                            )}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
