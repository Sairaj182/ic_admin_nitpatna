const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};