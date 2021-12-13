import * as getQuestionRepository from '../repositories/getQuestionRepository';
import { Question } from '../repositories/getQuestionRepository';

interface Question2{
    question: string,
    student: string,
    class: string,
    tags: string
    submit_at: string,
    answered: boolean,
}


async function getQuestion(id:number): Promise<{status: number, value: Question | Question2 }> {
    try {
        const result = await getQuestionRepository.getQuestion(id);
        if(result.status === 400){
            return {status: result.status, value: null}
        }
        if(result.value.answered === true){
            const formatResult: Question = {
                question: result.value.question,
                student: result.value.student,
                class: result.value.class,
                tags: result.value.tags,
                submit_at: result.value.submit_at,
                answered: result.value.answered,
                answered_at: result.value.answered_at,
                answered_by: result.value.answered_by,
                answer: result.value.answer,
            }
            return {status: result.status, value: formatResult}
        }else{
            const formatResult: Question2 = {
                question: result.value.question,
                student: result.value.student,
                class: result.value.class,
                tags: result.value.tags,
                submit_at: result.value.submit_at,
                answered: result.value.answered,
            }
            return {status: result.status, value: formatResult};
        }
    } catch (error) {
        return {status: 500, value: null};
    }
}

export {
    getQuestion,
}