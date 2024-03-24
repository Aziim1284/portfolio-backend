// index.js (or app.js)

const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors'); 
const messageRoutes = require('./src/routes/feedbackRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use(express.static(path.join(__dirname , "build")))
app.use("/app", express.static(path.join(__dirname , "build")));

// Connect to MongoDB
mongoose.connect('mongodb+srv://mohdazeem:azeem@aziimclusterstorage.sffurty.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=AziimClusterStorage', {
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
