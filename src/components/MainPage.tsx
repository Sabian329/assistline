import { motion } from "framer-motion";
import BlurFade from "./ui/blur-fade";
import { mainCards } from "../model";

export default function MainPage() {
  return (
    <section id="main">
      <div className="relative isolate overflow-hidden bg-transparent py-6 ">
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <BlurFade delay={0.1} inView>
              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent sm:text-5xl">
                Centrum Wsparcia
              </h2>
              <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent ">
                Twojego Biznesu
              </h3>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Nasze wsparcie to fundament Twojego sukcesu. Oferujemy szeroką
                gamę usług, które pomagają firmom w sprawnym zarządzaniu
                codziennymi operacjami. Niezależnie od tego, czy potrzebujesz
                wsparcia technicznego, pomocy w organizacji spotkań, czy
                zarządzania dokumentacją, jesteśmy tu, aby odciążyć Cię z zadań
                administracyjnych i umożliwić pełne skupienie się na rozwoju
                biznesu.
              </p>
            </BlurFade>
          </div>

          <div className="mx-auto mt-16 grid min-h-60 max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {mainCards.map((card, index) => (
              <BlurFade key={card.name} delay={0.1 + index * 0.2} inView>
                <motion.div
                  whileTap={{ scale: 1.05 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex-col justify-center items-center min-h-60 gap-x-4 rounded-xl bg-gray-900 p-6 ring-1 ring-inset ring-white/50">
                    <card.icon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none text-amber-400"
                    />
                    <div className="text-base leading-7">
                      <h3 className="font-semibold text-white">{card.name}</h3>
                      <p className="mt-2 text-gray-300">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
