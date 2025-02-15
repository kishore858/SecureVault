const User = require('../models/User');
const Login = require('../models/Login');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password, websiteUrl } = req.body;
        let user = await User.findOne({ email });

        if (!user) return res.status(400).json({ msg: 'User not registered' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        await new Login({ userId: user.id, websiteUrl }).save();
        res.json({ token });
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
