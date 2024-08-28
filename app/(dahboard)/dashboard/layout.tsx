// COMPONENTS
import { AdminNavbar } from "./_components/AdminNavbar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container h-full w-full flex flex-col justify-start items-center">
      <AdminNavbar />
      <div className="container min-h-[90dvh] rounded-lg bg-gray-200 lg:col-span-2 p-4 lg:p-8">
        {children}
      </div>
    </div>
  );
}
