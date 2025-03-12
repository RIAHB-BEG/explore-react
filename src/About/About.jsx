import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
  


    <div className="px-4 md:px-8 lg:px-16 mt-32">
      {/* About Us Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold mt-6">
          About Us
        </h1>
        <p className="mt-3 font-medium text-lg md:text-xl max-w-2xl">
          We are builders and sellers. Choose your own, keep your family happy.
          <br /> Home is not a place, it's a feeling. Home is where our story begins.
        </p>
      </div>

      {/* Why We Are the Best Choice */}
      <div className="flex flex-col lg:flex-row items-center md:ms-32 gap-12 mt-24 mb-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bold text-3xl md:text-4xl">
            Why we are the best choice for you?
          </h1>
          <p className="font-bold mt-5">
            The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable
            home applications with interactive panel discussions and roundtables.
          </p>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <li className="font-bold text-2xl md:text-3xl text-red-500">1. High Quality</li>
            <li className="font-bold text-2xl md:text-3xl text-amber-300">2. Huge Facilities</li>
            <li className="font-bold text-2xl md:text-3xl text-lime-500">3. Beautiful Design</li>
            <li className="font-bold text-2xl md:text-3xl text-teal-500">4. Trusted</li>
            <li className="font-bold text-2xl md:text-3xl text-sky-500">5. Budget Friendly</li>
            <li className="font-bold text-2xl md:text-3xl text-fuchsia-500">6. Expert Builders</li>
          </ul>
        </div>
        <div className="lg:w-1/2  flex justify-center">
          <img src="https://cdn.pixabay.com/photo/2020/01/03/05/36/house-4737447_1280.png" className="w-full max-w-md" alt="House" />
        </div>
      </div>

      <div className="border-b-2 mx-12 mt-5">
        
      </div>

      {/* Crafted for Startups, SaaS, and Home Sites */}
      <div className="flex flex-col lg:flex-row items-center gap-20 mt-24 mb-10">
        <div className="lg:w-1/2 flex justify-center">
          <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" className="w-full max-w-md" alt="Building" />
        </div>
        <div className="lg:w-1/2 text-center md:ms-20 lg:text-left">
          <h1 className="font-bold text-3xl md:text-4xl">
       If you need than we will provide    <br /> Home Sites
          </h1>
          <p className="font-bold mt-5">
            The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable
            home applications with interactive panel discussions and roundtables.
          </p>
          <ul className="mt-5 space-y-4">
            <li>
              <h2 className="font-bold text-2xl md:text-3xl text-red-500">1. High Quality</h2>
              <p className="font-bold text-lg">A very high-quality product ensuring top standards.</p>
            </li>
            <li>
              <h2 className="font-bold text-2xl md:text-3xl text-amber-300 mt-3">2. Huge Facilities</h2>
              <p className="font-bold text-lg">No compromise in facilities. everything you need.</p>
            </li>
            <li>
              <h2 className="font-bold text-2xl md:text-3xl text-lime-500">3. Beautiful Design</h2>
              <p className="font-bold text-lg">The beauty of design is defined by the experience.</p>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="border-b-2 mx-12 mt-5">
        
        </div>
      <div className="flex flex-col lg:flex-row items-center md:ms-32 gap-12 mt-24 mb-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bold text-3xl md:text-4xl">
        At present or in future we also provide these facilities.
          </h1>
          <p className="font-bold mt-5">
            The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable
            home applications with interactive panel discussions and roundtables.
          </p>
          <ul className="mt-5 space-y-4">
            <li>
              <h2 className="font-bold text-2xl md:text-3xl text-red-500">4. Trusted</h2>
              <p className="font-bold text-lg">A very high-quality product ensuring top standards.</p>
            </li>
            <li>
              <h2 className="font-bold text-2xl md:text-3xl text-amber-300 mt-3">5. Bughet Freiendly</h2>
              <p className="font-bold text-lg">No compromise in facilities. everything you need.</p>
            </li>
            <li>
              <h2 className="font-bold text-2xl md:text-3xl text-lime-500">6. Expert Builders</h2>
              <p className="font-bold text-lg">The beauty of design is defined by the experience.</p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2  flex justify-center">
          <img src="https://cdn.pixabay.com/photo/2020/01/03/05/36/house-4737447_1280.png" className="w-full max-w-md" alt="House" />
        </div>
      </div>
    </div>
  

    </>
  );
}
