const eventService = require('../services/event.service.js');

exports.getAllEvents = async (req,res,next)=>{
    const events = await eventService.getAll();
    res.status(200).json({success: true,events});
};

exports.createEvent = async (req,res,next)=>{
    const {title,description,date,time} = req.body;
    const event = await eventService.create({title,description,date,time});
    res.status(201).json({success: true,event}); 
};

exports.deleteEvent = async (req,res,next)=>{
    const {id} = req.params;
    const event = await eventService.delete(id);
    res.status(200).json({success: true,event});
};
