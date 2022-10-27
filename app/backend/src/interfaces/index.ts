import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

interface ILogin {
  email: string;
  password: string;
}

interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password?: string;
}

interface IUserComplete {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

interface IRequest extends Request {
  email?: string | JwtPayload;
  role?: string;
}

interface ITeam {
  id: number;
  teamName: string;
}

interface ISimpleMatches {
  homeTeamGoals: number,
  awayTeamGoals: number,
}

interface IMatches extends ISimpleMatches {
  id?: number,
  homeTeam: number,
  awayTeam: number,
  inProgress?: boolean,
}

interface IBoard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string,
}

export {
  ILogin,
  IUser,
  IUserComplete,
  IRequest,
  ITeam,
  ISimpleMatches,
  IMatches,
  IBoard,
};
