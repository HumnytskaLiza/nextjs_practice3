import { faqContent, FaqContentProps } from "./FaqContent";
import styles from "./Faq.module.css";
import FaqQuestion from "./FaqQuestion/FaqQuestion";

export default function Faq() {
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
        {faqContent.map((question: FaqContentProps) => {
          return <FaqQuestion key={question.id} params={question} />;
        })}
      </ul>

      <button className="primary-btn">More info</button>
    </section>
  );
}
