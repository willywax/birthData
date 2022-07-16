import express from 'express';
import dataController from '../controllers/dataController.js';
import { getIndexPage } from '../controllers/viewController.js';

const router = express.Router();

router.use('/api/:country',dataController.getCountryData);
router.use('/api/',dataController.getData);
router.get('/',getIndexPage);

export default router;

