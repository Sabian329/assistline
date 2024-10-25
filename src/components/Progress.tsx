import { CheckIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Progress({ updatedSteps }) {
  return (
    <section id="progress-section">
      <div className=" py-3 flex justify-center">
        <nav aria-label="Progress">
          <ol role="list" className="overflow-hidden">
            {updatedSteps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={classNames(
                  stepIdx !== updatedSteps.length - 1 ? "pb-10" : "",
                  "relative"
                )}
              >
                {step.status === "complete" ? (
                  <>
                    {stepIdx !== updatedSteps.length - 1 ? (
                      <div
                        aria-hidden="true"
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-amber-400"
                      />
                    ) : null}
                    <a
                      href={step.href}
                      className="group relative flex items-start"
                    >
                      <span className="flex h-9 items-center">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 group-hover:bg-amber-300">
                          <CheckIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-white"
                          />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col text-left">
                        <span className="text-sm font-medium text-white ">
                          {step.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </a>
                  </>
                ) : step.status === "current" ? (
                  <>
                    {stepIdx !== updatedSteps.length - 1 ? (
                      <div
                        aria-hidden="true"
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                      />
                    ) : null}
                    <a
                      href={step.href}
                      aria-current="step"
                      className="group relative flex items-start"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-9 items-center"
                      >
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-amber-400 bg-white">
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col text-left">
                        <span className="text-sm font-medium text-amber-400">
                          {step.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {stepIdx !== updatedSteps.length - 1 ? (
                      <div
                        aria-hidden="true"
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                      />
                    ) : null}
                    <a
                      href={step.href}
                      className="group relative flex items-start"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-9 items-center"
                      >
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-amber-400 bg-white group-hover:border-amber-400">
                          <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-amber-400" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col text-left">
                        <span className="text-sm font-medium text-gray-500">
                          {step.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
