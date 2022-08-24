// import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import * as chai from 'chai';
import { app } from '../app';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seção 1: Users e Login', () => {

  let chaiHttpResponse: Response;

  const MockLogin = {
    email: 'admin@admin.com',
    password: 'admin_secret',
  }

  describe('POST /login', () => {
    it('retorna status 200 e o token JWT', async () => {
      chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send(MockLogin)
      
      expect(chaiHttpResponse).to.have.status(200)
      expect(chaiHttpResponse.body).to.have.property('token')
  });
  })
});