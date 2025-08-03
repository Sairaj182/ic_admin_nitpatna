const Notice = require('./notice');

async function createNotice(req, res) {
  const { content } = req.body;
  try {
    const notice = await Notice.create({ content });
    res.status(201).json(notice);
  } catch (err) {
    res.status(500).json({ message: "Failed to create notice", error: err });
  }
}

async function getNotices(req, res) {
  try {
    const notices = await Notice.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json(notices);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch notices", error: err });
  }
}

async function deleteNotices(req, res) {
  try{
    const {content} = req.body;

    if(!content) {
      return res.status(400).json({message: "Description is required"});
    }

    const notice = await Notice.findOne({where: {content}});

    if(!notice) return res.status(404).json({message: "Notice not found"});

    await notice.destroy();
    res.status(200).json({message: "Notice deleted successfully"});
  } catch(err) {
    console.error(err);
    res.status(500).json({message: "Failed to delete the notice"});
  }
}

module.exports = { createNotice, getNotices, deleteNotices };
