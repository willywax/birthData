import express from 'express';
import dataController from '../controllers/dataController.js';

const router = express.Router();

router.use('/:country',dataController.getCountryData);
router.use('/',dataController.getData);


export default router;

