import * as Sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matche from '../database/models/matche';

import {
  matches,
  matchesIsFinished,
  creatMatche,
  sendNewMatch,
  sendNewMatchIfEqualTeams,
  sendNewMatchIfIdNonexistent,
  sendUpdateMatch,
} from './mocks/Matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('testes da rota /matches', () => {
  describe('GET teste rota /matches', () => {
    beforeEach(Sinon.restore);

    describe('caso de sucesso, mostrando toda lista de jogos', () => {
      it('retorna todos os jogos com status 200', async() => {

        Sinon.stub(Matche, 'findAll').resolves(matches as any);

        const response = await chai.request(app).get('/matches');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(matches);
      });
    });

    describe('caso de sucesso, mostrando toda lista de jogos finalizados', () => {
      it('retorna todos os jogos finalizados com status 200', async() => {

        Sinon.stub(Matche, 'findAll').resolves(matchesIsFinished as any);

        const response = await chai.request(app).get('/matches?inProgress=false');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(matchesIsFinished);
      });
    });
  });

  describe('POST teste rota /matches', () => {
    beforeEach(Sinon.restore);

    describe('caso de sucesso, criado um novo jogo', () => {
      it('retorna o jogo criado com status 201', async() => {

        Sinon.stub(Matche, 'create').resolves(creatMatche as any);
        Sinon.stub(jwt, 'verify').resolves(true);

        const response = await chai.request(app).post('/matches').send(sendNewMatch).set('authorization', 'token' );

        expect(response.status).to.equal(201);
        expect(response.body).to.deep.equal(creatMatche);
      });
    });

    describe('caso de não sucesso, criando um novo jogo', () => {
      beforeEach(Sinon.restore);

      describe('caso de error de token', () => {
        it('não enviado o token junto com a requisição', async() => {
  
          const response = await chai.request(app).post('/matches').send(sendNewMatch)
  
          expect(response.status).to.equal(401);
          expect(response.body).to.deep.equal({ message: 'unauthorized' });
        });

        it('caso o token não seja valido, retorna "Token must be a valid token", com status 401', async() => {
  
          Sinon.stub(jwt, 'verify').throws();
  
          const response = await chai.request(app).post('/matches').send(sendNewMatch).set('authorization', 'token' );
  
          expect(response.status).to.equal(401);
          expect(response.body).to.deep.equal({ message: 'Token must be a valid token' });
        });
      });

      describe('caso de error com os dados enviados', () => {
        beforeEach(Sinon.restore);

        it('caso envie a lista com dois times iguais', async() => {

          Sinon.stub(jwt, 'verify').resolves(true);
  
          const response = await chai.request(app).post('/matches').send(sendNewMatchIfEqualTeams).set('authorization', 'token' );
  
          expect(response.status).to.equal(422);
          expect(response.body).to.deep.equal({ message: 'It is not possible to create a match with two equal teams' });
        });

        it('caso envie a lista com 1 ou os 2 times com id inexistentes', async() => {

          Sinon.stub(jwt, 'verify').resolves(true);
  
          const response = await chai.request(app).post('/matches').send(sendNewMatchIfIdNonexistent).set('authorization', 'token' );
  
          expect(response.status).to.equal(404);
          expect(response.body).to.deep.equal({ message: 'There is no team with such id!' });
        });
      });
    });
  });

  describe('PATCH teste rota /matches/:id', () => {
    beforeEach(Sinon.restore);

    describe('caso de sucesso, atualizando o status da partida', () => {
      it('retorna status 200 com mensagem "Finished"', async() => {

        Sinon.stub(Matche, 'update');

        const response = await chai.request(app).patch('/matches/1/finish');

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal({ message: 'Finished' });
      });
    });

    describe('caso de sucesso, atualizando os dados da partida', () => {
      it('retorna status 200 com mensagem "Finished"', async() => {

        Sinon.stub(Matche, 'update');

        const response = await chai.request(app).patch('/matches/1').send(sendUpdateMatch);

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal({ message: 'Finished' });
      });
    });
  });
});
