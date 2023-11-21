import React, { useState } from "react";
import styles from "./ContactContent.module.css";

const ContactContent = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactData = {
      email: email,
      name: name,
      message: message,
    };

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      setIsSubmitted(true);
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (isSubmitted) {
    return (
      <main className={styles.main}>
        <h1>Thank you for reaching out!</h1>
       </main>
    );
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>

      <label htmlFor="name">Name</label>
      <input
        type="name"
        id="name"
        value={name}
        placeholder="Galileo Galilei"
        onChange={(e) => setName(e.target.value)}
        required
      />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="stargazer1564@aol.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          placeholder="I wish to commission your services to design a web application that will allow users to simulate the experience of viewing the heavens through a telescope, as I have."
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send</button>
      </form>
    </main>
  );
};

export default ContactContent;