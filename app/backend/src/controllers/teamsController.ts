import { Request, Response } from 'express';
import TeamsService from '../services/teamsService';
import { ITeam } from '../interfaces/index';

export default class TeamsController {
  constructor(public teamsService = new TeamsService()) { }

  public getAll = async (_req: Request, res: Response): Promise<ITeam[] | void> => {
    const teams = await this.teamsService.getAll();
    res.status(200).json(teams);
  };

  public getById = async (req: Request, res: Response): Promise<ITeam | void> => {
    const { id } = req.params;

    const team = await this.teamsService.getById(Number(id));

    if (!team) {
      res.status(400).json({ message: 'team not found' });
    }

    res.status(200).json(team);
  };
}
