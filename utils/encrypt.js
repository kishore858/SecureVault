const CryptoJS = require('crypto-js');
require('dotenv').config();

const secretKey = process.env.ENCRYPTION_SECRET;

exports.encryptData = (data) => {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
};

exports.decryptData = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};
