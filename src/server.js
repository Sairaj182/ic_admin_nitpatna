const { sequelize } = require('./config/db');
const env = require('./config/env');
const createAdmin = require('./init/initSuperAdmin');
const app = require('./app');

sequelize.sync().then(async () => {
  await createAdmin();
  app.listen(env.PORT, () => console.log(`Server running on port ${env.PORT}`));
});
