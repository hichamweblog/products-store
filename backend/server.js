// Entry point for the backend server

// Imports required modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import productRoutes from './src/routes/product.route.js';
import errorHandler from './src/middleware/errorHandler.js';
import {
  createRateLimit,
  helmetConfig,
  mongoSanitizeConfig,
} from './src/middleware/security.js';

// Environment variables configuration
dotenv.config();

// Initializes Express app
const app = express();

// Security middleware (must be early in the middleware stack)
app.use(helmetConfig); // Security headers
app.use(createRateLimit()); // Rate limiting
app.use(mongoSanitizeConfig); // NoSQL injection prevention

// Handles CORS, JSON parsing and URL-encoded data
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Port configuration
const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/products', productRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running!',
  });
});

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Connect to database first, then start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
      console.log('🛡️  Security middleware enabled');
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

// Start the server
startServer();
