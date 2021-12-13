import { Request, Response } from 'express';
import * as answerService from '../services/answerService';
import { QuestionID } from '../repositories/answerRepository';
import { answerValidation } from '../validations/validations';

async function newAnswerController(req: Request, res: Response) {
    const answer = req.body;
    const { authorization } = req.headers;
    const userToken = authorization?.split('Bearer ')[1];
    const id = Number(req.params.id);
    const { error } = answerValidation.validate(answer);
    if(error){
      res.sendStatus(400);
    }else{
        const fullAnswer: QuestionID = {
            answer: answer.answer,
            id: id,
            token: userToken,
            answeredBy: '',
        }
      try {
        const result = await answerService.newAnswerService(fullAnswer)
        res.sendStatus(result);
      } catch (error) {
        res.sendStatus(500);
      }
    }
}

export {
    newAnswerController,
}