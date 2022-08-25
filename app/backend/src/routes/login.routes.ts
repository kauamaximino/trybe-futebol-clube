import * as express from 'express';
import LoginController from '../controllers/login.controller';
import middlewares from '../middlewares/index.validate';

const login = express.Router();

const controller = new LoginController();

login.post('/login', middlewares.login, (request, response) => controller.login(request, response));

login.get(
  '/login/validate',
  middlewares.jwt,
  (request, response) => LoginController.validate(request, response),
);

export default login;
