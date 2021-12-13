import { Request, Response } from 'express';
import * as listQuestionsService from '../services/listQuestionsService';

async function getQuestionsController(req: Request, res: Response) {
    try {
        const result = await listQuestionsService.listQuestionsService();
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
    getQuestionsController,
}