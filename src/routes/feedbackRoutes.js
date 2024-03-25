// src/routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const messageController = require('../controllers/feedbackcontroller');
const HsseParatnerProjects = require('../controllers/dcmHsseProject');

// POST request to create a new message
router.post('/message', messageController.createMessage);
router.get('/feeedback/message', messageController.getMessages);
router.get('/hsse/partner', HsseParatnerProjects.HsseProjects);

module.exports = router;
