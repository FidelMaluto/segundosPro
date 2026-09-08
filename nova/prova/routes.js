// Todas as rotas estão aqui!
import express from 'express';

import { getAll, getOne, postOne, putOne, deleteOne } from './miniCRUD';

const routes = express.Router();

routes.get('/frutas', getAll);
routes.get('/fruta/:id', getOne);
routes.post('/fruta', pushOne);
routes.put('/fruta/:id', putOne);
routes.delete('/fruta/:id', deleteOne);

export default routes;
