import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import PopularProducts from "@/components/PopularProducts";
import Catalog from "@/components/Catalog";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <PopularProducts />
      <Catalog />
      <FooterSection />
    </main>
  );
}
