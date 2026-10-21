"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminIndex() {
  const router = useRouter();
  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      router.replace("/admin/dashboard");
    } else {
      router.replace("/admin/login");
    }
  }, [router]);
  return null;
}
