const express = require('express');
const router = express.Router();
//const Article = require('../models/article');

// Obtenir tous les articles
router.get('/', async (req, res) => {
    res.send('GET /articles');
});


module.exports = router;
