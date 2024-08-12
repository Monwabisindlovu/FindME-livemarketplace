// JWT configuration
export const jwtConfig = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: '1h',
  };
  
  // Database configuration
  export const dbConfig = {
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/local-marketplace',
  };
  