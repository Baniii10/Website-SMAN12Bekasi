"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { usePengumuman } from "../../../hooks/usePublicData";

export default function DetailPengumumanPage({ params }) {
  const { id } = use(params);
  const pengumuman = usePengumuman();
  const item = pengumuman.find((p) => p.id === Number(id));

  if (pengumuman.length > 0 && !item) notFound();
  if (!item) return null;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-navy py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-blue-200 mb-4 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/pengumuman" className="hover:text-gold transition-colors">Pengumuman</Link>
            <span>/</span>
            <span className="text-gold">Detail</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-tight">{item.judul}</h1>
          <p className="text-blue-200 mt-4 text-sm">{item.tanggal}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
          <div style={{ lineHeight: "1.8" }} dangerouslySetInnerHTML={{ __html: item.isi }} />
        </div>
        <div className="mt-8">
          <Link href="/pengumuman" className="inline-flex items-center gap-2 text-blue-primary font-medium hover:text-blue-800 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Pengumuman
          </Link>
        </div>
      </div>
    </div>
  );
}
