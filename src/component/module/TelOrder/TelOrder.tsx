"use client";
import React from "react";
import styles from "./TelOrder.module.sass";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";

interface TelOrderProps {
  className?: string;
}

const TelOrder: React.FC<TelOrderProps> = ({ className }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.OrderSection} ${
        isDarkMode ? styles.dark : styles.light
      }`}
    >
      <div className={`${styles.OrderCard} ${className}`}>
        <Image
          src="https://www.bonmano.com/wp-content/uploads/2025/04/coffee-nature-temperament-sh.jpg"
          alt="article"
          width={150}
          height={150}
          className={styles.img}
        />

        <div className={styles.texts}>
          <p className={styles.title}>یکی از بهترین قهوه ها !</p>
          <p className={styles.subtitle}>کیفیت قهوه را از ما بخواهید ...</p>
          <p className={styles.text}>
            فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری
            پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است،
            امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می
            سازد!
          </p>
          <Link href="/telOrder">
            <button className={styles.btn}>
              <BsTelephone style={{ marginLeft: "0.5rem" }} />
              ثبت سفارش تلفنی
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TelOrder;
