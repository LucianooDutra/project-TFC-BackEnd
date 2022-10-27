import { NextFunction, Request, Response } from 'express';
import { compare } from 'bcryptjs';
import LoginService from '../services/loginService';
import generateToken from '../utils/generateToken';

const loginService = new LoginService();

export default async function authLogin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  const user = await loginService.login(email);
  if (!user) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  const token = generateToken(user);
  res.status(200).json({ token });
  next();
}
