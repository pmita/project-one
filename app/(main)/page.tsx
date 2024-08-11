// COMPONENTS
import { LandingBanner } from "./_components/LandingBanner";
import { Features } from "./_components/Features";

export default function HomePage() {
  return (
    <main className="container grid items-center">
      <LandingBanner />
      <Features />
    </main>
  );
}
