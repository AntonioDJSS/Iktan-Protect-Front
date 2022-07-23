/* This example requires Tailwind CSS v2.0+ */
export default function LoginTitle() {
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
        <p className="mt-6 text-xl text-white max-w-3xl">
          Bienvenido a la{" "}
          <span className="font-bold">Encuesta de Satisfacción Digital </span>,
          si eres cliente de Iktan Protect y aun no cuentas con un token valido
          para ingresar a la encuesta, comunicate con el area de{" "}
          <a className="italic" href="soporte">
            Soporte Tecnico{" "}
          </a>
          para recibir apoyo.
        </p>
      </div>
    </div>
  );
}
