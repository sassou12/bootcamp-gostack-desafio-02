import { Router } from 'express';
import RecipientController from './app/controllers/RecipientController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import auth from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello Nanathi' }));
routes.post('/logon', SessionController.store);
routes.get('/recipients', RecipientController.index);
routes.use(auth);
routes.post('/recipients', RecipientController.store);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

export default routes;
