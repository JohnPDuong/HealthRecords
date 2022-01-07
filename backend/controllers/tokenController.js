import pool from '../db.js';
import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

export const token_authenticate = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

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
}

export const token_generate_access = (user) => {
    return jwt.sign({ id: user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}