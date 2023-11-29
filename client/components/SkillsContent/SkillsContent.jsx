import React, { useEffect } from "react";
import styles from "./SkillsContent.module.css";
import anime from "animejs";

const SkillsContent = () => {
  useEffect(() => {
    anime({
      targets: "#logos img",
      translateY: [
        { value: -100, duration: 500 },
        { value: 0, duration: 500 },
      ],
      rotate: {
        value: "1turn",
        duration: 500,
        easing: "easeInOutSine",
      },
      delay: anime.stagger(500),
    });
  }, []);

  let handleHover = (event) => {
    anime({
      targets: event.currentTarget, 
      translateY: [
        { value: -100, duration: 500 },
        { value: 0, duration: 500 },
      ],
      scale: 1.5, 
      duration: 1000, 
      easing: "easeInOutSine"
    });
  };

  return (
    <main className={styles.main}>
      <section className={styles.logos} id="logos">
        <img
          onMouseEnter={handleHover}
          src="../../assets/psql_logo.svg"
          alt="PostgreSQL"
        />
        <img
          onMouseEnter={handleHover}
          src="../../assets/express_logo.svg"
          alt="Express"
        />
        <img
          onMouseEnter={handleHover}
          src="../../assets/react_logo.svg"
          alt="React"
        />
        <img
          onMouseEnter={handleHover}
          src="https://scottshannon.dev/client/assets/node_logo.svg"
          alt="NodeJS"
        />
      </section>

      <p className={styles.p}>JavaScript, React.js, Vite, HTML, CSS</p>
      <p className={styles.p}>Node.js, Express.js, PostgreSQL</p>
      <p className={styles.p}>Git, Vitest, Figma, UI/UX</p>
    </main>
  );
};

export default SkillsContent;
