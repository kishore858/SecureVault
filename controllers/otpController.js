const speakeasy = require('speakeasy');
const twilio = require('twilio');
require('dotenv').config();

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendOTP = async (req, res) => {
    const { phoneNumber } = req.body;
    const otp = speakeasy.totp({
        secret: process.env.JWT_SECRET,
        encoding: 'base32'
    });

    try {
        await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNumber
        });
        res.json({ msg: 'OTP sent successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Error sending OTP' });
    }
};

exports.verifyOTP = (req, res) => {
    const { otp } = req.body;

    const isValid = speakeasy.totp.verify({
        secret: process.env.JWT_SECRET,
        encoding: 'base32',
        token: otp,
        window: 2
    });

    if (isValid) {
        res.json({ msg: 'OTP verified successfully' });
    } else {
        res.status(400).json({ msg: 'Invalid OTP' });
    }
};
