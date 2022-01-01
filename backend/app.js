import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

var corsOptions = {
    origin: `http://localhost:${port}`
}

app.use(cors(corsOptions));

app.listen(port, () => console.log(`Listening on port ${port}!`));