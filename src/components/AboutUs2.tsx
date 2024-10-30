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

export default function AboutUs2() {
  return (
    <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        ></svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-amber-400">
                Deploy faster
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                A better workflow
              </h1>
              <p className="mt-6 text-xl/8 text-gray-300">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-100 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
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
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
