/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, ThumbUpIcon, UserIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import HeaderFragment from "../components/HeaderFragment";
import HeaderLine from "../components/FeedHeader";
import FeedHeader from "../components/FeedHeader";
import {fa1, fa2, fa3, fa4, fa5} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


const timeline = [
  {
    id: 1,
    content: "LLAMADA DE DESCUBRIMIENTO",
    target:
      "Llámanos mandanos un whats, te tomará menos de un minuto conseguir un experto.",
    href: "#",
    date: "Paso 01",
    datetime: "Paso 01",
    icon: fa1,
    iconBackground: "bg-blue-500",
  },
  {
    id: 2,
    content: "DIAGNÓSTICO",
    target:
      "Nuestros expertos en el sector revisarán detalladamente tu situación de cumplimiento regulatorio ante ASEA y te darán una línea de tiempo diseñada especialmente para ti.",
    href: "#",
    date: "Paso 02",
    datetime: "Paso 02",
    icon: fa2,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "ALTERNATIVAS",
    target:
      "Te presentamos las mejores alternativas del mercado ya que no tenemos compromisos de exclusividad con ninguna aseguradora.",
    href: "#",
    date: "Paso 03",
    datetime: "Paso 03",
    icon: fa3,
    iconBackground: "bg-blue-500",
  },
  {
    id: 4,
    content: "CONTRATACIÓN",
    target:
      "Nosotros realizamos todo el proceso de contratación y nos aseguramos de que recibas a tiempo tu póliza y tu factura",
    href: "#",
    date: "Paso 04",
    datetime: "Paso 04",
    icon: fa4,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "GESTIÓN Y SEGUIMIENTO",
    target: "Te ayudamos con el proceso de registro ante la ASEA.",
    href: "#",
    date: "Paso 05",
    datetime: "Paso 05",
    icon: fa5,
    iconBackground: "bg-blue-500",
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

      <div className="flex justify-center bg-slate-50 ">
    <div className="invisible md:visible md:w-1/10 md:p-9 md:px-0">
    <img className="md:h-96 md:w-40 h-0 w-0" src=" https://i.imgur.com/TEuzugD.png"
                alt="image"
                />
    </div>
    <div className="md:w-1/2 md:p-4">
    <div className="max-w-7xl mx-auto px-4 pt-10 md:px-6">

{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
<div className="max-w-3xl mx-auto">
  
  {/* Content goes here */}
  <div className="flow-root">
  
    <ul role="list" className="-mb-8">
    
      {timeline.map((event, eventIdx) => (
        <li key={event.id}>
          <div className="relative pb-8 " >
            {eventIdx !== timeline.length - 1 ? (
              <span
                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              />
            ) : null}
            <div className="relative flex space-x-3">
            
            <div>

                <span
                  className={classNames(
                    event.iconBackground,
                    "h-7 w-7 rounded-full flex items-center justify-center ring-4 "
                  )}
                >

                  <FontAwesomeIcon 
                  icon={event.icon}
                    className="h-4 w-4 text-white   "
                    aria-hidden="true"
                  />
                </span>
              </div>



              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p className="text-sm text-gray-500">
                    {event.content}{" "}
                    <a
                      href={event.href}
                      className="font-medium text-gray-900"
                    >
                      {event.target}
                    </a>
                  </p>
                </div>
                <div className="text-right text-sm whitespace-nowrap text-gray-500">
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
</div>



      
      <Footer />
    </>
  );
}
