import express from 'express';
import v1Routes from './routes/v1.0/index.js';
import { corsMiddleware } from './middleware/corsMiddleware.js';

const app = express();

// middleware for adding body in response - for POST request
app.use(express.json());
app.use(express.static('./public'));

const loggerService = (req, res, next) => {
    console.log(`Request received to ${req.originalUrl}`);
    next();
};

// CORS headers
app.use(corsMiddleware);

// GET - api/movies
app.use('/api/v1.0', loggerService, v1Routes);
export default app;
