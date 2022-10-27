import { Router } from 'express';
import LeaderBoardsController from '../controllers/leaderboardController';

const router = Router();

const leaderBoardsController = new LeaderBoardsController();

router.get('/leaderboard/home', leaderBoardsController.getAllHome);
router.get('/leaderboard/away', leaderBoardsController.getAllAway);
router.get('/leaderboard', leaderBoardsController.getAll);

export default router;
