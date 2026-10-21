// Layout khusus admin — override root layout, tidak ada Navbar/Footer publik
export const metadata = {
  title: "Admin Panel | SMAN 12 Bekasi",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
