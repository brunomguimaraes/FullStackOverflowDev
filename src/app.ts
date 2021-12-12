import express from 'express';
import cors from 'cors';
import { userController } from './controllers/userController';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/users', userController);

export default app;
