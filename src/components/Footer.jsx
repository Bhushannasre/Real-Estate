import { assets } from '../assets/assets';

function Footer() {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 overflow-hidden text-white"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Logo + About */}
        <div className="w-full md:w-1/3">
          <img src={assets.logo_dark} alt="Company Logo" className="mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            We specialize in delivering quality and innovative digital solutions. Stay connected
            and explore our services to build your next big idea with us.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li><a href="#Header" className="hover:text-white">Home</a></li>
            <li><a href="#About" className="hover:text-white">About</a></li>
            <li><a href="#Projects" className="hover:text-white">Projects</a></li>
            <li><a href="#Contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="#PrivacyPolicy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4 max-w-xs">
            Get the latest updates, articles, and resources delivered straight to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 rounded px-4 py-2 text-sm text-gray-300 border border-gray-700 focus:outline-none w-full sm:w-auto"
            />
            <button className="bg-blue-600 hover:bg-green-600 transition-colors px-6 py-2 text-sm rounded text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
