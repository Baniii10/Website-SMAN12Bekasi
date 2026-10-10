"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "../../components/SectionHeading";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after a while
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nama: "", email: "", subjek: "", pesan: "" });
    }, 5000);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-blue-200 mb-4 font-medium flex justify-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Kontak</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Hubungi Kami</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Kami siap melayani dan menjawab setiap pertanyaan Anda terkait SMA Negeri 12 Bekasi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-navy mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-primary shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Alamat</h4>
                    <p className="text-gray-600 mt-1">Jl. I Gusti Ngurah Rai, Kranji, Kec. Bekasi Bar., Kota Bks, Jawa Barat 17135</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-primary shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Telepon</h4>
                    <p className="text-gray-600 mt-1">(021) 12345678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-primary shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                    <p className="text-gray-600 mt-1">info@sman12bekasi.sch.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-primary shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Jam Kerja</h4>
                    <p className="text-gray-600 mt-1">Senin - Jum'at: 07.00 - 16.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Form */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Peta Google Maps - sekarang di atas */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="font-semibold text-navy text-sm">Lokasi SMA Negeri 12 Bekasi</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/maG11xS5GStDtZDe9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-primary hover:text-navy font-medium flex items-center gap-1 transition-colors"
                >
                  Buka di Google Maps
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.311358837!2d106.97043!3d-6.2226128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d0d83415313%3A0x392a515945851a2d!2sSMA%20Negeri%2012%20Kota%20Bekasi!5e0!3m2!1sid!2sid!4v1728482400000!5m2!1sid!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SMA Negeri 12 Bekasi"
                className="block"
              ></iframe>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <a
                  href="https://maps.app.goo.gl/maG11xS5GStDtZDe9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-primary text-white rounded-lg hover:bg-navy transition-colors text-sm font-medium shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  Buka Petunjuk Arah di Google Maps
                </a>
              </div>
            </div>

            {/* Form Kirim Pesan - sekarang di bawah */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <SectionHeading title="Kirim Pesan" centered={false} subtitle="Silakan isi formulir di bawah ini untuk mengirimkan pesan, pertanyaan, atau saran." />
              
              {isSubmitted && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700 font-medium">
                        Pesan Anda berhasil dikirim! (Ini adalah simulasi demo frontend).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap *</label>
                    <input 
                      type="text" 
                      id="nama" 
                      name="nama" 
                      required 
                      value={formData.nama}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-primary focus:border-blue-primary transition-colors bg-gray-50 focus:bg-white"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-primary focus:border-blue-primary transition-colors bg-gray-50 focus:bg-white"
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subjek" className="block text-sm font-medium text-gray-700 mb-1">Subjek *</label>
                  <input 
                    type="text" 
                    id="subjek" 
                    name="subjek" 
                    required 
                    value={formData.subjek}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-primary focus:border-blue-primary transition-colors bg-gray-50 focus:bg-white"
                    placeholder="Subjek pesan"
                  />
                </div>

                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-1">Pesan *</label>
                  <textarea 
                    id="pesan" 
                    name="pesan" 
                    rows="5" 
                    required 
                    value={formData.pesan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-primary focus:border-blue-primary transition-colors bg-gray-50 focus:bg-white resize-y"
                    placeholder="Tuliskan pesan Anda di sini..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto px-8 py-3 bg-blue-primary text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    Kirim Pesan
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">*Formulir ini hanya untuk keperluan demo frontend.</p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
