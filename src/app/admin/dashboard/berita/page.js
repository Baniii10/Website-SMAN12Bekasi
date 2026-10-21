"use client";
import { useEffect, useState } from "react";
import { useAdminAuth } from "../../hooks/useAdminAuth";
import Sidebar from "../../components/Sidebar";
import { getBerita, saveBerita } from "../../lib/storage";

const emptyForm = { id: null, title: "", date: "", category: "", excerpt: "", image: "", content: "" };

export default function AdminBerita() {
  const { ready } = useAdminAuth();
  const [list, setList] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [mode, setMode] = useState(null); // "add" | "edit"
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (ready) setList(getBerita());
  }, [ready]);

  const save = (updated) => { setList(updated); saveBerita(updated); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "add") {
      const newId = list.length ? Math.max(...list.map((b) => b.id)) + 1 : 1;
      const slug = form.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      save([...list, { ...form, id: newId, slug }]);
    } else {
      save(list.map((b) => (b.id === form.id ? { ...form } : b)));
    }
    setForm(emptyForm); setMode(null);
  };

  const handleEdit = (item) => { setForm(item); setMode("edit"); };
  const handleDelete = () => {
    save(list.filter((b) => b.id !== deleteId));
    setDeleteId(null);
  };

  if (!ready) return null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-800">Kelola Berita</h1>
            <p className="text-gray-500 text-sm">{list.length} berita tersimpan</p>
          </div>
          <button onClick={() => { setForm(emptyForm); setMode("add"); }}
            className="bg-[#4f46e5] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#312e81] transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            Tambah Berita
          </button>
        </div>

        {/* Form */}
        {mode && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="font-bold text-gray-800 mb-4">{mode === "add" ? "Tambah Berita Baru" : "Edit Berita"}</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Judul *</label>
                <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]" placeholder="Judul berita" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Tanggal *</label>
                <input required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]" placeholder="cth: 14 Juli 2025" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Kategori *</label>
                <select required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]">
                  <option value="">-- Pilih Kategori --</option>
                  {["Kegiatan Sekolah","Pendidikan","Akademik","Ekstrakurikuler","Olahraga","Prestasi"].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Path Gambar</label>
                <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]" placeholder="/images/berita/berita-1.jpg" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-semibold text-gray-600 block mb-1">Ringkasan *</label>
                <textarea required rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]" placeholder="Ringkasan singkat berita..." />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-semibold text-gray-600 block mb-1">Isi Berita (HTML) *</label>
                <textarea required rows={6} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#4f46e5]" placeholder="<p>Isi berita...</p>" />
              </div>
              <div className="md:col-span-2 flex gap-3">
                <button type="submit" className="bg-[#4f46e5] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#312e81] transition-colors">
                  {mode === "add" ? "Simpan" : "Update"}
                </button>
                <button type="button" onClick={() => { setMode(null); setForm(emptyForm); }}
                  className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tabel */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Judul</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Kategori</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Tanggal</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {list.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-800 max-w-xs truncate">{item.title}</td>
                  <td className="px-4 py-4"><span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">{item.category}</span></td>
                  <td className="px-4 py-4 text-gray-500">{item.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => handleEdit(item)} className="text-[#4f46e5] hover:text-[#312e81] font-medium mr-4 text-xs">Edit</button>
                    <button onClick={() => setDeleteId(item.id)} className="text-red-500 hover:text-red-700 font-medium text-xs">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {list.length === 0 && <p className="text-center text-gray-400 py-10">Belum ada data berita.</p>}
        </div>
      </div>

      {/* Modal Konfirmasi Hapus */}
      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-4">
            <h3 className="font-bold text-gray-800 text-lg mb-2">Hapus Berita?</h3>
            <p className="text-gray-500 text-sm mb-6">Data yang dihapus tidak dapat dikembalikan.</p>
            <div className="flex gap-3">
              <button onClick={handleDelete} className="flex-1 bg-red-500 text-white py-2 rounded-lg font-medium text-sm hover:bg-red-600 transition-colors">Hapus</button>
              <button onClick={() => setDeleteId(null)} className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
