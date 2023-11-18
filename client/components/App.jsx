import React, { useEffect, useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((contacts) => {
        setContacts(contacts);
      });
  }, []);

  return (
    // <main>
    //   {contacts.map((contact) => (
    //     <div className="contact" key={contact.id}>
    //       <h1>{contact.name}</h1>
    //       <h2>{contact.email}</h2>
    //       <h2>{contact.message}</h2>
    //     </div>
    //   ))}
    // </main>
    <h1>test from app jsx</h1>
  );
};

export default App;
