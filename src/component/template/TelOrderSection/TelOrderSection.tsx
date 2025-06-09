"use client";

import styles from "./TelOrderSection.module.sass";
import { useTheme } from "@/context/ThemeContext";
import TelOrder from "@/component/module/TelOrder/TelOrder";

const TelOrderSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`${styles.Section} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={styles.TelOrderSection}>
          <TelOrder className={styles.texts} />
        </div>
      </div>
    </>
  );
};
export default TelOrderSection;
