import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello from server!!");
});

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from API!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
