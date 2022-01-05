import express from 'express';
import cors from 'cors';
import pool from './db.js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import {
    validateUserByEmail,
    addUserByRegistration,
}
from './controllers/controllerUser.js';

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

//Routes

app.use("/validateuser", validateUserByEmail)
app.use("/adduserbyregistration", addUserByRegistration)

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