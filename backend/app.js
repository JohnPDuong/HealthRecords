import express from 'express';
import cors from 'cors';
import pool from './db.js';
import * as dotenv from 'dotenv';

dotenv.config();

//Middleware

const app = express();
const port = process.env.ENDPOINT_PORT || 3001;

var corsOptions = {
    origin: `http://localhost:${port}`
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

//Get a client using fname, lname

app.post("/getclient", async(req, res) => {
    try {
        console.log(req.params)
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