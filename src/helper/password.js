import crypto from 'crypto';

export const encryptPassword = (unhashedpw) => {
    const hashedPw = crypto.pbkdf2Sync(unhashedpw, crypto.randomBytes(128).toString('base64'), 10000, 64, "sha512");
    const password = hashedPw.toString("base64");
    const passwordObj = { password, salt };

    return passwordObj;
};