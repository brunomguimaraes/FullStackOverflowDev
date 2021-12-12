import express from 'express';
import cors from 'cors';
import { test } from './controllers/userController';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/users', test);

export default app;
