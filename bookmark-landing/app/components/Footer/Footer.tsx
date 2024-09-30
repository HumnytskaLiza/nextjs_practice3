import bookmarkLogo from "../../../public/logo-bookmark.png";
import facebook from "../../../public/icon-facebook.svg";
import twitter from "../../../public/icon-twitter.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id={styles["footer-section"]} className="justify-content-center">
      <div id={styles["dark-bg"]}></div>
      <div className="justify-content-center">
        <Image src={bookmarkLogo} alt="Bookmark logo"></Image>
        <div className={styles["footer-nav-links"]}>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
      <div className={`${styles.icons} justify-content-center`}>
        <Image src={facebook} alt="Facebook icon" />
        <Image src={twitter} alt="Twitter icon" />
      </div>
    </footer>
  );
}
