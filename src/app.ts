import express from 'express';
import cors from 'cors';
import auth from './middlewares/auth';
import * as userController from './controllers/userController';
import * as questionsController from './controllers/questionsController';
import * as answerController from './controllers/answerController';


const app = express();

app.use(cors());
app.use(express.json());

app.post('/users', userController.addUserController);
app.post('/questions', questionsController.addQuestionController);
app.post('/questions/:id', auth, answerController.newAnswerController);

export default app;
