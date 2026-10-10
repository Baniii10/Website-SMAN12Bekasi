import Link from "next/link";

export default function NewsCard({ news }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover-lift border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 w-full bg-gray-200">
        {/* Placeholder if image isn't available */}
        <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-20"></div>
        {news.image ? (
           <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          {news.date}
        </div>
        <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
          <Link href={`/berita/${news.id}`} className="hover:text-blue-primary transition-colors">
            {news.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {news.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link href={`/berita/${news.id}`} className="text-blue-primary font-medium text-sm hover:text-blue-800 flex items-center gap-1 group">
            Baca Selengkapnya
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
