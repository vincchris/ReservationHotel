import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Head } from "@inertiajs/react";

const home = () => {
  <>
  <Head title="Home" />
  <Navbar />

  {/* Hero Section */}
  <section className="bg-gradient-to-r from-red-700 to-yellow-500 h-[80vh] flex items-center justify-center text-white text-center px-4 relative">
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold">Welcome to <span className="text-yellow-300">Hotel Grand Metro</span></h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto">Luxury & Comfort in Every Detail. Book your dream stay now.</p>
      <a
      href="/rooms"
      className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-red-700 font-semibold rounded-md shadow-lg hover:bg-yellow-500 transition"
      >
        View Rooms
      </a>
    </div>
  </section>

  {/* Featured Rooms */}
  <section className="max-w-7xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold text-center text-red-700 mb-8">Our Featured Rooms</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((room) => (
        <div key={room} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
          <img src={`/images/rooms/${room}.jpg`} alt={`Room ${room}`} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-red-700">Luxury Room {room}</h3>
            <p className="text-sm text-gray-600">Starting from <span className="text-yellow-500">$99/night</span></p>
            <a
            href={`/rooms/${room}`}
            className="mt-4 inline-block text-yellow-500 hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>

  <Footer />
  </>
}

export default home