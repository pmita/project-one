'use client'

// COMPONENTS
import { SignInForm } from "@/src/components/Forms";
import { AdminNavbar } from "@/src/components/Navigation";
import { withAuthCheck } from "@/src/components/withAuthCheck";

const FallbackComponent = (
  <section className="container min-h-[100dvh] grid place-content-center text-center gap-5">
    <h1>Sign In</h1>
    <SignInForm />
  </section>
);

function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container h-full w-full flex flex-col justify-start items-center">
      <AdminNavbar />
      <div className="container min-h-[90dvh] rounded-lg bg-gray-200 lg:col-span-2 p-4 lg:p-8">
        {children}
      </div>
    </div>
  );
}

export default withAuthCheck(DashboardLayout, FallbackComponent);
