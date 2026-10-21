"use client";
import { useState, useEffect, useCallback } from "react";
import { berita as seedBerita } from "../data/berita";
import { pengumuman as seedPengumuman } from "../data/pengumuman";
import { guru as seedGuru } from "../data/guru";
import { ekstrakurikuler as seedEkskul } from "../data/ekskul";

function getData(key, seed) {
  if (typeof window === "undefined") return seed;
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : seed;
}

/**
 * Generic hook yang:
 * 1. Baca localStorage saat mount
 * 2. Baca ulang saat window focus (kembali dari tab admin)
 * 3. Baca ulang saat storage event (perubahan dari tab lain)
 */
function useLocalStorageData(key, seed) {
  const [data, setData] = useState(seed);

  const refresh = useCallback(() => {
    setData(getData(key, seed));
  }, [key, seed]);

  useEffect(() => {
    // Baca saat pertama kali mount
    refresh();

    // Baca ulang saat tab aktif kembali (misalnya dari halaman admin)
    window.addEventListener("focus", refresh);

    // Baca ulang saat ada perubahan localStorage dari tab lain
    const onStorage = (e) => {
      if (e.key === key) refresh();
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", onStorage);
    };
  }, [key, refresh]);

  return data;
}

export function useBerita() {
  return useLocalStorageData("adminBerita", seedBerita);
}

export function usePengumuman() {
  return useLocalStorageData("adminPengumuman", seedPengumuman);
}

export function useGuru() {
  return useLocalStorageData("adminGuru", seedGuru);
}

export function useEkskul() {
  return useLocalStorageData("adminEkskul", seedEkskul);
}
