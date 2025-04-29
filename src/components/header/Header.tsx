import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export default function Header() {
  return (
    <>
      <div className={styles.page}>
        <div>
          <Image
            src="/header-images/logo.svg"
            width={96}
            height={36}
            alt="logo"
          />
        </div>
        <div className={styles.Links}>
          <Link href="#" className={styles.link}>
            Главная
          </Link>
          <Link href="#" className={styles.link}>
            О нас
          </Link>
          <Link href="#" className={styles.link}>
            Товары
          </Link>
          <Link href="#" className={styles.link}>
            Контакты
          </Link>
        </div>

        <div className={styles.me}>
          <Image
            src="/header-images/Vector.png"
            width={30}
            height={30}
            alt="jd"
          />
          <Image
            src="/header-images/shop.png"
            width={22}
            height={30}
            alt="jf"
          />
          <Image
            src="/header-images/status.png"
            width={50}
            height={50}
            alt="kf"
          />
        </div>
      </div>
      <div className={styles.Img}>
        <Image
          src="/header-images/Frame57.svg"
          width={1440}
          height={600}
          alt="photo"
        />
      </div>
  
    </>
  );
}
