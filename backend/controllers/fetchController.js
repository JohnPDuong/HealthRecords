import pool from '../db.js';
import fetch from 'node-fetch';

const port = process.env.AUTH_SERVER_PORT;

export const fetch_first_name = async (req, res) => {
    const authHeader = req.headers["authorization"];

    await fetch(`http://localhost:${ port }/api/token`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": authHeader,
        }
    })
    .then(res => res.json())
    .then(async resJson => {
        const results = await pool.query("SELECT fname FROM Clients WHERE Clients.ClientID = $1;", [ resJson.id ]);
        
        res.json(results.rows[0].fname);
    })
    .catch(error => console.log("Auth failed: " + error.message));
};

export const fetch_profile = async(req, res) => {
    const authHeader = req.headers["authorization"];

    await fetch(`http://localhost:${ port }/api/token`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": authHeader,
        }
    })
    .then(res => res.json())
    .then(async resJson => {
        const results = await pool.query("SELECT fname, lname, email FROM Clients WHERE Clients.ClientID = $1;", [ resJson.id ]);

        res.json(results.rows[0]);
    })
    .catch(error => console.log("Auth failed: " + error.message));
}