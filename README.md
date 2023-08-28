# Instagram Backend Clone (In Progress)

## Overview
This project aims to replicate the core functionality of Instagram's backend using Node.js and PostgreSQL. The project is currently under development.

## Features (Planned)
- [x] User Signup
- [x] User Authentication using sessions and cookies
- [ ] Image Uploads via Multer
- [ ] Real-time notifications using WebSockets
- [ ] Post CRUD operations
- [ ] User Follow/Unfollow mechanism
- [ ] Comments and Likes
- [ ] Feed Generation Algorithm
- [ ] Pagination and Sorting

## Tech Stack
- **Node.js**: Server-side logic
- **Express**: Web application framework
- **PostgreSQL**: Database
- **Raw SQL**: will not use ORM for this app
- **Socket.io**: Real-time updates (Planned)
- **Multer**: File uploads (Planned)
- **Redis**: Caching (Planned)

## Installation & Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. Visit [Node.js](https://nodejs.org/en/download/) for installation instructions.
- **PostgreSQL**: Ensure you have PostgreSQL installed and running. Visit [PostgreSQL](https://www.postgresql.org/download/) for installation instructions.

### Steps

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your_username/instagram-backend-clone.git
    ```

2. **Navigate to the Directory**
    ```bash
    cd instagram-backend-clone
    ```

3. **Install Dependencies**
    ```bash
    npm install
    ```

4. **Create `.env` File**
    Create a `.env` file in the root directory and populate it with your database and secret information.
    ```makefile
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    SECRET=your_jwt_secret
    ```

5. **Start the Server**
    ```bash
    npm start
    ```

