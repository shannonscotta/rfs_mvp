import HomeIcon from "../../assets/HomeIcon";
import CodeIcon from "../../assets/CodeIcon";
import MailIcon from "../../assets/MailIcon";

import styles from "./Sidebar.module.css";

const Sidebar = ({ handleView }) => {
  return (
    <div className={styles.container}>
    <aside className={styles.aside}>
      <section className={styles.section}>
        <HomeIcon handleView={handleView} />
        <CodeIcon handleView={handleView} />
        <MailIcon handleView={handleView} />
      </section>
    </aside>
    </div>
  );
};

export default Sidebar;