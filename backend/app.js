import express from 'express';
import cors from 'cors';
import pool from './db.js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {
    registration_validate_email,
    registration_add_user,
}
from './controllers/registrationController.js';
import { 
    login_authenticate_user 
} from './controllers/loginController.js';

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

//Login
app.post("/api/login", login_authenticate_user);

app.get("/getallclients", async(req, res) => {
    try {
        const allClients = await pool.query("SELECT * FROM Clients;");

        res.json(allClients.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/updateclient", async(req, res) => {
    try {

    } catch (err) {
        console.error(err.message);
    }
});

app.post("/delclient", async(req, res) => {
    try {

    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));