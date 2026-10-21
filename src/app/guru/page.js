"use client";
import Link from "next/link";
import SectionHeading from "../../components/SectionHeading";
import { useGuru } from "../../hooks/usePublicData";

export default function GuruPage() {
  const guru = useGuru();

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-12 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor"></circle>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circles)"></rect>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <nav className="text-sm text-blue-200 mb-4 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Profil Guru</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Tenaga Pendidik &amp; Kependidikan</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Mengenal lebih dekat para pahlawan tanpa tanda jasa yang berdedikasi tinggi membimbing siswa-siswi SMA Negeri 12 Bekasi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 mb-16 text-center border-t-4 border-gold">
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SMA Negeri 12 Bekasi didukung oleh tim tenaga pendidik dan kependidikan yang profesional, kompeten, dan memiliki komitmen kuat dalam memajukan mutu pendidikan. Kami terus berupaya menciptakan suasana belajar yang interaktif dan inspiratif bagi setiap siswa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {guru.map((person) => (
            <div key={person.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover-lift flex flex-col group">
              <div className="w-full h-64 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-navy mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity"></div>
                {person.image ? (
                  <img src={person.image} alt={person.nama} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100">
                    <svg className="w-20 h-20 mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </div>
                )}
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="font-bold text-navy text-lg leading-tight mb-2">{person.nama}</h3>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-primary text-xs font-bold rounded-full mb-3">
                  {person.jabatan}
                </span>
                {person.mata_pelajaran !== "-" && (
                  <p className="text-gray-500 text-sm mt-auto border-t border-gray-100 pt-3">
                    <span className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">Mata Pelajaran</span>
                    {person.mata_pelajaran}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
