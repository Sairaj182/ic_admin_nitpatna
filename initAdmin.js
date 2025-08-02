const bcrypt = require('bcryptjs');
const User = require('./models/user');

async function createAdminUser() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error("⚠ Admin credentials are missing in .env file.");
    return;
  }

  const existingAdmin = await User.findOne({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await User.create({
      email: adminEmail,
      password: hashedPassword
    });
    console.log("✅ Admin user created successfully.");
  } else {
    console.log("✅ Admin user already exists.");
  }
}

module.exports = createAdminUser;