import HomeContent from "../HomeContent/HomeContent";
import SkillsContent from "../SkillsContent/SkillsContent";
import ContactContent from "../ContactContent/ContactContent";

const Main = ({ currentView }) => {
  const renderContent = () => {
    switch (currentView) {
      case "home":
        return <HomeContent />;
      case "skills":
        return <SkillsContent />;
      case "contact":
        return <ContactContent />;
      default:
        return <HomeContent />;
    }
  };

  return renderContent();
};

export default Main;
