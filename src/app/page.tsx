import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Portfolio from "@/components/Portfolio";
import FilmShowcase from "@/components/FilmShowcase";
import Footer from "@/components/Footer";
import { getSiteConfig, getPortfolio } from "@/lib/data";

export default async function Home() {
  const [siteConfig, portfolio] = await Promise.all([
    getSiteConfig(),
    getPortfolio(),
  ]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About stats={siteConfig.stats} />
        <Products />
        <Portfolio items={portfolio.items} />
        <FilmShowcase items={portfolio.items} />
      </main>
      <Footer />
    </>
  );
}
