import React from "react";
import styles from "./GroupProduct.module.sass";
import Image from "next/image";
import { GroupProductTypes } from "@/component/Types/product";
import { useTheme } from "@/context/ThemeContext";

const GroupProduct: React.FC<GroupProductTypes> = ({ image, title }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={styles.section}>
      <div
        className={`${styles.GroupProduct} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <Image
          className={styles.GroupProductImg}
          src={image}
          width={100}
          height={100}
          alt="GroupProductImage"
        />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};
export default GroupProduct;
