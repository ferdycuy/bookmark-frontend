import { useState } from 'react';

function AddBookmarkForm({ onAdd }) {
  const [form, setForm] = useState({
    title: '',
    url: '',
    description: '',
    category: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd(form);
    setForm({ title: '', url: '', description: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-2">Tambah Bookmark</h2>
      <input
        type="text"
        placeholder="Judul"
        className="border p-2 mb-2 w-full"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="url"
        placeholder="URL"
        className="border p-2 mb-2 w-full"
        value={form.url}
        onChange={(e) => setForm({ ...form, url: e.target.value })}
      />
      <input
        type="text"
        placeholder="Deskripsi"
        className="border p-2 mb-2 w-full"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Kategori"
        className="border p-2 mb-4 w-full"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <button className="bg-blue-900 text-white px-4 py-2 rounded">Tambah</button>
    </form>
  );
}

export default AddBookmarkForm;
