import Link from "next/link";
import HeroSection from "../components/HeroSection";
import SectionHeading from "../components/SectionHeading";
import SchoolStats from "../components/SchoolStats";
import NewsCard from "../components/NewsCard";
import MarsPlayer from "../components/MarsPlayer";
import { berita } from "../data/berita";

export default function Home() {
  const latestNews = berita.slice(0, 3);

  return (
    <div>
      {/* A. Hero Section */}
      <HeroSection 
        label="SELAMAT DATANG DI"
        title="SMA Negeri 12 Bekasi"
        tagline="Berprestasi, Berkarakter, dan Siap Menghadapi Masa Depan"
        description="Menjadi lembaga pendidikan yang unggul dalam mencetak generasi penerus bangsa yang cerdas, berintegritas, dan mampu bersaing di tingkat global."
        primaryBtnText="Jelajahi Sekolah"
        primaryBtnLink="/about"
        secondaryBtnText="Lihat Berita"
        secondaryBtnLink="/berita"
        imageSrc="/images/hero-sekolah.jpg"
      />

      {/* B. Sambutan Kepala Sekolah */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-navy mb-4">Sambutan Kepala Sekolah</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Foto Kepala Sekolah */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gold shadow-lg bg-gray-200 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div className="text-center">
                <p className="font-bold text-navy text-lg">Dede Heriyanto, S.Pd, M.Pd</p>
                <p className="text-sm text-gray-500">Kepala SMA Negeri 12 Bekasi</p>
              </div>
            </div>
            {/* Isi Sambutan */}
            <div className="relative">
              {/* Tanda kutip dekoratif */}
              <svg className="absolute -top-4 -left-4 w-10 h-10 text-gold opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-lg text-gray-600 leading-relaxed mb-4 pl-4">
                Pendidikan adalah investasi masa depan. Di SMA Negeri 12 Bekasi, kami tidak hanya berfokus pada keunggulan akademik, tetapi juga pada pembentukan karakter, kreativitas, dan pengembangan potensi setiap siswa secara optimal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed pl-4">
                Melalui dukungan tenaga pendidik yang profesional dan lingkungan belajar yang kondusif, kami berkomitmen untuk melahirkan lulusan yang siap menghadapi tantangan zaman dengan integritas dan kemandirian.
              </p>
            </div>
          </div>

          {/* Mars Player */}
          <MarsPlayer />

        </div>
      </section>

      {/* C. Profil Singkat */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {/* Fallback image style */}
                <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-20"></div>
                <div className="aspect-w-4 aspect-h-3 bg-gray-300">
                  <img src="/images/hero-sekolah.jpg" alt="Profil SMA Negeri 12 Bekasi" className="object-cover w-full h-full min-h-[400px]" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight sm:text-4xl mb-6">
                Mengenal Lebih Dekat <br/><span className="text-blue-primary">SMA Negeri 12 Bekasi</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sebagai salah satu sekolah menengah atas negeri, SMA Negeri 12 Bekasi terus berupaya memberikan layanan pendidikan terbaik bagi masyarakat. Kami mengintegrasikan kurikulum nasional dengan program-program unggulan yang dirancang khusus untuk memenuhi kebutuhan siswa di abad 21.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dengan berbagai prestasi yang telah diraih baik di bidang akademik maupun non-akademik, kami bangga menjadi bagian dari perjalanan sukses setiap peserta didik kami.
              </p>
              <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-primary hover:bg-blue-800 transition-colors shadow-md">
                Selengkapnya Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* D. Statistik Sekolah / Pilar Utama */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Pilar Utama Pendidikan" 
            subtitle="Nilai-nilai fundamental yang menjadi landasan SMA Negeri 12 Bekasi dalam mencetak generasi unggul."
          />
          <SchoolStats />
        </div>
      </section>

      {/* E. Berita Terbaru */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-4">Berita Terbaru</h2>
              <div className="h-1 w-20 bg-gold rounded"></div>
              <p className="mt-4 text-lg text-gray-600">Informasi dan kegiatan terkini di lingkungan sekolah.</p>
            </div>
            <div className="hidden sm:block">
              <Link href="/berita" className="text-blue-primary font-medium hover:text-blue-800 flex items-center gap-1 group">
                Lihat Semua Berita
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map(newsItem => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
          
          <div className="mt-10 sm:hidden flex justify-center">
            <Link href="/berita" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-navy bg-white hover:bg-gray-50 transition-colors w-full">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* F. Pengumuman */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h2 className="text-2xl font-extrabold text-navy">Pengumuman</h2>
          </div>
          <div className="border-t border-gray-200">
            {[
              { id: 1, judul: "Informasi Daftar Ulang Tahap 2 Tahun Ajaran 2026/2027" },
              { id: 2, judul: "Informasi Pra MPLS Tahun Pelajaran 2026/2027" },
              { id: 3, judul: "Informasi Daftar Ulang Tahap 1 Tahun Ajaran 2026/2027" },
              { id: 4, judul: "Informasi Pra MPLS Tahun Pelajaran 2025-2026" },
              { id: 5, judul: "Informasi Daftar Ulang Tahap 2 dan PAPS" },
              { id: 6, judul: "Informasi Daftar Ulang SPMB Tahap 1 Tahun Pelajaran 2025-2026" },
              { id: 7, judul: "Informasi Kelulusan Siswa Tahun Pelajaran 2024-2025" },
              { id: 8, judul: "Informasi Pra-Masa Pengenalan Lingkungan Sekolah (MPLS) 2024" },
              { id: 9, judul: "Daftar Ulang Kelas XI & XII" },
              { id: 10, judul: "Informasi Daftar Ulang PPDB Tahap 2 TP. 2024-2025" },
            ].map((item, i) => (
              <Link key={i} href={`/pengumuman/${item.id}`}>
                <div className="flex items-center gap-3 py-3 border-b border-gray-100 group cursor-pointer hover:bg-gray-50 px-2 rounded transition-colors">
                  <svg className="w-4 h-4 text-blue-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-blue-primary font-medium uppercase text-sm group-hover:text-blue-800 transition-colors">
                    {item.judul}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* G. Galeri Kegiatan (Preview) */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        {/* Abstract shapes for background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true"><defs><pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect></svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading putih agar terbaca di background biru gelap */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Galeri Kegiatan
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Momen-momen berharga dan aktivitas membanggakan dari siswa-siswi SMA Negeri 12 Bekasi.
            </p>
            <div className="h-1 w-20 bg-gold mt-6 rounded mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden group relative bg-blue-800" style={{height: '250px'}}>
                <img
                  src={`/images/galeri/galeri-${i}.jpg`}
                  alt={`Galeri ${i}`}
                  style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/galeri" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-navy bg-gold hover:bg-yellow-400 transition-colors shadow-md">
              Lihat Galeri Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* G. Ajakan Penutup */}
      <section className="py-24 bg-blue-primary text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Mari Bergabung dan Berprestasi Bersama Kami
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Temukan potensi terbaikmu dan jadilah bagian dari keluarga besar SMA Negeri 12 Bekasi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontak" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-primary bg-white hover:bg-gray-50 transition-colors shadow-lg">
              Hubungi Kami
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 transition-colors">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
