import pool from '../db.js';
import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

// Authenticates and return client ID
export const token_authenticate_access = async (req, res) => {
    const token = req.headers["authorization"];

    let resVal;

    if (token != null) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
            if (err == null) {
                const results = await pool.query("SELECT * FROM Clients WHERE Clients.ClientID = $1;", [ user.id ]);
                if (results.rows[0].refreshtoken != null) resVal = user.id;

                res.json({ id: resVal });
            } else {
                res.sendStatus(401);
            }
        });
    } else {
        res.sendStatus(401);
    }
};

// Verifies refresh token validity, generates access token and returns access token
export const token_generate_refresh = async (req, res) => {
    const { refreshToken } = req.body;
    const refreshTokenComp = await pool.query("SELECT * FROM Clients WHERE Clients.RefreshToken = $1;", [ refreshToken ]);

    if (refreshToken == null) res.sendStatus(401);
    if (refreshTokenComp == null) res.sendStatus(403);
    jwt.verify(refreshToken, process, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        const accessToken = token_generate_access({ id: user.clientid });

        res.json({ accessToken: accessToken });
    });
};

// Deletes refresh token
export const token_delete_refresh = async (req, res) => {
    const token = req.headers["authorization"];

    if (token != null) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
            if (err == null) {
                await pool.query("UPDATE Clients SET RefreshToken = NULL WHERE Clients.ClientID = $1;", [ user.id ]);
                res.sendStatus(204);
            } else {
                res.sendStatus(401);
            }
        });
    } else {
        res.sendStatus(401);
    }
};

// Generates access token to access sensitive information
export const token_generate_access = (user) => {
    return jwt.sign({ id: user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1hr" });
};