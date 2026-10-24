import { redirect } from "next/navigation";

// Server component: langsung redirect ke /admin/login
// Pengecekan auth dilakukan di dalam halaman login & dashboard masing-masing
export default function AdminIndex() {
  redirect("/admin/login");
}
