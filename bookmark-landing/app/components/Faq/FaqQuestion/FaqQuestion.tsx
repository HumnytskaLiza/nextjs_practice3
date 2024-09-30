"use client";

import { useState } from "react";
import styles from "../Faq.module.css";
import arrowBtnIcon from "../../../../public/icon-arrow.svg";
import Image from "next/image";

interface FaqQuestionProps {
  params: {
    id: number;
    question: string;
    answer: string;
  };
}

export default function FaqQuestion({ params }: FaqQuestionProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li
      className={styles.question}
      key={params["id"]}
      onClick={() => setOpen(!open)}
    >
      <div>
        <h4>{params["question"]}</h4>
        <Image
          className={open ? `${styles.active}` : ""}
          src={arrowBtnIcon}
          alt="Arrow button to show/hide the answer"
        />
      </div>
      <p className={open ? `${styles.active}` : ""}>{params["answer"]}</p>
    </li>
  );
}
