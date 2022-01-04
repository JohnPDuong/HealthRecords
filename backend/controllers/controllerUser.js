import pool from '../db.js';

export const validateUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const results = await pool.query("SELECT * FROM Clients WHERE Email = $1;", [ email ]);

        let retVal = { result: true };

        if (results.rows.length){
            retVal.result = false;
        }
        
        res.json(retVal);
    } catch (err) {
        console.error(err.message);
    }
};

export const addUserByRegistration = async (req, res) => {
    try {
        
    } catch(err) {
        console.error(err.message);
    }
}