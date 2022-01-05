import pool from '../db.js';

export const validateUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const results = await pool.query("SELECT * FROM Clients WHERE Email = $1;", [ email ]);

        let resVal = { result: true };

        if (results.rows.length){
            resVal.result = false;
        }
        
        res.json(resVal);
    } catch (err) {
        console.error(err.message);
    }
};

export const addUserByRegistration = async (req, res) => {
    try {
        const { fname, lname, email, password, salt } = req.body;
        console.log(req.body);

        let resVal = { message: "YAY" };

        await pool.query("INSERT INTO Clients (fname, lname, email, password, salt) VALUES ($1, $2, $3, $4, $5);",
                        [ fname, lname, email, password, salt ]);

        res.json(resVal);
    } catch(err) {
        console.error(err.message);
    }
}