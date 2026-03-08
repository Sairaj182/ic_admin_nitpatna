const authService = require('../services/auth.service');
const env = require('../config/env');

exports.login = async (req, res, next) => {
    const result = await authService.login(req.body);
    res.cookie('refreshToken', result.refreshToken, env.COOKIE_OPTIONS);
    res.status(200).json({success: true, message: 'Login successful', accessToken: result.accessToken});
};

exports.refreshToken = async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    const result = await authService.refreshToken({refreshToken});
    res.status(200).json({success:true, message: 'Token refreshed successfully', accessToken: result.accessToken});
};

exports.register = async (req,res,next) => {
    const result = await authService.register(req.body);
    res.status(201).json({success: true, message: 'User registered successfully', ...result});
};

exports.listUsers = async (req,res,next) => {
    const result = await authService.listUsers();
    res.status(200).json({success: true, message: 'Users listed successfully', ...result});
};

exports.logout = async (req, res, next) => {
    await authService.logout(req.user.id);
    res.clearCookie('refreshToken', env.COOKIE_OPTIONS);
    res.status(200).json({success: true, message: 'Logout successful'});
};