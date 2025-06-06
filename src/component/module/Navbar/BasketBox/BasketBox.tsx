"use client";

import React, { useEffect } from "react";
import styles from "./BasketBox.module.sass";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { useTheme } from "@/context/ThemeContext";

interface BasketBoxProps {
  basketBox: boolean;
  onClose: () => void;
  totalAmount: number;
}

const BasketBox: React.FC<BasketBoxProps> = ({ onClose, totalAmount }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.basketBox} ${
        isDarkMode ? styles.dark : styles.light
      }`}
    >
      <Link href="/basket" className={styles.goToBasketBtn}>
        رفتن به سبد خرید
        <IoIosArrowBack />
      </Link>

      <div className={styles.imageText}>
        <Image
          src="https://www.bonmano.com/wp-content/uploads/2023/01/giorno-hover-300x300.jpg"
          alt="سبد خرید"
          width={100}
          height={100}
        />
        <div className={styles.Text}>
          <p className={styles.title}>
            قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
          </p>
          <p className={styles.price}> {totalAmount.toLocaleString()}تومان</p>
        </div>
      </div>

      <div className={styles.checkoutSection}>
        <p className={styles.totalAmount}>
          {totalAmount.toLocaleString()} تومان
        </p>
        <button className={styles.checkoutBtn}>ثبت سفارش</button>
      </div>
    </div>
  );
};

export default BasketBox;
