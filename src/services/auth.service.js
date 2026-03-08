const jwt = require('jsonwebtoken');
const userRepo = require('../repositories/user.repository');
const env = require('../config/env');
const bcrypt = require('bcryptjs');
const AppError = require('../errors/AppError.js');

const generateAccessToken = (user) => {
    return jwt.sign(
        {id: user.id, email: user.email, role: user.role, tokenVersion: user.tokenVersion}, 
        env.JWT_SECRET, 
        {expiresIn: '10m'}
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        {id: user.id, email: user.email, role: user.role}, 
        env.JWT_REFRESH_SECRET, 
        {expiresIn: '7d'}
    );
};

class AuthService {
    async login({email, password}) {
        const user = await userRepo.findByEmail(email);
        if (!user) throw new AppError('Invalid credentials', 401);

        const isMatch = await user.matchPassword(password);
        if (!isMatch) throw new AppError('Invalid credentials', 401);

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        user.refreshToken = await bcrypt.hash(refreshToken, 10);
        await user.save();
        return { accessToken, refreshToken, role: user.role };
    }

    async refreshToken({refreshToken}) {
        if(!refreshToken) throw new AppError('Refresh token is required', 401);
        const payload = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET);
        const user = await userRepo.findByEmail(payload.email);
        if(!user || !refreshToken) throw new AppError('Invalid or expired refresh token', 401);
        const isMatch = await bcrypt.compare(refreshToken, user.refreshToken);
        if(!isMatch) throw new AppError('Invalid or expired refresh token',401);
        const accessToken = generateAccessToken(user);
        return { accessToken };
    }

    async register({email, password, role}) {
        const existing = await userRepo.findByEmail(email);
        if (existing) throw new AppError('User already exists', 409);
        const user = await userRepo.create({email, password, role: role || 'ADMIN'});
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        const safeUser = { email: user.email, role: user.role };
        return {user:safeUser,accessToken,refreshToken};
    }

    async listUsers() {
        return await userRepo.getAll();
    }

    async logout(userId) {
        const user = await userRepo.findById(userId);
        if (!user) return;
        user.refreshToken = null;
        user.tokenVersion += 1;
        await user.save();
    }
}

module.exports = new AuthService();
