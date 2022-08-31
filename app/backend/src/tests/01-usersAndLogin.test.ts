// @ts-ignore
import chaiHttp = require('chai-http');

import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
import { Response } from 'superagent';
import Users from '../database/models/users'
import { body, dataBase, token } from '../utils/mocks/usersAndLogin';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seção 1: Users e Login', () => {

  let chaiHttpResponse: Response;

  it('Deve retornar status 200 e o token JWT', async () => {
    sinon.stub(Users, 'findOne').resolves(dataBase as Users)

    chaiHttpResponse = await chai.request(app)
    .post('/login')
    .send(body)
    
    expect(chaiHttpResponse.status).to.equal(200)
    expect(chaiHttpResponse.body).to.have.property('token')

    sinon.restore()
  });

  it('Deve validar corretamente a rota "/login/validate"', async () => { 
    chaiHttpResponse = await chai.request(app)
    .get('/login/validate')
    .set('authorization', token)

    expect(chaiHttpResponse.status).to.equal(200)
    expect(chaiHttpResponse.body).to.have.property('role')
  });
})