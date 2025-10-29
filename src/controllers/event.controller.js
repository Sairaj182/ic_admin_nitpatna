const eventService = require('../services/event.service.js');

exports.getAllEvents = async (req,res,next)=>{
    try{
        const events = await eventService.getAll();
        res.status(200).json(events);
    }catch(err){
        next(err);
    }
};

exports.createEvent = async (req,res,next)=>{
    try{
        const {title,description,date,time} = req.body;
        const event = await eventService.create({title,description,date,time});
        res.status(201).json(event);
    }catch(err){
        next(err);
    } 
};

exports.deleteEvent = async (req,res,next)=>{
    try{
        const {id} = req.params;
        const event = await eventService.delete(id);
        res.status(200).json(event);
    }catch(err){
        next(err);
    }
};
