# IC-NITP Admin Backend (Sequelize + MySQL)

This project is a *Node.js Express backend* for IC-NITP Admin, using *Sequelize ORM with MySQL* for CRUD operations and admin management, supporting smooth API consumption for your React frontend (or other clients).

---

## 📂 Project Structure


Backend/
.
├── config/
│   └── db.js                 # Database connection and Sequelize initialization
├── controllers/
│   └── authController.js     # Handles authentication-related logic
├── middleware/
│   └── authMiddleware.js     # Middleware for authentication checks
├── models/                   # Defines database schemas (Sequelize models)
│   ├── gallery.js
│   ├── incubation.js
│   ├── notice.js
│   ├── talk.js
│   └── user.js
├── node_modules/             # Contains all installed Node.js packages and dependencies
├── routes/                   # Defines API endpoints and links them to controllers
│   ├── authRoutes.js
│   ├── galleryRoutes.js
│   ├── incubationRoutes.js
│   ├── noticeRoutes.js
│   └── talkRoutes.js
├── .env                      # Environment variables for configuration (e.g., database credentials, ports)
├── app.js                    # Main application entry point, sets up Express, middleware, and routes
├── package-lock.json         # Records the exact dependency tree used in the project
└── package.json              # Defines project metadata and lists all dependencies


---

## ⚙ Setup Instructions

### 1️⃣ Clone the repository

bash
git clone <repo_link>
cd Backend


### 2️⃣ Install dependencies

bash
npm install


### 3️⃣ MySQL Setup

* Install MySQL locally.
* Open *MySQL Workbench*.
* Create a database:

sql
CREATE DATABASE ic_nitp_admin;


* Note your MySQL credentials.

### 4️⃣ Configure .env

Create a .env file:


DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=ic_nitp_admin
DB_DIALECT=mysql
DB_PORT=3306
PORT=5000


### 5️⃣ Run the server

bash
node app.js


or (for auto-restart on save)

bash
npx nodemon app.js


If everything is correct, you should see:


Server running on port 5000


---
