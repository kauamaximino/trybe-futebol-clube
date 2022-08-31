// @ts-ignore
import chaiHttp = require('chai-http');

import * as sinon from 'sinon';
import * as chai from 'chai';
import { app } from '../app';
import { Response } from 'superagent';
import ITable from '../interfaces/table.interface';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seção 3: Partidas', () => {

  let chaiHttpResponse: Response;

  it('Deve retornar status 200 e todos as partidas', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderboard/home')

    expect(chaiHttpResponse.status).to.equal(200)
    
    chaiHttpResponse.body.forEach((table: ITable) => {
      expect(table).to.have.property('name')
      expect(table).to.have.property('totalPoints')
      expect(table).to.have.property('totalGames')
      expect(table).to.have.property('totalVictories')
      expect(table).to.have.property('totalDraws')
      expect(table).to.have.property('totalLosses')
      expect(table).to.have.property('goalsFavor')
      expect(table).to.have.property('goalsOwn')
      expect(table).to.have.property('goalsBalance')
      expect(table).to.have.property('efficiency')
    });

    sinon.restore()
  })

})