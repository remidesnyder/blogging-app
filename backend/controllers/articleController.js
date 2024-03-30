const Article = require('../models/article');

// Récupérer tous les articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.json(articles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};