const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userRepo = require('../repositories/user.repository');
const env = require('../config/env');

class AuthService {
    async login(email, password) {
        const user = await userRepo.findByEmail(email);
        if (!user) throw new Error('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid password');

        const token = jwt.sign(
            {id: user.id, email: user.email}, 
            env.JWT_SECRET, 
            {expiresIn: '1d'}
        );
        return {token};
    }

    async register(email, password) {
        const existing = await userRepo.findByEmail(email);
        if (existing) throw new Error('User already exists');
        const user = await userRepo.create({email, password});
        const token = jwt.sign(
            {id: user.id, email: user.email},
            env.JWT_SECRET,
            {expiresIn: '1d'}
        );
        const safeUser = { id: user.id, email: user.email };
        return {user:safeUser,token};
    }
}

module.exports = new AuthService();
