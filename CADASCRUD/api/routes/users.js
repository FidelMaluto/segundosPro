import express from "express";
// importando as rotas do arquivo(user.js) na pasta(controllers)
import { 
    getUsers,
    addUser,
    upDateUser,
    deleteUser
 } from "../controllers/user.js";
// constante router(que recebe e executa todas as rotas aqui implementadas)
const router = express.Router();

// chamando a rota GET(getUsers)
router.get('/', getUsers);
// chamando a rota POST(addUser)
router.post('/', addUser);
// chamando a rota PUT(upDateUser)
router.put('/:id', upDateUser);
// chamando a rota DELETE(deleteUser)
router.delete('/:id', deleteUser);

 export default router
 