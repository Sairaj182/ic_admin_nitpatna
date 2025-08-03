const db = require('../db');
const Event = db.Event;

const createEvent = async (req, res) => {
  try {
    const { description, date, time } = req.body;

    const newEvent = await Event.create({ description, date, time });

    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error('Create event error:', error);
    res.status(500).json({ message: 'Failed to create event', error: error.message });
  }
};

async function getEvents(req, res) {
  try {
    const events = await Event.findAll({
      order: [["date", "ASC"], ["time", "ASC"]]
    });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch events", error: err });
  }
}

async function deleteEvents(req, res) {
  try{
    const {description} = req.body;

    if(!description) {
      return res.status(400).json({message: "Description is required"});
    }

    const event = await Event.findOne({where: {description}});

    if(!event) return res.status(404).json({message: "Event not found"});

    await event.destroy();
    res.status(200).json({message: "Event deleted successfully"});
  } catch(err) {
    console.error(err);
    res.status(500).json({message: "Failed to delete the event"});
  }
}

module.exports = { createEvent, getEvents, deleteEvents };
