const eventRepo = require('../repositories/event.repository');
const AppError = require('../errors/AppError.js');
class EventService {
    async getAll() {
        return await eventRepo.findAll();
    }
    async create({title, description, date, time}) {
        return await eventRepo.create({title,description,date,time});
    } 
    async delete(id) {
        if (!id) throw new AppError('Event ID is required', 400);
        const deleted = await eventRepo.delete(id);
        if (!deleted) throw new AppError('Event not found', 404);
    }
}

module.exports = new EventService();
