import Image from "next/image";
import styles from "../Features.module.css";
import { FeaturesContentProps } from "../FeaturesContent";

interface FeatureProps {
    params: FeaturesContentProps;
    openedTab: keyof FeaturesContentProps;
}

export default function Feature({ params, openedTab }: FeatureProps) {
    return (
        <div className={styles["features-content"]}>
            <div className={styles["features-photo"]}>
                <Image
                    src={params[openedTab]["feature-img"]}
                    alt="Feature illustration"
                />
                <div id={styles["feature-section-purple-blob"]}></div>
            </div>
            <div className={styles["features-description"]}>
                <h3>{params[openedTab]["feature-header"]}</h3>
                <p>{params[openedTab]["feature-desc"]}</p>
                <button className="primary-btn">More info</button>
            </div>
        </div>
    )
}
