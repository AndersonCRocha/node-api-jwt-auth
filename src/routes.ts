import { Router } from 'express';
import AuthController from './app/controllers/AuthController';

import UserController from './app/controllers/UserController';

const router = Router();

router.post('/users', UserController.create);
router.post('/auth/login', AuthController.login);

export default router;
