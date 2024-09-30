import dots from "../../../public/bg-dots.svg";
import extensionsContent from "./ExtensionsContent";
import Image from "next/image";
import styles from "./Extensions.module.css";

export default function Extensions() {
  return (
    <section id={styles["download-extension"]}>
      <div className="section-header">
        <h2>Download the extension</h2>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <ul className={styles["browser-cards"]}>
        {extensionsContent.map((extension) => {
          return (
            <li
              className="justify-content-center"
              key={extension["extension-id"]}
            >
              <div className="justify-content-center">
                <Image
                  src={extension["extension-img"]}
                  alt={`${extension["extension-id"]} logo`}
                />
                <h3>{extension["extension-header"]}</h3>
                <p>{extension["extension-version"]}</p>
              </div>
              <Image
                src={dots}
                className={styles["dots-img"]}
                alt="Card decor"
              />
              <button className="primary-btn">Add & Install Extension</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
