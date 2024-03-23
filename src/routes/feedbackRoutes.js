// src/routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const messageController = require('../controllers/feedbackcontroller');

// POST request to create a new message
router.post('/message', messageController.createMessage);

module.exports = router;
