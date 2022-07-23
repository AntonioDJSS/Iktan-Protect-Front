import useQuiz from "../hooks/useQuiz";
import Graph from "./Graph";

const Section = () => {
  let date = new Date().toDateString();
  console.log(date);
  const { quiz } = useQuiz();
  console.log(quiz);
  const stats = [
    { label: "Servicio", value: `${quiz[0]}/10`, color: "bg-teal-600" },
    { label: "Ahorro", value: `${quiz[1]}/10`, color: "bg-[#38445c] " },
    { label: "Eficiencia", value: `${quiz[2]}/10`, color: "bg-teal-600" },
    { label: "Actualización", value: `${quiz[3]}/10`, color: "bg-[#38445c]" },
  ];

  return (
    <div className="relative bg-gray-50 py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-teal-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative justify-center  pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://i.imgur.com/EluXuiG.png"
                alt=""
              />
              <div className="absolute inset-0 bg-teal-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-600 via-teal-900 opacity-90" />
              <div className="relative px-8 py-32">
                <div>
                  <img
                    className="h-12"
                    src="https://i.imgur.com/GUcnGc7.png"
                    alt="IKTAN Protect"
                  />
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <p className="relative">
                      <span className="text-teal-100">Artículo 96.</span> Los
                      agentes de seguros deberán informar, de manera amplia y
                      detallada, sobre el alcance real de la cobertura del
                      seguro, así como sobre la forma de conservarla o darla por
                      terminada.
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-teal-200">
                      LEY DE INSTITUCIONES DE SEGUROS Y DE FIANZAS
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              EXPERTOS 1 EN 25,000
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                Nos especializamos en la regulación de la ASEA para satisfacer
                las necesidades de nuestros clientes, con los mayores estándares
                de calidad y competencia.
              </p>
              <p className="text-lg">
                Contamos con expertos en todas las regulaciones de ASEA, lo que
                nos permite entender claramente las operaciones y necesidades de
                nuestros clientes para brindarle un servicio muy superior a los
                estándares de la industria.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10 ">
            <dl className="grid grid-cols-2 gap-x-2 gap-y-8 justify-items-center items-center md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`pt-2  ${stat.color} py-2 px-12 md:py-5 md:px-4 md:my-0`}
                >
                  <dt className="text-base font-medium text-white text-center">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            {/*    
            {/*             <div className="mt-10">
              <a href="#" className="text-base font-medium text-indigo-600">
                {" "}
                Learn more about how we're changing the world{" "}
                <span aria-hidden="true">&rarr;</span>{" "}
              </a>
            </div> */}
          </div>
          {/* Estadisticas */}
          <div className="pt-5">
            <Graph />
          </div>

          <h2 className="pt-10 text-base font-thin tracking-wider text-gray-400">
            Valores calculados a {date}, con base en la
            <span>
              {" "}
              <a className="italic font-normal text-black" href="calificanos">
                Encuesta de Satisfacción Digital.
              </a>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Section;
