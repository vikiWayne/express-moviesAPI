import express from 'express';
import movieRoutes from './movieRoutes.js';

const router = express.Router();

router.use('/movie', movieRoutes);

export default router;
