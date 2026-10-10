import Link from "next/link";
import SectionHeading from "../../components/SectionHeading";

export const metadata = {
  title: "Tentang Kami | SMA Negeri 12 Bekasi",
  description: "Profil, sejarah, visi misi, dan fasilitas pendidikan di SMA Negeri 12 Bekasi.",
};

export default function AboutPage() {
  const nilaiPendidikan = [
    { title: "Integritas", desc: "Menjunjung tinggi kejujuran dan etika dalam setiap tindakan." },
    { title: "Disiplin", desc: "Taat pada aturan dan bertanggung jawab atas tugas yang diberikan." },
    { title: "Kolaborasi", desc: "Mampu bekerja sama dan menghargai perbedaan." },
    { title: "Kreativitas", desc: "Berpikir inovatif dan berani mengeksplorasi ide-ide baru." },
    { title: "Tanggung Jawab", desc: "Siap menanggung segala konsekuensi dan menjalankan kewajiban dengan baik." }
  ];

  const fasilitas = [
    { name: "Ruang Kelas Nyaman", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { name: "Perpustakaan Lengkap", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { name: "Laboratorium Sains", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { name: "Laboratorium Komputer", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { name: "Lapangan Olahraga", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Ruang Ekstrakurikuler", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <div className="bg-white">
      {/* A. Hero About */}
      <div className="bg-navy py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-200 mb-6 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Tentang Kami</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Tentang SMA Negeri 12 Bekasi</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-10">
            Membangun generasi cerdas, berkarakter, dan berdaya saing global melalui pendidikan berkualitas.
          </p>
          <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] relative bg-gray-800">
             <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-40"></div>
             <img src="/images/hero-sekolah.jpg" alt="Lingkungan SMAN 12 Bekasi" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* B. Profil Sekolah & C. Sejarah Sekolah */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="Profil Singkat" centered={false} />
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  SMA Negeri 12 Bekasi adalah institusi pendidikan jenjang menengah atas negeri yang berdedikasi tinggi dalam menyelenggarakan proses pendidikan berkualitas. Kami berkomitmen untuk tidak hanya mencetak lulusan yang unggul secara akademis, tetapi juga memiliki karakter yang kuat dan akhlak mulia.
                </p>
                <p className="mb-4">
                  Dengan mengacu pada kurikulum nasional terkini, kami mengintegrasikan pembelajaran berbasis proyek, pendidikan karakter, dan penguasaan teknologi. Hal ini bertujuan agar peserta didik kami siap menghadapi tantangan di era globalisasi dan menjadi warga negara yang bertanggung jawab.
                </p>
                <ul className="space-y-2 mt-6">
                  <li><strong>NPSN:</strong> 20231718</li>
                  <li><strong>Akreditasi:</strong> A (Unggul) — Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M)</li>
                  <li><strong>Alamat:</strong> Jl. I Gusti Ngurah Rai, Kranji, Kec. Bekasi Bar., Kota Bks, Jawa Barat 17135</li>
                </ul>
              </div>
            </div>
            <div>
              <SectionHeading title="Sejarah Singkat" centered={false} />
              <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  SMA Negeri 12 Kota Bekasi merupakan salah satu lembaga pendidikan menengah atas negeri yang berdiri dan mulai beroperasi pada tahun 2005 di kawasan Kranji, tepatnya di Jalan I Gusti Ngurah Rai, Kelurahan Kranji, Kecamatan Bekasi Barat.
                </p>
                <p>
                  Kehadiran sekolah ini dilatarbelakangi oleh tingginya kebutuhan masyarakat sekitar terhadap fasilitas pendidikan tingkat lanjutan yang memadai seiring dengan pertumbuhan penduduk serta perkembangan kawasan pemukiman yang pesat di Kota Bekasi.
                </p>
                <p>
                  Seiring berjalannya waktu, SMAN 12 Kota Bekasi terus berkomitmen meningkatkan kualitas mutu pendidikan, baik melalui pengembangan akademik, pembentukan karakter peserta didik yang berakhlak mulia dan berlandaskan kedisiplinan, maupun penguatan program lingkungan sekolah yang asri dan berwawasan Adiwiyata agar mampu menghasilkan lulusan yang kompetitif dan siap bersaing di dunia perguruan tinggi maupun di tengah masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* D. Visi dan Misi */}
      <div className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Visi dan Misi" subtitle="Arah tujuan dan langkah strategis yang menjadi pedoman penyelenggaraan pendidikan di sekolah kami." />

          {/* Pengantar */}
          <div className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
            <p className="text-gray-600 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              Menjadi sekolah ramah anak dan lingkungan yang bebas dari rokok dan obat-obatan terlarang, selalu menjaga silaturahmi dengan senyum, sapa, salam, sopan, dan santun. Kami sangat mengharapkan masukan yang inspiratif, inovatif, dan dapat memotivasi untuk meraih prestasi di bidang pendidikan baik akademik maupun non-akademik.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-white rounded-2xl shadow-lg p-10 border-t-4 border-gold relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-5">
                <svg className="w-48 h-48 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <span className="bg-gold text-navy w-10 h-10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </span>
                Visi
              </h3>
              <p className="text-base font-semibold text-navy uppercase tracking-wide mb-4 border-l-4 border-gold pl-4">
                "Berprestasi dalam Akademik, Kreatif Berkarakter Berlandaskan Iman dan Takwa"
              </p>
              <p className="text-gray-600 leading-relaxed">
                Visi ini dikembangkan secara komprehensif mencerminkan arah dan tujuan sekolah, yakni mewujudkan institusi pendidikan yang tidak hanya unggul dalam pencapaian akademik dan kreativitas peserta didik, tetapi juga kokoh dalam penanaman nilai-nilai moral dan keimanan. Melalui visi tersebut, sekolah berkomitmen untuk melahirkan lulusan yang cerdas, berdaya saing tinggi, serta memiliki kepribadian yang luhur guna menghadapi tantangan masa depan.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl shadow-lg p-10 border-t-4 border-blue-primary relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-5">
                <svg className="w-48 h-48 text-blue-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                <span className="bg-blue-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </span>
                Misi
              </h3>
              <ul className="space-y-3 text-gray-600 relative z-10">
                {[
                  "Terbentuknya kepribadian seluruh warga sekolah yang beriman dan bertakwa kepada Tuhan Yang Maha Esa.",
                  "Melaksanakan proses pembelajaran yang terintegrasi dan berorientasi pada pengembangan akhlak mulia.",
                  "Meningkatkan kualitas kegiatan belajar mengajar, bimbingan dan layanan pendidikan secara profesional di bidang akademik, sosial, bahasa dan sastra Indonesia sehingga menghasilkan peserta didik yang kompetitif.",
                  "Mewujudkan tercapainya 8 standar nasional pendidikan melalui program sistem penjaminan mutu pendidikan secara berkelanjutan.",
                  "Meningkatkan kinerja guru dan karyawan serta memberikan kesempatan pengembangan karir.",
                  "Menghasilkan lulusan yang kompetitif, berkarakter, diterima PTN 85% dan mampu bersaing di dunia kerja.",
                  "Melengkapi sarana dan prasarana yang menunjang proses pembelajaran.",
                  "Menciptakan budaya disiplin, tertib, rapih, bersih dan indah.",
                  "Mewujudkan kerjasama antar warga sekolah menuju sekolah adiwiyata mandiri.",
                  "Mewujudkan proses pembelajaran yang terintegrasi dengan nilai-nilai pemeliharaan dan pengelolaan lingkungan hidup yang baik bagi warga sekolah dan masyarakat sekitar.",
                  "Meningkatkan upaya perlindungan dan pengelolaan lingkungan hidup melalui kegiatan pengendalian pencemaran, kerusakan, serta pelestarian lingkungan sekolah.",
                  "Mewujudkan budaya 5S (senyum, sapa, salam, sopan dan santun), gemar membaca, kerjasama, saling menghargai, disiplin, jujur, kerja keras, kreatif dan inovatif.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-primary flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* E. Nilai Pendidikan */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Nilai-Nilai Pendidikan" subtitle="Karakter yang kami tanamkan kepada setiap peserta didik SMAN 12 Bekasi." />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {nilaiPendidikan.map((nilai, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover-lift text-center group">
                <div className="w-14 h-14 bg-blue-50 text-blue-primary mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-primary group-hover:text-white transition-colors duration-300">
                  <span className="font-bold text-xl">{index + 1}</span>
                </div>
                <h4 className="font-bold text-navy mb-2">{nilai.title}</h4>
                <p className="text-sm text-gray-500">{nilai.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* F. Fasilitas Sekolah */}
      <div className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Fasilitas Sekolah
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Sarana dan prasarana yang mendukung terwujudnya lingkungan belajar yang optimal dan menyenangkan.
            </p>
            <div className="h-1 w-20 bg-gold mt-6 rounded mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {fasilitas.map((fasilitas, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700 hover:bg-gray-700 transition-colors text-center">
                <svg className="w-12 h-12 text-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={fasilitas.icon}></path>
                </svg>
                <h4 className="font-bold text-lg">{fasilitas.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* G. Penutup */}
      <div className="py-16 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Ingin Tahu Lebih Banyak Tentang Kami?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/berita" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-primary hover:bg-blue-800 transition-colors">
              Baca Berita Sekolah
            </Link>
            <Link href="/galeri" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-navy bg-gold hover:bg-yellow-400 transition-colors">
              Lihat Galeri Kegiatan
            </Link>
            <Link href="/kontak" className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 transition-colors">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
