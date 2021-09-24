import { Router } from 'express';
import UserController from '../controllers/UserController';
import AuthMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/', UserController.create);

router.use(AuthMiddleware);

router.get('/', UserController.list);

export default router;
