"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAdminAuth() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.replace("/admin/login");
    } else {
      setReady(true);
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminUser");
    router.replace("/admin/login");
  };

  return { ready, logout };
}
