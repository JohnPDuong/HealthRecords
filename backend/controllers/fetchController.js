import pool from '../db.js';
import fetch from 'node-fetch';

const port = process.env.AUTH_SERVER_PORT;

export const fetch_first_name = async (req, res) => {
    const authHeader = req.headers["authorization"];
    
    await fetch(`http://localhost:3002/api/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": authHeader,
        }
    })
    .then(res => res.json())
    .then(async resJson => {
        //res.json(resJson.id);
        const results = await pool.query("SELECT fname FROM Clients WHERE Clients.ClientID = $1;", [ resJson.id ]);

        res.json(results.rows[0].fname);
    })
    .catch(error => console.log("Auth failed: " + error.message));
}