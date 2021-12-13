import * as answerRepository from '../repositories/answerRepository';
import { QuestionID } from '../repositories/answerRepository';

async function newAnswerService(question: QuestionID) {
    try {
        const result = await answerRepository.checkQuestion(question.id);
        if(result === 400 || result === 500){
            return result;
        }
        const name = await answerRepository.getUser(question.token);
        if(name.status === 500){
            return name.status;
        }
        const answer = {...question, answeredBy: name.value}
        const res = await answerRepository.answerQuestion(answer);
        return res;
    } catch (error) {
        return 500;
    }
}

export {
    newAnswerService,
}