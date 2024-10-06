// COMPONENTS
import { LandingBanner, Features } from "@/src/components/LandingPage";

export default function HomePage() {
  return (
    <main className="container grid items-center">
      <LandingBanner />
      <Features />
    </main>
  );
}
