# 🎓 Learn MERN Stack Project

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.17-green.svg)](https://mongodb.com/)
[![pnpm](https://img.shields.io/badge/pnpm-10.13-orange.svg)](https://pnpm.io/)

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for learning modern web development.

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd learn-mern

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI

# Start development server
pnpm run dev
```

## 📁 Project Structure

```
learn-mern/
├── backend/                 # Express.js API Server
│   ├── config/             # Database configuration
│   ├── controllers/        # Route handlers
│   ├── docs/              # API documentation
│   ├── middleware/        # Express middleware
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── utils/            # Helper functions
│   ├── validations/      # Input validation
│   └── server.js         # Entry point
├── frontend/             # React application (coming soon)
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── .gitignore           # Git ignore rules
└── package.json         # Dependencies and scripts
```

## 🛠 Available Scripts

| Command             | Description                           |
| ------------------- | ------------------------------------- |
| `pnpm run dev`      | Start development server with nodemon |
| `pnpm run start`    | Start production server               |
| `pnpm run lint`     | Check code for issues                 |
| `pnpm run lint:fix` | Fix auto-fixable linting issues       |
| `pnpm run format`   | Format code with Prettier             |

## 🔗 API Documentation

The complete API documentation is available at:

- **Local**: [backend/docs/API_DOCUMENTATION.md](backend/docs/API_DOCUMENTATION.md)
- **Health Check**: http://localhost:5000/health
- **API Base URL**: http://localhost:5000/api

### Quick API Overview

| Endpoint            | Method | Description        |
| ------------------- | ------ | ------------------ |
| `/health`           | GET    | Health check       |
| `/api/products`     | GET    | Get all products   |
| `/api/products/:id` | GET    | Get single product |
| `/api/products`     | POST   | Create product     |
| `/api/products/:id` | PUT    | Update product     |
| `/api/products/:id` | DELETE | Delete product     |

## 🛡 Security Features

- ✅ **Helmet**: Security headers
- ✅ **Rate Limiting**: DOS protection
- ✅ **NoSQL Injection Protection**: MongoDB sanitization
- ✅ **CORS**: Cross-origin resource sharing
- ✅ **Input Validation**: Express-validator

## 🔧 Environment Variables

Create a `.env` file in the project root:

```env
# Database
MONGO_URI=mongodb://localhost:27017/learn-mern

# Server
PORT=5000
NODE_ENV=development
```

## 📋 Prerequisites

- **Node.js**: Version 18 or higher
- **MongoDB**: Version 4.4 or higher
- **pnpm**: Recommended package manager

## 🚀 Deployment

### Local Development

1. Install MongoDB locally or use MongoDB Atlas
2. Clone the repository
3. Install dependencies with `pnpm install`
4. Set up environment variables
5. Run `pnpm run dev`

### Production

- Use MongoDB Atlas for database
- Set production environment variables
- Use process manager (PM2)
- Configure reverse proxy (Nginx)

## 🧪 Testing

### Manual Testing

```bash
# Health check
curl http://localhost:5000/health

# Get all products
curl http://localhost:5000/api/products

# Create a product
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Product","price":99.99,"image":"https://example.com/image.jpg"}'
```

## 🎯 Learning Objectives

This project covers:

### Backend (Express.js)

- ✅ RESTful API design
- ✅ MongoDB integration with Mongoose
- ✅ Security best practices
- ✅ Error handling
- ✅ Input validation
- ✅ Code quality tools (ESLint, Prettier)

### Frontend (React) - Coming Soon

- ⏳ Component-based architecture
- ⏳ State management
- ⏳ API integration
- ⏳ Modern CSS/Styling
- ⏳ Responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Make your changes
4. Run linting and formatting (`pnpm run lint:fix && pnpm run format`)
5. Commit your changes (`git commit -m 'Add new feature'`)
6. Push to the branch (`git push origin feature/new-feature`)
7. Open a Pull Request

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**MongoDB Connection Error**

```bash
# Make sure MongoDB is running
# For local MongoDB:
sudo systemctl start mongod

# Check your MONGO_URI in .env file
```

**Port Already in Use**

```bash
# Kill process using port 5000
lsof -ti:5000 | xargs kill -9

# Or change PORT in .env file
```

**ESLint/Prettier Conflicts**

```bash
# Fix formatting and linting issues
pnpm run lint:fix
pnpm run format
```

---

**Happy Learning! 🎓**
