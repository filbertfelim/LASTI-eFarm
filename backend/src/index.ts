import { config } from "dotenv";
config();
import mongoose from "mongoose";
import express, { Request, Response } from "express";

// setup express and mongodb

// express
const app = express();
app.use(express.json());

// mongodb
const db = mongoose.connect(process.env.DATABASE_URL ?? "").then(() => {
  console.log(`Server running at http://localhost:${process.env.PORT ?? ""}`);
  app.listen(4000);
});

// endpoints
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!!");
});
