import React from "react";
import styles from "./Banner.module.sass";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.section}>
      <div className={styles.banner}>
        <Image
          className={styles.bannerImg1}
          src="https://www.bonmano.com/wp-content/uploads/2025/05/Moka-pot-site-sh.jpg"
          width={380}
          height={170}
          alt="bannerImage"
        />
        <div className={styles.texts1}>
          <p className={styles.title}>پودر های فوری </p>
          <p className={styles.subTitle}> نسکافه، هات چاکلت، ماسالا </p>
        </div>
        <div className={styles.gradientOverlay1}></div>
        <Image
          className={styles.bannerImg2}
          src="https://www.bonmano.com/wp-content/uploads/2025/05/vietnamese-egg-coffee-1.jpg"
          width={380}
          height={170}
          alt="bannerImage"
        />
        <div className={styles.texts2}>
          <p className={styles.title}>انواع قهوه</p>
          <p className={styles.subTitle}>ترکیبی و تک خاستگاه</p>
        </div>
        <div className={styles.gradientOverlay2}></div>
      </div>
    </div>
  );
}
