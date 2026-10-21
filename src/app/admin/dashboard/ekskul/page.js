"use client";
import { useEffect, useState } from "react";
import { useAdminAuth } from "../../hooks/useAdminAuth";
import Sidebar from "../../components/Sidebar";
import { getEkskul, saveEkskul } from "../../lib/storage";

const emptyForm = { id: "", name: "", category: "", description: "", fullProfile: "", schedule: "", image: "" };

export default function AdminEkskul() {
  const { ready } = useAdminAuth();
  const [list, setList] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [mode, setMode] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => { if (ready) setList(getEkskul()); }, [ready]);

  const save = (updated) => { setList(updated); saveEkskul(updated); };

  const handleSubmit = (e) => {
    e.preventDefault();
    const slugId = form.id || form.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    if (mode === "add") {
      if (list.find((e) => e.id === slugId)) return alert("ID sudah ada, gunakan nama berbeda.");
      save([...list, { ...form, id: slugId }]);
    } else {
      save(list.map((e) => (e.id === form.id ? { ...form } : e)));
    }
    setForm(emptyForm); setMode(null);
  };

  if (!ready) return null;

  const categoryOptions = ["Wajib", "Pilihan", "Olahraga", "Seni & Budaya", "Akademik"];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-800">Kelola Ekstrakurikuler</h1>
            <p className="text-gray-500 text-sm">{list.length} ekstrakurikuler tersimpan</p>
          </div>
          <button onClick={() => { setForm(emptyForm); setMode("add"); }}
            className="bg-[#4f46e5] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#312e81] transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            Tambah Ekskul
          </button>
        </div>

        {mode && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="font-bold text-gray-800 mb-4">{mode === "add" ? "Tambah Ekstrakurikuler" : "Edit Ekstrakurikuler"}</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Nama Ekskul *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]" placeholder="cth: Pramuka" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Kategori *</label>
                <select required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]">
                  <option value="">-- Pilih Kategori --</option>
                  {categoryOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Jadwal Latihan *</label>
                <input required value={form.schedule} onChange={(e) => setForm({ ...form, schedule: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]" placeholder="cth: Jumat, 15:30 - 17:00 WIB" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Path Foto</label>
                <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]" placeholder="/images/ekskul/ekskul-nama.jpg" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-semibold text-gray-600 block mb-1">Deskripsi Singkat *</label>
                <textarea required rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]" placeholder="Deskripsi singkat ekstrakurikuler..." />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-semibold text-gray-600 block mb-1">Profil Lengkap *</label>
                <textarea required rows={4} value={form.fullProfile} onChange={(e) => setForm({ ...form, fullProfile: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5]" placeholder="Profil lengkap ekstrakurikuler..." />
              </div>
              <div className="md:col-span-2 flex gap-3">
                <button type="submit" className="bg-[#4f46e5] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#312e81] transition-colors">
                  {mode === "add" ? "Simpan" : "Update"}
                </button>
                <button type="button" onClick={() => { setMode(null); setForm(emptyForm); }}
                  className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">Batal</button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Nama</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Kategori</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Jadwal</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {list.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">{item.name}</td>
                  <td className="px-4 py-4"><span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-0.5 rounded-full">{item.category}</span></td>
                  <td className="px-4 py-4 text-gray-500 text-xs">{item.schedule}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => { setForm(item); setMode("edit"); }} className="text-[#4f46e5] hover:text-[#312e81] font-medium mr-4 text-xs">Edit</button>
                    <button onClick={() => setDeleteId(item.id)} className="text-red-500 hover:text-red-700 font-medium text-xs">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {list.length === 0 && <p className="text-center text-gray-400 py-10">Belum ada data ekskul.</p>}
        </div>
      </div>

      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-4">
            <h3 className="font-bold text-gray-800 text-lg mb-2">Hapus Ekstrakurikuler?</h3>
            <p className="text-gray-500 text-sm mb-6">Data yang dihapus tidak dapat dikembalikan.</p>
            <div className="flex gap-3">
              <button onClick={() => { save(list.filter((e) => e.id !== deleteId)); setDeleteId(null); }} className="flex-1 bg-red-500 text-white py-2 rounded-lg font-medium text-sm hover:bg-red-600 transition-colors">Hapus</button>
              <button onClick={() => setDeleteId(null)} className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
