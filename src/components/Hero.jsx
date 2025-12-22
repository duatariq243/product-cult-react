function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1649767537763-a0118ad8651a?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5ub3ZhdGlvbnxlbnwxfDB8fG9yYW5nZXwxNzQ5NTk4NjE1fDA&ixlib=rb-4.1.0"
        alt="Tech background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Overlay gradient (optional, for better contrast) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-40"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Discover Tomorrow’s Tech, Today.
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join Product Cult to find and share the latest innovations in tech, connect with makers, and explore groundbreaking products before anyone else.
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
          Explore Products
        </button>
      </div>
    </section>
  );
}



export default Hero;
