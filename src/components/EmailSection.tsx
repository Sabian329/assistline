import { useRef } from "react";
import BlurFade from "./ui/blur-fade";
import emailjs from "@emailjs/browser";

export default function EmailSection() {
  const form = useRef<any>();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kwthxgk", "template_i18yiq8", form.current, {
        publicKey: "cvKSeclmpJws7aoPn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="email-section">
      <div className="bg-transparent py-3 ">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <BlurFade delay={0.5} inView>
            <div className="relative isolate overflow-hidden bg-gray-900/50 px-6 lg:ring-1 ring-white/50 py-24  sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className=" p-2 text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent sm:text-5xl">
                Oszczędzaj swój czas juz dziś!
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                Zostaw swojego maila a my skontakujemy się z Tobą w celu
                ustalenia szczegółów.
              </p>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="mx-auto mt-10 flex max-w-md gap-x-4"
              >
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Adres e-mail"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-amber-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-300 "
                >
                  Wyślij
                </button>
              </form>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
