const Notice = require('../models/notice.model');

class NoticeRepository {
    async findAll(limit, offset){
        return await Notice.findAll({
            order:[['createdAt','DESC']],
            limit,
            offset           
        });
    }

    async countAll(){
        return await Notice.count();
    }

    async create(content){
        return await Notice.create({content});
    }

    async findById(noticeId){
        return await Notice.findOne({where:{id:noticeId}});
    }

    async delete(noticeId){
        return await Notice.destroy({where: {id:noticeId}});
    }
}

module.exports = new NoticeRepository();
