import * as listQuestionsRepository from '../repositories/listQuestionsRepository';
import { Question } from '../repositories/listQuestionsRepository';


async function listQuestionsService(): Promise<{status: number, value: Question[]}> {
    try {
        const result = await listQuestionsRepository.getQuestions();
        return {status: result.status, value: result.value}
    } catch (error) {
        return {status: 500, value: []};
    }
}

export {
    listQuestionsService,
}