import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
// app recebendo o express
const app = express();
// colocando o app ler/interpretar JSON
app.use(express.json());
app.use(cors());
// chamando e usando o userRoutes
app.use('/', userRoutes);
// app executando(ouvindo/escutando) na/a porta 8800
app.listen(8800);
