import connection from '../database/database';
import { Request, Response, NextFunction } from 'express';

async function auth(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const sessionToken = authorization?.split('Bearer ')[1];

  try {
    const session = await connection.query('SELECT * FROM users WHERE token = $1', [sessionToken]);

    if (session.rowCount === 0) {
      return res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(500);
  }
  next();
}

export default auth;