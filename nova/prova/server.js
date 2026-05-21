import express from "express";
import cors from "cors";
import routes from "./routes/remeds.js";

const port = 3456;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(3456, () => {
    console.log(`Aplicação rodando na porta ${3456}`);
});
