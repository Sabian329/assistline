import {
  CalendarIcon,
  CloudArrowUpIcon,
  DocumentIcon,
} from "@heroicons/react/20/solid";
import BlurFade from "./ui/blur-fade";

const aboutUs = {
  points: [
    {
      icon: CloudArrowUpIcon,
      title: " W pełni zautomatyzowane procesy.",
      description:
        "Oferujemy automatyzację zadań takich jak zarządzanie dokumentami, kalendarzami oraz mediami społecznościowymi, co pozwala na oszczędność czasu i zwiększenie efektywności.",
    },
    {
      icon: DocumentIcon,
      title: "Zarządzanie dokumentacją.",
      description:
        "Dbamy o porządek i organizację dokumentacji firmowej, w tym umów, raportów oraz innych pism administracyjnych.",
    },
    {
      icon: CalendarIcon,
      title: "Zarządzanie kalendarzem i harmonogramem.",
      description:
        "Pomagamy w organizacji spotkań, terminów i harmonogramów, abyś mógł efektywnie zarządzać swoim czasem i zadaniami.",
    },
  ],
};

export default function AboutUS() {
  return (
    <section id="about-us" className="min-h-screen">
      <div className="relative">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end ">
          <div className="px-10 lg:contents lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:my-32 lg:w-full lg:grow xl:ml-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              />
            </div>
          </div>
          <div className="px-6 flex  lg:contents  justify-center ">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <BlurFade delay={0.1} inView>
                <p className="text-base font-semibold leading-7 text-amber-400">
                  Szybkie wsparcie, które rozwija Twój biznes
                </p>
              </BlurFade>
              <BlurFade delay={0.1} inView>
                <h1 className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-500 via-gray-400 to-white bg-clip-text text-transparent sm:text-4xl">
                  Zautomatyzuj swoją pracę z ASSISTLINE
                </h1>
              </BlurFade>
              <BlurFade delay={0.1} inView>
                <p className="mt-6 text-xl leading-8 text-gray-100">
                  ASSISTLINE oferuje nowoczesne rozwiązania dla firm, które chcą
                  zwiększyć wydajność i zoptymalizować swoje procesy. Od
                  wsparcia technicznego po zarządzanie dokumentacją i obsługę
                  klienta – pomagamy skupić się na rozwoju, przejmując codzienne
                  obowiązki.
                </p>
              </BlurFade>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-100 lg:max-w-none">
                <BlurFade delay={0.1} inView>
                  <p>
                    Nasze usługi obejmują pełne wsparcie administracyjne,
                    pozwalając firmom na płynne funkcjonowanie. Oferujemy
                    profesjonalne usługi dostosowane do Twoich potrzeb, dzięki
                    czemu możesz się skoncentrować na swoich kluczowych celach
                    biznesowych.
                  </p>
                </BlurFade>
                <ul role="list" className="mt-8 space-y-8 text-gray-200">
                  {aboutUs.points.map((item, index) => (
                    <BlurFade key={item.title} delay={0.1} inView>
                      <li className="flex gap-x-3">
                        <item.icon
                          aria-hidden="true"
                          className="mt-1 h-5 w-5 flex-none text-amber-400"
                        />
                        <span className="text-gray-400">
                          <strong className="font-semibold text-gray-100">
                            {item.title}
                          </strong>{" "}
                          {item.description}
                        </span>
                      </li>
                    </BlurFade>
                  ))}
                </ul>
                <BlurFade delay={0.1} inView>
                  <p className="mt-8">
                    Nasza firma rozumie, że każda firma ma inne potrzeby.
                    Dlatego oferujemy elastyczne pakiety, które można dopasować
                    do specyfiki Twojego biznesu. Niezależnie od tego, czy
                    potrzebujesz jednorazowej pomocy, czy stałego wsparcia,
                    ASSISTLINE jest tutaj, aby Ci pomóc.
                  </p>
                </BlurFade>
                <BlurFade delay={0.1} inView>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-amber-400">
                    Twój biznes, nasza odpowiedzialność
                  </h2>
                  <p className="mt-6">
                    Dzięki ASSISTLINE nie musisz martwić się o codzienne zadania
                    administracyjne. Skupiamy się na tym, co robimy najlepiej –
                    zarządzaniu i wsparciu – abyś Ty mógł skupić się na rozwoju
                    swojego biznesu. Z nami, Twoja firma będzie działać
                    efektywniej i szybciej.
                  </p>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
