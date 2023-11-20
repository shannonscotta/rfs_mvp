import HomeIcon from "../../assets/HomeIcon";
import CodeIcon from "../../assets/CodeIcon";
import MailIcon from "../../assets/MailIcon";

import AsideCSS from "./Aside.module.css";

const Aside = ({ handleView }) => {
  return (
    <aside className={AsideCSS.aside}>
      <section>
        <HomeIcon handleView={handleView} />
        <CodeIcon handleView={handleView} />
        <MailIcon handleView={handleView} />
      </section>
    </aside>
  );
};

export default Aside;