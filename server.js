import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import app from './app.js';

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, () =>
    console.log(`Server started and listening on port ${PORT}`)
);
