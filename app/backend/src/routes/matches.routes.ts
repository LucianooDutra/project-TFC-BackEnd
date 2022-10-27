import { Router } from 'express';
import MatchesController from '../controllers/matchesController';
import validateToken from '../utils/validateTokenMatches';

const router = Router();

const matchesController = new MatchesController();

router.get('/matches', matchesController.getAllInProgress);
router.post('/matches', validateToken, matchesController.createMatch);
router.patch('/matches/:id/finish', matchesController.updateIsFinished);
router.patch('/matches/:id', matchesController.updateMatches);

export default router;
