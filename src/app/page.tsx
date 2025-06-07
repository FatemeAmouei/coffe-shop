"use client";

import Navbar from "@/component/module/Navbar/Navbar";
import Headers from "@/component/template/Header/Header";
import ProductSection from "@/component/template/ProductSection/ProductSection";
import BannerSection from "@/component/template/Banner/BannerSection";
import GroupProductSection from "@/component/template/GroupProductSection/GroupProductSection";

export default function Home() {
  return (
    <>
      <Headers />
      <Navbar />
      <ProductSection />
      <BannerSection />
      <GroupProductSection />
    </>
  );
}
