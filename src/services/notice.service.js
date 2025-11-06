const noticeRepo = require('../repositories/notice.repository');

class NoticeService {

    async getAll(limit, offset){    
            const [notices, total] = await Promise.all([
            noticeRepo.findAll(limit, offset),
            noticeRepo.countAll(),
            ])
            return {notices, total};
    }           

    async create(content){
        if(!content) throw new Error('Content required');
        return await noticeRepo.create(content);
    }

    async delete(id){
        const notice = await noticeRepo.findById(id);
        if(!notice) throw new Error('Notice not found');
        await noticeRepo.delete(id);
        return 'Notice deleted successfully';
    }
}

module.exports = new NoticeService();
