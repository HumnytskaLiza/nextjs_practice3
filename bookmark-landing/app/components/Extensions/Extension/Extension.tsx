import Image from "next/image"
import styles from "../Extensions.module.css";
import dots from "../../../../public/bg-dots.svg";

interface ExtensionProps {
    params: {
        "extension-id": string;
        "extension-header": string;
        "extension-version": string;
        "extension-img": HTMLImageElement;
    }
}

export default function Extension({ params }: ExtensionProps) {
    return (
        <li
        className="justify-content-center"
        key={params["extension-id"]}
      >
        <div className="justify-content-center">
          <Image
            src={params["extension-img"]}
            alt={`${params["extension-id"]} logo`}
          />
          <h3>{params["extension-header"]}</h3>
          <p>{params["extension-version"]}</p>
        </div>
        <Image
          src={dots}
          className={styles["dots-img"]}
          alt="Card decor"
        />
        <button className="primary-btn">Add & Install Extension</button>
      </li>
    )
}