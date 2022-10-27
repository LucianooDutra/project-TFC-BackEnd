import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { IRequest } from '../interfaces';
import 'dotenv/config';

const SECRET = process.env.JWT_SECRET;

export default function validateToken(req: IRequest, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ message: 'unauthorized' });
  }

  if (!authorization) {
    throw new Error('token not found');
  }

  try {
    if (SECRET) {
      jwt.verify(authorization, SECRET);

      next();
    }
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}
