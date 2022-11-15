/* This example requires Tailwind CSS v2.0+ */
export default function Poliza() {
  return (
    <div className="bg-indigo-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Ya tienes una póliza pero...</span>
          <span className="block text-teal-600">
            ¿Quieres saber si hay una mejor opción?
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="cotizacion"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
            >
              Descúbrelo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}