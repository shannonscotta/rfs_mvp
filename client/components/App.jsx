import React, { useEffect, useState } from "react";

import Navigation from "./Navigation/Navigation.jsx";
import Aside from "./Aside/Aside.jsx";
import Main from "./Main/Main.jsx";

const App = () => {
  // const [contacts, setContacts] = useState([]);
  const [currentView, setCurrentView] = useState("home");

  let handleView = (view) => {
    setCurrentView(view);
  };

  //   <main>
  //   {contacts.map((contact) => (
  //     <div className="contact" key={contact.id}>
  //       <h1>{contact.name}</h1>
  //       <h2>{contact.email}</h2>
  //       <h2>{contact.message}</h2>
  //     </div>
  //   ))}
  // </main>

  console.log(currentView);

  // useEffect(() => {
  //   fetch("/api/contacts")
  //     .then((res) => res.json())
  //     .then((contacts) => {
  //       setContacts(contacts);
  //     });
  // }, []);

  return (
    <>
      <Navigation />
      <Aside handleView={handleView} />
      <Main currentView={currentView} />
    </>
  );
};

export default App;
