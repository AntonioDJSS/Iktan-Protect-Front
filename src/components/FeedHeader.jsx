/* This example requires Tailwind CSS v2.0+ */
export default function FeedHeader() {
  return (
    <div className="relative bg-teal-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div
          className="absolute inset-0 bg-teal-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <p className="mt-6 text-xl text-teal-100 max-w-5xl">
          Los Seguros dentro del Sector Hidrocarburos, brindan certeza a un
          mercado abierto que aún es relativamente nuevo en México, esto permite
          realizar nuestras actividades con una gestión del riesgo dentro de lo
          razonablemente factible, tanto para daños a terceros como para daños
          que se pueden ocasionar en el medio ambienten en caso de ocurrencia de
          un evento no deseado.
        </p>
      </div>
    </div>
  );
}
