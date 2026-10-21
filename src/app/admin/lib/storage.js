import { berita as seedBerita } from "../../../data/berita";
import { pengumuman as seedPengumuman } from "../../../data/pengumuman";
import { guru as seedGuru } from "../../../data/guru";
import { ekstrakurikuler as seedEkskul } from "../../../data/ekskul";

function getOrInit(key, seed) {
  const raw = localStorage.getItem(key);
  if (raw) return JSON.parse(raw);
  localStorage.setItem(key, JSON.stringify(seed));
  return seed;
}

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ── Berita ──────────────────────────────
export const getBerita = () => getOrInit("adminBerita", seedBerita);
export const saveBerita = (data) => save("adminBerita", data);

// ── Pengumuman ───────────────────────────
export const getPengumuman = () => getOrInit("adminPengumuman", seedPengumuman);
export const savePengumuman = (data) => save("adminPengumuman", data);

// ── Guru ─────────────────────────────────
export const getGuru = () => getOrInit("adminGuru", seedGuru);
export const saveGuru = (data) => save("adminGuru", data);

// ── Ekskul ───────────────────────────────
export const getEkskul = () => getOrInit("adminEkskul", seedEkskul);
export const saveEkskul = (data) => save("adminEkskul", data);
