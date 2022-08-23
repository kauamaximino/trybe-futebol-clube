import { compareSync } from 'bcryptjs';
import User from '../database/models/users';
import JWT from '../utils/JWT';

export default class LoginService {
  private model = User;

  async login(email: string, password: string) {
    const user = await this.model.findOne({ where: { email }, raw: true });
    if (!user) throw new Error('User not found');

    const checkPassword = compareSync(password, user.password);
    if (checkPassword) return JWT.generate({ email, password });
  }
}
