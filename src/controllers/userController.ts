import { Request, Response } from 'express';

async function test(req: Request, res: Response){
    const tasks = req.body;
    console.log(tasks);
    res.sendStatus(248);
  }

export{
    test,
}