"use client";

import React from "react";
import styles from "./Footer.module.sass";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import {
  IoLocationOutline,
  IoMailOutline,
  IoLogoInstagram,
} from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${styles.FooterSection} ${
        isDarkMode ? styles.dark : styles.light
      }`}
    >
      {" "}
      <div className={styles.FooterTop}>
        <div className={styles.FooterRight}>
          <div className={styles.FooterLogo}>
            <Image
              src="/image/logo_Light.png"
              alt="Typography"
              width={150}
              height={50}
              className={styles.img}
            />{" "}
          </div>
          <div className={styles.FooterLogoText}>
            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات
            و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه
            در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت
            به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
          </div>
        </div>
        <div className={styles.FooterCenter}>
          <p className={styles.FooterCenterTitle}>دسترسی سریع</p>
          <div className={styles.FooterTexts}>
            <p className={styles.FooterText}>
              <TfiLayoutLineSolid className={styles.icon} />
              حریم خصوصی{" "}
            </p>
            <p className={styles.FooterText}>
              <TfiLayoutLineSolid className={styles.icon} />
              عودت کالا{" "}
            </p>
            <p className={styles.FooterText}>
              <TfiLayoutLineSolid className={styles.icon} />
              شرایط استفاده
            </p>
            <p className={styles.FooterText}>
              <TfiLayoutLineSolid className={styles.icon} />
              ثبت سفارش
            </p>
            <p className={styles.FooterText}>
              <TfiLayoutLineSolid className={styles.icon} />
              پرسش های متداول
            </p>
            <p className={styles.FooterText}>
              <TfiLayoutLineSolid className={styles.icon} />
              فرصت های شغلی{" "}
            </p>
            <p className={styles.FooterText}>
              <TfiLayoutLineSolid className={styles.icon} />
              ضمانت نامه ها{" "}
            </p>
            <p className={styles.FooterText}>
              <TfiLayoutLineSolid className={styles.icon} />
              ارتباط با ما{" "}
            </p>
          </div>
        </div>
        <div className={styles.FooterLeft}>
          <div className={styles.FooterTitle}>در تماس باشیم</div>
          <div className={styles.adresses}>
            <p className={styles.adress}>
              <IoLocationOutline className={styles.icon} />
              بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
            </p>
            <div className={styles.call}>
              <p className={styles.mail}>
                <IoMailOutline className={styles.icon} />
                info@Coffee.com
              </p>
              <p className={styles.tel}>
                <BsTelephone className={styles.icon} />
                09021236628
              </p>
              <p className={styles.tel}>021-6789012 </p>
            </div>
            <div className={styles.social}>
              <button className={styles.tlg}>
                @golden_coffee
                <FaTelegramPlane className={styles.icon} />
              </button>
              <button className={styles.insta}>
                @golden_coffee
                <IoLogoInstagram className={styles.icon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.FooterTBottom}>
        <p className={styles.right}>
          تمام حقوق این رابط کاربری متعلق به سبزلرن میباشد و دانشجوی این دوره
          اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.
        </p>
        <p className={styles.Copyright}>
          {" "}
          Copyright © 2023 Golden Coffee. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
