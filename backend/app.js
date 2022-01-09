import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {
    registration_validate_email,
    registration_add_user,
}
from './controllers/registrationController.js';
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: `${__dirname}/./../.env` });

//Middleware

const app = express();
const port = process.env.ENDPOINT_PORT;

var corsOptions = {
    origin: `http://localhost:3000`
}

app.use(cors(corsOptions));
app.use(express.json());

//Registration
app.post("/api/registration", registration_validate_email);
app.put("/api/registration", registration_add_user);

app.listen(port, () => console.log(`Listening on port ${ port }!`));