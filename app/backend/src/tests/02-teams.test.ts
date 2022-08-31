// @ts-ignore
import chaiHttp = require('chai-http');

import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
import { Response } from 'superagent';
import ITeams from '../interfaces/teams.interface';
import Teams from '../database/models/teams';
import allTeams from '../utils/mocks/teams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seção 2: Times', () => {

  let chaiHttpResponse: Response;

  it('Deve retornar status 200 e todos os times', async () => {
    sinon.stub(Teams, 'findAll').resolves(allTeams as Teams[])

    chaiHttpResponse = await chai.request(app).get('/teams')
    expect(chaiHttpResponse.status).to.equal(200)
    chaiHttpResponse.body.forEach((team: ITeams) => {
      expect(team).to.have.property('id')
      expect(team).to.have.property('teamName')
    });
    expect(chaiHttpResponse.body).to.have.lengthOf(16)

    sinon.restore()
  });

  it('Deve retornar status 200 e o time com id 1', async () => {
    sinon.stub(Teams, 'findOne').resolves(allTeams[0] as Teams)

    chaiHttpResponse = await chai.request(app).get('/teams/1')
    expect(chaiHttpResponse.status).to.equal(200)
    expect(chaiHttpResponse.body).to.have.property('id')
    expect(chaiHttpResponse.body).to.have.property('teamName')

    sinon.restore()
  });

  it('Deve retornar null se um time não for encontrado', async () => {
    sinon.stub(Teams, 'findOne').resolves(null)

    chaiHttpResponse = await chai.request(app).get('/teams/19')
    expect(chaiHttpResponse.body).to.equal(null)

    sinon.restore()
  });
})