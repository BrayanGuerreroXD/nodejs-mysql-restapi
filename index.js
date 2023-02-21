import express from "express";
import { pool } from "./db.js";

const app = express();

app.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS Result;");
  res.json(result);
});

app.get("/employees", (req, res) => {
  res.send("Get employees");
});

app.post("/employees", (req, res) => {
  res.send("Post employees");
});

app.put("/employees", (req, res) => {
  res.send("Put employees");
});

app.delete("/employees", (req, res) => {
  res.send("Delete employees");
});

app.listen(3000);
console.log("Server listening on port 3000");
