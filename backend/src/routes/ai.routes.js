const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.get('/get-response', (req, res) => {

    const prompt = req.query.prompt;

    if (!prompt) {
        return res.status(400).send('Prompt is required');          
    }
  res.send('AI route is working!');

});

