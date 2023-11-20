import React, { useState } from "react";

import HomeContent from "../HomeContent/HomeContent";
import MainCSS from "./Main.module.css";
import CodeIcon from "../../assets/CodeIcon";

const Main = ({ currentView }) => {
  console.log(currentView);

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return <HomeContent />;
      case "skills":
        return <div style={{ color: "white" }}>Skills section here</div>;
      case "contact":
        return <div style={{ color: "white" }}>Contact content here</div>;
      default:
        return <div style={{ color: "white" }}> testing </div>;
    }
  };

  return renderContent();
};

export default Main;
