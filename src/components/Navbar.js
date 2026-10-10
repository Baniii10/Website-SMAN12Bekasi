"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DropdownMenu({ label, items, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const isActive = items.some(
    (item) => pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path))
  );

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? "text-blue-primary bg-blue-50" : "text-gray-700 hover:text-blue-primary hover:bg-gray-50"
        }`}
      >
        {label}
        <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
          {items.map((item) => {
            const active = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  active ? "text-blue-primary bg-blue-50 font-medium" : "text-gray-700 hover:text-blue-primary hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    {
      label: "Informasi",
      children: [
        { name: "Berita", path: "/berita" },
        { name: "Pengumuman", path: "/pengumuman" },
        { name: "Kalender Sekolah", path: "/kalender" },
        { name: "PPDB", path: "/ppdb" },
      ],
    },
    { name: "Galeri", path: "/galeri" },
    {
      label: "Akademik",
      children: [
        { name: "Prestasi", path: "/prestasi" },
        { name: "Ekstrakurikuler", path: "/ekstrakurikuler" },
        { name: "Guru & Staf", path: "/guru" },
      ],
    },
    { name: "Kontak", path: "/kontak" },
  ];

  // Flatten all paths for mobile
  const allLinks = navItems.flatMap((item) =>
    item.children ? item.children : [item]
  );

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/logo-sekolah.png" alt="Logo SMAN 12 Bekasi" className="w-12 h-12 object-contain" />
              <div>
                <span className="block font-bold text-xl text-navy leading-tight">SMA Negeri 12 Bekasi</span>
                <span className="block text-xs text-gray-500 font-medium">Berprestasi & Berkarakter</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, i) => {
              if (item.children) {
                return <DropdownMenu key={i} label={item.label} items={item.children} pathname={pathname} />;
              }
              const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "text-blue-primary bg-blue-50" : "text-gray-700 hover:text-blue-primary hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-primary hover:bg-gray-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, i) => {
              if (item.children) {
                const isGroupActive = item.children.some(
                  (c) => pathname === c.path || (c.path !== "/" && pathname.startsWith(c.path))
                );
                return (
                  <div key={i}>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                      className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                        isGroupActive ? "text-blue-primary bg-blue-50" : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${mobileExpanded === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === i && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-blue-100 pl-3">
                        {item.children.map((child) => {
                          const active = pathname === child.path || (child.path !== "/" && pathname.startsWith(child.path));
                          return (
                            <Link
                              key={child.path}
                              href={child.path}
                              onClick={() => setIsOpen(false)}
                              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                active ? "text-blue-primary bg-blue-50" : "text-gray-600 hover:text-blue-primary hover:bg-gray-50"
                              }`}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "text-blue-primary bg-blue-50" : "text-gray-700 hover:text-blue-primary hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
