"use client";

import SectionTitles from "@/component/module/SectionsTitles/SectionsTitles";
import styles from "./ArticleSection.module.sass";
import { useTheme } from "@/context/ThemeContext";
import { ArticleTypes } from "@/component/Types/product";
import ArticleComponent from "@/component/module/Article/Article";

const ArticleData: ArticleTypes[] = [
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2025/04/turkish-sand-coffee-sh.jpg",
    title: "طرز تهیه قهوه دمی با دستگاه اروپرس",
    date: "21 مرداد 1402",
  },
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2025/03/make-coffee-syrup-at-home-sh.jpg",
    title: "یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
    date: "21 مرداد 1402",
  },
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2024/12/types-of-coffee-makers-sh.jpg",
    title: "طرز تهیه یک فنجان کافه زینو برزیلی",
    date: "21 مرداد 1402",
  },
  {
    image:
      "https://www.bonmano.com/wp-content/uploads/2025/05/Moka-pot-site-sh.jpg",
    title: "طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی",
    date: "21 مرداد 1402",
  },
];

const ArticleSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`${styles.Section} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={styles.ArticleSection}>
          <SectionTitles title="مطالب خواندنی" titleLeft="مشاهده همه مطالب" />
          <div className={styles.Articles}>
            {ArticleData.map((Article, index) => (
              <ArticleComponent
                key={index}
                image={Article.image}
                title={Article.title}
                date={Article.date}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ArticleSection;
