import express from 'express';
import { body, validationResult } from 'express-validator';
import {
    challengeController
} from '../controllers/index.js'

const router = express.Router();

router.get('/user/:idUser', challengeController.getAllChallengesByUser);

router.get('/', challengeController.getPublicChallenge);

router.get('/:idChallenge', challengeController.getChallengeById);

router.post('/create', challengeController.createChallenge );

router.post('/delete/:id', challengeController.deleteChallenge );

router.patch('/', challengeController.updateChallenge );


router.patch('/:id/:step', challengeController.updateStep );

export default router;