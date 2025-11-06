const authService = require('../services/auth.service');

exports.login = async (req, res, next) => {
    try{
        const {email,password} = req.body;
        const result = await authService.login(email,password);
        res.status(200).json({message: 'Login successful', ...result});
    }catch(err){
        next(err);
    }
};

exports.register = async (req,res,next) => {
    try{
        const { email, password } = req.body;
        const result = await authService.register(email, password);
        res.status(201).json({message: 'User registered successfully', ...result});
    }catch(err){
        next(err);
    }
};

