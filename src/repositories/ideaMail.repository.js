const IdeaMail = require('../models/ideaMail.model');

class IdeaMailRepository {
    async create(data) {
        return await IdeaMail.create(data);
    }

    async findAll(limit, offset) {
        return await IdeaMail.findAll({
            order: [['createdAt', 'DESC']], 
            limit,
            offset
        });
    }

    async countAll(){
        return await IdeaMail.count();
    }
}

module.exports = new IdeaMailRepository();
