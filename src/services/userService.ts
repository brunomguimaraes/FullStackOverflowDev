import * as userRepository from '../repositories/userRepository';
import { User } from '../repositories/userRepository';
import { v4 as uuid } from 'uuid';

interface Return {
    status: number,
    value: string,
}

async function addUserService(user:User): Promise<Return> {
    try {
        const result = await userRepository.checkUser(user);
        if(result === 400){
            return {status: 409, value: ''};
        }
        const token: string = uuid(); 
        const newUser: User = {...user, token: token };
        const res = await userRepository.addUser(newUser);
        return {status: res, value: token};
    } catch (error) {
        return {status: 500, value: ''};
    }
}

export {
    addUserService,
}