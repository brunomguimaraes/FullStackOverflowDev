import * as userRepository from '../repositories/userRepository';
import { User } from '../repositories/userRepository';
import { v4 as uuid } from 'uuid';

async function addUserService(user:User) {
    try {
        const result = await userRepository.checkUser(user);
        if(result === 400){
            return 409;
        }
        const newUser: User = {...user, token: uuid() };
        const res = await userRepository.addUser(newUser);
        return res;
    } catch (error) {
        return 500;
    }
}

export {
    addUserService,
}