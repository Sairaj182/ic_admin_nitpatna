const noticeService = require('../services/notice.service');

exports.getNotices = async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page-1)*limit;

    const {notices,total} = await noticeService.getAll(limit, offset);
    res.status(200).json({
        success: true,
        currentPage: page, 
        totalPages: Math.ceil(total/limit),
        totalNotices: total,
        notices,
    });
};  

exports.createNotice = async (req,res,next)=>{
    const {content} = req.body;
    const notice = await noticeService.create(content);
    res.status(201).json({success: true,message:'Notice created',notice});
};

exports.deleteNotice = async (req, res, next) => {
    const {id} = req.params;
    const message = await noticeService.delete(id);
    res.status(200).json({success: true,message});
};
