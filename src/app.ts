import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoter from "./routes/authRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const mongoURI = process.env.mongoURI || "mongodb://localhost:27017";

app.use(express.json());

mongoose
    .connect(mongoURI)
    .then(() => console.log("Connect MongoDB"))
    .catch((error) => console.log("Error", error));

app.use("/api/auth", authRoter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hi");
});

app.listen(port, () => {
    console.log("Listening", port);
});
