import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import User from '../interfaces/user.interface';

const secret = process.env.JWT_SECRET || 'zorin-espadao';
export default class JWT {
  static generate(credentials: User) {
    const token = jwt.sign({ credentials }, secret, {
      expiresIn: '30d',
      algorithm: 'HS256',
    });
    return token;
  }

  static verify(token: string) {
    const credentials = jwt.verify(token, secret);
    return credentials;
  }
}
