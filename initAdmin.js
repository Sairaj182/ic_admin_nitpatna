const bcrypt = require('bcryptjs');
const User = require('./user');

async function createAdminUser() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error("❌ Admin credentials are missing in .env file.");
    return;
  }

  try {
    const existingAdmin = await User.findOne({ where: { email: adminEmail } });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      await User.create({
        email: adminEmail,
        password: hashedPassword
      });

      console.log("✅ Admin user created successfully.");
    } else {
      console.log("ℹ Admin user already exists.");
    }
  } catch (error) {
    console.error("❌ Failed to create admin user:", error.message);
  }
}

module.exports = createAdminUser;
