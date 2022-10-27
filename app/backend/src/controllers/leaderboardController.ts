import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderboardService';
import { IBoard } from '../interfaces/index';

export default class LeaderBoardsController {
  constructor(
    public leaderBoardService = new LeaderBoardService(),
  ) {
    this.getAllHome = this.getAllHome.bind(this);
    this.getAllAway = this.getAllAway.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  public async getAllHome(_req: Request, res: Response): Promise<IBoard[] | void> {
    const leaderBoardResult = await this.leaderBoardService.leaderBoard('homeTeam');

    res.status(200).json(leaderBoardResult);
  }

  public async getAllAway(_req: Request, res: Response): Promise<IBoard[] | void> {
    const leaderBoardResult = await this.leaderBoardService.leaderBoard('awayTeam');

    res.status(200).json(leaderBoardResult);
  }

  public async getAll(_req: Request, res: Response): Promise<IBoard[] | void> {
    const leaderBoardResult = await this.leaderBoardService.leaderBoard('homeTeamGoals');
    // mudança pra subir novamente pra o gitHub
    res.status(200).json(leaderBoardResult);
  }
}
