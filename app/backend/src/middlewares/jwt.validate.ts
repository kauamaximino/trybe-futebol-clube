import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
// import JWT from '../utils/JWT';

export default async function jwtV(request: Request, response: Response, next: NextFunction) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json('deu ruim');
  }

  const result = jwt.verify(token, 'secretJWT');
  request.body.credentials = result;

  next();
}
