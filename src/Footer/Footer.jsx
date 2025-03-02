export default function Footer() {
  return (
    <>
      <footer className="bg-neutral text-neutral-content py-10 px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* Logo & Company Info */}
          <aside className="flex flex-col items-center md:items-start">
            <a href="https://www.homeinstead.com/" className="mb-3">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
            </a>
            <p className="text-sm">
              Home Instead Ltd. <br />
              Providing reliable homes for dreamers since 2000.
            </p>
          </aside>

          {/* Services Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold">Services</h6>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">Branding</a>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">Design</a>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">Marketing</a>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">Advertisement</a>
          </nav>

          {/* Company Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold">Company</h6>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">About us</a>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">Contact</a>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">Jobs</a>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">Press kit</a>
          </nav>

          {/* Legal Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold">Legal</h6>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">Terms of use</a>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">Privacy policy</a>
            <a className="link link-hover block mt-1 cursor-pointer hover:underline">Cookie policy</a>
          </nav>

        </div>
      </footer>
    </>
  );
}
