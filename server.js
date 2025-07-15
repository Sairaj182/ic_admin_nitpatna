const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/db');
const Admin = require('./models/Admin');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//Sync database
sequelize.sync()
    .then(() => console.log('Database connrcted and synced'))
    .catch(err => console.log(err));

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});