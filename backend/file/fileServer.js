import express from 'express';
import multer from 'multer';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { uploadImage } from '../controllers/fileUploadRequestController.js';


const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: `${__dirname}/./../.env` });

const app = express();
const port = process.env.FILE_SERVER_PORT;

var corsOptions = {
    origin: `http://localhost:3000`
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use(cors(corsOptions));

app.post("/api/upload-image", upload.single("file"), uploadImage);

app.listen(port, () => console.log(`File server listening on port ${ port }!`));