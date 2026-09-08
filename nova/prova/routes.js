// Todas as rotas estão aqui!
import express from 'express';

import { getAll } from './miniCRUD';

const routes = express.Router();

routes.get('/frutas', getAll);

export default routes;
