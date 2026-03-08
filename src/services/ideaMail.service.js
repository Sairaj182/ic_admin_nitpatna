const ideaMailRepo = require('../repositories/ideaMail.repository');
const AppError = require('../errors/AppError.js');
class IdeaMailService {
    async create({name, email, subject, message, phone}){
        if (!name || !email || !subject || !message || !phone){
            throw new AppError('All fields required',400);
        }    
        return await ideaMailRepo.create({name, email, subject, message, phone});
    }

    async getAll(limit, offset){
        const [ideaMails, total] = await Promise.all([
            ideaMailRepo.findAll(limit,offset),
            ideaMailRepo.countAll(),
        ])
        return {ideaMails, total};
    }
}

module.exports = new IdeaMailService();
