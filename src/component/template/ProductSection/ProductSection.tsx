"use client";

import SectionTitles from "@/component/module/SectionsTitles/SectionsTitles";
import Product from "@/component/module/Product/Product";
import styles from "./ProductSection.module.sass";
import { useTheme } from "@/context/ThemeContext";
import { productData } from "@/component/Data/product";

const ProductSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`${styles.Section} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={styles.ProductSection}>
          <SectionTitles
            title="جدیدترین محصولات"
            subTitle="فرآوری شده از دانه قهوه"
            titleLeft="مشاهده همه محصولات"
          />
          <div className={styles.Products}>
            {productData.map((product, index) => (
              <Product
                key={index}
                id={product.id}
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
export default ProductSection;
