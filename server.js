import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import app from './app.js';

const PORT = 8000;

console.log(app.get('env'));

app.listen(PORT, () =>
    console.log(`Server started and listening on port ${PORT}`)
);
