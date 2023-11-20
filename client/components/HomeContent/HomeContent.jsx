import styles from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <main className={styles.main}>
      <p className={styles.p}>Hi,</p>
      <p className={styles.p}>I'm Scott.</p>
      <section className={styles.section}>
        <p className={styles.p2}>Full stack developer,</p>
        <p className={styles.p2}>lifelong learner, & tech enthusiast.</p>
      </section>
    </main>
  );
};

export default HomeContent;
