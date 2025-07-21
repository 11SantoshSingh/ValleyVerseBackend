# ValleyVerseBackend
# 🖥️ Uttarakhand Tourism Backend API

This backend API is built with Node.js and Express.js to serve the Uttarakhand Tourism web app. It manages routes, connects to MongoDB, and handles business logic for the application.

## 🚀 Features

- RESTful API using Express.js  
- MongoDB database integration with Mongoose  
- User authentication (Login/Register) support  
- API endpoints for managing destinations, testimonials, and contact forms  
- CORS enabled for frontend integration  

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT (JSON Web Tokens) for authentication  
- dotenv for environment variables  

## 📁 Project Structure


## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/uttarakhand-tourism-backend.git
cd uttarakhand-tourism-backend


### 2. Install dependencies
npm install

3. Create a .env file in the root and add the following (example):
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4. Run the backend server (development)
node server.js
