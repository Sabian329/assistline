import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import BlurFade from "./ui/blur-fade";
import { faqs } from "../model";

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
                <Disclosure as="div" className="pt-6">
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
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
