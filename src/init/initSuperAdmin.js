const User = require('../models/user.model');
const env = require('../config/env');

async function createSuperAdmin() {
    const { SUPER_ADMIN_EMAIL, SUPER_ADMIN_PASSWORD} = env;
    if (!SUPER_ADMIN_EMAIL || !SUPER_ADMIN_PASSWORD) {
        console.error('Missing super-admin-email or super-admin-password in .env');
        return;
    }

    const existing = await User.findOne({ where: { email: SUPER_ADMIN_EMAIL } });
    if (!existing) {
        await User.create({ email: SUPER_ADMIN_EMAIL, password: SUPER_ADMIN_PASSWORD, role: 'SUPER_ADMIN' });
        console.log('Super admin user created');
    } else {
        console.log('Super admin user already exists');
    }
}

module.exports = createSuperAdmin;
