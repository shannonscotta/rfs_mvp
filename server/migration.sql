DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id SERIAL,
  name VARCHAR,
  email VARCHAR,
  message VARCHAR
);

INSERT INTO contacts(name, email, message) VALUES('Isaac Newton', 'newtonian_physics@apple.com', 'Dear Scott, I am seeking your expertise to develop a web application that visualizes the laws of motion and universal gravitation. Your skills come highly recommended for this endeavor.');
INSERT INTO contacts(name, email, message) VALUES('Stephen Hawking', 'hawking_cosmos@blackholemail.com', 'Greetings Scott, I am interested in collaborating with you to create an interactive web app that helps users explore and understand the complexities of black holes and the universe.');
INSERT INTO contacts(name, email, message) VALUES('Galileo Galilei', 'stargazer_galileo@telescopemail.com', 'Hello Scott, I wish to commission your services to design a web application that will allow users to simulate the experience of viewing the heavens through a telescope, as I have.');
INSERT INTO contacts(name, email, message) VALUES('Leonardo da Vinci', 'leonardo_innovations@renaissancecreator.com', 'Dear Scott, I am in pursuit of a digital artisan to construct a web platform where my varied inventions and art can be interactively experienced by enthusiasts worldwide.');