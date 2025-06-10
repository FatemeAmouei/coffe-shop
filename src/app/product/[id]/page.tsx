import React from "react";
import ProductDetailPage from "@/component/module/Product/ProductDetail";
import { productData } from "@/component/Data/product";
import { notFound } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const product = productData.find((item) => item.id === params.id);

  if (!product) return notFound();

  return <ProductDetailPage {...product} />;
};

export default Page;
