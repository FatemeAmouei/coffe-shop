"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.sass";
import { usePathname } from "next/navigation";
import { IoExitOutline, IoMenu } from "react-icons/io5";
import { SlBasketLoaded } from "react-icons/sl";
import ThemeToggleBtn from "@/component/template/ThemeToggleBtn";
import { useTheme } from "@/context/ThemeContext";
import BasketBox from "./BasketBox/BasketBox";
interface NavLink {
  href: string;
  lable: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const basketBtnRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const [basketBox, setBasketBox] = useState(false);

  const navLinks: NavLink[] = [
    { href: "/", lable: " صفحه اصلی" },
    { href: "/shop", lable: "فروشگاه" },
    { href: "/dic", lable: "دیکشنری" },
    { href: "/blog", lable: "بلاگ" },
    { href: "/aboutus", lable: "درباره ما" },
    { href: "/contactus", lable: "تماس با ما" },
  ];

  const totalAmount = 123000;
  const [fixTop, setFixTop] = useState(false);
  useEffect(() => {
    window?.addEventListener("scroll", () => {
      const currentScroll = window?.pageYOffset;
      if (currentScroll > 100) {
        setFixTop(true);
      } else {
        setFixTop(false);
      }
    });
  }, []);
  return (
    <>
      <div
        className={`${!fixTop} ? ${styles.navbarSection} : ${
          styles.navbar_fixed
        } ${isDarkMode ? "dark" : "light"}`}
      >
        <div className={styles.mobileMenu}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <IoMenu size={24} />
          </button>

          <div className={styles.logo}>
            <Image
              src="/image/logo_Light.png"
              width={100}
              height={35}
              alt="logo"
            />
          </div>

          <button ref={basketBtnRef} onClick={() => setBasketBox(true)}>
            <SlBasketLoaded size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            <div className={styles.dropDownTop}>
              <Image
                src="/image/logo.png"
                width={100}
                height={35}
                alt="logo"
                className={styles.imgTop}
              />
              <button onClick={() => setIsMenuOpen(false)}>X</button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? styles.active : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.lable}
              </Link>
            ))}

            <div className={styles.dropDownBottom}>
              <button>
                <IoExitOutline />
                <span> ورود | ثبت نام</span>
              </button>
              <div className={styles.dropDownBtntheme}>
                <ThemeToggleBtn />
                <span>{isDarkMode ? "تم تیره" : "تم روشن"} </span>
              </div>
              <Link href="/basket" className={styles.dropDownBtnbasket}>
                <SlBasketLoaded />
                <span>سبدخرید</span>
              </Link>
            </div>
          </div>
        )}

        <div className={styles.navbarRight}>
          <Image
            src="/image/logo_Light.png"
            width={120}
            height={40}
            alt="logoPic"
          />
          <div className={styles.navbarLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? styles.active : ""}
              >
                {link.lable}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.navbarLeft}>
          <div className={styles.navbarLeftIcon}>
            <button onClick={() => setBasketBox(true)}>
              <SlBasketLoaded />
            </button>
            <ThemeToggleBtn />
          </div>
          <div className={styles.navbarLeftBtn}>
            <Link href="/loginSignin">
              <IoExitOutline />
              <span> ورود | ثبت نام</span>
            </Link>
          </div>
        </div>
      </div>
      {basketBox && basketBtnRef.current && (
        <BasketBox
          basketBox={basketBox}
          onClose={() => setBasketBox(false)}
          totalAmount={totalAmount}
        />
      )}
    </>
  );
}
