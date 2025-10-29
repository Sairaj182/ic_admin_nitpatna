const Event = require('../models/event.model');

class EventRepository {
    async findAll() {
        return await Event.findAll({order: [['date','ASC'],['time','ASC']]});
    }
    async create(data) {
        return await Event.create(data);
    }
    async findById(eventId){
        return await Event.findOne({where: {id: eventId}});
    }
    async delete(eventId) {
        return await Event.destroy({where: {id: eventId}});
    }
}

module.exports = new EventRepository();
