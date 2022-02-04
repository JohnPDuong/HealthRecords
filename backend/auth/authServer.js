import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { 
    token_authenticate_access,
    token_generate_refresh,
    token_delete_refresh
} from '../controllers/tokenController.js';
import { 
    login_authenticate_user 
} from '../controllers/loginController.js';


const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: `${__dirname}/./../.env` });

const app = express();
const port = process.env.AUTH_SERVER_PORT;

var corsOptions = {
    origin: `http://localhost:3000`
}

app.use(cors(corsOptions));
app.use(express.json());

//Token
app.get("/api/token", token_authenticate_access);
app.put("/api/token", token_generate_refresh);
app.delete("/api/token", token_delete_refresh);

//Login
app.post("/api/login", login_authenticate_user);


app.listen(port, () => console.log(`Auth server listening on port ${ port }!`));