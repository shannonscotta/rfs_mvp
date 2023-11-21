import React, { useState } from "react";

import Header from "./Header/Header.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Center from "./Center/Center.jsx";
import Footer from "./Footer/Footer.jsx";
import styles from "./App.module.css";

const App = () => {
  const [currentView, setCurrentView] = useState("home");

  let handleView = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      <Header />
      <section className={styles.section}>
        <Sidebar handleView={handleView} />
        <Center currentView={currentView} />
      </section>
      <Footer />
    </>
  );
};

export default App;
