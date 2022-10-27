import { sign } from 'jsonwebtoken';
import { IUser } from '../interfaces/index';

export default function generateToken(user: IUser): string {
  const payload = {
    role: user.role,
    email: user.email,
  };

  const token = sign({ payload }, process.env.JWT_SECRET as string, {
    expiresIn: '5d',
  });

  return token;
}
