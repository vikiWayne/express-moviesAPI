import express from 'express';
import {
    createMovie,
    deleteMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    checkIdMiddleware,
} from '../../controller/movieController.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { schemas } from '../../schemas/index.js';

const router = express.Router();

// find movieIndex by id - runs when movieId is received in request
router.param('movieId', checkIdMiddleware);

router
    .route('/')
    .get(getAllMovies)
    .post(validateRequest(schemas.movie), createMovie);

router
    .route('/:movieId')
    .get(getMovieById)
    .patch(updateMovie)
    .delete(deleteMovie);

export default router;
