import { Router } from 'express';
import UserCrontroller from './controllers/UserCrontroller';

const routes = Router();

routes.get('/users', UserCrontroller.index);
routes.post('/users', UserCrontroller.create);

export default routes;
