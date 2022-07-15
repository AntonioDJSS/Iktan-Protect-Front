import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, XIcon } from '@heroicons/react/outline'

const PoliticasPrivacidad = () => {

    const [open, setOpen] = useState(true)

  return (
<Transition.Root  show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <a
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    href="email"
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-teal-500 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon className="h-6 w-6 text-teal-800" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Politicas de Privacidad
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                      AVISO DE PRIVACIDAD INTEGRAL (IKTAN STRATEGIES) <br/> <br/>
Este Aviso de Privacidad tiene por objeto proporcionarle una visión clara de cómo usamos los datos 
personales que el titular de datos personales (en lo sucesivo “Usted”) nos proporciona, nuestros 
esfuerzos por protegerlos, las opciones que tiene para controlar sus datos personales y proteger su 
privacidad, asimismo, la forma en que utilizamos sus datos personales y los terceros con los que la 
compartiremos. Iktan Strategies S.A.P.I DE C.V (en lo sucesivo “IKTAN STRATEGIES”) informa, 
mediante el presente aviso de privacidad integral y en relación con el uso y protección de los datos 
personales que Usted ponga a disposición de IKTAN STRATEGIES, lo siguiente:
<br/>
<br/>
En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los 
Particulares y su Reglamento (en lo sucesivo, la “Ley de Datos”), así como de conformidad con los 
Lineamientos del Aviso de Privacidad publicados en el Diario Oficial de la Federación el 17 de enero 
de 2013, se informa lo siguiente:
<br/>
<br/>
Que el tratamiento de los datos personales por parte de IKTAN STRATEGIES , busca apegarse y ser 
conforme con los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, 
proporcionalidad y responsabilidad que tutela la Ley de Datos; de la misma forma se busca que dicho 
tratamiento sea legítimo, controlado e informado, con la finalidad de garantizar la privacidad y la 
protección de los mismos, así como garantizar el derecho de autodeterminación informativa del titular 
de dichos datos.
<br/>
<br/>
I. IDENTIDAD Y DOMICILIO DEL RESPONSABLE:
<br/>
<br/>
IKTAN STRATEGIES S.A.P.I DE C.V con domicilio en Av. Jardín 251, Tlatilco, Azcapotzalco, 
02860 Ciudad de México, CDMX, le informa que será el responsable de recabar sus datos personales, 
del uso que se le dé a los mismos y de su protección, comprometiéndose a respetar y cumplir con lo 
establecido en el presente Aviso de Privacidad y la Ley de Datos.
IKTAN STRATEGIES le informa que sus datos personales serán tratados y resguardados con base 
en los principios de licitud, calidad, consentimiento, información, finalidad, lealtad, proporcionalidad 
y responsabilidad, establecidos en la Ley de Datos y su Reglamento.
<br/>
<br/>
Al proporcionar sus datos personales a IKTAN STRATEGIES, Usted otorga su consentimiento para 
que recabe y utilice dichos datos únicamente para los fines descritos en el presente Aviso de 
Privacidad.
<br/>
<br/>
II.FINALIDADES DEL TRATAMIENTO DE DATOS PERSONALES
<br/>
<br/>
La información de los usuarios de IKTAN STRATEGIES será utilizada para las siguientes finalidades 
principales:
<br/>
A) Fines de identificación;
<br/>
B) Crear y mantener actualizada la base de datos interna;
<br/>
C) Permitirle el acceso a los cursos que lleve a cabo IKTAN STRATEGIES
<br/>
D) Enviarle vía correo electrónico invitaciones a nuestros cursos e información de interés 
relacionada con IKAN STRATEGIES
<br/>
E) Enviarle físicamente a su domicilio las constancias de los cursos realizados en IKTAN 
STRATEGIES
<br/>
<br/>
IKTAN STRATEGIES cuenta con los recursos tecnológicos, materiales y humanos, así como con 
procedimientos para proteger sus datos personales y prevenir accesos no autorizados, uso o 
divulgación de los mismos, sin importar donde se traten los datos personales.
No obstante, usted podrá manifestar su negativa para el tratamiento de sus datos personales para 
cualquiera de las finalidades listadas rechazando el presente Aviso de Privacidad. En caso contrario 
se entenderá que usted como titular, consiente el tratamiento de sus datos personales para todas las 
finalidades enumeradas anteriormente
<br/>
<br/>
III.DATOS PERSONALES QUE PODRÁN SER RECABADOS Y TRATADOS
<br/>
<br/>
Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, los datos personales
que serán recabados, utilizados y tratados son (en lo sucesivo denominados como los “Datos
Personales”):
<br/>
<br/>
• Nombre completo
<br/>
• Número telefónico, fijo o celular.
<br/>
• CURP
<br/>
• Puesto de trabajo
<br/>
• Ocupación específica
<br/>
• Correo electrónico
<br/>
• Domicilio
<br/>
<br/>
VI.TRANSFERENCIA DE DATOS PERSONALES
<br/>
<br/>
Se hace de su conocimiento en términos de lo dispuesto por el artículo 37 fracciones IV, V, VI, VII
de la Ley y 68 del Reglamento, que IKAN STRATEGIES podrá divulgar y transferir sus Datos
Personales.
En estos casos, IKAN STRATEGIES tomará todas las medidas necesarias para solicitar que se
protejan adecuadamente sus Datos Personales, de conformidad con la Ley de Datos y las políticas de
privacidad para la protección de los mismos. IKAN STRATEGIES no podrá transferir los Datos
Personales a terceros sin su consentimiento, salvo por lo previsto en el presente Aviso de Privacidad
y por las excepciones previstas en el artículo 37 de la ley.
<br/>
<br/>
V.MEDIDAS DE SEGURIDAD PARA PROTEGER SUS DATOS PERSONALES
<br/>
<br/>
Su información personal será resguardada bajo estricta confidencialidad, y para prevenir
razonablemente el uso o divulgación indebida de la misma, IKAN STRATEGIES ha implementado
medidas de seguridad de conformidad con la Ley de Datos. Contamos con políticas de privacidad y
acceso restringido a la información personal sólo a empleados autorizados, un inventario de datos
personales y de los sistemas de tratamiento y análisis de riesgo.
<br/>
<br/>
VI.MEDIOS PARA EJERCER LOS DERECHOS DE ACCESO, RECTIFICACIÓN,
<br/>
<br/>
CANCELACIÓN U OPOSICIÓN (“DERECHOS ARCO”).
<br/>
<br/>
De conformidad con el artículo 22,23,24 y 25 de la Ley de Datos, Usted tiene el derecho de acceder
a los datos que posee IKTAN ESTRATEGIES y a los detalles del tratamiento de éstos, así como a
rectificarlos en caso de ser inexactos o incompletos; cancelarlos en los términos de la Ley de Datos u
oponerse al tratamiento de estos para fines específicos.
<br/>
<br/>
Para ejercer los Derechos ARCO, Usted o su representante legal deberán elaborar la "Solicitud
Ejercicio de los Derechos ARCO" y enviarla escaneada al correo electrónico: contacto@iktanst.com,
para su atención y seguimiento. Es importante que considere los siguientes puntos al momento de
enviar o entregar su solicitud:
<br/>
<br/>
• Indicar su nombre, domicilio y correo electrónico para poder comunicarle la respuesta a su
solicitud.
<br/>
• Indicar los datos personales respecto de los que se busca ejercer alguno de los derechos.
<br/>
• Anexar cualquier documento o información que facilite la localización de sus datos
personales.
<br/>
• Anexar copia del documento que acredite su identidad (credencial de elector, cédula
profesional o pasaporte vigente).
<br/>
<br/>

IKTAN STRATEGIES dará respuesta a dicha solicitud en un plazo no mayor a 20 días por el mismo
medio por el cual Usted haya realizado su solicitud, por medio de copias simples o electrónicamente,
según sea el caso. En caso de que su solicitud se conteste de manera afirmativa o procedente, los
cambios solicitados se harán en un plazo máximo de 15 días hábiles.
<br/>
<br/>
En caso de que Usted solicite el acceso a sus datos personales, IKTAN STRATEGIES le informará
mediante el correo electrónico en el que comuniquemos nuestra respuesta a su solicitud, el medio por
el cual se le dará acceso a su información en caso de ser procedente. IKTAN STRATEGIES podrá
ampliar los plazos referidos en este párrafo, por una sola vez, por un periodo igual al original, lo cual
le será informado.
<br/>
<br/>
VII.MEDIOS PARA REVOCAR EL CONSENTIMIENTO PARA EL TRATAMIENTO DE
DATOS PERSONALES
<br/>
<br/>
Para revocar su consentimiento para el tratamiento de sus datos personales, deberá presentar su
solicitud enviando un correo electrónico a la siguiente dirección: contacto@iktanst.com. El usuario
debe seguir el procedimiento que se describe en el numeral anterior. Si con posterioridad a la
revocación, solicita la confirmación de la misma, IKTAN STRATEGIES le responderá de forma
expresa.
<br/>
<br/>
Le informamos que no en todos los casos podremos atender su solicitud o concluir el tratamiento de
sus datos personales de forma inmediata, ya que es posible que por alguna obligación legal requiramos
seguir tratando sus datos personales.
<br/>
<br/>
VIII. OPCIONES PARA LIMITAR EL USO O DIVULGACIÓN DE SUS DATOS
PERSONALES
<br/>
<br/>
Para limitar el uso o divulgación de sus datos personales, Usted deberá solicitarlo mediante solicitud 
debidamente firmada, presentada vía electrónica, solicitando la limitación del uso o divulgación de 
que se trate. Para efectos de lo anterior, deberá dirigirnos su respectiva solicitud por escrito, siguiendo 
el mismo procedimiento establecido en el presente Aviso de Privacidad para el ejercicio de los 
Derechos ARCO, requerimos una descripción clara y precisa de los datos respecto de los cuales busca 
limitar su uso y divulgación.
<br/>
<br/>
Recibido el escrito por el que nos indique que desea limitar el uso y divulgación de sus datos 
personales, tendremos 5 días hábiles para analizar, atender y enviarle la respuesta correspondiente. 
El medio por el cual le enviaremos nuestra respuesta, será aquel que nos sea indicado por usted en su 
solicitud, correo electrónico o, en su defecto, por el mismo medio por el cual nos hizo llegar su escrito.
<br/>
<br/>
IX. ¿CÓMO PROTEGEMOS SU INFORMACIÓN PERSONAL?
<br/>
<br/>
Nos comprometemos a proteger su información personal y poner en práctica medidas de seguridad 
administrativas, técnicas y físicas adecuadas para protegerla contra todo tratamiento no autorizado o 
ilegal y contra cualquier pérdida, destrucción o daño accidentales. Estas medidas incluyen políticas, 
procedimientos, control de accesos físicos y elementos técnicos relacionados con los controles de 
acceso a la información.
<br/>
<br/>
El presente Aviso de Privacidad podrá ser modificado y/o ajustado, cualquier modificación le será 
notificada a Usted vía correo electrónico. Usted será el único responsable de verificar si se le ha 
notificado alguna modificación. Para los casos en los que su consentimiento sea necesario porque 
modifiquemos nuestra identidad, requiramos de usted más Datos Personales de los aquí mencionados, 
modifiquemos el fin del presente Aviso de Privacidad y/o cambien las condiciones de transferencia, 
de igual forma, le haremos llegar nuestro aviso correspondiente actualizado vía correo electrónico y 
se entenderá que usted acepta dicho Aviso de Privacidad hasta que no recibamos cualquier 
comunicación de usted en sentido contrario. 
<br/>
<br/>
Por medio del presente usted acuerda y reconoce que el presente Aviso de Privacidad le será aplicable 
en todo momento. Asimismo, usted, en este acto, reconoce y acepta los términos y condiciones 
establecidos en el presente Aviso de Privacidad.
<br/>
<br/>
Última actualización: 15/07/2022


                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                 
                  <a
                    href="email"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Aceptar
                  </a>
                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>  )
}

export default PoliticasPrivacidad



