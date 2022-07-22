import Footer from "../components/Footer";
import HeaderFragment from "../components/HeaderFragment";
import Informative from "../components/Informative";

import {
  CogIcon,
  FireIcon,
  HeartIcon,
  LightBulbIcon,
  GlobeIcon,
  FingerPrintIcon,
  HomeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
  {
    name: "ANÁLISIS",
    role: "Metodología",
    imageUrl: "https://imgur.com/x0ry1JI.png",
    bio: "Un equipo multidisciplinario analiza cada caso, paradeterminar los requerimientos y los tiempos de contratación ideales.",
    /*    twitterUrl: "#",
    linkedinUrl: "#", */
  },
  {
    name: "SELECCIÓN",
    role: "Metodología",
    imageUrl: "https://imgur.com/2wTxEYI.png",
    bio: "Se presentan las mejores alternativas Costo-Beneficio disponibles en el mercado,con base en el resultado de análisis.",
    /*     twitterUrl: "#",
    linkedinUrl: "#", */
  },
  {
    name: "ACOMPAÑAMIENTO",
    role: "Metodología",
    imageUrl: "https://i.imgur.com/jJiTIlc.png.png",
    bio: "Una vez seleccionado el producto que cubre todas las necesidades del cliente, éste se contratará y se gestionará. De ser el caso, se registra ante la ASEA.",
    /*     twitterUrl: "#",
    linkedinUrl: "#", */
  },
];

export default function Metodologia() {
  return (
    <>
      <HeaderFragment />

      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestra Metodología
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Ya no es suficiente con saber de seguros. Nuestros expertos en el
              sector hidrocarburos cuentan con experiencia comprobable en los
              procesos de gestión ante la ASEA, esto crea un factor
              diferenciador con cualquier otro Broker en México.{" "}
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <div className="py-2">
                      <span className="inline-flex items-center justify-center rounded-md bg-teal-700 p-3 shadow-lg fa-Regular">
                        <CogIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <dt className="order-2 mt-2 text-lg leading-6  text-gray-500">
                      Un equipo multidisciplinario analiza cada caso, para
                      determinar los requerimientos y los tiempos de
                      contratación ideales.
                    </dt>
                    <dd className="order-1 text-xl font-bold text-teal-600">
                      Análisis{" "}
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <div className="py-2">
                      <span className="inline-flex items-center justify-center rounded-md bg-teal-700 p-3 shadow-lg fa-Regular">
                        <CogIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <dt className="order-2 mt-2 text-lg leading-6  text-gray-500">
                      {" "}
                      Se presentan las mejores alternativas Costo-Beneficio
                      disponibles en el mercado, con base en el resultado de
                      análisis.
                    </dt>
                    <dd className="order-1 text-xl font-bold text-teal-600">
                      Selección
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <div className="py-2">
                      <span className="inline-flex items-center justify-center rounded-md bg-teal-700 p-3 shadow-lg fa-Regular">
                        <CogIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <dt className="order-2 mt-2 text-lg leading-6  text-gray-500">
                      {" "}
                      Una vez seleccionado el producto que cubre todas las
                      necesidades del cliente, éste se contratará y se
                      gestionará. De ser el caso, se registra ante la ASEA.
                    </dt>
                    <dd className="order-1 text-xl font-bold text-teal-600">
                      Acompañamiento
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <Informative />
        </div>
      </div>

      <Footer />
    </>
  );
}
