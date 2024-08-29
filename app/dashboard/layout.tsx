// COMPONENTS
import { SignInForm } from "../(dahboard)/signin/_components/SignInForm";
import { AdminNavbar } from "./_components/AdminNavbar";
import { AuthCheck } from "@/components/AuthCheck";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthCheck fallback={(
      <section className="container min-h-[100dvh] grid place-content-center text-center gap-5">
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    )}>
      <div className="container h-full w-full flex flex-col justify-start items-center">
        <AdminNavbar />
        <div className="container min-h-[90dvh] rounded-lg bg-gray-200 lg:col-span-2 p-4 lg:p-8">
          {children}
        </div>
      </div>
    </AuthCheck>
  );
}
