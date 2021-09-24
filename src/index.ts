import 'express-async-errors';
import express from 'express';

import './database/connect';

import router from './app/routes';
import errorsMiddleware from './app/middlewares/errorsMiddleware';

express()
  .use(express.json())
  .use(router)
  .use(errorsMiddleware)
  .listen(process.env.PORT, () => console.log(`🔥 Server running in http://localhost:${process.env.PORT}`));
