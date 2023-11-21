import GithubIcon from "../../assets/GithubIcon";
import LinkedinIcon from "../../assets/LinkedinIcon";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <GithubIcon />
      <LinkedinIcon />
    </header>
  );
};

export default Header;
