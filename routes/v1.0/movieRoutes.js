import express from 'express';
import {
    createMovie,
    deleteMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    checkIdMiddleware,
    validateBodyMiddleware,
} from '../../controller/movieController.js';

const router = express.Router();

// find movieIndex by id - runs when movieId is received in request
router.param('movieId', checkIdMiddleware);

router.route('/').get(getAllMovies).post(validateBodyMiddleware, createMovie);

router
    .route('/:movieId')
    .get(getMovieById)
    .patch(updateMovie)
    .delete(deleteMovie);

export default router;
