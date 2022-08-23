import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  private loginService = new LoginService();

  async login(request: Request, response: Response) {
    const { email, password } = request.body;
    try {
      const token = await this.loginService.login(email, password);
      response.status(200).json({ token });
    } catch ({ message }) {
      response.status(400).json({ message });
    }
  }
}
