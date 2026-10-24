"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER || "admin";
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS || "sman12bekasi";

// Warn if env vars are missing (only in development)
if (process.env.NODE_ENV === "development") {
  if (!process.env.NEXT_PUBLIC_ADMIN_USER) console.warn("NEXT_PUBLIC_ADMIN_USER is not set in .env.local, using default 'admin'.");
  if (!process.env.NEXT_PUBLIC_ADMIN_PASS) console.warn("NEXT_PUBLIC_ADMIN_PASS is not set in .env.local, using default password.");
}

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("adminAuth") === "true") {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (username === ADMIN_USER && password === ADMIN_PASS) {
        localStorage.setItem("adminAuth", "true");
        localStorage.setItem("adminUser", username);
        router.replace("/admin/dashboard");
      } else {
        setError("Username atau password salah.");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#312e81] to-[#4f46e5] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <img src="/images/logo-sekolah.png" alt="Logo" className="w-16 h-16 object-contain mx-auto mb-3" />
          <h1 className="text-2xl font-extrabold text-[#312e81]">Admin Panel</h1>
          <p className="text-gray-500 text-sm mt-1">SMA Negeri 12 Kota Bekasi</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:border-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                required
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPass ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4f46e5] hover:bg-[#312e81] text-white font-bold py-2.5 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Memverifikasi..." : "Masuk"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Akses terbatas untuk administrator sekolah
        </p>
      </div>
    </div>
  );
}
