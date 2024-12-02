# GraphQL API with TypeScript

## Overview
This project demonstrates how to build a robust and efficient GraphQL API using **Node.js**, **Express.js**, and **TypeScript**. The API implements strong typing, authentication, and caching while integrating with **MongoDB** for database operations and **Redis** for caching frequently accessed resources.

---

## Features
- **TypeScript** for type safety and maintainability.
- GraphQL schema and resolvers defined using **TypeScript**.
- Authentication and authorization using **JWT tokens**.
- Database integration with **MongoDB** using **Mongoose**.
- **Redis caching** for improved performance of frequently accessed data.
- Input validation and error handling for secure and reliable data operations.

---

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **Redis**

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/graphql-api-typescript.git
   cd graphql-api-typescript
2. Install dependencies:

npm install


3. Create a .env file with the following:

PORT=4000
MONGO_URI=mongodb://localhost:27017/dbname
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your_jwt_secret


4. Start MongoDB and Redis, then run:

npm start
Usage


5 . Once the server is running, access the GraphQL Playground at:

http://localhost:4000/graphql
Example Queries
Login
mutation {
  login(username: "testuser", password: "testpassword") {
    token
  }
}
Fetch Items
query {
  getItems {
    id
    name
    description
  }
}
Create an Item
mutation {
  createItem(input: { name: "Item Name", description: "Item Description" }) {
    id
    name
    description
  }
}
