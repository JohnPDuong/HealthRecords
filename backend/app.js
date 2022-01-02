import express from 'express';
import cors from 'cors';
import pool from './db.js';

//Middleware

const app = express();
const port = 3001;

var corsOptions = {
    origin: `http://localhost:${port}`
}

app.use(cors(corsOptions));
app.use(express.json());

//Routes

//Create a client

app.post("/client", async(req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a client

//Get all clients

//Update a client

//Delete a client

app.listen(port, () => console.log(`Listening on port ${port}!`));