/* This example requires Tailwind CSS v2.0+ */
export default function FeedHeader() {
  return (
    <div className="bg-teal-600">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Broker especializado en </span>
          <span className="block">el Sector de los Hidrocarburos.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-teal-200">
          No tenemos compromisos exclusivos con ninguna compañía de seguros, lo
          que nos permite ofrecer a nuestro clientes los mejores productos de
          cada compañía de forma objetiva y transparente, siempre buscando la
          mejor cobertura al menor costo.
        </p>
      </div>
    </div>
  );
}
