import Link from "next/link";

export const metadata = {
  title: "Kalender Sekolah | SMA Negeri 12 Bekasi",
  description: "Kalender akademik dan agenda kegiatan SMA Negeri 12 Kota Bekasi.",
};

export default function KalenderPage() {
  const kalender = [
    {
      bulan: "Juli 2025",
      kegiatan: [
        { tanggal: "14 Juli", nama: "Hari Pertama Masuk Sekolah TP 2025/2026", tipe: "akademik" },
        { tanggal: "14 – 16 Juli", nama: "Masa Pengenalan Lingkungan Sekolah (MPLS)", tipe: "kegiatan" },
      ],
    },
    {
      bulan: "Agustus 2025",
      kegiatan: [
        { tanggal: "17 Agustus", nama: "Upacara Hari Kemerdekaan RI ke-80", tipe: "kegiatan" },
        { tanggal: "18 – 22 Agustus", nama: "Penilaian Harian Bab 1", tipe: "akademik" },
      ],
    },
    {
      bulan: "September 2025",
      kegiatan: [
        { tanggal: "1 September", nama: "Hari Literasi Sekolah", tipe: "kegiatan" },
        { tanggal: "15 – 20 September", nama: "Penilaian Tengah Semester (PTS) Ganjil", tipe: "ujian" },
      ],
    },
    {
      bulan: "Oktober 2025",
      kegiatan: [
        { tanggal: "2 Oktober", nama: "Hari Batik Nasional – Penggunaan Batik", tipe: "kegiatan" },
        { tanggal: "28 Oktober", nama: "Upacara Hari Sumpah Pemuda & Class Meeting", tipe: "kegiatan" },
      ],
    },
    {
      bulan: "November 2025",
      kegiatan: [
        { tanggal: "10 November", nama: "Upacara Hari Pahlawan", tipe: "kegiatan" },
        { tanggal: "24 November", nama: "Peringatan Hari Guru Nasional", tipe: "kegiatan" },
        { tanggal: "24 – 28 November", nama: "Penilaian Harian Bab 3", tipe: "akademik" },
      ],
    },
    {
      bulan: "Desember 2025",
      kegiatan: [
        { tanggal: "1 – 12 Desember", nama: "Penilaian Akhir Semester (PAS) Ganjil", tipe: "ujian" },
        { tanggal: "19 Desember", nama: "SMANDA Fair – Pentas Seni Akhir Tahun", tipe: "kegiatan" },
        { tanggal: "20 Desember", nama: "Pembagian Rapor Semester Ganjil", tipe: "akademik" },
        { tanggal: "22 Des – 3 Jan", nama: "Libur Semester Ganjil", tipe: "libur" },
      ],
    },
    {
      bulan: "Januari 2026",
      kegiatan: [
        { tanggal: "5 Januari", nama: "Hari Pertama Semester Genap", tipe: "akademik" },
        { tanggal: "19 – 23 Januari", nama: "Penilaian Harian Bab 1 Semester Genap", tipe: "akademik" },
      ],
    },
    {
      bulan: "Februari 2026",
      kegiatan: [
        { tanggal: "9 – 13 Februari", nama: "Penilaian Harian Bab 2", tipe: "akademik" },
        { tanggal: "16 – 20 Februari", nama: "Try Out Kelas XII Tahap 1", tipe: "ujian" },
      ],
    },
    {
      bulan: "Maret 2026",
      kegiatan: [
        { tanggal: "2 – 13 Maret", nama: "Pesantren Ramadhan", tipe: "kegiatan" },
        { tanggal: "16 – 20 Maret", nama: "Penilaian Tengah Semester (PTS) Genap", tipe: "ujian" },
        { tanggal: "20 Mar – 6 Apr", nama: "Libur Hari Raya Idul Fitri", tipe: "libur" },
      ],
    },
    {
      bulan: "April 2026",
      kegiatan: [
        { tanggal: "7 April", nama: "Masuk Sekolah Pasca Libur Lebaran", tipe: "akademik" },
        { tanggal: "20 – 24 April", nama: "Try Out Kelas XII Tahap 2", tipe: "ujian" },
        { tanggal: "21 April", nama: "Peringatan Hari Kartini", tipe: "kegiatan" },
      ],
    },
    {
      bulan: "Mei 2026",
      kegiatan: [
        { tanggal: "2 Mei", nama: "Peringatan Hari Pendidikan Nasional", tipe: "kegiatan" },
        { tanggal: "4 – 15 Mei", nama: "Ujian Sekolah Kelas XII", tipe: "ujian" },
        { tanggal: "20 Mei", nama: "Peringatan Hari Kebangkitan Nasional", tipe: "kegiatan" },
        { tanggal: "28 Mei", nama: "Pengumuman Kelulusan Kelas XII", tipe: "akademik" },
      ],
    },
    {
      bulan: "Juni 2026",
      kegiatan: [
        { tanggal: "1 – 12 Juni", nama: "Penilaian Akhir Tahun (PAT)", tipe: "ujian" },
        { tanggal: "8 – 14 Juni", nama: "Pendaftaran PPDB TP 2026/2027", tipe: "kegiatan" },
        { tanggal: "19 Juni", nama: "Pembagian Rapor Semester Genap / Kenaikan Kelas", tipe: "akademik" },
        { tanggal: "20 Juni – 13 Juli", nama: "Libur Akhir Tahun Pelajaran", tipe: "libur" },
      ],
    },
  ];

  const tipeWarna = {
    akademik: { bg: "bg-blue-100", text: "text-blue-700", label: "Akademik" },
    ujian: { bg: "bg-red-100", text: "text-red-700", label: "Ujian" },
    kegiatan: { bg: "bg-green-100", text: "text-green-700", label: "Kegiatan" },
    libur: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Libur" },
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-blue-200 mb-4 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Kalender Sekolah</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Kalender Akademik</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Agenda dan jadwal kegiatan SMA Negeri 12 Kota Bekasi Tahun Pelajaran 2025/2026
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Legenda */}
        <div className="flex flex-wrap gap-3 mb-10">
          {Object.entries(tipeWarna).map(([key, val]) => (
            <span key={key} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${val.bg} ${val.text}`}>
              <span className="w-2 h-2 rounded-full bg-current"></span>
              {val.label}
            </span>
          ))}
        </div>

        {/* Timeline per bulan */}
        <div className="space-y-8">
          {kalender.map((bulan, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-navy px-6 py-3">
                <h2 className="text-white font-bold text-lg">{bulan.bulan}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {bulan.kegiatan.map((item, j) => {
                  const warna = tipeWarna[item.tipe];
                  return (
                    <div key={j} className="flex items-center gap-4 px-6 py-4">
                      <div className="w-28 shrink-0">
                        <span className="text-sm font-semibold text-navy">{item.tanggal}</span>
                      </div>
                      <div className="flex-grow">
                        <span className="text-gray-700 text-sm">{item.nama}</span>
                      </div>
                      <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${warna.bg} ${warna.text}`}>
                        {warna.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
