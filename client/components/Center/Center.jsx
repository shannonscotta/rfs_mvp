import HomeContent from "../HomeContent/HomeContent";
import SkillsContent from "../SkillsContent/SkillsContent";
import Mail from "../Mail/Mail";

import Sidebar from "../Sidebar/Sidebar";

const Center = ({ currentView }) => {
  const renderContent = () => {
    switch (currentView) {
      case "home":
        return <HomeContent />;
      case "skills":
        return <SkillsContent />;
      case "contact":
        return <Mail />;
      default:
        return <HomeContent />;
    }
  };

  return renderContent()
    
};

export default Center;
