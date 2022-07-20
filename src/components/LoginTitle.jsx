/* This example requires Tailwind CSS v2.0+ */
export default function LoginTitle() {
    return (
      <div className="relative bg-teal-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://imgur.com/pf79XKX.png"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    
          <p className="mt-6 text-xl text-white max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>
    );
  }
  