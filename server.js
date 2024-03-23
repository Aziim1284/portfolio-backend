// index.js (or app.js)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const messageRoutes = require('./src/routes/feedbackRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Use CORS middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/messages_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api', messageRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
