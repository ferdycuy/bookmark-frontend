import { useState } from 'react';

function BookmarkCard({ bm, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: bm.title,
    url: bm.url,
    description: bm.description || '',
    category: bm.category || ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onUpdate(bm._id, editForm);
    setEditing(false);
  };

  return (
    <>
      {/* Kartu Bookmark */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold">{bm.title}</h2>
        <a href={bm.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 break-all">
          {bm.url}
        </a>
        {bm.description && <p className="text-gray-600 mt-1">{bm.description}</p>}
        <p className="text-sm text-gray-400 mt-2">Kategori: {bm.category || '-'}</p>
        <div className="flex gap-2 mt-3">
          <button onClick={() => setEditing(true)} className="bg-yellow-500 px-3 py-1 text-sm rounded text-white">
            Edit
          </button>
          <button onClick={() => onDelete(bm._id)} className="bg-red-700 px-3 py-1 text-sm rounded text-white">
            Hapus
          </button>
        </div>
      </div>

      {/* Modal Edit */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Bookmark</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                value={editForm.title}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                className="border p-2 w-full"
                placeholder="Judul"
              />
              <input
                type="url"
                value={editForm.url}
                onChange={(e) => setEditForm({ ...editForm, url: e.target.value })}
                className="border p-2 w-full"
                placeholder="URL"
              />
              <input
                type="text"
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                className="border p-2 w-full"
                placeholder="Deskripsi"
              />
              <input
                type="text"
                value={editForm.category}
                onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                className="border p-2 w-full"
                placeholder="Kategori"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default BookmarkCard;
