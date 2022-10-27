// import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(public loginService = new LoginService()) { }
}
