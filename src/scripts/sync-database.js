const { sync } = require('touch');
const {sequelize} = require('../config/db');
require('../models/event.model');
require('../models/ideaMail.model');
require('../models/notice.model');
require('../models/user.model');

exports.syncAllTables = async () => {
    try {
        await sequelize.sync({ force: true });
        
        console.log('Database synchronized successfully');        
        process.exit(0);
    }catch(err){
        console.error('Error syncing database:', err);
        process.exit(1);
    }
}
