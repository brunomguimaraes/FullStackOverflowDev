import connection from "../database/database";

interface User{
    name: string,
    class: string,
    token: string,
}

async function addUser(user:User) {
    try {
        await connection.query('INSERT INTO users (name, class, token) VALUES ($1, $2, $3)', [user.name, user.class, user.token]);
        return 200;
    } catch (error) {
        return 500;
    }
}

async function checkUser(user:User) {
    try {
        const result = await connection.query('SELECT * FROM users WHERE token = $1', [user.token]);
        result.rowCount > 0 ? 400 : 200;
    } catch (error) {
        return 500;
    }
}

export{
    addUser,
    checkUser,
    User,
}