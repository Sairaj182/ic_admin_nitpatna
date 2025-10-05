const IdeaMail = require("./ideaMail");

async function storeIdeaMail(req, res) {
  console.log("Received data:", req.body);
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const mail = await IdeaMail.create({ name, email, subject, message });
    res.status(201).json({ message: "Mail stored successfully", mail });
  } catch (err) {
    console.error("Error storing mail:", err);
    res.status(500).json({ message: "Failed to store mail", error: err });
  }
}

async function getIdeaMails(req, res) {
  try {
    const mails = await IdeaMail.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json(mails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch mails" });
  }
}

module.exports = { storeIdeaMail, getIdeaMails };
