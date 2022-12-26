import express, { Request, Response } from "express";
import router from "./routes";
const app = express();

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  return response.json({ message: "API is working fine!" });
});

app.use("/", router);

app.listen(3000, () => console.log("Server is running!"));
