import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-yellow-400" />
              <span>+62 265 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-yellow-400" />
              <span>info@hotelgrandmetro.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-gray-300">✨ Special Offer: 20% off for weekend bookings</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-transparent bg-gradient-to-br from-yellow-500 to-orange-600 bg-clip-text font-black text-lg">
                      H
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/" className="flex flex-col">
                <div className={`text-2xl font-black tracking-tight transition-colors ${
                  isScrolled ? 'text-slate-800' : 'text-white'
                }`}>
                  Hotel Grand
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent ml-2">
                    Metro
                  </span>
                </div>
                <div className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-slate-500' : 'text-gray-300'
                }`}>
                  Tasikmalaya
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`relative font-semibold transition-all duration-300 hover:scale-105 group ${
                  isScrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white hover:text-yellow-300'
                }`}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/rooms"
                className={`relative font-semibold transition-all duration-300 hover:scale-105 group ${
                  isScrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white hover:text-yellow-300'
                }`}
              >
                Rooms
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/about"
                className={`relative font-semibold transition-all duration-300 hover:scale-105 group ${
                  isScrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white hover:text-yellow-300'
                }`}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className={`relative font-semibold transition-all duration-300 hover:scale-105 group ${
                  isScrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white hover:text-yellow-300'
                }`}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className={`px-6 py-2.5 font-semibold rounded-full border-2 transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? 'border-slate-300 text-slate-700 hover:bg-slate-100'
                    : 'border-white/30 text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-slate-700 font-semibold py-3 px-4 rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                🏠 Home
              </Link>
              <Link
                href="/rooms"
                className="block text-slate-700 font-semibold py-3 px-4 rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                🛏️ Rooms
              </Link>
              <Link
                href="/about"
                className="block text-slate-700 font-semibold py-3 px-4 rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                ℹ️ About
              </Link>
              <Link
                href="/contact"
                className="block text-slate-700 font-semibold py-3 px-4 rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                📞 Contact
              </Link>

              <hr className="my-4 border-gray-200" />

              <div className="space-y-3">
                <Link
                  href="/login"
                  className="block w-full text-center py-3 px-6 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block w-full text-center py-3 px-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}