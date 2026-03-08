const ideaMailService = require('../services/ideaMail.service.js');

exports.createIdeaMail = async (req, res, next) => {
    const {name, email, subject, message, phone} = req.body;
    const ideaMail = await ideaMailService.create({name, email, subject, message, phone});
    res.status(201).json({
        success: true,
        message: 'Idea mail stored successfully',
        ideaMail,
    });
}

exports.getIdeaMails = async (req,res,next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const {ideaMails,total} = await ideaMailService.getAll(limit, offset);

    res.status(200).json({
        success: true,
        currentPage: page,
        totalPages: Math.ceil(total/limit),
        totalMails: total,
        ideaMails,
    });
};