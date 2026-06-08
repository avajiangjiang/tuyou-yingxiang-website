import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
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
        <Services />
        <Products />
        <Portfolio items={portfolio.items} />
        <Contact contact={siteConfig.contact} />
      </main>
      <Footer />
    </>
  );
}
