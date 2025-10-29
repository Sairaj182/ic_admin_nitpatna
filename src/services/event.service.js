const eventRepo = require('../repositories/event.repository');

class EventService {
    async getAll() {
        return await eventRepo.findAll();
    }
    async create({title, description, date, time}) {
        if(!title || !description || !date || !time) throw new Error('Missing fields');
        return await eventRepo.create({title,description,date,time});
    } 
    async delete(id) {
        if (!id) throw new Error('Event ID is required');
        if (!(await eventRepo.findById(id))) throw new Error('Event not found');
        await eventRepo.delete(id);
        return { message: 'Event deleted successfully' };
    }
}

module.exports = new EventService();
