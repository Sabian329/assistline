import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Allert({
  state,
  handleClose,
}: {
  state: { message: string; sucess: boolean | null };
  handleClose: () => void;
}) {
  state.sucess !== null && setTimeout(() => handleClose(), 5000);

  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition show={!!state.message}>
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-gray-950 shadow-lg ring-1 ring-white  transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {state.sucess ? (
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-green-400"
                      />
                    ) : (
                      <ExclamationCircleIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-red-700"
                      />
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-white">
                      {state.message}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="inline-flex rounded-md bg-gray-500 text-gray-200 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
