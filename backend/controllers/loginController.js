import pool from '../db.js';
import { 
    decryptPassword
} from '../helper/password.js';

export const login_authenticate_user = async (req, res) => {
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