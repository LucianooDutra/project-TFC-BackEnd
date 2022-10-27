import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { IRequest } from '../interfaces';
import 'dotenv/config';

const SECRET = process.env.JWT_SECRET;

const tokenValidation = (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(401).json({ message: 'unauthorized' });
    }

    if (!authorization) {
      throw new Error('token not found');
    }

    if (SECRET) {
      const payload = jwt.verify(authorization, SECRET);
      req.body = payload;

      res.status(200).json({ role: req.body.payload.role });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default tokenValidation;
