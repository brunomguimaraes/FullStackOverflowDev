import * as questionsRepository from '../repositories/questionsRepository';
import { Question, Return } from '../repositories/questionsRepository';

async function addQuestionService(question:Question): Promise<Return> {
    try {
        const result = await questionsRepository.checkQuestion(question);
        if(result === 400){
            return {status: 409, value: ''};
        }
        const res = await questionsRepository.addQuestion(question);
        return {status: res.status, value: res.value};

    } catch (error) {
        return {status: 500, value: ''};
    }
}

export {
    addQuestionService,
}