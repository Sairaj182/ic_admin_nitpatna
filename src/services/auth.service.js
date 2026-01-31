const jwt = require('jsonwebtoken');
const userRepo = require('../repositories/user.repository');
const env = require('../config/env');

const generateToken = (user) => {
    return jwt.sign(
        {id: user.id, email: user.email, role: user.role}, 
        env.JWT_SECRET, 
        {expiresIn: '1d'}
    );
};

class AuthService {
    async login({email, password}) {
        const user = await userRepo.findByEmail(email);
        if (!user) throw new Error('User not found or invalid credentials');

        const isMatch = await user.matchPassword(password);
        if (!isMatch) throw new Error('User not found or invalid credentials');

        const token = generateToken(user);
        return { token, role: user.role };
    }

    async register({email, password, role}) {
        const existing = await userRepo.findByEmail(email);
        if (existing) throw new Error('User already exists');
        const user = await userRepo.create({email, password, role: role || 'ADMIN'});
        const token = generateToken(user);
        const safeUser = { email: user.email, role: user.role };
        return {user:safeUser,token};
    }

    async listUsers() {
        return await userRepo.getAll();
    }
}

module.exports = new AuthService();
