const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
// const galleryRoutes = require('./routes/galleryRoutes');
// const talkRoutes = require('./routes/talkRoutes');
// const noticeRoutes = require('./routes/noticeRoutes');
// const incubationRoutes = require('./routes/incubationRoutes');
require('dotenv').config();

const createAdminUser = require('./initAdmin'); // auto-creates admin

const app = express();


app.use(cors({
  origin: 'https://incubation-center-nit-patna.vercel.app/', 
  credentials: true
}));

app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRoutes);
// app.use('/api/gallery', galleryRoutes);
// app.use('/api/talks', talkRoutes);
// app.use('/api/notices', noticeRoutes);
// app.use('/api/incubations', incubationRoutes);


app.get('/', (req, res) => {
  res.send('IC-NITP Protected CRUD Backend Running...');
});

sequelize.sync().then(() => {
  createAdminUser(); // 

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('❌ Database sync failed:', err);
});



