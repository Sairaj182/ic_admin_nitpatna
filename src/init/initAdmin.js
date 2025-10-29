const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const env = require('../config/env');

async function createAdmin() {
    const { ADMIN_EMAIL, ADMIN_PASSWORD } = env;
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
        console.error('Missing admin-email or admin-password in .env');
        return;
    }

    const existing = await User.findOne({ where: { email: ADMIN_EMAIL } });
    if (!existing) {
        const hash = await bcrypt.hash(ADMIN_PASSWORD, 10);
        await User.create({ email: ADMIN_EMAIL, password: hash });
        console.log('Admin user created');
    } else {
        console.log('Admin user already exists');
    }
}

module.exports = createAdmin;
