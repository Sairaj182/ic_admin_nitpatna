const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

const galleryRoutes = require("./routes/galleryRoutes");
app.use("/api/gallery", galleryRoutes);

sequelize.sync().then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
});