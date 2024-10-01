import { extensionsContent, ExtensionsContentProps } from "./ExtensionsContent";
import styles from "./Extensions.module.css";
import Extension from "./Extension/Extension";

export default function Extensions() {
  return (
    <section id={styles["download-extension"]}>
      <div className="section-header">
        <h2>Download the extension</h2>
        <p>
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.
        </p>
      </div>
      <ul className={styles["browser-cards"]}>
        {extensionsContent.map((extension: ExtensionsContentProps) => {
          return (
            <Extension key={extension["extension-id"]} params={extension} />
          );
        })}
      </ul>
    </section>
  );
}
