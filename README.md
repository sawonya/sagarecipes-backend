SagaRecipes — Recipe Sharing Website (Backend)
Project Description

SagaRecipes is a backend REST API for a recipe sharing website.
The application allows users to register and log in, create and manage their own recipes, and explore recipes from an external API.

The backend is built using Node.js, Express, and MongoDB.
JWT is used for authentication and authorization.
The project is deployed on Render, with MongoDB Atlas as the production database.

Technologies Used

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

bcryptjs

MongoDB Atlas

Render

Postman (API testing)

Project Structure
recipe-backend/
│
├── config/
│   └── db.js                # MongoDB connection
│
├── controllers/
│   ├── authController.js    # User registration and login logic
│   ├── recipeController.js # CRUD operations for recipes
│   └── userController.js   # User profile logic
│
├── middleware/
│   └── authMiddleware.js   # JWT authentication middleware
│
├── models/
│   ├── User.js              # User schema
│   └── Recipe.js            # Recipe schema
│
├── routes/
│   ├── authRoutes.js        # Authentication routes
│   ├── recipeRoutes.js     # Recipe routes
│   └── userRoutes.js       # User profile routes
│
├── server.js                # Main server file
├── package.json
└── README.md

Authentication and Security

User passwords are hashed using bcrypt

Authentication is implemented with JSON Web Tokens (JWT)

Protected routes require a valid JWT token

Only the owner of a recipe can update or delete it

User Features

Register a new user

Log in using email and password

View user profile (protected route)

Update user profile (protected route)

Recipe Features

Create a recipe (authenticated users only)

View all recipes

View a single recipe by ID

Update a recipe (only by the recipe owner)

Delete a recipe (only by the recipe owner)

Each recipe is linked to the user who created it.

External API Integration

The project integrates TheMealDB API to:

Search for external recipes

View full recipe details from the external API

API Endpoints
Authentication

POST /api/auth/register

POST /api/auth/login

User (Protected)

GET /api/users/profile

PUT /api/users/profile

Recipes

GET /api/recipes

GET /api/recipes/:id

POST /api/recipes (JWT required)

PUT /api/recipes/:id (JWT required, owner only)

DELETE /api/recipes/:id (JWT required, owner only)

API Testing

The API was tested using Postman, including:

User authentication

Access to protected routes

CRUD operations for recipes

Error handling (401, 403, 404)

Database

MongoDB Atlas is used as the production database

MongoDB Compass is used for viewing and managing data

Local development can use a local MongoDB instance

Passwords are stored in hashed form and never saved as plain text

Deployment

The backend is deployed on Render.

Production URL:
https://sagarecipes-backend.onrender.com

Example request:
GET https://sagarecipes-backend.onrender.com/api/recipes

Environment Variables

Sensitive data is stored using environment variables:

MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=production

How to Run Locally

Clone the repository

Install dependencies:

npm install


Create a .env file:

MONGO_URI=mongodb://localhost:27017/sagarecipes
JWT_SECRET=your_secret_key


Run the server:

node server.js


The server will run at:
http://localhost:5000

Project Status

Backend completed

Authentication and authorization implemented

CRUD operations completed

External API integration completed

Deployment completed

Author

SagaRecipes — Final Web Development Project
 Deployment
The backend is deployed on Render.

Production URL:
https://sagarecipes-backend.onrender.com

Example:
GET https://sagarecipes-backend.onrender.com/api/recipes