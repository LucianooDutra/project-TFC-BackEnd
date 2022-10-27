import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matche from '../database/models/matche';
import Team from '../database/models/team';

import {
  matchesIsFinished,
  mockLeaderboarTeams,
  mockLeaderboardHome,
  mockLeaderboardAway,
  mockLeaderboardAll,
} from './mocks/leaderboards';

chai.use(chaiHttp);

const { expect } = chai;

describe('testes da rota /leaderboard', () => {
  describe('GET teste rota /leaderboard/home', () => {
    beforeEach(Sinon.restore);

    describe('caso de sucesso, mostrando toda a tabela classificatoria de jogos da casa', () => {
      beforeEach(Sinon.restore);

      it('retorna todos os jogos com status 200', async() => {

        Sinon.stub(Matche, 'findAll').resolves(matchesIsFinished as any);
        Sinon.stub(Team, 'findAll').resolves(mockLeaderboarTeams as any);

        const response = await chai.request(app).get('/leaderboard/home');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(mockLeaderboardHome);
      });
    });
  });

  describe('GET teste rota /leaderboard/away', () => {
    beforeEach(Sinon.restore);

    describe('caso de sucesso, mostrando toda a tabela classificatoria de jogos visitantes', () => {
      beforeEach(Sinon.restore);

      it('retorna todos os jogos finalizados com status 200', async() => {

        Sinon.stub(Matche, 'findAll').resolves(matchesIsFinished as any);
        Sinon.stub(Team, 'findAll').resolves(mockLeaderboarTeams as any);

        const response = await chai.request(app).get('/leaderboard/away');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(mockLeaderboardAway);
      });
    });
  });

  describe('GET teste rota /leaderboard', () => {
    beforeEach(Sinon.restore);

    describe('caso de sucesso, mostrando toda a tabela classificatoria com todos os times', () => {
      beforeEach(Sinon.restore);

      it('retorna todos os jogos finalizados com status 200', async() => {

        Sinon.stub(Matche, 'findAll').resolves(matchesIsFinished as any);
        Sinon.stub(Team, 'findAll').resolves(mockLeaderboarTeams as any);

        const response = await chai.request(app).get('/leaderboard');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(mockLeaderboardAll);
      });
    });
  });
});
