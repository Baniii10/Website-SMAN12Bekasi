"use client";
import { useEffect, useState } from "react";
import { useAdminAuth } from "../hooks/useAdminAuth";
import Sidebar from "../components/Sidebar";
import { getBerita, getPengumuman, getGuru, getEkskul } from "../lib/storage";

export default function AdminDashboard() {
  const { ready, logout } = useAdminAuth();
  const [stats, setStats] = useState({ berita: 0, pengumuman: 0, guru: 0, ekskul: 0 });
  const [user, setUser] = useState("");

  useEffect(() => {
    if (!ready) return;
    setStats({
      berita: getBerita().length,
      pengumuman: getPengumuman().length,
      guru: getGuru().length,
      ekskul: getEkskul().length,
    });
    setUser(localStorage.getItem("adminUser") || "Admin");
  }, [ready]);

  if (!ready) return null;

  const cards = [
    { label: "Total Berita", value: stats.berita, color: "bg-blue-500", href: "/admin/dashboard/berita",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg> },
    { label: "Pengumuman", value: stats.pengumuman, color: "bg-amber-500", href: "/admin/dashboard/pengumuman",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> },
    { label: "Guru & Staf", value: stats.guru, color: "bg-green-500", href: "/admin/dashboard/guru",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
    { label: "Ekstrakurikuler", value: stats.ekskul, color: "bg-purple-500", href: "/admin/dashboard/ekskul",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-gray-800">Selamat Datang, {user}!</h1>
          <p className="text-gray-500 text-sm mt-1">Panel administrasi SMA Negeri 12 Kota Bekasi</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((card) => (
            <a key={card.label} href={card.href} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-5 hover:shadow-md transition-shadow group">
              <div className={`${card.color} text-white rounded-xl p-3 shrink-0 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-800">{card.value}</p>
                <p className="text-sm text-gray-500">{card.label}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-700 mb-4 text-lg">Panduan Penggunaan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            {[
              { title: "Berita", desc: "Tambah, edit, atau hapus berita sekolah yang tampil di halaman publik." },
              { title: "Pengumuman", desc: "Kelola informasi pengumuman penting untuk siswa, orang tua, dan masyarakat." },
              { title: "Guru & Staf", desc: "Perbarui data tenaga pendidik dan kependidikan sekolah." },
              { title: "Ekstrakurikuler", desc: "Atur daftar dan informasi kegiatan ekstrakurikuler yang tersedia." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <div className="w-2 h-2 rounded-full bg-[#4f46e5] shrink-0 mt-1.5"></div>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 border-t pt-4">
            ⚠️ Data disimpan di localStorage browser ini. Gunakan browser yang sama untuk melihat perubahan.
          </p>
        </div>
      </div>
    </div>
  );
}
