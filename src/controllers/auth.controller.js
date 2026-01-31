const authService = require('../services/auth.service');

exports.login = async (req, res, next) => {
    try{
        const result = await authService.login(req.body);
        res.status(200).json({message: 'Login successful', ...result});
    }catch(err){
        next(err);
    }
};

exports.register = async (req,res,next) => {
    try{
        const result = await authService.register(req.body);
        res.status(201).json({message: 'User registered successfully', ...result});
    }catch(err){
        next(err);
    }
};

exports.listUsers = async (req,res,next) => {
    try{
        const result = await authService.listUsers();
        res.status(200).json({message: 'Users listed successfully', ...result});
    }catch(err){
        next(err);
    }
};

