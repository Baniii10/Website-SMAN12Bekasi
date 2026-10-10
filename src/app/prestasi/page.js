import Link from "next/link";
import SectionHeading from "../../components/SectionHeading";

export const metadata = {
  title: "Prestasi Siswa | SMA Negeri 12 Bekasi",
  description: "Daftar prestasi gemilang akademik dan non-akademik siswa-siswi SMA Negeri 12 Bekasi.",
};

export default function PrestasiPage() {
  const prestasiData = [
    {
      id: 1,
      kategori: "Akademik",
      judul: "Juara 1 Olimpiade Sains Nasional (OSN) Biologi Tingkat Provinsi",
      nama: "Tim Olimpiade Biologi",
      tahun: "2025",
      deskripsi: "Prestasi gemilang diraih oleh tim biologi sekolah pada ajang bergengsi tingkat provinsi, membuktikan keunggulan dalam bidang sains.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      id: 2,
      kategori: "Non-Akademik",
      judul: "Juara 1 Turnamen Futsal Pelajar Kota Bekasi",
      nama: "Tim Futsal SMAN 12 Bekasi",
      tahun: "2025",
      deskripsi: "Tim futsal kebanggaan sekolah berhasil membawa pulang piala kemenangan dalam turnamen bergengsi antar SMA se-Kota Bekasi.",
      icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      id: 3,
      kategori: "Pengembangan Bakat",
      judul: "Juara 2 Lomba Debat Bahasa Inggris Tingkat Nasional",
      nama: "English Club",
      tahun: "2026",
      deskripsi: "Kemampuan berpikir kritis dan artikulasi bahasa Inggris yang sangat baik mengantarkan tim debat sekolah meraih juara nasional.",
      icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
    },
    {
      id: 4,
      kategori: "Akademik",
      judul: "Finalis Lomba Karya Tulis Ilmiah Remaja",
      nama: "KIR SMAN 12 Bekasi",
      tahun: "2026",
      deskripsi: "Inovasi penelitian dalam bidang lingkungan hidup berhasil menembus babak final dalam ajang lomba karya tulis ilmiah tingkat nasional.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      id: 5,
      kategori: "Non-Akademik",
      judul: "Juara 3 Festival Tari Tradisional Provinsi Jawa Barat",
      nama: "Ekskul Tari",
      tahun: "2025",
      deskripsi: "Melestarikan budaya bangsa melalui keindahan gerak tari, tim kesenian sekolah berhasil menorehkan prestasi di tingkat provinsi.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-12 mb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <nav className="text-sm text-blue-200 mb-4 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Prestasi</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Prestasi Siswa</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Mencetak generasi unggul yang membanggakan melalui dedikasi, kerja keras, dan pengembangan potensi maksimal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-16 text-center border-t-4 border-gold">
          <svg className="w-12 h-12 text-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
          <h2 className="text-2xl font-bold text-navy mb-4">Tradisi Juara SMA Negeri 12 Bekasi</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pendidikan di SMA Negeri 12 Bekasi tidak hanya berfokus pada nilai rapor, melainkan pembinaan bakat dan minat secara komprehensif. Kami memfasilitasi setiap siswa untuk berprestasi di berbagai ajang perlombaan mulai dari tingkat kota, provinsi, hingga nasional.
          </p>
        </div>

        <div className="space-y-8">
          {prestasiData.map((prestasi) => (
            <div key={prestasi.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover-lift flex flex-col md:flex-row">
              <div className="md:w-1/4 bg-blue-50 p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-primary mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={prestasi.icon}></path>
                  </svg>
                </div>
                <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full mb-2">
                  {prestasi.kategori}
                </span>
                <span className="text-gray-500 font-medium">{prestasi.tahun}</span>
              </div>
              
              <div className="md:w-3/4 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-2 leading-tight">
                  {prestasi.judul}
                </h3>
                <p className="text-blue-primary font-medium mb-4">
                  Diraih oleh: {prestasi.nama}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {prestasi.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
