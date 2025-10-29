const ideaMailRepo = require('../repositories/ideaMail.repository');

class IdeaMailService {
    async create({name, email, subject, message}){
        if (!name || !email || !subject || !message){
            throw new Error('All fields required');
        }    
        return await ideaMailRepo.create({name, email, subject, message});
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
