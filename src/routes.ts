import { Router } from 'express';

import AuthRouter from './app/routes/auth';
import UsersRouter from './app/routes/users';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/users', UsersRouter);

export default router;
