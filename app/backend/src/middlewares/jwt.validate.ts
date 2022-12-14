import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
// import * as jwt from 'jsonwebtoken';
import JWT from '../utils/JWT';

// const secret = process.env.JWT_SECRET || 'zorin-espadao';

export default async function jwtV(request: Request, response: Response, next: NextFunction) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json('deu ruim');
  }

  try {
    const result = JWT.verify(token);
    request.body.user = result;
  } catch (error) {
    return response.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
}
