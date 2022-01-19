import env from 'dotenv';
import fetch from 'node-fetch';

env.config();

const authPort = process.env.AUTH_SERVER_PORT;
const filePort = process.env.FILE_SERVER_PORT;

export const uploadRequest = async (req, res) => {
    res.json(req);
    //const authHeader = req.headers["authorization"];

    // await fetch(`http://localhost:${ authPort }/api/token`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": authHeader,
    //     }
    // })
    // .then(res => res.json())
    // .then(resJson => {
    //     if (resJson.id) {
    //         if (req.files.mimetype)
    //         {
    //             console.log(req.files.mimetype);
    //         }

    //         fetch(`http://localhost:${ filePort }/api/upload-image`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "image/" + req.files.mimetype,
    //             },
    //             body: req.body,
    //         });

    //         req.json("Success");
    //     } else {
    //         res.sendStatus(403);
    //     }
    // })
    // .catch(error => console.log("Auth failed: " + error.message));
}

export const uploadImage = (req, res) => {
    if (req.files) {
        console.log(req.files);
    }
};