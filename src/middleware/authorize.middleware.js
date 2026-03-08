exports.authorize = (roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            throw new AppError('Unauthorized',401);
        }
        next();
    };
};
