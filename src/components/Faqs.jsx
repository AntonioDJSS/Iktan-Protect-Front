/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "¿CUÁNTO TIEMPO TARDA EL REGISTRO DE UNA PÓLIZA ANTE LA ASEA?",
    answer:
      "Una vez ingresado el trámite de Registro de Pólizas, la ASEA cuenta con 15 días hábiles para responder al mismo. Sin embargo, debes considerar que la ASEA cuenta con los mismos 15 días hábiles para emitir una prevención y, en el caso de que esto ocurra, los Regulados cuentan con hasta 30 días hábiles para responder.",
  },
  {
    question: "¿CUÁNTO CUESTA REALIZAR EL REGISTRO DE PÓLIZAS EN LA ASEA?",
    answer:
      "El Registro de Pólizas no implican el pago de derechos ante la ASEA, es un trámite gratuito.",
  },
  {
    question: "¿PUEDO PAGAR MI PÓLIZA EN PARCIALIDADES?",
    answer:
      "Directamente la aseguradora no debe ofrecer el pago fraccionado. Con base en el artículo 39 de la Ley sobre el Contrato de Seguro en los seguros obligatorios no se podrá convenir el pago fraccionado.",
  },
  {
    question: "¿PUEDO CAMBIAR DE COMPAÑÍA ASEGURADORA?",
    answer:
      "Sí, pero debes esperar a que concluya su periodo de vigencia de tu póliza.",
  },
  {
    question: "¿DÓNDE PUEDO CONTRATAR UN ESTUDIO DE PÉRDIDA MÁXIMA PROBABLE?",
    answer:
      "Puedes encontrar los datos de contacto de todas las empresas autorizadas para realizar estos estudios,  en el En el Padrón de Terceros Autorizados de ASEA. ",
  },
  {
    question: "¿CUÁL ES LA REGULACIÓN DE SEGUROS QUE ME APLICA?",
    answer:
      "La regulacion de seguros de ASEA está dividida en dos categorías: INDUSTRIAL que aplica para actividades de Exploración y Extracción de Hidrocarburos, Tratamiento y Refinación de Petróleo y Procesamiento de Gas Natural, y TADE que aplica para actividades de transporte, almacenamiento, distribución, compresión, descompresión, licuefacción, regasificación o expendio al público de hidrocarburos o petrolíferos..",
  },
  {
    question:
      "¿SI MI PROYECTO ES NUEVO, EN QUE MOMENTO DEBO REALIZAR EL REGISTRO DE PÓLIZAS ANTE LA ASEA?",
    answer:
      "Los Regulados son responsables de reparar e indemnizar por los daños o perjuicios que ocasionen en razón de las actividades que desarrollen en términos de las presentes Disposiciones, aun cuando se vean impedidos de hacer efectiva la Póliza de Seguro ante un evento.",
  },
  {
    question:
      "¿LAS POLIZAS DE SEGURO DEBEN INCLUIR A LOS CONTRATISTAS, SUBCONTRATISTAS, PROVEEDORES O PRESTADORES DE SERVICIOS?",
    answer:
      "No es obligatorio que los incluyas en tu póliza, pero debes tener en cuenta dos cosas: Para actividades de TADE, recuerda que eres responsable de cubrir los daños daños o perjuicios provocados por tus contratistas, subcontratistas, proveedores o prestadores de servicios en el desarrollo de las actividades, aun cuando te veas impedido de hacer efectiva la Póliza de Seguro ante un evento. Para actividades de la rama INDUSTRIAL, es obligatorio que les exijas mantener pólizas de seguro vigentesy mantener las mismas disponibles en tus instalaciones.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Faqs() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question.toLowerCase()}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
