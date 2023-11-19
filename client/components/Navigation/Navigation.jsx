import GithubIcon from "../../assets/GithubIcon";
import LinkedinIcon from "../../assets/LinkedinIcon";
import NavigationCSS from "./Navigation.module.css"

const Navigation = () => {
  return (
    <header className={NavigationCSS.header}>
      <GithubIcon fillColor={"#CECECE"} />
      <LinkedinIcon fillColor={"#CECECE"} />
    </header>
  );
};

export default Navigation;
