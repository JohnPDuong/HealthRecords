import pool from '../../db/db.js';
import { 
    decryptPassword
} from '../helper/password.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { token_generate_access } from './tokenController.js';


dotenv.config();

export const login_authenticate_user = async (req, res) => {
    try {
        const { email, password } = req.body;
        const emailResults = await pool.query("SELECT * FROM Clients WHERE email = $1", [ email ]);

        let accessToken;
        let refreshToken;

        if (emailResults.rowCount) {
            const compPw = decryptPassword(password, emailResults.rows[0].salt)

            if (compPw == emailResults.rows[0].password) {
                accessToken = token_generate_access(emailResults.rows[0].clientid);
                refreshToken = jwt.sign(emailResults.rows[0].clientid, process.env.REFRESH_TOKEN_SECRET);

                await pool.query("UPDATE Clients SET RefreshToken = ($1) WHERE Clients.ClientID = $2;",
                                    [ refreshToken, emailResults.rows[0].clientid ]);
            }
        }

        res.json( { accessToken: accessToken });
    } catch(err) {
        console.error(err.message);
    }
};