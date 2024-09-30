"use client";

import logo from "../../../public/logo-bookmark.svg";
import burgerIcon from "../../../public/icon-hamburger.svg";
import logoPhoneMenu from "../../../public/logo-bookmark.png";
import closeIcon from "../../../public/icon-close.svg";
import facebook from "../../../public/icon-facebook.svg";
import twitter from "../../../public/icon-twitter.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <header>
      <nav className={styles.navigation}>
        <div>
          <Image src={logo} alt="Bookmark logo" />
        </div>
        <div>
          <div id={styles["burger-menu"]} onClick={() => setOpened(!opened)}>
            <Image src={burgerIcon} alt="Burger icon" />
          </div>
          <div
            className={`${styles["nav-links-mobile"]} ${
              opened ? styles.opened : ""
            }`}
          >
            <div>
              <div>
                <Image
                  src={logoPhoneMenu}
                  alt="Bookmark logo (phone version)"
                />
                <Image
                  src={closeIcon}
                  id={styles["close-btn"]}
                  alt="Burger menu close button"
                  onClick={() => setOpened(!opened)}
                />
              </div>
              <Link href="#">Features</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Contact</Link>
              <button id={styles["login-btn"]}>Login</button>
            </div>
            <div className={styles.icons}>
              <Image src={facebook} alt="Facebook icon" />
              <Image src={twitter} alt="Twitter icon" />
            </div>
          </div>

          <div className={styles["nav-links"]}>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Contact</Link>
            <button className={`primary-btn ${styles["nav-button"]}`}>
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
