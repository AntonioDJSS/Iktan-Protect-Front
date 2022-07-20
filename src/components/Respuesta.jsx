import { Link } from "react-router-dom";

const Form = () => {
  return (
    <>
      <html class="h-screen bg-white">
        <body class="h-screen">
          <div className="min-h-full flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
              <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                  <img
                    className="h-12 w-auto"
                    src="https://i.imgur.com/BgtpwdS.png"
                    alt="Iktan Protect"
                  />
                  <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
                    !Feedback Enviado!
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Gracias por resonder nuestra encuesta de satisfacción{" "}
                    <a
                      href="#"
                      className="font-medium text-teal-600 hover:text-teal-500"
                    >
                      esto nos ayuda a seguir mejorando nuestros servicios para
                      tí.
                    </a>
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-teal-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    <a href="/">Volver al Inicio</a>
                  </button>

                  <div className="mt-6"></div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative w-0 flex-1">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://imgur.com/IOTlo0c.png"
                alt=""
              />
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default Form;
