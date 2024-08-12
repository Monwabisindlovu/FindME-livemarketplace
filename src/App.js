import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Import routes
import authRoutes from './routes/authRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import incidentRoutes from './routes/incidentRoutes.js';

// Import middleware
import errorMiddleware from './middleware/errorMiddleware.js';

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();
const port = process.env.PORT || 5000;

// Configure CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Use CORS middleware

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB Connected');
    
    // Start the server after the database is connected
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})
.catch(err => console.error('MongoDB connection error:', err));

// Route handling
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/incidents', incidentRoutes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling middleware
app.use(errorMiddleware);
