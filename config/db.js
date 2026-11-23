const mongoose = require('mongoose');

const DEFAULT_URI = 'mongodb://127.0.0.1:27017/rentify';

async function connectDB() {
  const uri = process.env.MONGODB_URI || DEFAULT_URI;

  try {
    await mongoose.connect(uri);
    console.log(`MongoDB connected: ${mongoose.connection.host}/${mongoose.connection.name}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
