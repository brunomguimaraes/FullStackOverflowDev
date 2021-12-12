import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { userValidation } from '../validations/validations';
import { User } from '../repositories/userRepository';

async function addUserController(req: Request, res: Response){
    const user: User = req.body;
    const { error } = userValidation.validate(user);
    if(error){
      res.sendStatus(400);
    }else{
      try {
        const result = await userService.addUserService(user);
        res.send(result.value).sendStatus(result.status);
      } catch (error) {
        res.sendStatus(500);
      }
    }
}

export{
  addUserController,
}