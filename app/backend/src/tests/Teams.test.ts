import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/team';

import {
  listTeams,
} from './mocks/Teams';

chai.use(chaiHttp);

const { expect } = chai;

describe('testes da rota /teams', () => {
  describe('GET teste rota /team', () => {
    beforeEach(Sinon.restore);

    describe('caso de sucesso', () => {
      it('retorna todos os times com status 200', async() => {

        Sinon.stub(Team, 'findAll').resolves(listTeams as Team[]);

        const response = await chai.request(app).get('/teams');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(listTeams);
      });
    });
  });

  describe('GET teste rota /team/:id', () => {
    beforeEach(Sinon.restore);

    it('caso de sucesso', async() => {

      Sinon.stub(Team, 'findOne').resolves(listTeams[6] as Team);

      const response = await chai.request(app).get('/teams/7');

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(listTeams[6]);
      });

    it('Caso de não sucesso, retorna um erro com status 400 e mensagem "team not found"', async () => {

      Sinon.stub(Team, 'findOne').resolves(null);

      const response = await chai.request(app).get('/teams/999');

      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({ message: 'team not found' });
    });
  });
});
