// Simple Footer component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-6">
    <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-8 text-sm">
        <div className="pl-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-900 font-bold">L</span>
            </div>
            <span className="font-bold text-xl">LinkKu</span>
          </div>
          <p className="text-gray-400">
            Kelola semua tautan favoritmu dengan mudah dan efisien.
          </p>
        </div>
        <div className="pl-8">
        <h4 className="font-semibold mb-4 text-base md:text-lg">Layanan</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Fitur</a></li>
            <li><a href="#" className="hover:text-white transition">Harga</a></li>
            <li><a href="#" className="hover:text-white transition">API</a></li>
          </ul>
        </div>
        <div className="pl-4">
          <h4 className="font-semibold mb-4">Perusahaan</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Tentang</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Karir</a></li>
          </ul>
        </div>
        <div className="pl-8">
          <h4 className="font-semibold mb-4">Dukungan</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Bantuan</a></li>
            <li><a href="#" className="hover:text-white transition">Kontak</a></li>
            <li><a href="#" className="hover:text-white transition">Privasi</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; Copyright 2024 LinkKu 2025. All Rights Reserved | Develop by Ferdyana</p>
      </div>
    </div>
  </footer>
);

export default Footer;