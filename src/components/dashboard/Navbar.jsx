import { Home, Settings, Instagram, MessageCircle } from 'lucide-react';

function Navbar({ activeMenu, setActiveMenu, handleInstagram, handleTelegram }) {
  return (
    <aside className="w-66 h-screen flex flex-col justify-between bg-white border-r border-gray-200 fixed">
    {/* Atas: Logo dan Navigasi */}
    <div>
        {/* Logo */}
        <div className="p-8 border-b border-white">
        <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center">
            <span className="text-white font-bold">L</span>
        </div>
        </div>

        {/* Main Navigation */}
        <nav className="p-4 space-y-2">
        <button
            onClick={() => setActiveMenu('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
            activeMenu === 'dashboard'
                ? 'bg-gray-200 text-gray-900'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
            <Home size={20} />
            Dashboard
        </button>

        <button
            onClick={() => setActiveMenu('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
            activeMenu === 'settings'
                ? 'bg-gray-200 text-gray-900'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
            <Settings size={20} />
            Settings
        </button>
        </nav>
    </div>

    {/* Bawah: Instagram dan Telegram */}
    <div className="p-4 border-t border-white space-y-2">
        <button
        onClick={handleInstagram}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100 transition-colors"
        >
        <Instagram size={20} />
        Instagram
        </button>

        <button
        onClick={handleTelegram}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100 transition-colors"
        >
        <MessageCircle size={20} />
        Telegram
        </button>
    </div>
    </aside>

  );
}

export default Navbar;
