import { Router } from 'express';

import AuthRouter from './auth';
import UsersRouter from './users';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/users', UsersRouter);

export default router;
