"use client";
import Link from "next/link";
import { useEkskul } from "../../hooks/usePublicData";

export default function EkstrakurikulerPage() {
  const ekstrakurikuler = useEkskul();

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-12 mb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <nav className="text-sm text-blue-200 mb-4 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Ekstrakurikuler</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Ekstrakurikuler</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Kembangkan minat, bakat, dan potensimu melalui berbagai pilihan ekstrakurikuler di SMAN 12 Bekasi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ekstrakurikuler.map((ekskul) => (
            <Link key={ekskul.id} href={`/ekstrakurikuler/${ekskul.id}`}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift border border-gray-100 h-full flex flex-col group transition-all duration-300 hover:border-blue-primary">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity"></div>
                  {ekskul.image ? (
                    <img src={ekskul.image} alt={ekskul.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                      <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-blue-primary transition-colors">
                    {ekskul.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">
                    {ekskul.description}
                  </p>
                  <div className="mt-auto flex items-center text-blue-primary font-medium text-sm">
                    Lihat Profil Ekstrakurikuler
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
