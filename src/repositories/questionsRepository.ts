import connection from "../database/database";

interface Question{
    question: string,
    student: string,
    class: string,
    tags: string,
}

interface Return{
    status: number,
    value: string
}

async function addQuestion(question:Question): Promise<Return> {
    try {
        await connection.query('INSERT INTO questions (question, student, class, tags, submit_at, answered) VALUES ($1, $2, $3, $4, now(), false)', [question.question, question.student, question.class, question.tags]);
        const result = await connection.query('SELECT * FROM questions WHERE question = $1', [question.question]);
        return {status: 200, value: result.rows[0].id};
    } catch (error) {
        return {status: 500, value: ''};
    }
}

async function checkQuestion(question:Question) {
    try {
        const result = await connection.query('SELECT * FROM questions WHERE question = $1', [question.question]);
        if(result.rowCount > 0){
            return 400;
        }
        return 200;
    } catch (error) {
        return 500;
    }
}


export{
    addQuestion,
    checkQuestion,
    Question,
    Return,
}