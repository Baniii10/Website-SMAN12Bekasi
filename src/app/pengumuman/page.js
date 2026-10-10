import Link from "next/link";
import { pengumuman } from "../../data/pengumuman";

export const metadata = {
  title: "Pengumuman | SMA Negeri 12 Bekasi",
  description: "Daftar pengumuman resmi SMA Negeri 12 Kota Bekasi.",
};

export default function PengumumanPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-blue-200 mb-4 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Pengumuman</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Pengumuman</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Informasi dan pengumuman resmi dari SMA Negeri 12 Kota Bekasi.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {pengumuman.map((item, i) => (
            <Link key={item.id} href={`/pengumuman/${item.id}`}>
              <div className={`flex items-center gap-4 px-6 py-4 hover:bg-blue-50 transition-colors group ${i !== pengumuman.length - 1 ? "border-b border-gray-100" : ""}`}>
                <svg className="w-4 h-4 text-blue-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <div className="flex-grow">
                  <p className="text-blue-primary font-semibold uppercase text-sm group-hover:text-blue-800 transition-colors leading-snug">
                    {item.judul}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{item.tanggal}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
