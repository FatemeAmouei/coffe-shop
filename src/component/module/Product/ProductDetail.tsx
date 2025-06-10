"use client";

import React from "react";
import styles from "./ProductDetail.module.sass";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import { ProductTypes } from "@/component/Types/product";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductDetailPage: React.FC<ProductTypes> = ({
  id,
  image,
  title,
  price,
  rating,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Navbar />

      <div
        className={`${styles.ProductSection} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={styles.ProductDetail}>
          {image && image !== "" ? (
            <Image src={image} alt="سبد خرید" width={300} height={300} />
          ) : (
            <div className={styles.placeholderImage}>عکسی موجود نیست</div>
          )}{" "}
          <div className={styles.ProductDetailLeft}>
            <div className={styles.ProductDetailText}>
              <h1 className={styles.ProductDetailTitle}>{title}</h1>
              <p className={styles.ProductDetailPrice}>
                قیمت: {parseInt(price).toLocaleString("en-US")} تومان
              </p>
            </div>

            <div className={styles.ProductDetailStar}>
              <p className={styles.ProductDetailStarP}>امتیاز کاربران:</p>
              {[...Array(5)].map((_, i) =>
                i < rating ? (
                  <MdOutlineStarPurple500 key={i} />
                ) : (
                  <MdOutlineStarOutline key={i} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
