import { Link } from "@inertiajs/react";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Star, Award, Shield, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "Spa & Wellness", href: "/spa" },
    { name: "Events", href: "/events" },
    { name: "About Us", href: "/about" }
  ];

  const services = [
    { name: "Room Service", href: "/services" },
    { name: "Concierge", href: "/services" },
    { name: "Business Center", href: "/services" },
    { name: "Valet Parking", href: "/services" },
    { name: "Airport Transfer", href: "/services" },
    { name: "Laundry Service", href: "/services" }
  ];

  const features = [
    { icon: Star, text: "5-Star Rating" },
    { icon: Award, text: "Award Winning" },
    { icon: Shield, text: "Safe & Secure" },
    { icon: Clock, text: "24/7 Service" }
  ];

  return (
    <footer className="relative">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Offers
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive deals, special promotions, and insider updates.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-l-full border-0 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-slate-800 placeholder-slate-500"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-r-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-slate-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-transparent bg-gradient-to-br from-yellow-500 to-orange-600 bg-clip-text font-black text-lg">
                      H
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">
                    Hotel Grand
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent ml-1">
                      Metro
                    </span>
                  </h2>
                  <p className="text-sm text-gray-400">Tasikmalaya</p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Experience unparalleled luxury and comfort in the heart of Tasikmalaya.
                Your extraordinary stay begins here.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <feature.icon size={16} className="text-yellow-400" />
                    <span className="text-gray-400">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-black transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Contact Info
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-black transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-400 text-sm">Jl. Hz Mustofa No. 123<br />Tasikmalaya, Jawa Barat</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-black transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-400 text-sm">+62 265 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-black transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400 text-sm">info@hotelgrandmetro.com</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-slate-800 rounded-xl">
                <h4 className="text-white font-semibold mb-2">Business Hours</h4>
                <div className="text-sm text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Front Desk:</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Restaurant:</span>
                    <span>6AM - 11PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spa:</span>
                    <span>9AM - 9PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-slate-950 border-t border-slate-800 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <p>© {currentYear} Hotel Grand Metro. All rights reserved.</p>
                <span className="hidden md:block">|</span>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <span>|</span>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Made with ❤️ for luxury hospitality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}