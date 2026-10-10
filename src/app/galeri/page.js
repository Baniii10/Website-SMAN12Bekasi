"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function GaleriPage() {
  const galeriData = [
    { id: 1, title: "Upacara Hari Kemerdekaan", category: "Kegiatan Sekolah", image: "/images/galeri/galeri-1.jpg" },
    { id: 2, title: "Praktikum Biologi", category: "Pembelajaran", image: "/images/galeri/galeri-2.jpg" },
    { id: 3, title: "Pertandingan Basket", category: "Olahraga", image: "/images/galeri/galeri-3.jpg" },
    { id: 4, title: "Pentas Seni Teater", category: "Ekstrakurikuler", image: "/images/galeri/galeri-4.jpg" },
    { id: 5, title: "Kunjungan Museum", category: "Kegiatan Sekolah", image: "/images/galeri/galeri-5.jpg" },
    { id: 6, title: "Presentasi Kelompok", category: "Pembelajaran", image: "/images/galeri/galeri-6.jpg" },
    { id: 7, title: "Latihan Pramuka", category: "Ekstrakurikuler", image: "/images/galeri/galeri-7.jpg" },
    { id: 8, title: "Senam Pagi Bersama", category: "Olahraga", image: "/images/galeri/galeri-8.jpg" },
    { id: 9, title: "Kegiatan OSIS", category: "Kegiatan Sekolah", image: "/images/galeri/galeri-9.jpg" },
    { id: 10, title: "Lomba Kebersihan Kelas", category: "Kegiatan Sekolah", image: "/images/galeri/galeri-10.jpg" },
  ];

  const [selected, setSelected] = useState(null);

  // Tutup lightbox saat tekan Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Cegah scroll saat lightbox terbuka
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-blue-200 mb-4 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Galeri</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Galeri Kegiatan</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Dokumentasi momen-momen berharga dan aktivitas membanggakan dari siswa-siswi SMA Negeri 12 Bekasi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galeriData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-gray-100 relative shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity z-10"></div>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover min-h-[250px] transform group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="w-full min-h-[250px] flex items-center justify-center text-gray-400">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-20"></div>
            </div>
          ))}
        </div>

        {galeriData.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <h3 className="text-lg font-medium text-gray-900">Belum ada foto</h3>
            <p className="mt-1 text-gray-500">Foto untuk kategori ini sedang disiapkan.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol X */}
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
              aria-label="Tutup"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Foto */}
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
