import express from 'express';
import cors from 'cors';
import pool from './db.js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

//Create a client

app.post("/addclient", async(req, res) => {
    try {
        const { fname, lname } = req.body;
        const newClient = await pool.query("INSERT INTO Clients (FName, LName) VALUES ($1, $2) RETURNING *;", 
                                            [fname, lname]);

        res.json(newClient.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a client using email

app.post("/getclient", async(req, res) => {
    try {
        const { email } = req.body;
        console.log(email);
        res.send({ email });
    } catch (err) {
        console.error(err.message);
    }
});

//Get all clients

app.get("/getallclients", async(req, res) => {
    try {
        const allClients = await pool.query("SELECT * FROM Clients;");

        res.json(allClients.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//Update a client

app.post("/updateclient", async(req, res) => {
    try {

    } catch (err) {
        console.error(err.message);
    }
});

//Delete a client

app.post("/delclient", async(req, res) => {
    try {

    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));