import { styles } from "./styles";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.title}>Movie Search</span>
      <span className={styles.text}>
        © 2025 Movie Search by{" "}
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/fernandogalende/">
          Fernando Galende
        </a>
      </span>
    </footer>
  );
};
