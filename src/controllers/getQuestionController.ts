import { Request, Response } from 'express';
import * as getQuestionService from '../services/getQuestionService';

async function getQuestion(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
        const result = await getQuestionService.getQuestion(id);
        if(result.status === 200){
            res.send(result.value);
        }else{
            res.sendStatus(result.status);
        }
      } catch (error) {
        res.sendStatus(500);
      }
}

export {
    getQuestion,
}