import express from "express";
import { bankRouter } from "./src/router/bank.js";
import { userRouter } from "./src/router/user.js";
import cors from "cors";

const app = express();

app.use(express.json()); //middleWare

app.use("/bank", bankRouter);
app.use("/user", userRouter);
app.use(cors());
app.listen(3000, () => {
  console.log("3000");
});
