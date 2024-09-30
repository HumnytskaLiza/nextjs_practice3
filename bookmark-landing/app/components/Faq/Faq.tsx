"use client";

import { useState } from "react";
import arrowBtnIcon from "../../../public/icon-arrow.svg";
import faqContent from "./FaqContent";
import Image from "next/image";
import styles from "./Faq.module.css";

function Faq() {
  return (
    <section id={styles.faq}>
      <div className="section-header">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <ul id={styles.questions}>
        {faqContent.map((question) => {
          const [open, setOpen] = useState(false);

          return (
            <li
              className={styles.question}
              key={question["id"]}
              onClick={() => setOpen(!open)}
            >
              <div>
                <h4>{question["question"]}</h4>
                <Image
                  className={open ? `${styles.active}` : ""}
                  src={arrowBtnIcon}
                  alt="Arrow button to show/hide the answer"
                />
              </div>
              <p className={open ? `${styles.active}` : ""}>
                {question["answer"]}
              </p>
            </li>
          );
        })}
      </ul>

      <button className="primary-btn">More info</button>
    </section>
  );
}

export default Faq;
