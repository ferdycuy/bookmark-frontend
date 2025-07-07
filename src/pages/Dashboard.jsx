import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Settings, Instagram, MessageCircle, LogOut, Plus, Search } from 'lucide-react';
import api from '../api';
import AddBookmarkForm from '../components/dashboard/AddBookmarkForm';
import BookmarkCard from '../components/dashboard/BookmarkCard';
import Navbar from '../components/dashboard/Navbar';
import SettingSection from '../components/dashboard/Settings';

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [bookmarks, setBookmarks] = useState([]);
  const [search, setSearch] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const fetchBookmarks = async () => {
    try {
      const res = await api.get('/bookmarks');
      setBookmarks(res.data);
    } catch (err) {
      if (err.response?.status === 401) {
        alert('Sesi habis. Silakan login ulang.');
        navigate('/login');
      } else {
        alert('Gagal mengambil data bookmark.');
      }
    }
  };

  const fetchUserInfo = async () => {
    try {
      const res = await api.get('/auth/me', { withCredentials: true });
      setUserInfo(res.data);
    } catch (err) {
      console.warn('Gagal mengambil info user');
      if (err.response?.status === 401) {
        alert('Sesi habis. Silakan login ulang.');
        navigate('/login');
      }
    }
  };

  useEffect(() => {
    fetchBookmarks();
    fetchUserInfo();
  }, []);

  const handleAdd = async (form) => {
    try {
      await api.post('/bookmarks', form);
      fetchBookmarks();
      setShowAddForm(false);
    } catch (err) {
      alert('Gagal menambah bookmark');
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      await api.put(`/bookmarks/${id}`, data);
      fetchBookmarks();
    } catch (err) {
      alert('Gagal update bookmark');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Yakin hapus bookmark ini?')) return;
    try {
      await api.delete(`/bookmarks/${id}`);
      fetchBookmarks();
    } catch (err) {
      alert('Gagal hapus bookmark');
    }
  };

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (err) {
      console.warn('Logout gagal atau token sudah kedaluwarsa');
    } finally {
      navigate('/login');
    }
  };

  const handleCreateNewMark = () => {
    setActiveMenu('dashboard');
    setShowAddForm(true);
  };

  const handleInstagram = () => {
    window.open('https://instagram.com', '_blank');
  };

  const handleTelegram = () => {
    window.open('https://telegram.org', '_blank');
  };

  const filteredBookmarks = bookmarks.filter(bm => {
    const keyword = search.toLowerCase();
    return (
      bm.title?.toLowerCase().includes(keyword) ||
      bm.description?.toLowerCase().includes(keyword) ||
      bm.category?.toLowerCase().includes(keyword)
    );
  });
  

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
       <Navbar 
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        handleInstagram={handleInstagram}
        handleTelegram={handleTelegram}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col ml-[170px]">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 ml-1 py-6 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <button
              onClick={handleCreateNewMark}
              className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              <Plus size={20} />
              Create new mark
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeMenu === 'dashboard' && (
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Cari bookmark kamu di sini..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {/* Add Bookmark Modal */}
              {showAddForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                      <h2 className="text-xl font-semibold text-gray-900">Add New mark</h2>
                      <button
                        onClick={() => setShowAddForm(false)}
                        className="text-gray-400 hover:text-gray-600 text-xl"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="p-6">
                      <AddBookmarkForm onAdd={handleAdd} />
                    </div>
                  </div>
                </div>
              )}

              {/* Bookmarks List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Your marks {search && `(${filteredBookmarks.length} found)`}
                  </h2>
                </div>
                
                {filteredBookmarks.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                      {search ? 'No bookmarks found matching your search.' : 'No bookmarks yet. Create your first bookmark!'}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBookmarks.map((bm) => (
                      <BookmarkCard 
                        key={bm._id} 
                        bm={bm} 
                        onUpdate={handleUpdate} 
                        onDelete={handleDelete} 
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

        {activeMenu === 'settings' && (
          <SettingSection userInfo={userInfo} onLogout={handleLogout} />
        )}

        </div>
      </main>
    </div>
  );
}

export default Dashboard;