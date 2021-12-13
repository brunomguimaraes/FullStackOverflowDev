import connection from "../database/database";

interface Question{
    question: string,
	student: string,
	class: string,
	tags: string
	answered: boolean,
	submit_at: string
	answered_at: string
	answered_by: string,
	answer: string,
}

async function getQuestion(id:number): Promise<{status: number, value: Question}> {
    try {
        const result = await connection.query('SELECT * FROM questions WHERE id = $1', [id]);
        if(result.rowCount === 0){
            return {status: 400, value: null};
        }
        return {status: 200, value: result.rows[0]};
    } catch (error) {
        return {status: 500, value: null};
    }
}

export {
    getQuestion,
    Question,
}