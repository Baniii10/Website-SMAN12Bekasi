"use client";
import Link from "next/link";
import SectionHeading from "../../components/SectionHeading";
import NewsCard from "../../components/NewsCard";
import { useBerita } from "../../hooks/usePublicData";

export default function BeritaPage() {
  const berita = useBerita();
  const featuredNews = berita[0];
  const otherNews = berita.slice(1);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-navy py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-blue-200 mb-4 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Berita</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Berita & Informasi</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Kabar terkini seputar kegiatan, prestasi, dan pengumuman penting di SMA Negeri 12 Bekasi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {featuredNews && (
          <div className="mb-16">
            <SectionHeading title="Berita Utama" centered={false} />
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row group hover-lift border border-gray-100">
              <div className="md:w-1/2 relative min-h-[300px] bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-20 transition-opacity group-hover:opacity-10 z-10"></div>
                {featuredNews.image ? (
                  <img src={featuredNews.image} alt={featuredNews.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <div className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {featuredNews.date}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight group-hover:text-blue-primary transition-colors">
                  <Link href={`/berita/${featuredNews.id}`}>{featuredNews.title}</Link>
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{featuredNews.excerpt}</p>
                <div>
                  <Link href={`/berita/${featuredNews.id}`} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-primary hover:bg-blue-800 transition-colors shadow-sm">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          <SectionHeading title="Berita Lainnya" centered={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherNews.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
