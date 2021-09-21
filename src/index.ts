import 'reflect-metadata';
import express from 'express';

import './database/connect';

import router from './routes';

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running in http://localhost:${port}`));
