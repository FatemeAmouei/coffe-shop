"use client";

import React from "react";
import styles from "./Article.module.sass";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

import { ArticleTypes } from "@/component/Types/product";

const ArticleComponent: React.FC<ArticleTypes> = ({ image, title, date }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.ArticleCard} ${
        isDarkMode ? styles.dark : styles.light
      }`}
    >
      <Image
        src={image}
        alt="article"
        width={100}
        height={100}
        className={styles.img}
      />

      <div className={styles.Text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date} </p>
      </div>
    </div>
  );
};

export default ArticleComponent;
