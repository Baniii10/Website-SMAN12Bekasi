"use client";

import { useState } from "react";

export default function MarsPlayer() {
  const [playing, setPlaying] = useState(false);

  // ID video YouTube
  const videoId = "hoZjZuHJ5NY";

  const embedUrl = playing
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`
    : `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1`;

  return (
    <div className="mt-10 max-w-2xl mx-auto">
      <div className="bg-navy rounded-2xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-4">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19V6l12-3v13M9 19a2 2 0 11-4 0 2 2 0 014 0zm12-3a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <div className="flex-grow">
            <p className="text-white font-bold text-sm">Mars SMAN 12 Bekasi</p>
            <p className="text-blue-300 text-xs">SMA Negeri 12 Kota Bekasi</p>
          </div>
          {/* Tombol play/pause */}
          <button
            onClick={() => setPlaying(!playing)}
            className="flex items-center gap-2 px-4 py-2 bg-gold hover:bg-yellow-400 text-navy font-bold text-sm rounded-full transition-colors shadow"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd"/>
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd"/>
                </svg>
                Putar Mars
              </>
            )}
          </button>
        </div>

        {/* YouTube embed — muncul saat play ditekan */}
        {playing && (
          <div className="px-6 pb-6">
            <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title="Mars SMAN 12 Bekasi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
