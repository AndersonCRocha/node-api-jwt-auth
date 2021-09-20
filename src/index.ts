import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (request: Request, response: Response) => response.send('Hello world!'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running in http://localhost:${port}`));
