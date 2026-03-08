const { ZodError } = require('zod');

module.exports = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  if(err instanceof ZodError){
    return res.status(400).json({
      success: false,
      message: 'Invalid input',
      errors: err.issues.map(issue => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
    });
  }

  if(err.name === 'JsonWebTokenError'){
    statusCode = 401;
    message = 'Invalid Token';
  }

  if(err.name === 'TokenExpiredError'){
    statusCode = 401;
    message = 'Token Expired';
  }

  if (err.status === 429) {
    statusCode = 429;
    message = 'Too many requests. Please try again later.';
  }
  
  res.status(statusCode).json({
    success: false,
    message,
  });
}
