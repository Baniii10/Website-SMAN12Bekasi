"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAdminAuth } from "../hooks/useAdminAuth";

const menus = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: "Berita",
    path: "/admin/dashboard/berita",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    label: "Pengumuman",
    path: "/admin/dashboard/pengumuman",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    label: "Guru & Staf",
    path: "/admin/dashboard/guru",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Ekstrakurikuler",
    path: "/admin/dashboard/ekskul",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAdminAuth();

  return (
    <aside className="w-64 min-h-screen bg-[#312e81] text-white flex flex-col shadow-xl">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-indigo-700">
        <div className="flex items-center gap-3">
          <img src="/images/logo-sekolah.png" alt="Logo" className="w-10 h-10 object-contain bg-white rounded-full p-0.5" />
          <div>
            <p className="font-bold text-sm leading-tight">Admin Panel</p>
            <p className="text-indigo-300 text-xs">SMAN 12 Bekasi</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-grow px-3 py-4 space-y-1">
        {menus.map((menu) => {
          const active = pathname === menu.path || (menu.path !== "/admin/dashboard" && pathname.startsWith(menu.path));
          return (
            <Link
              key={menu.path}
              href={menu.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-white text-[#312e81]"
                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white"
              }`}
            >
              {menu.icon}
              {menu.label}
            </Link>
          );
        })}
      </nav>

      {/* Tombol logout & link ke website publik */}
      <div className="px-3 py-4 border-t border-indigo-700 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-indigo-200 hover:bg-indigo-700 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Lihat Website
        </Link>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-300 hover:bg-red-900 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
}
