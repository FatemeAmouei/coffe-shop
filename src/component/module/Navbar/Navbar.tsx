"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.sass";
import { usePathname } from "next/navigation";
import { IoMoonOutline, IoExitOutline, IoMenu } from "react-icons/io5";
import { SlBasketLoaded } from "react-icons/sl";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", lable: " صفحه اصلی" },
    { href: "/shop", lable: "فروشگاه" },
    { href: "/dic", lable: "دیکشنری" },
    { href: "/blog", lable: "بلاگ" },
    { href: "/aboutus", lable: "درباره ما" },
    { href: "/contactus", lable: "تماس با ما" },
  ];

  return (
    <div className={styles.navbarSection}>
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

        <button>
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
            <button>
              <IoMoonOutline />
              <span>تم تیره</span>
            </button>{" "}
            <button>
              <SlBasketLoaded />
              <span>سبدخرید</span>
            </button>{" "}
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
          <button>
            <SlBasketLoaded />
          </button>
          <button>
            <IoMoonOutline />
          </button>
        </div>
        <div className={styles.navbarLeftBtn}>
          <button>
            <IoExitOutline />
            <span> ورود | ثبت نام</span>
          </button>
        </div>
      </div>
    </div>
  );
}
