import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Contact() {
  return (
    <>
      {/* Contact Page Header */}
      <div className="pt-24 text-center md:text-left px-6 mt-20">
        <h1 className="text-3xl font-bold">Contact Page</h1>
        <div className="md:flex justify-between items-center mt-5">
          <p className="font-bold">
            Check out our website for a wide range of self-serve solutions. Please call
            <br />
            customer support or use one of these numbers.
          </p>
          <NavLink to={`/home`}>
            <button className="btn border-2 border-black px-5 py-2 mt-4 md:mt-0 bg-white">
              Home
            </button>
          </NavLink>
        </div>
      </div>

      {/* Contact Forms Section */}
      <div className="max-w-5xl mx-auto px-6 mt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Support Ticket Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="font-bold text-2xl">Need help? Open a ticket</h1>
            <p className="font-medium text-gray-600 mt-3">
              Our support team will get back to you ASAP via email.
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <label className="font-semibold">Your Name</label>
                <input type="text" placeholder="Enter Your Name" className="w-full p-3 mt-1 border rounded-md" />
              </div>

              <div>
                <label className="font-semibold">Your Email</label>
                <input type="email" placeholder="Enter Your Email" className="w-full p-3 mt-1 border rounded-md" />
              </div>

              <div>
                <label className="font-semibold">Message</label>
                <textarea placeholder="Enter your message" className="w-full p-3 mt-1 border rounded-md h-32"></textarea>
              </div>
            </div>

            <button className="btn bg-blue-500 text-white w-full py-3 mt-5 rounded-lg shadow-md hover:bg-blue-600 transition">
              Submit Ticket
            </button>
          </div>

          {/* Subscription Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="font-bold text-2xl">Subscribe to receive future updates</h1>
            <p className="font-medium text-gray-600 mt-3">
              Stay informed with our latest updates. No spam, guaranteed!
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <label className="font-semibold">Your Name</label>
                <input type="text" placeholder="Enter Your Name" className="w-full p-3 mt-1 border rounded-md" />
              </div>

              <div>
                <label className="font-semibold">Your Email</label>
                <input type="email" placeholder="Enter Your Email" className="w-full p-3 mt-1 border rounded-md" />
              </div>
            </div>

            <button className="btn bg-blue-500 text-white w-full py-3 mt-5 rounded-lg shadow-md hover:bg-blue-600 transition">
              Subscribe
            </button>

            <p className="text-center font-medium text-gray-600 mt-4">
              No spam guaranteed, so please don’t send any spam mail.
            </p>
          </div>

        </div>
      </div>

     
    </>
  );
}
