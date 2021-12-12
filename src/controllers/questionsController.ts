import { Request, Response } from 'express';
import * as questionsService from '../services/questionsService';
import { Question } from '../repositories/questionsRepository';
import { questionValidation } from '../validations/validations';

async function addQuestionController(req: Request, res: Response) {
    const question: Question = req.body;
    const { error } = questionValidation.validate(question);
    if(error){
      res.sendStatus(400);
    }else{
      try {
        const result = await questionsService.addQuestionService(question);
        if(result.status === 200){
            res.send(result.value.toString());
        }else{
            res.sendStatus(result.status);
        }
      } catch (error) {
        res.sendStatus(500);
      }
    }
}

export {
    addQuestionController,
}