
# 📸 Instagram Backend Clone (In Progress) 🚧

## 🌐 Overview
This project aims to replicate the core functionality of Instagram's backend using Node.js and PostgreSQL. 🛠 The project is currently under development. 🔧

## 🌟 Features (Planned)
- [x] 👤 User Signup
- [x] 🛡️ User Authentication (Sessions & Cookies)
- [ ] 📤 Image Uploads (Multer)
- [ ] 🛎️ Real-time Notifications (WebSockets)
- [ ] ✏️ Post CRUD operations
- [ ] 🤝 User Follow/Unfollow Mechanism
- [ ] 💬 Comments and 👍 Likes
- [ ] 📰 Feed Generation Algorithm
- [ ] 📜 Pagination and Sorting

## 📚 Tech Stack
- **Node.js**: 🚀 Server-side logic
- **Express**: 🕸️ Web application framework
- **PostgreSQL**: 🗃️ Database
- **Raw SQL**: ❌ No ORM
- **Socket.io**: 🌐 Real-time updates (Planned)
- **Multer**: 📦 File uploads (Planned)
- **Redis**: 🎯 Caching (Planned)

## 🚀 Installation & Setup

### 📋 Prerequisites

- **Node.js**: Make sure Node.js is installed. Visit [Node.js](https://nodejs.org/en/download/) for instructions.
- **PostgreSQL**: PostgreSQL should be installed and running. Check out [PostgreSQL](https://www.postgresql.org/download/) for guidelines.

### 🛠️ Steps

1. **👯‍♀️ Clone the Repository**
    ```bash
    git clone https://github.com/hazemmosadd/Instagram-Clone-Backend.git
    ```

2. **📂 Navigate to the Directory**
    ```bash
    cd Instagram-Clone-Backend
    ```

3. **📦 Install Dependencies**
    ```bash
    npm install
    ```

4. **🔒 Create `.env` File**
    Create a `.env` file in the root directory and populate it with your database and secret information.
    ```makefile
    DB_HOST=....
    DB_PORT=...
    DB_USER=...
    DB_PASSWORD=...
    DB_NAME=...
    SERVER_PORT=...
    ```

5. **🔥 Start the Server**
    ```bash
    node app.js
    ```

---

