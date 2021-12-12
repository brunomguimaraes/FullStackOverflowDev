import express from 'express';
import cors from 'cors';
import * as userController from './controllers/userController';
import * as questionsController from './controllers/questionsController';


const app = express();

app.use(cors());
app.use(express.json());

app.post('/users', userController.addUserController);
app.post('/questions', questionsController.addQuestionController);

export default app;
