import crypto from 'crypto';

export const encryptPassword = (unhashedpw) => {
    const salt = crypto.randomBytes(128).toString('base64');
    const hashedPw = crypto.pbkdf2Sync(unhashedpw, salt, 10000, 64, "sha512").toString("base64");
    const passwordObj = { hashedPw, salt };

    return passwordObj;
};

export const decryptPassword = (unhashedpw, salt) => {
    const hashedPw = crypto.pbkdf2Sync(unhashedpw, salt, 10000, 64, "sha512");
    const password = hashedPw.toString("base64");
    
    return password;
};

//client side logic? change this to server side for security
//exposed sensitive code