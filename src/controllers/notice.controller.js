const noticeService = require('../services/notice.service');

exports.getNotices = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const offset = (page-1)*limit;

        const {notices,total} = await noticeService.getAll(limit, offset);
        res.status(200).json({
            currentPage: page, 
            totalPages: Math.ceil(total/limit),
            totalNotices: total,
            notices,
        });
    } catch (err) {
        next(err);
    }
};  

exports.createNotice = async (req,res,next)=>{
    try{
        const {content} = req.body;
        const notice = await noticeService.create(content);
        res.status(201).json({message:'Notice created',notice});
    }catch(err){
        next(err);
    }
};

exports.deleteNotice = async (req, res, next) => {
    try {
        const {id} = req.params;
        const message = await noticeService.delete(id);
        res.status(200).json({message});
    } catch (err) {
        next(err);
    }
};
