import { compareSync } from 'bcryptjs';
import User from '../database/models/users';
import JWT from '../utils/JWT';

export default class LoginService {
  constructor(private model = User) {}

  async login(email: string, password: string) {
    const user = await this.model.findOne({ where: { email }, raw: true });
    if (!user) throw new Error('Incorrect email or password');

    const checkPassword = compareSync(password, user.password);
    if (!checkPassword) throw new Error('Incorrect email or password');

    return JWT.generate({ email, password });
  }
}
