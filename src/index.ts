import 'express-async-errors';
import express from 'express';

import './database/connect';

import router from './routes';
import errorsMiddleware from './app/middlewares/errorsMiddleware';

const app = express();

app.use(express.json());

app.use(router);

app.use(errorsMiddleware);

app.listen(process.env.PORT, () => console.log(`🔥 Server running in http://localhost:${process.env.PORT}`));
