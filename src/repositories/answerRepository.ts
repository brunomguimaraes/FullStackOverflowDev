import connection from "../database/database";

interface QuestionID{
    answer: string,
    id: number,
    answeredBy: string,
    token: string,
}

interface Return{
    status: number,
    value: string,
}


async function answerQuestion(question:QuestionID) {
    try {
        await connection.query('UPDATE questions SET answered = true WHERE id = $1', [question.id]);
        await connection.query('UPDATE questions SET answered_at = now() WHERE id = $1', [question.id]);
        await connection.query('UPDATE questions SET answered_by = $1 WHERE id = $2', [question.answeredBy, question.id]);
        await connection.query('UPDATE questions SET answer = $1 WHERE id = $2', [question.answer, question.id]);
        
        return 200;
    } catch (error) {
      
        return 500;
    }
}

async function checkQuestion(id: number) {
    try {
        const result = await connection.query('SELECT * FROM questions WHERE id = $1', [id]);
        if(result.rowCount > 0){
            return 200;
        }
        return 400;
    } catch (error) {
        return 500;
    }
}

async function getUser(token:string): Promise<Return> {
    try {
        const result = await connection.query('SELECT * FROM users WHERE token = $1', [token]);
        return {status: 200, value: result.rows[0].name};
    } catch (error) {
        return {status: 500, value: ''};
    }
}

export {
    answerQuestion,
    getUser,
    checkQuestion,
    QuestionID,
}