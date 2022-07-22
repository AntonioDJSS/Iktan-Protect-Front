/* This example requires Tailwind CSS v2.0+ */
import { fa1, fa2, fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeedHeader from "../components/FeedHeader";
import Footer from "../components/Footer";
import HeaderFragment from "../components/HeaderFragment";
/* import "./feed.css";
 */

const timeline = [
  {
    id: 1,
    content: "LLAMADA DE DESCUBRIMIENTO",
    target:
      "Llámanos mandanos un whats, te tomará menos de un minuto conseguir un experto.",
    href: "#",
    icon: fa1,
    iconBackground: "bg-blue-600",
  },
  {
    id: 2,
    content: "DIAGNÓSTICO",
    target:
      "Nuestros expertos en el sector revisarán detalladamente tu situación de cumplimiento regulatorio ante ASEA y te darán una línea de tiempo diseñada especialmente para ti.",
    href: "#",
    icon: fa2,
    iconBackground: "bg-blue-600",
  },
  {
    id: 3,
    content: "ALTERNATIVAS",
    target:
      "Te presentamos las mejores alternativas del mercado ya que no tenemos compromisos de exclusividad con ninguna aseguradora.",
    href: "#",
    icon: fa3,
    iconBackground: "bg-blue-600",
  },
  {
    id: 4,
    content: "CONTRATACIÓN",
    target:
      "Nosotros realizamos todo el proceso de contratación y nos aseguramos de que recibas a tiempo tu póliza y tu factura",
    href: "#",
    icon: fa4,
    iconBackground: "bg-blue-600",
  },
  {
    id: 5,
    content: "GESTIÓN Y SEGUIMIENTO",
    target: "Te ayudamos con el proceso de registro ante la ASEA.",
    href: "#",
    icon: fa5,
    iconBackground: "bg-blue-600",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Feed() {
  return (
    <>
      <HeaderFragment />
      <FeedHeader />
      <div className="bg-white flex row-span-2 justify-center">
        <div className="flex justify-center">
          <div className="my-7 ">
            <img
              className="relative left-[82px]  h-[750px] w-[320px]"
              src=" https://i.imgur.com/TEuzugD.png"
              alt="image"
            />
          </div>
          <div className="pt-16 ">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className=" relative right-21  max-w-2xl">
              {/* Content goes here */}

              <div className="relative right-[40px] ">
                <p className=" font-bold text-gray-800 uppercase text-3xl">
                  ¿Cómo
                </p>
                <p className=" text-4xl mb-8 font-bold text-[#169e9c] uppercase">
                  Empezar?
                </p>
              </div>
              <ul role="list" className="">
                {timeline.map((event, eventIdx) => (
                  <li key={event.id}>
                    <div className="relative pb-8 ">
                      {eventIdx !== timeline.length - 1 ? (
                        <span className="absolute" aria-hidden="true" />
                      ) : null}
                      <div className="relative flex space-x-3 md:right-[120px] ">
                        <div>
                          <span
                            className={classNames(
                              event.iconBackground,
                              "h-7 w-7 rounded-full flex items-center justify-center ring-4"
                            )}
                          >
                            <FontAwesomeIcon
                              icon={event.icon}
                              className="h-3 w-3 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>

                        <div className="relative min-w-0  pt-1.5 flex justify-between space-x-4 left-11">
                          <div>
                            <p className="text-sm  text-gray-500">
                              {event.content} <br></br>
                              <a
                                href={event.href}
                                className="font-medium text-gray-800"
                              >
                                {event.target}
                              </a>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-black">
                            <time dateTime={event.datetime}>{event.date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
