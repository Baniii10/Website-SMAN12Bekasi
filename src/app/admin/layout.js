// Layout khusus admin — tidak menyertakan <html> atau <body>
export const metadata = {
  title: "Admin Panel | SMAN 12 Bekasi",
};

export default function AdminLayout({ children }) {
  return (
    <section className="bg-gray-100 min-h-screen min-h-full flex flex-col font-sans">
      {children}
    </section>
  );
}
