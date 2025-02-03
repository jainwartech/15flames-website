import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-0 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/Prancheta 1 1.png" alt="15 Flames" className="h-32 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-500">Services</Link>
            <Link to="/partners" className="text-gray-700 hover:text-orange-500">Partners</Link>
            <Link to="/products" className="text-gray-700 hover:text-orange-500">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/partners"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Partners
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;