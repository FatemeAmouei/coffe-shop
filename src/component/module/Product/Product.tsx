"use client";

import React from "react";
import styles from "./Product.module.sass";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { SlBasketLoaded } from "react-icons/sl";
import { BsArrowLeftRight } from "react-icons/bs";
import { MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import { ProductTypes } from "@/component/Types/product";
import { useRouter } from "next/navigation";

const Product: React.FC<ProductTypes> = ({
  id,
  image,
  title,
  price,
  rating,
}) => {
  const { isDarkMode } = useTheme();
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/product/${id}`);
  };

  const handleBasketClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/basket");
  };

  return (
    <div
      className={`${styles.productCard} ${
        isDarkMode ? styles.dark : styles.light
      }`}
      onClick={handleCardClick}
    >
      <div className={styles.imageText}>
        {image && image !== "" ? (
          <Image src={image} alt="سبد خرید" width={100} height={100} />
        ) : (
          <div className={styles.placeholderImage}>عکسی موجود نیست</div>
        )}
        <div className={styles.Text}>
          <p className={styles.title}>{title}</p>
          <p className={styles.price}>
            {parseInt(price).toLocaleString("en-US")} تومان
          </p>
        </div>
      </div>
      <div className={styles.checkoutSection}>
        <div className={styles.checkoutIcons}>
          <Link
            href="/basket"
            className={styles.checkoutIcon}
            onClick={handleBasketClick}
          >
            <SlBasketLoaded />
          </Link>
          <Link href="/basket" className={styles.checkoutIcon}>
            <BsArrowLeftRight />
          </Link>
        </div>
        <p className={styles.star}>
          {[...Array(5)].map((_, i) =>
            i < rating ? (
              <MdOutlineStarPurple500 key={i} />
            ) : (
              <MdOutlineStarOutline key={i} />
            )
          )}
        </p>
      </div>
    </div>
  );
};

export default Product;
