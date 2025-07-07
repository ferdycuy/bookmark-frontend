import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Orbit from '../components/layout/OrbitComponet';
import {CheckLine, CircleDollarSign, ClockFading} from 'lucide-react';
import FAQSection from '../components/layout/FaqSection';

function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div id="beranda" className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-cyan-100 flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex flex-col justify-center px-6 md:px-12 pt-24 pb-10 gap-10">
      {/* Hero Top (Kiri dan Orbit) */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
        {/* Kiri */}
        <div className="md:w-7/12 mt-10 text-center md:text-left">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Satu Tempat Untuk Semua Tautan Favoritmu
          </motion.h1>
          <motion.p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            LinkKu membantu kamu menyimpan, mengatur, dan mengakses semua link favoritmu dengan cepat dan aman
          </motion.p>
          <motion.div>
            <a
              href="/login"
              className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-8 py-4 text-lg rounded-full transition"
            >
              Mulai Gratis Sekarang!
            </a>
          </motion.div>
        </div>

        {/* Orbit */}
        <div className="md:w-5/12 hidden sm:block">
          <Orbit />
        </div>
      </div>

      {/* Langkah-langkah (selalu tampil) */}
      <div className="w-full mt-8 flex justify-center px-4">
        <div className="w-full max-w-5xl grid gap-6 sm:grid-cols-3 text-left text-sm text-gray-600">
          <div>
            <p>
              <span className="font-bold text-blue-800 text-lg mr-2">1.</span>
              FREE, Cukup daftar dan login untuk mulai menyimpan semua link penting kamu.
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-purple-800 text-lg mr-2">2.</span>
              Simpan tautan sesuai kategori yang kamu inginkan dengan mudah.
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-pink-800 text-lg mr-2">3.</span>
              Link pentingmu tersimpan rapi dan aman, bisa diakses kapan saja.
            </p>
          </div>
        </div>
      </div>
    </main>
      {/* Kenali Kami Section */}
      <section id="tentang" className="py-32 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Kenali LinkKu
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            <strong>LinkKu</strong> adalah solusi sederhana untuk kamu 
            yang sering menyimpan tautan penting. Dirancang agar mudah digunakan, LinkKu membantumu mengelola dan mengakses link-link penting kapan saja, di mana saja—dengan cepat, rapi, dan aman.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Aman & Pribadi</h3>
              <p className="text-gray-600">
                Setiap bookmark milikmu sepenuhnya privat. Data disimpan secara aman dan hanya bisa diakses olehmu.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Cepat & Mudah</h3>
              <p className="text-gray-600">
                Tambah, edit, atau hapus link hanya dalam beberapa klik. Tidak perlu ribet lagi!
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Akses Kapan Saja</h3>
              <p className="text-gray-600">
                Gunakan LinkKu dari berbagai perangkat. Simpan link pentingmu dan akses dari mana pun kamu mau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Gratis */}
      <section id="gratis" className="py-32 px-4 bg-gradient-to-r from-cyan-300 via-cyan-600 to-cyan-700">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* gratis Content */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                100% GRATIS
                <br />
                Tanpa Batas Waktu!
              </h2>
              
              <p className="text-white text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto opacity-90">
                LinkKu berkomitmen memberikan layanan terbaik tanpa biaya apapun. Nikmati semua fitur premium tanpa perlu khawatir soal tagihan bulanan atau biaya tersembunyi.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-left bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300">
                <CircleDollarSign className="w-8 h-8 text-cyan-800 mb-3"></CircleDollarSign>
                <h3 className="font-bold text-white mb-2">Tanpa Biaya</h3>
                <p className="text-white text-sm opacity-90">Tidak ada biaya pendaftaran, langganan, atau biaya tersembunyi</p>
              </div>
              
              <div className="text-left bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300">
                <CheckLine className="text-cyan-800 w-8 h-8 mb-3"></CheckLine>
                <h3 className="font-bold text-white mb-2">Tanpa Batas</h3>
                <p className="text-white text-sm opacity-90">Simpan link sebanyak yang kamu mau tanpa ada batasan</p>
              </div>
              
              <div className="text-left bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300">
                <ClockFading className="text-cyan-800 w-8 h-8 mb-3"></ClockFading>
                <h3 className="font-bold text-white mb-2">Selamanya</h3>
                <p className="text-white text-sm opacity-90">Akun kamu tidak akan pernah expired atau dibatasi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Home;