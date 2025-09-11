# 🚀 Products Store Backend API Documentation

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.17-green.svg)](https://mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)

A secure and scalable Express.js REST API for product management, built with modern Node.js practices.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Request/Response Examples](#-requestresponse-examples)
- [Security Features](#-security-features)
- [Error Handling](#-error-handling)
- [Development](#-development)
- [Testing](#-testing)
- [Contributing](#-contributing)

## 🎯 Project Overview

This backend API provides a complete product management system with CRUD operations, built following industry best practices including:

- ✅ **RESTful API Design**
- ✅ **Security Hardening**
- ✅ **Input Validation**
- ✅ **Error Handling**
- ✅ **Code Quality Tools**

## ✨ Features

- 🛡️ **Security-First**: Helmet, Rate Limiting, NoSQL Injection Protection
- 📝 **Input Validation**: Express-validator with custom error messages
- 🎯 **Consistent Responses**: Standardized API response format
- 🔧 **Error Handling**: Centralized error management
- 📊 **Health Monitoring**: Built-in health check endpoint
- 🎨 **Code Quality**: ESLint + Prettier configuration
- 🚀 **Modern ES6+**: Latest JavaScript features

## 🛠 Technology Stack

| Technology             | Version | Purpose             |
| ---------------------- | ------- | ------------------- |
| **Node.js**            | 18+     | Runtime Environment |
| **Express.js**         | 4.21    | Web Framework       |
| **MongoDB**            | 8.17    | Database            |
| **Mongoose**           | 8.17    | ODM                 |
| **Helmet**             | 8.1     | Security Headers    |
| **Express-Rate-Limit** | 8.0     | Rate Limiting       |
| **Express-Validator**  | 7.2     | Input Validation    |
| **ESLint**             | 9.32    | Code Linting        |
| **Prettier**           | 3.6     | Code Formatting     |

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   └── productController.js  # Business logic
│   ├── docs/
│   │   └── API_DOCUMENTATION.md  # This documentation
│   ├── middleware/
│   │   ├── errorHandler.js       # Error handling middleware
│   │   └── security.js          # Security configurations
│   ├── models/
│   │   └── product.model.js     # Mongoose schemas
│   ├── routes/
│   │   └── product.route.js     # API routes
│   ├── utils/
│   │   └── responseHandler.js   # Response utilities
│   └── validations/
│       └── productValidation.js # Input validation
├── .env                        # Environment variables
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
├── .prettierignore           # Prettier ignore rules
├── .prettierrc               # Prettier configuration
├── CHANGELOG.md              # Version history
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies & scripts
├── pnpm-lock.yaml            # Lock file
├── README.md                 # Documentation
└── server.js                 # Application entry point
```

## 🚀 Installation

### Prerequisites

- Node.js 18+
- MongoDB 4.4+
- pnpm (recommended) or npm

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>/backend
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Environment configuration**

   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

4. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
# Database
MONGO_URI=mongodb://localhost:27017/products-store

# Server
PORT=5000
NODE_ENV=development

# Optional: Add these for production
MONGO_URI_PROD=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

## 🛣 API Endpoints

### Base URL

```
http://localhost:5000/api
```

### Health Check

```http
GET /health
```

### Products

| Method   | Endpoint            | Description        | Auth Required |
| -------- | ------------------- | ------------------ | ------------- |
| `GET`    | `/api/products`     | Get all products   | ❌            |
| `GET`    | `/api/products/:id` | Get product by ID  | ❌            |
| `POST`   | `/api/products`     | Create new product | ❌            |
| `PUT`    | `/api/products/:id` | Update product     | ❌            |
| `DELETE` | `/api/products/:id` | Delete product     | ❌            |

## 📋 Request/Response Examples

### 🟢 GET /api/products

**Response:**

```json
{
  "success": true,
  "message": "Products retrieved successfully",
  "data": [
    {
      "_id": "64f123abc456def789012345",
      "name": "iPhone 15 Pro",
      "price": 999.99,
      "image": "https://example.com/iphone15.jpg",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### 🟢 GET /api/products/:id

**Response (Success):**

```json
{
  "success": true,
  "message": "Product retrieved successfully",
  "data": {
    "_id": "64f123abc456def789012345",
    "name": "iPhone 15 Pro",
    "price": 999.99,
    "image": "https://example.com/iphone15.jpg",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Response (Not Found):**

```json
{
  "success": false,
  "message": "Product not found"
}
```

### 🟢 POST /api/products

**Request Body:**

```json
{
  "name": "MacBook Pro M3",
  "price": 1999.99,
  "image": "https://example.com/macbook-pro.jpg"
}
```

**Response (Success):**

```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "_id": "64f123abc456def789012346",
    "name": "MacBook Pro M3",
    "price": 1999.99,
    "image": "https://example.com/macbook-pro.jpg",
    "createdAt": "2024-01-15T11:00:00.000Z",
    "updatedAt": "2024-01-15T11:00:00.000Z"
  }
}
```

**Response (Validation Error):**

```json
{
  "success": false,
  "message": "Validation errors",
  "errors": [
    {
      "type": "field",
      "msg": "Product name is required",
      "path": "name",
      "location": "body"
    }
  ]
}
```

### 🟢 PUT /api/products/:id

**Request Body:**

```json
{
  "name": "MacBook Pro M3 Updated",
  "price": 1899.99,
  "image": "https://example.com/macbook-pro-updated.jpg"
}
```

**Response (Success):**

```json
{
  "success": true,
  "message": "Product updated successfully",
  "data": {
    "_id": "64f123abc456def789012346",
    "name": "MacBook Pro M3 Updated",
    "price": 1899.99,
    "image": "https://example.com/macbook-pro-updated.jpg",
    "createdAt": "2024-01-15T11:00:00.000Z",
    "updatedAt": "2024-01-15T12:00:00.000Z"
  }
}
```

### 🟢 DELETE /api/products/:id

**Response (Success):**

```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

## 🛡 Security Features

### Rate Limiting

- **General API**: 100 requests per 15 minutes per IP
- **Response**: 429 status code when exceeded

### Security Headers (Helmet)

```http
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'
```

### NoSQL Injection Protection

- Sanitizes MongoDB queries
- Replaces `$` operators with `_`

### Input Validation

- **Name**: Required, 2-100 characters
- **Price**: Required, positive number
- **Image**: Required, valid URL

## ⚠️ Error Handling

### Error Response Format

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information"
}
```

### Common HTTP Status Codes

| Code  | Description       | Example                       |
| ----- | ----------------- | ----------------------------- |
| `200` | Success           | Resource retrieved/updated    |
| `201` | Created           | Resource created successfully |
| `400` | Bad Request       | Validation errors             |
| `404` | Not Found         | Resource doesn't exist        |
| `429` | Too Many Requests | Rate limit exceeded           |
| `500` | Server Error      | Internal server error         |

### Error Types

#### Mongoose CastError (404)

```json
{
  "success": false,
  "error": "Resource not found"
}
```

#### Validation Error (400)

```json
{
  "success": false,
  "error": ["Field is required", "Invalid format"]
}
```

#### Duplicate Key Error (400)

```json
{
  "success": false,
  "error": "Duplicate field value entered"
}
```

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm run dev          # Start with nodemon
pnpm run start        # Production start

# Code Quality
pnpm run lint         # Check code issues
pnpm run lint:fix     # Fix auto-fixable issues
pnpm run format       # Format with Prettier
pnpm run format:check # Check formatting
```

### Development Workflow

1. **Start development server**

   ```bash
   pnpm run dev
   ```

2. **Make changes** to your code

3. **Format and lint**

   ```bash
   pnpm run format
   pnpm run lint:fix
   ```

4. **Test your changes**
   ```bash
   curl http://localhost:5000/health
   ```

## 🧪 Testing

### Manual Testing with cURL

#### Health Check

```bash
curl http://localhost:5000/health
```

#### Get All Products

```bash
curl http://localhost:5000/api/products
```

#### Create Product

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Product",
    "price": 99.99,
    "image": "https://example.com/product.jpg"
  }'
```

#### Update Product

```bash
curl -X PUT http://localhost:5000/api/products/PRODUCT_ID \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Product",
    "price": 149.99,
    "image": "https://example.com/updated.jpg"
  }'
```

#### Delete Product

```bash
curl -X DELETE http://localhost:5000/api/products/PRODUCT_ID
```

### Test Rate Limiting

```bash
# Send 10 quick requests to test rate limiting
for i in {1..10}; do curl http://localhost:5000/health; done
```

## 📊 Monitoring

### Health Check Endpoint

```http
GET /health
```

**Response:**

```json
{
  "success": true,
  "message": "Server is running!"
}
```

### Server Logs

The server provides detailed logging:

- ✅ Database connection status
- 🚀 Server startup confirmation
- 🛡️ Security middleware status
- ❌ Error details

## 🚀 Deployment

### Environment Setup

1. Set production environment variables
2. Use MongoDB Atlas for database
3. Configure CORS for your frontend domain
4. Set up SSL/TLS certificates

### Production Considerations

- Use process managers (PM2, Docker)
- Implement proper logging (Winston)
- Set up monitoring (Prometheus, Grafana)
- Configure reverse proxy (Nginx)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use ESLint and Prettier configurations
- Follow existing naming conventions
- Write descriptive commit messages
- Add documentation for new features

---

## 📞 Support

For questions or support, please:

- Open an issue on GitHub
- Check existing documentation
- Review the code examples above

---

**Happy Coding! 🚀**
