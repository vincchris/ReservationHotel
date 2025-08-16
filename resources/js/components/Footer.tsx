import { Link } from "@inertiajs/react";

export default function Footer() {
  return (
    <footer className="bg-red-800 text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Logo & Brand */}
      <div >
        <div className="flex items-center space-x-2">
          <img src="" alt="Logo" className="h-10 w-10" />
          <h2 className="text-xl font-bold text-yellow-400">Hotel Grand Metro</h2>
        </div>
        <p className="mt-3 text-sm">
          Experience the best stay with luxury rooms and premium services. Your comfort is our priority
        </p>
      </div>
      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
        <ul className="mt-3 space-y-1">
          <li><Link href="/" className="hover:text-white">Home</Link></li>
          <li><Link href="/" className="hover:text-white">Rooms</Link></li>
          <li><Link href="/" className="hover:text-white">About</Link></li>
          <li><Link href="/" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold text-yellow-400">Contact Us</h3>
        <p className="mt-3">Jl Hz Mustofa</p>
        <p>📞 +62 812-3456-7890</p>
        <p>✉️ support@hotelgrandmetro.com</p>
      </div>
      </div>
      <div className="bg-red-900 py-4 text-center text-sm border-t border border-yellow-400">
         © {new Date().getFullYear()} HotelStay. All rights reserved.
      </div>
    </footer>
  )
}