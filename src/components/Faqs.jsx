/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda el registro de una póliza ante la ASEA?",
    answer:
      "En un escenario sin contratiempos, en 15 días hábiles o antes. En el peor escenario puede tomar hasta 60 días hábiles.",
    mas: "¿Quieres más detalles?",
    extendible:
      "Una vez ingresado el trámite de Registro de Pólizas, la ASEA cuenta con 15 días hábiles para responder al mismo. Sin embargo, debes considerar que la ASEA cuenta con los mismos 15 días hábiles para emitir una prevención y, en el caso de que esto ocurra, los Regulados cuentan con hasta 30 días hábiles para responder. En este trámite en particular, una vez que el Regulado ingresa a la ASEA la respuesta a la prevención, la ASEA vuelve a contar con 15 días hábiles para responder al mismo.",
  },
  {
    question: "¿Cuánto cuesta realizar el registro de pólizas en la ASEA?",
    answer:
      "El Registro de Pólizas no implican el pago de derechos ante la ASEA, es un trámite gratuito.",
    mas: "¿Quieres más detalles?",
    extendible:
      "Además del Registro de Pólizas, existen otros trámites relacionados con la regulación de seguros de la ASEA, y todos son gratuitos: Modificación de la Póliza de Seguro. Reportes, informes o peritajes. Reportes o informes de siniestro. Registro de pólizas contratadas a través de un estudio de pérdida máxima probable (PML). Registro de pólizas contratadas a través de montos mínimos de aseguramiento. Recuerda que el medio ideal para hacer el registro de tu póliza es la Oficialia de Partes Electrónicas. Si vives en alguna entidad federativa no es necesario que te desplazes hasta la CDMX.",
  },
  {
    question: "¿Puedo pagar mi póliza en parcialidades?",
    answer:
      "Directamente la aseguradora no debe ofrecer el pago fraccionado. Con base en el artículo 39 de la Ley sobre el Contrato de Seguro en los seguros obligatorios no se podrá convenir el pago fraccionado.",
    mas: "¿Quieres más detalles?",
    extendible:
      "La Ley del Contrato de Seguros, establece lo siguiente: Artículo 39.- En los seguros por un solo viaje, tratándose de transporte marítimo, terrestre o aéreo y de accidentes personales, así como en los seguros de riesgos profesionales y en los seguros obligatorios a que hace referencia el artículo 150 Bis de esta Ley, no se podrá convenir el pago fraccionado de la prima. Dado que las pólizas de Responsabilidad Civil y Responsabilidad Ambiental tienen un carécter obligatorio, las compañias aseguradoras no puedes ofrecer el pago fraccionado de la póliza. No obstante, en el algunos casos, el uso de tarjetas de crédito puede permitir diferir los pagos a Meses Sin Intereses o en Parcialidades. En estos casos el Banco paga a la compañía aseguradora el monto total y le permite al Regulado la posibilidad de cubrir su deuda con el banco mediante parcilalidades.",
  },
  {
    question: "¿Puedo cambiar de compañía aseguradora?",
    answer:
      "Sí, pero debes esperar a que concluya su periodo de vigencia de tu póliza.",
    mas: "¿Quieres más detalles?",
    extendible:
      "La Ley del Contrato de Seguro Establece: “Artículo 150 Bis.- Los seguros de responsabilidad que por disposición legal tengan el carácter de obligatorios, no podrán cesar en sus efectos, rescindirse, ni darse por terminados con anterioridad a la fecha de terminación de su vigencia…” Las pólizas de Responsabilidad Civil y Responsabilidad Ambiental de la ASEA se consideran obligatrorias de acuerdo el artículo 150 BIS de la Ley del Contrato de Seguros, por lo cual no pueden cancelarse antes del término de su vigencia. Puedes cambiar de compañía aseguradora una vez que termine el periodo de vigencia de tu póliza.  Recuerda que la obligación de vigencia establecida en los lineamientos de ASEA es anual, y tienes 30 días naturales después de que finalice la misma para realizar la actualización ante la ASEA.",
  },
  {
    question: "¿Dónde puedo contratar un estudio de pérdida máxima probable?",
    answer:
      "Puedes encontrar los datos de contacto de todas las empresas autorizadas para realizar estos estudios,  en el En el Padrón de Terceros Autorizados de ASEA. ",
    mas: "¿Quieres más detalles?",
    extendible:
      "Los Estudios de Pérdida Máxima Probable (PML) aceptados por la ASEA, deben ser elaborados por un Tercero Autorizado. La ASEA publica un padron con los datos de contacto de todas las empresas que cuentan con esta autorización. Solo recuerda que existen dos figuras de terceos para la elaboración del PML: PML INDUSTRIAL. Es aplicable a las actividades de exploración y extracción de hidrocarburos, tratamiento y refinación de petróleo y procesamiento de gas natural.PML TADE. Es aplicable a las actividades de transporte, almacenamiento, distribución, Compresión, descompresión, licuefacción, regasificación y/o expendio al público de hidrocarburos y petrolíferos",
  },
  {
    question: "¿Cuál es la regulación de seguros que me aplica?",
    answer:
      "La regulacion de seguros de ASEA está dividida en dos categorías: INDUSTRIAL que aplica para actividades de Exploración y Extracción de Hidrocarburos, Tratamiento y Refinación de Petróleo y Procesamiento de Gas Natural, y TADE que aplica para actividades de transporte, almacenamiento, distribución, compresión, descompresión, licuefacción, regasificación o expendio al público de hidrocarburos o petrolíferos..",
    mas: "¿Quieres más detalles?",
    extendible:
      "Te recomendamos revisar la regulación aplicable directamente en el Diario Oficial de la Federación o en el Sitio Web de la ASEA, puedes consultarlos en los links siguientes: Lienamientos de Seguros INDUSTRIAL (Ver en el DOF), Lineamientos de Seguros TADE (Ver en el DOF), Lineamientos de Seguros TADE - Acuerdo Modificatorio (Ver en el DOF)",
  },
  {
    question:
      "¿Si mi proyecto es nuevo, en que momento debo realizar el registro de pólizas ante la ASEA?",
    answer:
      "Los Regulados son responsables de reparar e indemnizar por los daños o perjuicios que ocasionen en razón de las actividades que desarrollen en términos de las presentes Disposiciones, aun cuando se vean impedidos de hacer efectiva la Póliza de Seguro ante un evento.",
    mas: "¿Quieres más detalles?",
    extendible:
      "Los lineamientos de Seguros para TADE, estabecen en el artículo 7, lo siguiente: Artículo 7. Los Regulados que realicen las actividades a que se refiere el Artículo 2o., deberán contar en todo momento con un seguro vigente de RC y RA, registrado ante la Agencia. Los seguros que contrate el Regulado en cumplimiento de las presentes Disposiciones no lo eximen de la obligación de dar cumplimiento a las mejores prácticas internacionales sobre la administración de riesgos. Los lineamientos de Seguros para la rama INDUSTRIAL, establece en el artículo Artículo 8. Los Regulados que desarrollen las actividades a las que se refiere el artículo 2 de las presentes Disposiciones, deberán contar con seguros de responsabilidad civil y responsabilidad por daños ambientales y, en su caso, de control de pozos. Cuando los Contratos para desarrollar las actividades sean firmados por dos o más personas morales, el representante común que dará cumplimiento a las presentes Disposiciones será el operador en el Contrato respectivo. Dichos seguros deben encontrarse vigentes y registrados ante la Agencia, durante todas las etapas de desarrollo de las obras o actividades que desarrollen los Regulados.",
  },
  {
    question:
      "¿Las polizas de seguro deben incluir a los contratistas, subcontratistas, proveedores o prestadores de servicios?",
    answer:
      "No es obligatorio que los incluyas en tu póliza, pero debes tener en cuenta dos cosas:  Para actividades de TADE, recuerda que eres responsable de cubrir los daños daños o perjuicios provocados por tus contratistas, subcontratistas, proveedores o prestadores de servicios en el desarrollo de las actividades, aun cuando te veas impedido de hacer efectiva la Póliza de Seguro ante un evento. Para actividades de la rama INDUSTRIAL, es obligatorio que les exijas mantener pólizas de seguro vigentesy mantener las mismas disponibles en tus instalaciones.",
    mas: "¿Quieres más detalles?",
    extendible:
      "Los lineamientos de Seguros para TADE, estabecen en el artículo 18, lo siguiente: Artículo 18. Los Regulados son responsables en todo momento por los daños o perjuicios provocados por sus contratistas, subcontratistas, proveedores o prestadores de servicios en el desarrollo de las actividades a que se refiere el Artículo 2o., de las presentes Disposiciones. Los Regulados son responsables de reparar e indemnizar por los daños o perjuicios que ocasionen en razón de las actividades que desarrollen en términos de las presentes Disposiciones, aun cuando se vean impedidos de hacer efectiva la Póliza de Seguro ante un evento. Los lineamientos de Seguros para la rama INDUSTRIAL, establecen en los artículos 6, 24 y 25, lo siguiente: Artículo 6. Los Regulados deberán mantener en sus instalaciones la información de los seguros señalados en las presentes Disposiciones, incluyendo la de sus contratistas, subcontratistas, proveedores y prestadores de servicios, disponible para su verificación. Artículo 24. Los Regulados deberán requerir que sus contratistas, subcontratistas, proveedores o prestadores de servicios mantengan pólizas de seguro vigentes que contengan las coberturas y montos necesarios y suficientes para amparar la responsabilidad por los daños que pudieran generar con motivo de las obras, servicios y/o actividades que realicen, o en su caso, los Regulados podrán integrar a sus contratistas, subcontratistas, proveedores o prestadores de servicios en sus pólizas, garantizando que cuenten con las coberturas y montos que amparen las actividades que realicen de conformidad con las presentes Disposiciones. Artículo 25. Los Regulados son responsables en todo momento por los daños o perjuicios provocados por sus contratistas, subcontratistas, proveedores o prestadores de servicios en el desarrollo de las actividades del Sector Hidrocarburos propias de los Regulados.",
    team: `${(<div className="bg-white"></div>)}/10`,
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
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl uppercase">
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
                          {faq.question}
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
                      <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="text-left w-full flex  items-start text-teal-600">
                                <span className="font-medium text-teal-600">
                                  {faq.mas}
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
                              <p className="text-base text-gray-500">
                                {faq.extendible}
                              </p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
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
