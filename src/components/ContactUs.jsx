/* This example requires Tailwind CSS v2.0+ */
import {
  NewspaperIcon,
  MailIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";

const supportLinks = [
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=525540478317&text=%20Hola!%20Queria%20ponerme%20en%20contacto%20con%20un%20experto%20de%20IKTAN%20Protect!",
    description:
      "La forma más fácil de ponerte en contacto con un experto. Escribenos y te canalizaremos con la persona indicada.",
    icon: PhoneIcon,
  },
  {
    name: "Correo Electronico",
    href: "email",
    description:
      "El canal de comunicación institucional. Escribenos y te enviaremos la información que tu compañía necesita.",
    icon: MailIcon,
  },
  {
    name: "Media Inquiries",
    href: "soporte",
    description:
      "¿Problemas con la plataforma? Comunicate con soporte para dar seguimiento al problema y obtener una solución oportuna.",
    icon: SupportIcon,
  },
];

export default function ContactUs() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://i.imgur.com/FdoL4Dv.png"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Contacto
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Nuestro compromiso es asesorar oportunamente a nuestros clientes
            para que tomen la mejor desición en seguros. Siempre la cobertura
            más completa al menor costo.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-teal-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-teal-700 hover:text-teal-600"
                >
                  Comunicate<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
