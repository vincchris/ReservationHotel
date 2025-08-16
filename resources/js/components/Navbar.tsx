import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-red-700 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* { Logo } */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img src="" alt="Hotel Grand Metro" className="h-10 w-10" />
            <Link href="/" className="text-2xl font-bold tracking-wide">Hotel
            <span className="text-yellow-400">Stay</span>
            </Link>
          </div>
          {/* {Desktop Menu} */}
          <div>
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/rooms" className="hover:text-yellow-400 transition">Rooms</Link>
            <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          </div>

        {/* {Auth Button} */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-red-700 transition">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 bg-yellow-400 text-red-700 rounded-md hover:bg-yellow-500 transition">
            Sign Up
          </Link>
        </div>

        {/* {Mobile Menu Button} */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24}/> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </div>

      {/* { Mobile Menu } */}
      {isOpen && (
        <div className="md:hidden bg-red-700 shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block hover:text-yellow-400">Home</Link>
            <Link href="/rooms" className="block hover:text-yellow-400">Rooms</Link>
            <Link href="/about" className="block hover:text-yellow-400">About</Link>
            <Link href="/contact" className="block hover:text-yellow-400">Contact</Link>
            <hr className="my-2 border-yellow-500"/>
            <Link href="/login" className="block px-4 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-red-700 transition">
            Login
            </Link>
            <Link href="/register" className="block px-4 py-2 bg-yellow-400 text-red-700 rounded-md hover:bg-yellow-500 transition">
            Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}