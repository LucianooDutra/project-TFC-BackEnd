import * as Sinon from 'sinon';
import * as chai from 'chai';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/user';

// import { Response } from 'superagent';

import {
  bodyLogin,
  mockUser,
  token,
  bodyLoginError,
} from './mocks/Login';

chai.use(chaiHttp);

const { expect } = chai;

describe('testes da rota /login', () => {
  describe('post', () => {
    beforeEach(Sinon.restore);

    describe('caso de sucesso', () => {
      it('retorna um token, se todos os dados forem válidos', async() => {

        Sinon.stub(User, 'findOne').resolves(mockUser as User);
        Sinon.stub(bcrypt, 'compare').resolves(true as boolean);
        Sinon.stub(jwt, 'sign').returns(token.token as any)

        const response = await chai.request(app).post('/login').send(bodyLogin);
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal(token);
      });
    });

    describe('caso de error', () => {
      beforeEach(Sinon.restore);

      it('retorna erro com status 401 e a mensagem "Incorrect email or password"', async() => {

        Sinon.stub(User, 'findOne').resolves(null);
        Sinon.stub(bcrypt, 'compare').resolves(false as boolean);

        const response = await chai.request(app).post('/login').send(bodyLoginError);
        expect(response.status).to.equal(401);
        expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
      });

      it('Caso não seja informado email, retorna um erro com status 400 e mensagem "All fields must be filled"', async () => {
        const response = await chai.request(app).post('/login').send({ email: '', password: 'teste' });
        expect(response.status).to.equal(400);
        expect(response.body).to.deep.equal({ message: 'All fields must be filled' });
      });

      it('Caso não seja informado password, retorna um erro com status 400 e mensagem "All fields must be filled"', async () => {
        const response = await chai.request(app).post('/login').send({ email: 'testando@uol.com', password: '' });
        expect(response.status).to.equal(400);
        expect(response.body).to.deep.equal({ message: 'All fields must be filled' });
      });

      it('Caso não seja informado email invalido, retorna um erro com status 401 e mensagem "Incorrect email or password"', async () => {
        const response = await chai.request(app).post('/login').send({ email: 'uol', password: '123456789' });
        expect(response.status).to.equal(401);
        expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
      });

      it('Caso não seja informado password com menos de 6 caracteres, retorna um erro com status 401 e mensagem "Incorrect email or password"', async () => {
        const response = await chai.request(app).post('/login').send({ email: 'users@user.com', password: '123' });
        expect(response.status).to.equal(401);
        expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
      });
    });

    describe('teste de GET, na rota /login/validate', () => {
      beforeEach(Sinon.restore);

      it('caso de sucesso', async() => {

        // const payload2 = {
        //   role: 'user',
        //   email: 'user@user.com',
        // };

        // Sinon.stub(User, 'findOne').resolves(bodyLogin as User);
        // Sinon.stub(bcrypt, 'compare').resolves(true);
        // Sinon.stub(jwt, 'verify').returns(payload2 as any)


        // const loginResponse = await chai.request(app).post('/login').send(bodyLogin);

        // const token = loginResponse.body.token;

        // console.log(token);

        // const response = await chai.request(app).get('/login/validate').set('authorization', token);

        // console.log(response);

        // console.log(response.body);

        // expect(response.status).to.equal(200);
        // expect(response.body.payload.role).to.be.equal(payload2.role);
      });

      it('se não enviar a chave com o token retorna a mensagem "unauthorized" com o status 401', async () => {

        const response = await chai.request(app).get('/login/validate').set('authorization', '');

        expect(response.status).to.equal(401);
        expect(response.body).to.deep.equal({ message: 'unauthorized' });
      });
    });
  });
});