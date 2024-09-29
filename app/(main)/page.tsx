// COMPONENTS
import { LandingBanner, Features } from "@/components/LandingPage";

export default function HomePage() {
  return (
    <main className="container grid items-center">
      <LandingBanner />
      <Features />
    </main>
  );
}
