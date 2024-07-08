const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const redis = require('redis');
require('dotenv').config();

const authMiddleware = require('./middleware/authMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const dbURI = process.env.MONGODB_URI;
if (!dbURI) {
  throw new Error('MONGODB_URI is not defined in .env file');
}
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Redis Client
const redisURL = process.env.REDIS_URL || 'redis://localhost:6379';
const redisClient = redis.createClient(redisURL);
redisClient.on('connect', () => {
  console.log('Redis connected');
});
redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Routes
app.use('/api/auth', authRoutes);

// Error Middleware
app.use(errorMiddleware);

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
