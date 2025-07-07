// import { useEffect, useState } from 'react';
// import api from '../api'; // axios instance with token
// import { useNavigate } from 'react-router-dom';

// function Profile() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const fetchProfile = async () => {
//     try {
//       const res = await api.get('/auth/profile');
//       setUser(res.data);
//     } catch (err) {
//       alert('Gagal mengambil profil. Login ulang mungkin?');
//       navigate('/login');
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   if (!user) return <p className="text-center mt-8">Memuat data...</p>;

//   return (
//     <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow rounded-lg">
//       <h1 className="text-3xl font-bold mb-4 text-blue-700">👤 Profil Pengguna</h1>
//       <div className="text-gray-700 space-y-4">
//         <p><span className="font-semibold">Nama:</span> {user.name}</p>
//         <p><span className="font-semibold">Email:</span> {user.email}</p>
//       </div>
//       <button
//         onClick={handleLogout}
//         className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Profile;
