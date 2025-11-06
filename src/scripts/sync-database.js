const {sequelize} = require('../config/db');
const Event = require('../models/event.model');
const IdeaMail = require('../models/ideaMail.model');
const Notice = require('../models/notice.model');
const User = require('../models/user.model');

async function syncAllTables() {
    try {
        await sequelize.sync({ force: true });
        
        console.log('Database synchronized successfully');        
        process.exit(0);
    }catch(err){
        console.error('Error syncing database:', err);
        process.exit(1);
    }
}
syncAllTables();