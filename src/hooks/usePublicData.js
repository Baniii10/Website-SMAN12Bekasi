"use client";
import { useState, useEffect } from "react";
import { berita as seedBerita } from "../data/berita";
import { pengumuman as seedPengumuman } from "../data/pengumuman";
import { guru as seedGuru } from "../data/guru";
import { ekstrakurikuler as seedEkskul } from "../data/ekskul";

function getData(key, seed) {
  if (typeof window === "undefined") return seed;
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : seed;
}

export function useBerita() {
  const [data, setData] = useState(seedBerita);
  useEffect(() => { setData(getData("adminBerita", seedBerita)); }, []);
  return data;
}

export function usePengumuman() {
  const [data, setData] = useState(seedPengumuman);
  useEffect(() => { setData(getData("adminPengumuman", seedPengumuman)); }, []);
  return data;
}

export function useGuru() {
  const [data, setData] = useState(seedGuru);
  useEffect(() => { setData(getData("adminGuru", seedGuru)); }, []);
  return data;
}

export function useEkskul() {
  const [data, setData] = useState(seedEkskul);
  useEffect(() => { setData(getData("adminEkskul", seedEkskul)); }, []);
  return data;
}
