import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/contacts", (req, res) => {
  const { name, email, message } = req.body;

  sql`INSERT INTO contacts (name, email, message) VALUES (${name}, ${email}, ${message})`
    .then(() => {
      res.status(200).send("Contact information saved successfully");
    })
    .catch((error) => {
      console.error("Error inserting data:", error);
      res.status(500).send("Error saving contact information");
    });
});

// app.get("/api/contacts", (req, res) => {
//   sql`SELECT * FROM contacts`.then((rows) => {
//     res.send(rows);
//   });
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
