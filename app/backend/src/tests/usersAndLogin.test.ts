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

  const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVkZW50aWFscyI6eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3N3b3JkIjoic2VjcmV0X2FkbWluIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY2MTQzODUyMCwiZXhwIjoxNjY0MDMwNTIwfQ.XsnXjsfUnqSqntsrbPjb4Bf8OmwaUPYmi8xTHH9hD80';

  it('Deve retornar status 200 e o token JWT', async () => {
    sinon.stub(Users, 'findOne').resolves(mockDB as Users)

    chaiHttpResponse = await chai.request(app)
    .post('/login')
    .send(mockBody)
    
    expect(chaiHttpResponse.status).to.equal(200)
    expect(chaiHttpResponse.body).to.have.property('token')

    sinon.restore()
  });

  it('Deve validar corretamente a rota "/login/validate"', async () => { 
    chaiHttpResponse = await chai.request(app)
    .get('/login/validate')
    .set('authorization', mockToken)

    expect(chaiHttpResponse.status).to.equal(200)
    expect(chaiHttpResponse.body).to.have.property('role')
  });
})