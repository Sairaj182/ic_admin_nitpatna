# IC-NITP Admin Backend (Sequelize + MySQL)

This project is a *Node.js Express backend* for IC-NITP Admin, using *Sequelize ORM with MySQL* for CRUD operations and admin management, supporting smooth API consumption for your React frontend (or other clients).

---

## 📂 Project Structure


Backend/
├── config/
│   └── db.js                  # Sequelize initialization
├── controllers/
│   └── galleryController.js   # Gallery controller
├── middlewares/
├── models/
│   ├── Admin.js
│   ├── events.js
│   ├── gallery.js
│   ├── notice.js
│   └── index.js               # Model aggregator
├── routes/
│   ├── authRoutes.js
│   └── galleryRoutes.js
├── .env                        # Environment variables
├── app.js                      # Entry point
├── package.json
└── server.js                   # (if applicable)


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
