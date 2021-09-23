import { Router } from 'express';
import AuthController from './app/controllers/AuthController';

import UserController from './app/controllers/UserController';
import AuthMiddleware from './app/middlewares/AuthMiddleware';

const router = Router();

router.post('/users', UserController.create);
router.post('/auth/login', AuthController.login);

router.use(AuthMiddleware);

router.get('/users', UserController.list);

export default router;
