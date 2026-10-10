import Link from "next/link";

export const metadata = {
  title: "PPDB | SMA Negeri 12 Bekasi",
  description: "Informasi Penerimaan Peserta Didik Baru (PPDB) SMA Negeri 12 Kota Bekasi.",
};

export default function PPDBPage() {
  const jalurPenerimaan = [
    {
      nama: "Jalur Zonasi",
      kuota: "55%",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      deskripsi: "Diperuntukkan bagi calon peserta didik yang berdomisili di dalam wilayah zonasi sekolah berdasarkan Kartu Keluarga.",
      syarat: ["Kartu Keluarga yang diterbitkan minimal 1 tahun sebelum pendaftaran", "Berdomisili di wilayah zonasi yang telah ditetapkan"],
    },
    {
      nama: "Jalur Afirmasi",
      kuota: "15%",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      deskripsi: "Diperuntukkan bagi calon peserta didik dari keluarga tidak mampu secara ekonomi dan penyandang disabilitas.",
      syarat: ["Kartu Keluarga Sejahtera (KKS) / Kartu Indonesia Pintar (KIP)", "Surat keterangan tidak mampu dari kelurahan", "Bagi disabilitas: surat keterangan dari dokter/psikolog"],
    },
    {
      nama: "Jalur Perpindahan Tugas",
      kuota: "5%",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
      deskripsi: "Diperuntukkan bagi calon peserta didik yang mengikuti perpindahan tugas orang tua/wali atau anak guru.",
      syarat: ["Surat penugasan orang tua/wali dari instansi/lembaga", "Kartu Keluarga", "Untuk anak guru: SK mengajar di sekolah tujuan"],
    },
    {
      nama: "Jalur Prestasi",
      kuota: "25%",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      deskripsi: "Diperuntukkan bagi calon peserta didik yang memiliki prestasi akademik (nilai rapor) maupun non-akademik (kejuaraan).",
      syarat: ["Rapor semester 1–5 SMP/MTs", "Sertifikat/piagam penghargaan kejuaraan (jika ada)", "Surat rekomendasi dari kepala sekolah asal"],
    },
  ];

  const jadwal = [
    { kegiatan: "Pengumuman Informasi PPDB", tanggal: "1 – 7 Juni 2026" },
    { kegiatan: "Pendaftaran Online", tanggal: "8 – 14 Juni 2026" },
    { kegiatan: "Verifikasi Berkas", tanggal: "8 – 15 Juni 2026" },
    { kegiatan: "Pengumuman Seleksi", tanggal: "17 Juni 2026" },
    { kegiatan: "Daftar Ulang Tahap 1", tanggal: "18 – 20 Juni 2026" },
    { kegiatan: "Pengumuman Tahap 2", tanggal: "24 Juni 2026" },
    { kegiatan: "Daftar Ulang Tahap 2", tanggal: "25 – 27 Juni 2026" },
    { kegiatan: "Pra-MPLS", tanggal: "7 – 9 Juli 2026" },
    { kegiatan: "Hari Pertama Masuk Sekolah", tanggal: "14 Juli 2026" },
  ];

  const persyaratan = [
    "Ijazah/Surat Keterangan Lulus (SKL) SMP/MTs atau sederajat",
    "Kartu Keluarga (KK) asli dan fotokopi",
    "Akta Kelahiran asli dan fotokopi",
    "Pas foto terbaru ukuran 3x4 sebanyak 4 lembar (latar merah)",
    "Surat keterangan sehat dari dokter/puskesmas",
    "Mengisi formulir pendaftaran secara online",
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-blue-200 mb-4 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">PPDB</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Penerimaan Peserta Didik Baru</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Informasi lengkap PPDB SMA Negeri 12 Kota Bekasi Tahun Pelajaran 2026/2027
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Banner */}
        <div className="bg-gold rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-navy mb-2">PPDB Tahun Pelajaran 2026/2027</h2>
            <p className="text-navy text-opacity-80">Pendaftaran dibuka mulai 8 Juni 2026. Daftarkan diri Anda sekarang!</p>
          </div>
          <a href="#" className="shrink-0 inline-flex items-center justify-center px-8 py-3 bg-navy text-white font-bold rounded-xl hover:bg-blue-900 transition-colors shadow-md">
            Daftar Sekarang
          </a>
        </div>

        {/* Jalur Penerimaan */}
        <div>
          <h2 className="text-2xl font-extrabold text-navy mb-2">Jalur Penerimaan</h2>
          <div className="h-1 w-16 bg-gold rounded mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jalurPenerimaan.map((jalur, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-blue-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={jalur.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">{jalur.nama}</h3>
                    <span className="inline-block bg-gold text-navy text-xs font-bold px-2 py-0.5 rounded-full">Kuota {jalur.kuota}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{jalur.deskripsi}</p>
                <div>
                  <p className="text-xs font-bold text-navy uppercase tracking-wide mb-2">Persyaratan Khusus:</p>
                  <ul className="space-y-1">
                    {jalur.syarat.map((s, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-blue-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jadwal & Persyaratan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Jadwal */}
          <div>
            <h2 className="text-2xl font-extrabold text-navy mb-2">Jadwal PPDB</h2>
            <div className="h-1 w-16 bg-gold rounded mb-6"></div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {jadwal.map((item, i) => (
                <div key={i} className={`flex items-center justify-between px-6 py-4 ${i !== jadwal.length - 1 ? "border-b border-gray-100" : ""}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-primary shrink-0"></div>
                    <span className="text-gray-700 text-sm font-medium">{item.kegiatan}</span>
                  </div>
                  <span className="text-blue-primary text-sm font-semibold shrink-0 ml-4">{item.tanggal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Persyaratan Umum */}
          <div>
            <h2 className="text-2xl font-extrabold text-navy mb-2">Persyaratan Umum</h2>
            <div className="h-1 w-16 bg-gold rounded mb-6"></div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <ul className="space-y-4">
                {persyaratan.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontak */}
            <div className="mt-6 bg-navy rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Informasi Lebih Lanjut</h3>
              <div className="space-y-3 text-blue-100 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Jl. I Gusti Ngurah Rai, Kranji, Kec. Bekasi Barat, Kota Bekasi</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>(021) 12345678</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>info@sman12bekasi.sch.id</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Senin – Jum'at, 07.00 – 16.00 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
