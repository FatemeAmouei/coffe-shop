import React from "react";
import styles from "./SectionTitles.module.sass";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

interface PropsTypes {
  title: string;
  subTitle: string;
  titleLeft: string;
}

export default function SectionTitles(props: PropsTypes) {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`${styles.SectionTitles} ${
          isDarkMode ? styles.dark : styles.light
        }`}
      >
        <div className={styles.titleRight}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subTitle}>{props.subTitle}</p>
        </div>
        <Link href="/product" className={styles.titleLeft}>
          {props.titleLeft} <IoIosArrowBack />
        </Link>
      </div>
    </>
  );
}
