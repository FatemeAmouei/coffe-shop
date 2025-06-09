import Navbar from "@/component/module/Navbar/Navbar";
import Headers from "@/component/template/Header/Header";
import ProductSection from "@/component/template/ProductSection/ProductSection";
import BannerSection from "@/component/template/Banner/BannerSection";
import GroupProductSection from "@/component/template/GroupProductSection/GroupProductSection";
import BestSellerSection from "@/component/template/BestSeller/BestSellerSection";
import ArticleSection from "@/component/template/ArticleSection/ArticleSection";
import TelOrderSection from "@/component/template/TelOrderSection/TelOrderSection";
import TypographySection from "@/component/template/TypographySection/TypographySection";
import Footer from "@/component/module/Footer/Footer";

export default function Home() {
  return (
    <>
      <Headers />
      <Navbar />
      <ProductSection />
      <BannerSection />
      <GroupProductSection />
      <BestSellerSection />
      <ArticleSection />
      <TelOrderSection />
      <TypographySection />
      <Footer />
    </>
  );
}
