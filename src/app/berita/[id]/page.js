import Link from "next/link";
import { notFound } from "next/navigation";
import { berita } from "../../../data/berita";
import NewsCard from "../../../components/NewsCard";

export function generateStaticParams() {
  return berita.map((item) => ({
    id: item.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const newsItem = berita.find((item) => item.id.toString() === id || item.slug === id);
  
  if (!newsItem) {
    return { title: "Berita Tidak Ditemukan" };
  }

  return {
    title: `${newsItem.title} | SMA Negeri 12 Bekasi`,
    description: newsItem.excerpt,
  };
}

export default async function DetailBeritaPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const newsItem = berita.find((item) => item.id.toString() === id || item.slug === id);

  if (!newsItem) {
    notFound();
  }

  // Get related news (excluding current, max 3)
  const relatedNews = berita.filter(item => item.id !== newsItem.id).slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8 font-medium flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-blue-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/berita" className="hover:text-blue-primary transition-colors">Berita</Link>
          <span>/</span>
          <span className="text-navy truncate max-w-[200px] sm:max-w-xs">{newsItem.title}</span>
        </nav>

        {/* Article Container */}
        <article className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="p-8 md:p-10 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-blue-50 text-blue-primary text-sm font-bold px-4 py-1.5 rounded-full">
                {newsItem.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {newsItem.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-4">
              {newsItem.title}
            </h1>
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

          {/* Featured Image */}
          <div className="w-full h-[300px] md:h-[450px] relative bg-gray-200">
             {newsItem.image ? (
               <img src={newsItem.image} alt={newsItem.title} className="w-full h-full object-cover" />
             ) : (
               <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                 <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
               </div>
             )}
          </div>

          {/* Content */}
          <div 
            className="p-8 md:p-10 prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />

          {/* Footer Action */}
          <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-between items-center">
            <div className="flex gap-2">
              <span className="text-sm text-gray-500 font-medium">Bagikan:</span>
              <button className="text-blue-600 hover:text-blue-800"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></button>
              <button className="text-blue-800 hover:text-blue-900"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></button>
            </div>
            <Link href="/berita" className="inline-flex items-center gap-2 text-navy font-medium hover:text-blue-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Kembali
            </Link>
          </div>
        </article>

      </div>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-navy">Berita Terkait</h3>
            <div className="h-px bg-gray-200 flex-grow ml-6 hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
