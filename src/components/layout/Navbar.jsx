import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [infoOpen, setBantuanOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <header className="w-full shadow bg-white/70 backdrop-blur-md fixed top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Kiri: Logo + Nav */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <a href="/#beranda" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">L</span>
            </div>
            <span className="text-blue-900 font-bold text-xl">LinkKu</span>
          </a>

          {/* Nav Link - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 relative">
            <a href="/#beranda" className="text-black-800 hover:text-gray-500 font-medium transition">Home</a>
            <a href="/#tentang" className="text-black-800 hover:text-gray-500 font-medium transition">Kenali LinkKu</a>

            {/* Dropdown Info */}
            <div
              className="relative"
              onMouseEnter={() => setBantuanOpen(true)}
              onMouseLeave={() => setBantuanOpen(false)}
            >
              <button className="text-black-800 hover:text-gray-500 font-medium transition">
                Bantuan
              </button>
              <div
                className={`absolute mt-2 bg-white border border-gray-200 rounded shadow-md w-48 py-2 z-50 transition-opacity duration-150 ${
                  infoOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
              >
                <a href="/#gratis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bebas Biaya</a>
                <a href="/#faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tanya Jawab</a>
              </div>
            </div>
          </nav>
        </div>

        {/* Kanan: Tombol Auth */}
        {!isAuthPage && (
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="text-black-900 hover:text-gray-500 font-medium transition"
            >
              Masuk
            </a>
            <a
              href="/register"
              className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded-full transition font-medium"
            >
              Daftar
            </a>
          </div>
        )}

        {/* Hamburger - Mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
      <div className="md:hidden bg-white/60 backdrop-blur-md shadow-lg px-4 pb-4 space-y-2">
        <a href="/#Home" className="block text-black py-2 hover:text-blue-900 transition">Beranda</a>
        <a href="/#tentang" className="block text-black py-2 hover:text-blue-900 transition">Kenali LinkKu</a>

        {/* Dropdown Mobile Info */}
        <button
          onClick={() => setBantuanOpen((prev) => !prev)}
          className="w-full text-left text-black py-2 hover:text-blue-900 transition font-medium"
        >
          Bantuan {infoOpen }
        </button>
        {infoOpen && (
          <div className="ml-4 space-y-1">
            <a href="/#gratis" className="block text-black text-sm py-1 hover:text-blue-900 transition">Bebas Biaya</a>
            <a href="/#faq" className="block text-black text-sm py-1 hover:text-blue-900 transition">Tanya Jawab</a>
          </div>
        )}

        {!isAuthPage && (
          <>
            <a href="/login" className="block text-black py-2 font-medium hover:text-blue-900 transition">Masuk</a>
            <a href="/register" className="block bg-blue-900 text-white px-4 py-2 rounded-full text-center font-medium hover:bg-blue-700 transition">Daftar</a>
          </>
        )}
      </div>
    )}

    </header>
  );
}

export default Navbar;
