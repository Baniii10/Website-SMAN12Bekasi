"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense, use } from "react";
import { useEkskul } from "../../../hooks/usePublicData";

export default function DetailEkskulPage({ params }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 py-10 text-center">Memuat ekstrakurikuler...</div>}>
      <DetailEkskulContent params={params} />
    </Suspense>
  );
}

function DetailEkskulContent({ params }) {
  const { id } = use(params);
  const ekstrakurikuler = useEkskul();
  const ekskul = ekstrakurikuler.find((item) => item.id === id);

  // While data is loading (seed has items, so this only fires if truly not found)
  if (ekstrakurikuler.length > 0 && !ekskul) {
    notFound();
  }
  if (!ekskul) return null;

  return (
    <div className="bg-gray-50 min-h-screen py-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8 font-medium flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-blue-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/ekstrakurikuler" className="hover:text-blue-primary transition-colors">Ekstrakurikuler</Link>
          <span>/</span>
          <span className="text-navy">{ekskul.name}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Header Image */}
          <div className="w-full h-64 md:h-80 bg-gray-200 relative">
            <div className="absolute inset-0 bg-navy mix-blend-multiply opacity-30"></div>
            {ekskul.image ? (
              <img src={ekskul.image} alt={ekskul.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
            )}
            <div className="absolute bottom-6 left-6 md:left-10 z-10 text-white">
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-md">
                {ekskul.name}
              </h1>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6 md:p-10">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-navy mb-4 border-b border-gray-100 pb-2">Profil Ekstrakurikuler</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {ekskul.fullProfile}
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-primary shadow-sm shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg mb-1">Jadwal Latihan</h3>
                <p className="text-gray-600">{ekskul.schedule}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-between items-center">
            <Link href="/ekstrakurikuler" className="inline-flex items-center gap-2 text-navy font-medium hover:text-blue-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Kembali ke Daftar Ekskul
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
