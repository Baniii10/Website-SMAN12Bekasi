"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense, use } from "react";
import NewsCard from "../../../components/NewsCard";
import { useBerita } from "../../../hooks/usePublicData";

export default function DetailBeritaPage({ params }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-10 text-center">Memuat berita...</div>}>
      <DetailBeritaContent params={params} />
    </Suspense>
  );
}

function DetailBeritaContent({ params }) {
  const { id } = use(params);
  const berita = useBerita();
  const newsItem = berita.find((item) => item.id.toString() === id || item.slug === id);
  const relatedNews = berita.filter((item) => item.id !== newsItem?.id).slice(0, 3);

  if (berita.length > 0 && !newsItem) notFound();
  if (!newsItem) return null;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-8 font-medium flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-blue-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/berita" className="hover:text-blue-primary transition-colors">Berita</Link>
          <span>/</span>
          <span className="text-navy truncate max-w-[200px] sm:max-w-xs">{newsItem.title}</span>
        </nav>

        <article className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <div className="p-8 md:p-10 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-blue-50 text-blue-primary text-sm font-bold px-4 py-1.5 rounded-full">{newsItem.category}</span>
              <span className="text-gray-500 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {newsItem.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-4">{newsItem.title}</h1>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-navy">Admin Sekolah</p>
                <p className="text-xs text-gray-500">Humas SMAN 12 Bekasi</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] md:h-[450px] relative bg-gray-200">
            {newsItem.image ? (
              <img src={newsItem.image} alt={newsItem.title} className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
            )}
          </div>

          <div className="p-8 md:p-10 prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: newsItem.content }} />

          <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-end">
            <Link href="/berita" className="inline-flex items-center gap-2 text-navy font-medium hover:text-blue-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Kembali
            </Link>
          </div>
        </article>
      </div>

      {relatedNews.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h3 className="text-2xl font-bold text-navy mb-8">Berita Terkait</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedNews.map((news) => <NewsCard key={news.id} news={news} />)}
          </div>
        </div>
      )}
    </div>
  );
}
