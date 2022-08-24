// @ts-ignore
import chaiHttp = require('chai-http');

import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
import { Response } from 'superagent';
import Users from '../database/models/users'

chai.use(chaiHttp);

const { expect } = chai;

describe('Seção 1: Users e Login', () => {

  let chaiHttpResponse: Response;

  const mockBody = {
    email: 'admin@admin.com',
    password: 'secret_admin',
  }

  const mockDB = {
    id: 1,
    username: 'Admin',
    role: "admin",
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  }

    it('retorna status 200 e o token JWT', async () => {
      sinon.stub(Users, 'findOne').resolves(mockDB as Users)

      chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send(mockBody)
      
      expect(chaiHttpResponse.status).to.equal(200)
      expect(chaiHttpResponse.body).to.have.property('token')

      sinon.restore()
  });
})