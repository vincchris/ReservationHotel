import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Star, Users, Wifi, Car, Coffee, Dumbbell, Utensils, Shield, Clock, Phone, Mail, ChevronLeft, ChevronRight, Play, Pause, Volume2 } from 'lucide-react';

const UltraModernHotelHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1
  });
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroSlides = [
    {
      image: '/api/placeholder/1920/1080',
      title: 'Experience Luxury Redefined',
      subtitle: 'In the Heart of Tasikmalaya',
      description: 'Where contemporary elegance meets traditional Indonesian hospitality'
    },
    {
      image: '/api/placeholder/1920/1080',
      title: 'Business Excellence',
      subtitle: 'State-of-the-Art Facilities',
      description: 'Perfect venue for corporate events and business meetings'
    },
    {
      image: '/api/placeholder/1920/1080',
      title: 'Culinary Journey',
      subtitle: 'Award-Winning Dining',
      description: 'Savor exquisite flavors from local and international cuisines'
    }
  ];

  const roomTypes = [
    {
      name: 'Executive Suite',
      size: '65m²',
      price: 1250000,
      originalPrice: 1500000,
      image: '/api/placeholder/600/400',
      features: ['King Bed', 'City View', 'Work Desk', 'Mini Bar', 'Balcony'],
      amenities: ['Free WiFi', 'Air Conditioning', 'Room Service', 'Safe Box']
    },
    {
      name: 'Deluxe Room',
      size: '45m²',
      price: 850000,
      originalPrice: 1000000,
      image: '/api/placeholder/600/400',
      features: ['Queen Bed', 'Garden View', 'Seating Area', 'Mini Fridge'],
      amenities: ['Free WiFi', 'Air Conditioning', 'Daily Housekeeping']
    },
    {
      name: 'Presidential Suite',
      size: '120m²',
      price: 2500000,
      originalPrice: 3000000,
      image: '/api/placeholder/600/400',
      features: ['Master Bedroom', 'Living Room', 'Kitchenette', 'Jacuzzi', 'Terrace'],
      amenities: ['Butler Service', 'Private Check-in', 'Complimentary Breakfast']
    }
  ];

  const facilities = [
    { icon: Wifi, name: 'Free High-Speed WiFi', desc: 'Complimentary internet access' },
    { icon: Car, name: 'Valet Parking', desc: 'Secure parking services' },
    { icon: Coffee, name: 'Coffee Lounge', desc: '24/7 premium coffee bar' },
    { icon: Dumbbell, name: 'Fitness Center', desc: 'Modern gym equipment' },
    { icon: Utensils, name: 'Fine Dining', desc: 'Award-winning restaurant' },
    { icon: Shield, name: 'Security', desc: '24/7 security services' }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      country: 'Australia',
      rating: 5,
      comment: 'Exceptional service and beautiful rooms. The staff went above and beyond to make our stay memorable.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Ahmad Rahman',
      country: 'Indonesia',
      rating: 5,
      comment: 'Hotel terbaik di Tasikmalaya! Pelayanan luar biasa dan fasilitas lengkap. Sangat recommended!',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'David Kim',
      country: 'South Korea',
      rating: 5,
      comment: 'Perfect for business trips. Great meeting facilities and excellent location in the city center.',
      avatar: '/api/placeholder/80/80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Ultra Modern Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-transparent bg-gradient-to-br from-amber-500 to-red-600 bg-clip-text font-black text-lg">H</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                  GRAND METRO
                </h1>
                <p className="text-xs text-amber-400 font-semibold">TASIKMALAYA</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Rooms', 'Dining', 'Events', 'Contact'].map((item) => (
                <button key={item} className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 font-medium">
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur border border-white/20">
                Book Now
              </button>
              <select className="bg-transparent text-white border border-white/30 rounded-lg px-3 py-2">
                <option value="en" className="bg-black">EN</option>
                <option value="id" className="bg-black">ID</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Advanced Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20"></div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-sm text-amber-300 text-sm font-bold rounded-full border border-amber-500/30 mb-6">
              ✨ Luxury Hospitality Since 2010
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              {heroSlides[currentSlide].title}
            </span>
            <span className="block text-3xl md:text-5xl mt-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              {heroSlides[currentSlide].subtitle}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-10 py-4 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white font-bold rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2">
              <span className="flex items-center gap-3">
                Explore Rooms
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>

            <button className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-500 backdrop-blur-sm">
              <span className="flex items-center gap-3">
                <Play className="w-5 h-5" />
                Watch Video
              </span>
            </button>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
          <button onClick={prevSlide} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-amber-500 w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur transition-all">
            <ChevronRight className="w-5 h-5" />
          </button>

          <button onClick={() => setIsPlaying(!isPlaying)} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur transition-all ml-4">
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>
      </section>

      {/* Quick Booking Widget */}
      <section className="relative -mt-32 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Book Your Perfect Stay
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Check-in</label>
                <input
                  type="date"
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-all"
                  value={bookingData.checkIn}
                  onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Check-out</label>
                <input
                  type="date"
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-all"
                  value={bookingData.checkOut}
                  onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Guests</label>
                <select
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-all"
                  value={bookingData.guests}
                  onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num} className="bg-slate-800">{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Rooms</label>
                <select
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-all"
                  value={bookingData.rooms}
                  onChange={(e) => setBookingData({...bookingData, rooms: parseInt(e.target.value)})}
                >
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num} className="bg-slate-800">{num} Room{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold p-4 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Search Rooms
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms with Interactive Cards */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              Luxury Accommodations
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our meticulously designed rooms and suites, each offering unparalleled comfort and stunning views of Tasikmalaya
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 ${
                  selectedRoom === index ? 'ring-2 ring-amber-500' : ''
                }`}
                onMouseEnter={() => setSelectedRoom(index)}
              >
                {/* Discount Badge */}
                <div className="absolute top-6 right-6 z-10 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-bold rounded-full">
                  Save {Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}%
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
                      <p className="text-amber-400 font-semibold">{room.size}</p>
                    </div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/70 mb-3">Room Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-white/80">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl font-black text-white">{formatPrice(room.price)}</span>
                        <span className="text-lg text-white/60">/night</span>
                      </div>
                      <span className="text-sm text-white/50 line-through">{formatPrice(room.originalPrice)}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-4 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Book This Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities with Modern Icons */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              World-Class Facilities
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience exceptional amenities designed to exceed your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{facility.name}</h3>
                <p className="text-white/70">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl border border-white/10">
                <div className="flex items-center mb-6">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-white/60 text-sm">{review.country}</p>
                  </div>
                  <div className="ml-auto flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Address</h3>
                    <p className="text-white/70">Jl. Hz Mustofa, Tasikmalaya, Jawa Barat 46115</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Phone</h3>
                    <p className="text-white/70">+62 265 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Email</h3>
                    <p className="text-white/70">reservations@hotelgrandmetro.com</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Make a Reservation
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl p-2 border border-white/10">
              <div className="w-full h-96 bg-slate-700 rounded-2xl flex items-center justify-center">
                <p className="text-white/50">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UltraModernHotelHomepage;