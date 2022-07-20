import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHelmetSafety, faShieldHeart, faCannabis, faTowerObservation, faTruckDroplet, faCross} from "@fortawesome/free-solid-svg-icons"

/* This example requires Tailwind CSS v2.0+ */
import {
  CogIcon,
  FireIcon,
  HeartIcon,
  LightBulbIcon,
  GlobeIcon,
  FingerPrintIcon,
  HomeIcon,
  ShieldCheckIcon

} from "@heroicons/react/outline";

const features = [
  {
    name: "Pólizas de ASEA",
    description:
      "Los Regulados deben contar en todo momento con un seguro vigente de Responsabilidad Civil y Responsabilidad Ambiental, registrado ante la ASEA",
    icon:  faShieldHeart,
  },
  {
    name: "Responsabilidad Civil",
    description:
      "Los Regulados son responsables en todo momento por los daños o perjuicios provocados por sus contratistas, subcontratistas, proveedores o prestadores de servicios en el desarrollo de las actividades del Sector Hidrocarburos propias de los Regulados",
    icon: faHelmetSafety
  },
  {
    name: "Responsabilidad Ambiental",
    description:
      "Atención a emergencias; Contención de contaminantes;Mitigación de impactos y daños ambientales; Caracterización de sitios contaminados; Remediación de sitios contaminados, y Restauración o compensación ambiental.",
    icon: faCannabis
  },
  {
    name: "Póliza de Control de Pozos",
    description:
      "Operator Extra Expensescon base en las Inversiones de Perforación Autorizados",
    icon: faTowerObservation,
  },
  {
    name: "Flotillas",
    description:
      "Soluciones para empresas",
    icon: faTruckDroplet,
  },
  {
    name: "Gastos Médicos Mayores",
    description: "Soluciones para empresas",
    icon: faCross,
  },
];

export default function Feature() {
  return (
    <div className="relative bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-teal-600">
          IKTAN PROTECT
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          ASEA PÓLIZAS{" "}
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          El 23 de julio de 2018 cambió la forma de gestionar los riesgos en
          nuestro sector, la Agencia de Seguridad, Energía y Ambiente ASEA,
          emitió los Lineamientos para el requerimiento mínimo de los seguros
          para actividades de transporte, almacenamiento, distribución,
          compresión, descompresión, licuefacción, regasificación o expendio al
          público de hidrocarburos o petrolíferos
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-teal-500 p-3 shadow-lg fa-Regular">
                        <FontAwesomeIcon
                          style={{ color: "white" }}
                          icon={feature.icon}
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
