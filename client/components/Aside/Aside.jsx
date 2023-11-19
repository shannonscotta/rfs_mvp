import HomeIcon from "../../assets/HomeIcon";
import CodeIcon from "../../assets/CodeIcon";

import MailIcon from "../../assets/MailIcon";
import AsideCSS from "./Aside.module.css";

const Aside = () => {
  return (
    <aside className={AsideCSS.aside}>
      <section>
        <HomeIcon />
        <CodeIcon />
        <MailIcon />
      </section>
    </aside>
  );
};

export default Aside;
