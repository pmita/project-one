// COMPONENTS
import { Navbar } from "./_components/Navbar";


export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <Navbar />
      {children}
    </main>
  );
};