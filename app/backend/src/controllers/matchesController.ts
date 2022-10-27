import { Request, Response } from 'express';
import { IMatches } from '../interfaces/index';
import MatchesService from '../services/matchesService';
import TeamsService from '../services/teamsService';

export default class MatchesController {
  constructor(
    public matchesService = new MatchesService(),
    public teamsService = new TeamsService(),
  ) {
    this.getAllInProgress = this.getAllInProgress.bind(this);
    this.createMatch = this.createMatch.bind(this);
    this.updateIsFinished = this.updateIsFinished.bind(this);
    this.updateMatches = this.updateMatches.bind(this);
  }

  public async getAllInProgress(req: Request, res: Response): Promise<IMatches[] | any> {
    const { inProgress } = req.query;

    const progress = (inProgress === 'true');

    if (!inProgress) {
      const matches = await this.matchesService.getAll();
      return res.status(200).json(matches);
    }

    const matches = await this.matchesService.getMatchesByProgress(progress);
    res.status(200).json(matches);
  }

  public async createMatch(req: Request, res: Response): Promise<IMatches | any> {
    const { homeTeam, awayTeam } = req.body;

    if (Number(homeTeam) === Number(awayTeam)) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams',
      });
    }

    const getHomeTeamById = await this.teamsService.getById(Number(homeTeam));
    const getAwayTeamById = await this.teamsService.getById(Number(awayTeam));
    if (!getHomeTeamById || !getAwayTeamById) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    const newMatch = await this.matchesService.createMatch(req.body);

    res.status(201).json(newMatch);
  }

  public async updateIsFinished(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.matchesService.updateIsFinished(Number(id));

    res.status(200).json({ message: 'Finished' });
  }

  public async updateMatches(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.matchesService.updateMatches(req.body, Number(id));

    res.status(200).json({ message: 'Finished' });
  }
}
