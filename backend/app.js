import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(express.json());

var corsOptions = {
    origin: `http://localhost:${port}`
}

app.use(cors(corsOptions));

app.listen(port, () => console.log(`Listening on port ${port}!`));