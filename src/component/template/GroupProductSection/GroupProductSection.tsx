"use client";
import { useTheme } from "@/context/ThemeContext";
import styles from "./GroupProductSection.module.sass";
import GroupProduct from "@/component/module/GroupProduct/GroupProduct";

const GroupProductSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`${styles.Section} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={styles.ProductSection}>
          <GroupProduct
            image="https://www.bonmano.com/wp-content/uploads/2020/07/main.png"
            title="قهوه دمی و اسپرسو"
          />
          <GroupProduct
            image="https://www.bonmano.com/wp-content/uploads/2020/07/ESRRESSO-CAPSULE1.jpg"
            title="لوازم جانبی و تجهیزات"
          />
          <GroupProduct
            image="https://www.bonmano.com/wp-content/uploads/2023/10/%D8%AF%D8%B3%D8%AA%DA%AF%D8%A7%D9%87-%DA%A9%D9%BE%D8%B3%D9%88%D9%84_02.webp"
            title="اسپرسو ساز"
          />
          <GroupProduct
            image="https://www.bonmano.com/wp-content/uploads/2023/05/SACHET-COFFEE-STAND.jpg"
            title="پک تستر قهوه"
          />
          <GroupProduct
            image="https://www.bonmano.com/wp-content/uploads/2017/06/noreska-9am-hover.jpg"
            title="قهوه ترک"
          />
        </div>
      </div>
    </>
  );
};
export default GroupProductSection;
