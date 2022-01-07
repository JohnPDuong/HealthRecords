import pool from '../db.js';
import { 
    encryptPassword
} from '../helper/password.js';

export const registration_validate_email = async (req, res) => {
    try {
        const { email } = req.body;
        const results = await pool.query("SELECT * FROM Clients WHERE email = $1;", [ email ]);

        let resVal = { result: true };

        if (results.rowCount){
            resVal.result = false;
        }
        
        res.json(resVal);
    } catch (err) {
        console.error(err.message);
    }
};

export const registration_add_user = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;
        const results = await pool.query("SELECT * FROM Clients WHERE email = $1;", [ email ]);

        let resVal = { result: true };

        if (results.rowCount) {
            resVal.result = false;
        } else {
            const { hashedPw, salt } = encryptPassword(password);

            await pool.query("INSERT INTO Clients (fname, lname, email, password, salt) VALUES ($1, $2, $3, $4, $5);",
                            [ fname, lname, email, hashedPw, salt ]);
        }

        res.json(resVal);
    } catch(err) {
        console.error(err.message);
    }
};