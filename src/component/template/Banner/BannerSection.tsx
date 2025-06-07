"use client";
import styles from "./BannerSection.module.sass";
import { useTheme } from "@/context/ThemeContext";
import Banner from "@/component/module/Banner/Banner";

const BannerSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`${styles.Section} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={styles.ProductSection}>
          <Banner />
        </div>
      </div>
    </>
  );
};
export default BannerSection;
