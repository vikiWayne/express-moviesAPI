import fs from 'fs';

const FILE_PATH = './data/movies.json';

const movies = JSON.parse(fs.readFileSync(FILE_PATH));

// middlewares

export const checkIdMiddleware = (req, res, next, movieId) => {
    const movieIndex = movies.findIndex((movie) => movie.id === +movieId);

    if (movieIndex < 0) {
        return res.status(404).json({
            status: 'failed',
            message: 'Movie not found',
        });
    }

    res.movieIndex = movieIndex;

    next();
};

export const validateBodyMiddleware = (req, res, next) => {
    if (!req.body.name || !req.body.releaseYear) {
        return res.status(400).json({
            status: 'failed',
            message: 'Not a valid movie data',
        });
    }

    next();
};

// Route handler functions

export const getAllMovies = (req, res) => {
    res.status(200).json({
        status: 'success',
        count: movies.length,
        data: { movies },
    });
};

export const getMovieById = (req, res) => {
    const searchedMovie = movies[res.movieIndex];

    res.status(200).json({
        status: 'success',
        data: {
            movie: searchedMovie,
        },
    });
};

export const createMovie = (req, res) => {
    const newMovieId = movies.length ? movies[movies.length - 1].id + 1 : 1;
    const newMovie = { ...req.body, id: newMovieId };
    movies.push(newMovie);

    fs.writeFile(FILE_PATH, JSON.stringify(movies), () => {
        res.status(201).json({
            status: 'success',
            data: { movie: newMovie },
        });
    });
};

export const updateMovie = (req, res) => {
    const movieToUpdate = movies[res.movieIndex];

    // update movie
    const updatedMovie = { ...movieToUpdate, ...req.body };
    movies[res.movieIndex] = updatedMovie;

    fs.writeFile(FILE_PATH, JSON.stringify(movies), () => {
        res.status(200).json({
            status: 'success',
            data: {
                movie: updatedMovie,
            },
        });
    });
};

export const deleteMovie = (req, res) => {
    // delete movie
    movies.splice(res.movieIndex, 1);

    fs.writeFile(FILE_PATH, JSON.stringify(movies), () => {
        res.status(204).json({
            status: 'success',
            data: { movies: null },
        });
    });
};
