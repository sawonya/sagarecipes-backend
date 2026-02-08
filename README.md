# 🍰 Sagarecipes — Recipe Sharing Backend

Sagarecipes is a backend application for a recipe-sharing platform where users can register, log in, create and manage their own recipes, and explore recipes from an external API (TheMealDB).

The backend is built using **Node.js**, **Express**, and **MongoDB**.  
Authentication and authorization are implemented using **JWT**.  
The project is deployed on **Render** with **MongoDB Atlas** as the production database.

---

## 🚀 Deployment

**Backend is deployed on Render:**

🔗 https://sagarecipes-backend.onrender.com

**Example endpoint:**
GET https://sagarecipes-backend.onrender.com/api/recipes


---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs (password hashing)
- MongoDB Atlas (cloud database)
- Render (deployment)
- Postman (API testing)

---

## 📂 Project Structure

recipe-backend/
│
├── config/
│ └── db.js # MongoDB connection
│
├── controllers/
│ ├── authController.js # User registration & login
│ ├── recipeController.js # CRUD operations for recipes
│ └── userController.js # User profile logic
│
├── middleware/
│ └── authMiddleware.js # JWT authentication middleware
│
├── models/
│ ├── User.js # User schema
│ └── Recipe.js # Recipe schema
│
├── routes/
│ ├── authRoutes.js # Authentication routes
│ ├── recipeRoutes.js # Recipe routes
│ └── userRoutes.js # User profile routes
│
├── server.js # Main server file
├── package.json
├── README.md


---

## 🔐 Authentication

- Passwords are **hashed using bcrypt**
- JWT is generated on login
- Protected routes require a valid JWT token in headers

**Authorization header example:**
Authorization: Bearer <your_token>


---

## 📡 API Endpoints

### 🔑 Authentication (Public)

| Method | Endpoint              | Description             |
|------:|-----------------------|-------------------------|
| POST  | /api/auth/register    | Register a new user     |
| POST  | /api/auth/login       | Login user              |

---

### 👤 User Profile (Private)

| Method | Endpoint              | Description                    |
|------:|-----------------------|--------------------------------|
| GET   | /api/users/profile    | Get logged-in user profile     |
| PUT   | /api/users/profile    | Update user profile            |

---

### 🍽 Recipes (Private)

| Method | Endpoint               | Description               |
|------:|------------------------|---------------------------|
| POST  | /api/recipes           | Create a new recipe       |
| GET   | /api/recipes           | Get all recipes           |
| GET   | /api/recipes/:id       | Get recipe by ID          |
| PUT   | /api/recipes/:id       | Update recipe             |
| DELETE| /api/recipes/:id       | Delete recipe             |

---

## 🧪 API Testing

All endpoints were tested using **Postman**.

Testing includes:
- User registration and login
- JWT-protected routes
- CRUD operations for recipes
- User profile access

---

## 🔐 Environment Variables

The following environment variables are required:

PORT=10000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=production


These variables are configured on **Render** and are not stored in the repository.

---

## ✅ Features Summary

- User authentication (register/login)
- JWT-based authorization
- Secure password hashing
- Full CRUD for recipes
- User-specific recipes
- External API integration (TheMealDB)
- Cloud database (MongoDB Atlas)
- Backend deployment on Render

---

## 👩‍💻 Author

**Kairat Sagynysh**  
Final Project — Web Technologies
