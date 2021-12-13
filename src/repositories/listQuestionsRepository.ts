import connection from "../database/database";

interface Question{
    id: number,
	question: string, 
	student: string, 
	class: string,
	submitAt: string,
}

async function getQuestions(): Promise<{status: number, value: Question[]}> {
    try {
        const result = await connection.query('SELECT id, question, student, class, submit_at FROM questions WHERE answered = false');
        return {status: 200, value: result.rows};
    } catch (error) {
       return {status: 500, value: []};
    }
}

export {
    getQuestions,
    Question,
}