import styles from "./Form.module.css";

export default function Form() {
  return (
    <section id={styles.form} className="justify-content-center">
      <div id={styles["purple-bg"]}></div>
      <div>
        <p>35,000+ already joined</p>
        <h2>Stay up-to-date with what we&apos;re doing</h2>
      </div>
      <form>
        <input
          type="text"
          name="email-input"
          placeholder="Enter your email address"
          required
        />
        <button id={styles["submit-btn"]} className="primary-btn">
          Contact Us
        </button>
      </form>
    </section>
  );
}
