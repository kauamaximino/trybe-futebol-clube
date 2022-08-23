import * as jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';

export default class JWT {
  static generate(credentials: User) {
    const token = jwt.sign({ credentials }, 'secretJWT', {
      expiresIn: '30d',
      algorithm: 'HS256',
    });
    return token;
  }
}
