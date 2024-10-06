// COMPONENTS
import { Navbar } from "@/src/components/Navigation";


export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <Navbar />
      {children}
    </main>
  );
};