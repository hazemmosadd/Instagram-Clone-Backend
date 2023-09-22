

# 📸 Instagram Clone (Backend In Progress) 🚧

![Status](https://img.shields.io/badge/status-in--progress-yellow)
![Language](https://img.shields.io/badge/language-JavaScript%20(Node.js)-brightgreen)
![Database](https://img.shields.io/badge/database-PostgreSQL-blue)
![License](https://img.shields.io/badge/license-MIT-green)

> 🌟 **Note**: This repository contains the backend code. For the frontend React application, please visit [Instagram-Clone-Frontend](https://github.com/hazemmosadd/Instagram-Clone-Frontend).

## 🌐 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [License](#-license)

## 🌐 Overview
This project aims to replicate the core functionalities of Instagram's backend. It serves as a comprehensive guide for understanding how the backend of a social media platform like Instagram operates. Whether you're a beginner looking to grasp backend development or an experienced developer seeking a refresher, this project has something to offer.

## 🌟 Features
- [x] 👤 User Creation
- [x] 🛡️ User Sign-in
- [x] 📌 Retrieval of Key User Data (Avatar, Followers, Posts, Following List)
- [x] 🗂️ Post Retrieval Based on Profile Privacy (Public, Private)
- [ ] 📸 Image Uploads
- [ ] 🛎️ Real-time Notifications
- [ ] ✏️ Post CRUD Operations
- [ ] 🤝 User Follow/Unfollow Mechanism
- [ ] 💬 Comments and 👍 Likes
- [ ] 📰 Feed Generation Algorithm
- [ ] 📜 Pagination and Sorting
- [ ] 🎯 Caching with Redis

## 🚀 Tech Stack
- **JavaScript (Node.js)**: Server-side Logic
- **Express**: Web Framework
- **PostgreSQL**: Database
- **Raw SQL**: No ORM
- **bcrypt**: Password Hashing
- **Joi**: Data Validation

## 📁 Project Structure
- **config**: Contains configuration files such as database connection settings and HTTP status codes.
- **controllers**: Holds the logic for handling client requests.
- **middlewares**: Incorporates middleware functions for tasks like session validation.
- **models**: Features the data models and database queries.
- **routes**: Manages the application routes.
- **services**: Contains the business logic utilized in controllers.
- **utils**: Utility functions for tasks like password hashing and data validation.

> 📝 **Note**: The project is still under development. More features and improvements are coming soon.

## 🛠️ Installation & Setup

### 📋 Prerequisites
- **JavaScript (Node.js)**: [Download and Install](https://nodejs.org/en/download/)
- **PostgreSQL**: [Download and Install](https://www.postgresql.org/download/)

### 🧰 Steps
1. **Clone the Repository**
    ```bash
    git clone https://github.com/your_username/Instagram-Clone-Backend.git
    ```
2. **Navigate to the Directory**
    ```bash
    cd Instagram-Clone-Backend
    ```
3. **Install Dependencies**
    ```bash
    npm install
    ```
4. **Create `.env` File**
    ```makefile
    # Populate with your database and secret information
    DB_HOST=....
    DB_PORT=...
    ```
5. **Start the Server**
    ```bash
    node app.js
    ```

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.
