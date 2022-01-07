import pool from '../db.js';
import { 
    encryptPassword,
    decryptPassword
} from '../helper/password.js';

export const validateUserByEmail = async (req, res) => {
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

export const addUserByRegistration = async (req, res) => {
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

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const emailResults = await pool.query("SELECT * FROM Clients WHERE email = $1", [ email ]);

        let resVal = { result: true };

        if (emailResults.rowCount) {
            const compPw = decryptPassword(password, emailResults.rows[0].salt)

            if (compPw != emailResults.rows[0].password) {
                resVal.result = false;
            }
        } else {
            resVal.result = false;
        }

        res.json(resVal);
    } catch(err) {
        console.error(err.message);
    }
}