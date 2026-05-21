import express from "express";

import { getList, addList, upDateList, deleteList, getIdList } from "../controllers/user.js";

const routes = express.Router();

routes.get('/task', getList);

routes.post('/task', addList);
routes.get('/task/:id', getIdList);

routes.put('/task/:id', upDateList);

routes.delete('/task/:id', deleteList);

export default routes;
