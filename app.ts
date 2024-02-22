import express, { Request, Response } from "express";

const app = express();

const func = (req: Request, res: Response) => {
  res.status(200).json({ message: "hello" });
};
app.get("/", func);

app.listen(4000, () => console.log("app is running on 4000"));
