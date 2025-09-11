# Products Store MERN

A full-stack MERN application for managing products.

## 🏗️ Architecture

- **Backend**: Express.js API with MongoDB
- **Frontend**: React.js application

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/hichamweblog/products-store
cd products-store-mern

# Backend setup
cd backend
pnpm install
cp .env.example .env
# Edit .env with your MongoDB URI
pnpm run dev

# In a new terminal - Frontend setup (coming soon)
# cd ../frontend
# pnpm install
# pnpm run dev

# Backend: http://localhost:5000
# Frontend: http://localhost:3000 (coming soon)
```

## 🛠 Development

### Backend Development

```bash
cd backend
pnpm run dev          # Start with nodemon
pnpm run lint         # Check code quality
pnpm run format       # Format code
```

### API Documentation

- **Health Check**: http://localhost:5000/health
- **API Base URL**: http://localhost:5000/api
- **Full Documentation**: [backend/src/docs/API_DOCUMENTATION.md](backend/src/docs/API_DOCUMENTATION.md)

## 🔧 Environment Setup

Create a `.env` file in the backend directory:

```env
MONGO_URI=mongodb://localhost:27017/products-store
PORT=5000
NODE_ENV=development
```

## 📚 Documentation

- [Backend API Documentation](backend/src/docs/API_DOCUMENTATION.md)
- [Backend README](backend/README.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Make your changes
4. Run tests and linting
5. Commit your changes (`git commit -m 'Add new feature'`)
6. Push to the branch (`git push origin feature/new-feature`)
7. Open a Pull Request

## 📁 Project Structure

```
products-store-mern/
├── backend/                 # Express.js API Server
│   ├── src/                # Source code
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Business logic & request handlers
│   │   ├── docs/          # API documentation
│   │   ├── middleware/    # Express middleware
│   │   ├── models/        # Mongoose schemas
│   │   ├── routes/        # API routes
│   │   ├── utils/         # Helper functions
│   │   └── validations/   # Input validation
│   ├── .env               # Environment variables
│   ├── .gitignore         # Git ignore rules
│   ├── package.json       # Dependencies & scripts
│   ├── README.md          # Backend documentation
│   └── server.js          # Application entry point
└── frontend/              # React.js application (coming soon)
```
