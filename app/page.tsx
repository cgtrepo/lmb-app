import LmbFooter from "./(components)/lmb-footer";
import LmbHeroCarousel from "./(components)/lmb-hero-carousel";
import Navbar from "./(components)/lmb-hero-navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="relative">
        <Navbar />
        <LmbHeroCarousel />
      </main>
      <LmbFooter />
    </div>
  );
}
