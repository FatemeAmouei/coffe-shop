"use client";

import React from "react";
import styles from "./TypographyComponent.module.sass";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

import { TypographyTypes } from "@/component/Types/product";

const TypographyComponent: React.FC<TypographyTypes> = ({
  image,
  title,
  desc,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.TypographyCard} ${
        isDarkMode ? styles.dark : styles.light
      }`}
    >
      <Image
        src={image}
        alt="Typography"
        width={50}
        height={50}
        className={styles.img}
      />

      <div className={styles.Text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>{desc} </p>
      </div>
    </div>
  );
};

export default TypographyComponent;
