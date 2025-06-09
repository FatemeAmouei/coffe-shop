"use client";

import SectionTitles from "@/component/module/SectionsTitles/SectionsTitles";
import Product from "@/component/module/Product/Product";
import styles from "./BestSellerSection.module.sass";
import { useTheme } from "@/context/ThemeContext";
import { ProductTypes } from "@/component/Types/product";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import Link from "next/link";

const productData: ProductTypes[] = [
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2017/06/noresca2pm-main-1.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    price: "154000",
    rating: 4,
  },
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2020/04/noresca6pm-main-1.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    price: "175000",
    rating: 3,
  },
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2021/10/noreska-maze-main.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    price: "154000",
    rating: 5,
  },

  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2021/09/noreska-maze-main.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    price: "175000",
    rating: 4,
  },
];

const BestSellerSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`${styles.Section} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={styles.BestSellerSection}>
          <SectionTitles
            title="محصولات پر فروش"
            subTitle="پیشنهاد قهوه خورها"
            icon={
              <div className={styles.icons}>
                <Link href="/Next" className={styles.icon}>
                  <MdOutlineChevronRight />
                </Link>
                <Link href="/prev" className={styles.icon}>
                  <MdOutlineChevronLeft />
                </Link>
              </div>
            }
          />
          <div className={styles.Products}>
            {productData.map((product, index) => (
              <Product
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BestSellerSection;
