import { useState } from "react";
import { Switch } from "@headlessui/react";
import Footer from "../components/Footer";
import HeaderFragment from "../components/HeaderFragment";
//Importar el emailjs para enviar la info del for a un email
import emailjs from "@emailjs/browser";
//Importamos formik para el uso de validaciones en el formulario, es mas rapido
import { Formik, useFormik } from "formik";
//Importamos el Schema de formulario
import * as yup from "yup";

//Logica para el correo
const sendEmail = (event) => {
  //Previene el primer elemnto dle formulario post cargado
  event.preventDefault();
  //Primer parametro el id del servicio de correos
  //Segundo parametro template del mensaje
  //El tercer parametro es el formulario
  //El cuarto parametro el userid
  emailjs
    .sendForm(
      "service_hjnxxil",
      "template_7fhwtyc",
      event.target,
      "McdRsxHmsjkgFRzLl"
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
//------------------

//----------------------------------
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Cotizacion() {
  const [agreed, setAgreed] = useState(false);

  //Logia para las validaciones
  const basicSchema = yup.object().shape({
    firstName: yup.string().required("Requerido"),
    lastName: yup.string().required("Requerido"),
    company: yup.string().required("Requerido"),
    email: yup
      .string()
      .email("Por favor ingrese un correo electronico valido")
      .required(),
    phoneNumber: yup.string().required("Requerido"),
    message: yup.string().required("Requerido"),
  });

  return (
    <>
      <HeaderFragment />
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mejora tu póliza sin gastar más
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Si hay una mejor opción en el mercado, nosotros la encontramos
              para tí.
            </p>
          </div>

          <div className="mt-12">
            <Formik
              validationSchema={basicSchema}
              initialValues={{
                firstName: "",
                lastName: "",
                company: "",
                email: "",
                phoneNumber: "",
                message: "",
              }}
              onSubmit={(values, { resetForm }) => {
                emailjs
                  .send(
                    "service_hjnxxil",
                    "template_7fhwtyc",
                    values,
                    "McdRsxHmsjkgFRzLl"
                  )
                  .then((response) => console.log(response))
                  .catch((error) => console.log(error));
                resetForm();
                console.log("Formulario enviado");
              }}
            >
              {({
                handleSubmit,
                values,
                handleChange,
                handleBlur,
                touched,
                errors,
              }) => (
                <form
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  className="form-mail grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre/s
                    </label>
                    <div className="mt-1">
                      <input
                        value={values.firstName}
                        onChange={handleChange}
                        //Valida el formulario cuando hace click fuera de la entrada
                        onBlur={handleBlur}
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                      {touched.firstName && errors.firstName && (
                        <div className="text-red-600">{errors.firstName}</div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Apellido/s
                    </label>
                    <div className="mt-1">
                      <input
                        value={values.lastName}
                        onChange={handleChange}
                        //Valida el formulario cuando hace click fuera de la entrada
                        onBlur={handleBlur}
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                      {touched.lastName && errors.lastName && (
                        <div className="text-red-600">{errors.lastName}</div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Correo
                    </label>
                    <div className="mt-1">
                      <input
                        value={values.email}
                        onChange={handleChange}
                        //Valida el formulario cuando hace click fuera de la entrada
                        onBlur={handleBlur}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                      />
                      {touched.email && errors.email && (
                        <div className="text-red-600">{errors.email}</div>
                      )}
                    </div>
                    <div className="mt-5 sm:col-span-6">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Poliza Actual
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Sube tu imagen</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">
                              o arrastrala y sueltala aquí.
                            </p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF hasta 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Telefono
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="country" className="sr-only">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-teal-500 focus:border-teal-500 rounded-md"
                        >
                          <option>MX</option>
                          <option>US</option>
                          <option>CA</option>
                        </select>
                      </div>
                      <input
                        value={values.phoneNumber}
                        onChange={handleChange}
                        //Valida el formulario cuando hace click fuera de la entrada
                        onBlur={handleBlur}
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        autoComplete="tel"
                        className="py-3 px-4 block w-full pl-24 focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                        placeholder="+52 (55) 55778899"
                      />
                      {touched.phoneNumber && errors.phoneNumber && (
                        <div className="text-red-600">{errors.phoneNumber}</div>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Consulta
                    </label>
                    <div className="mt-1">
                      <textarea
                        value={values.message}
                        onChange={handleChange}
                        //Valida el formulario cuando hace click fuera de la entrada
                        onBlur={handleBlur}
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
                      />
                      {touched.message && errors.message && (
                        <div className="text-red-600">{errors.message}</div>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Switch
                          checked={agreed}
                          onChange={setAgreed}
                          className={classNames(
                            agreed ? "bg-teal-600" : "bg-gray-200",
                            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                          )}
                        >
                          <span className="sr-only">Agree to policies</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              agreed ? "translate-x-5" : "translate-x-0",
                              "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                            )}
                          />
                        </Switch>
                      </div>
                      <div className="ml-3">
                        <p className="text-base text-gray-500">
                          Al seleccionar esto, usted acepta las{" "}
                          <a
                            href="Politicas-Privacidad"
                            className="font-medium text-gray-700 underline"
                          >
                            Politicas de Privacidad
                          </a>{" "}
                          y el{" "}
                          <a
                            href=""
                            className="font-medium text-gray-700 underline"
                          >
                            Aviso Informativo
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}