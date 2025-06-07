"use client";

import SectionTitles from "@/component/module/SectionsTitles/SectionsTitles";
import Product from "@/component/module/Product/Product";
import styles from "./ProductSection.module.sass";
import { useTheme } from "@/context/ThemeContext";
import { ProductTypes } from "@/component/Types/product";

const productData: ProductTypes[] = [
  {
    image: "https://www.bonmano.com/wp-content/uploads/2020/05/priska-main.png",
    title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی ",
    price: "175000",
    rating: 5,
  },
  {
    image: "https://www.bonmano.com/wp-content/uploads/2020/05/manuka-main.png",
    title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی ",
    price: "175000",
    rating: 3,
  },
  {
    image: "https://www.bonmano.com/wp-content/uploads/2023/01/giorno-main.png",
    title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی ",
    price: "154000",
    rating: 4,
  },

  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2020/05/artiman-main.png",
    title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی ",
    price: "175000",
    rating: 4,
  },

  {
    image: "https://www.bonmano.com/wp-content/uploads/2023/01/giorno-main.png",
    title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی ",
    price: "154000",
    rating: 2,
  },

  {
    image: "https://www.bonmano.com/wp-content/uploads/2020/05/manuka-main.png",
    title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی ",
    price: "175000",
    rating: 4,
  },
  {
    image: "https://www.bonmano.com/wp-content/uploads/2020/05/priska-main.png",
    title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی ",
    price: "175000",
    rating: 5,
  },
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2020/05/artiman-main.png",
    title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی ",
    price: "175000",
    rating: 3,
  },
];

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
