import { NextFunction, Request, Response } from 'express';

export default async function verifyEmailAndPassword(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  if (password.length <= 6) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
}
