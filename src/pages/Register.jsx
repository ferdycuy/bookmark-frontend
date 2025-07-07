import { useState } from 'react';
import api from '../api';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.msg || 'Gagal daftar');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar/>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl mb-4 font-bold text-center text-gray-800">Daftar Akun</h2>
        <input
          type="text"
          placeholder="Nama"
          className="border p-2 mb-2 w-full rounded"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-2 w-full rounded"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full rounded"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-blue-900 hover:bg-gray-100 text-white hover:text-blue-900 px-4 py-2 rounded w-full transition">
          Daftar
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Sudah punya akun?{' '}
          <Link to="/login" className="text-blue-900 hover:underline font-semibold">
            Masuk
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
