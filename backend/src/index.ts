import mongoose from "mongoose";
import express, { Request, Response } from "express";
import "dotenv/config";

const app = express();
const db = await mongoose.connect(process.env.DATABASE_URL);
const port = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!!");
});

app.listen(4000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
