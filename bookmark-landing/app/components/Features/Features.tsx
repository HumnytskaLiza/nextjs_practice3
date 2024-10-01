"use client";

import { useState } from "react";
import { featuresContent } from "./FeaturesContent";
import styles from "./Features.module.css";
import Feature from "./Feature/Feature";

type FeatureKeys = keyof typeof featuresContent;

export default function Features() {
  const [openedTab, setOpenedTab] = useState<FeatureKeys>("simpleBookmarking");

  function changeTabContent(tabName: FeatureKeys) {
    setOpenedTab(tabName);
  }

  return (
    <section id={styles.features}>
      <div className="section-header">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className={styles["list-tabs"]}>
        <div
          className={openedTab === "simpleBookmarking" ? styles.active : ""}
          onClick={() => changeTabContent("simpleBookmarking")}
        >
          Simple Bookmarking
        </div>
        <div
          className={openedTab === "speedySearching" ? styles.active : ""}
          onClick={() => changeTabContent("speedySearching")}
        >
          Speedy Searching
        </div>
        <div
          className={openedTab === "easySharing" ? styles.active : ""}
          onClick={() => changeTabContent("easySharing")}
        >
          Easy Sharing
        </div>
      </div>

      <Feature params={featuresContent} openedTab={openedTab} />
    </section>
  );
}
