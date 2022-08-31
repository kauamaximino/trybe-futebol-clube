// @ts-ignore
import chaiHttp = require('chai-http');

import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
import { Response } from 'superagent';
import Matches from '../database/models/matches'

import { allMatches, matchForCreate, matchCreated, messageFinished } from './mocks/matches';
import { IFinished } from '../interfaces/leaderboard.interface';
import { token } from './mocks/usersAndLogin';
import IMessage from '../interfaces/message.interface';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seção 3: Partidas', () => {

  let chaiHttpResponse: Response;

  it('Deve retornar status 200 e todos as partidas', async () => {
    sinon.stub(Matches, 'findAll').resolves(allMatches as [])

    chaiHttpResponse = await chai.request(app).get('/matches')
    expect(chaiHttpResponse.status).to.equal(200)
    chaiHttpResponse.body.forEach((match: IFinished) => {
      expect(match).to.have.property('id')
      expect(match).to.have.property('homeTeam')
      expect(match).to.have.property('homeTeamGoals')
      expect(match).to.have.property('awayTeam')
      expect(match).to.have.property('awayTeamGoals')
      expect(match).to.have.property('inProgress')
      expect(match).to.have.property('teamHome')
      expect(match).to.have.property('teamAway')
    });

    sinon.restore()
  });

  it('Deve retornar status 201 e criar uma partida', async () => {
    sinon.stub(Matches, 'create').resolves(matchCreated as Matches)

    chaiHttpResponse = await chai.request(app)
      .post('/matches')
      .send(matchForCreate)
      .set('authorization', token)
    
    expect(chaiHttpResponse.status).to.equal(201)
    expect(chaiHttpResponse.body).to.have.property('id')
    expect(chaiHttpResponse.body).to.have.property('homeTeam')
    expect(chaiHttpResponse.body).to.have.property('homeTeamGoals')
    expect(chaiHttpResponse.body).to.have.property('awayTeam')
    expect(chaiHttpResponse.body).to.have.property('awayTeamGoals')
    expect(chaiHttpResponse.body).to.have.property('inProgress')

    sinon.restore()
  });

  it('Deve retornar status 200 e atualizar os gols de uma partida', async () => {
    sinon.stub(Matches, 'update').resolves()

    chaiHttpResponse = await chai.request(app)
      .patch('/matches/49')
      .send({ homeTeamGoals: 2, awayTeamGoals: 1 })
    
    expect(chaiHttpResponse.status).to.equal(200)

    sinon.restore()
  })
})