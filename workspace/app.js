import express from "express";
import cors from "cors";
import userRouter from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());
//
app.use("/", userRouter);

app.listen(3333, ()=>{
    console.log('Rodando na porta 3333');
});
