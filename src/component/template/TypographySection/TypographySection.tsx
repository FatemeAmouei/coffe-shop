"use client";

import styles from "./TypographySection.module.sass";
import { useTheme } from "@/context/ThemeContext";
import { TypographyTypes } from "@/component/Types/product";
import TypographyComponent from "@/component/module/Typography/TypographyComponent";

const TypographyData: TypographyTypes[] = [
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2025/04/turkish-sand-coffee-sh.jpg",
    title: "پشتیبانی شبانه روزی",
    desc: "7روز هفته، 24 ساعته",
  },
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2025/03/make-coffee-syrup-at-home-sh.jpg",
    title: "امکان تحویل اکسپرس",
    desc: "ارسال بسته با سرعت باد",
  },
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2024/12/types-of-coffee-makers-sh.jpg",
    title: "رست تخصصی",
    desc: "تازه برشته شده و با کیفیت",
  },
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2025/05/Moka-pot-site-sh.jpg",
    title: "اکسسوری قهوه",
    desc: "وسایل و ادوات دم آوری",
  },
];

const TypographySection = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`${styles.Section} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={styles.Typographysection}>
          {TypographyData.map((Typography, index) => (
            <TypographyComponent
              key={index}
              image={Typography.image}
              title={Typography.title}
              desc={Typography.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default TypographySection;
