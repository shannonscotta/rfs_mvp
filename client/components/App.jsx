import React, { useEffect, useState } from "react";

import Navigation from "./Navigation/Navigation.jsx";
import Aside from "./Aside/Aside.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

const App = () => {
  // const [contacts, setContacts] = useState([]);
  const [currentView, setCurrentView] = useState("home");

  let handleView = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      <Navigation />
      <Aside handleView={handleView} />
      <Main currentView={currentView} />
      <Footer />
    </>
  );
};

export default App;
