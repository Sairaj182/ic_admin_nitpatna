const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const routes = require('./routes');
const errorHandler = require('./middleware/error.middleware');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cors({ 
        origin: env.ALLOWED_ORIGINS, 
        credentials: true 
    })
);
app.use(express.json());
app.use(cookieParser());
app.use('/api', routes);

app.use('/',(req, res)=>{
    res.json({
        status: 'ok',
        message: 'IC backend running',
        timestamp: new Date().toLocaleString()
    });
});

app.use(errorHandler);

module.exports = app;
