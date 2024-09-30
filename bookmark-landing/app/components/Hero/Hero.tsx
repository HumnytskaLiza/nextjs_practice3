import heroIllustration from "../../../public/illustration-hero.svg";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id={styles["hero-section"]} className="justify-content-center">
      <div className={`section-header ${styles["section-header"]}`}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={styles.buttons}>
          <button className="primary-btn">Get it on Chrome</button>
          <button className="secondary-btn">Get it on Firefox</button>
        </div>
      </div>
      <div className={styles.photo}>
        <Image
          src={heroIllustration}
          alt="Hero illustration: a tablet with opened web application"
        />
        <div id={styles["hero-section-purple-blob"]}></div>
      </div>
    </section>
  );
}
