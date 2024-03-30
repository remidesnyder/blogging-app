const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Article = db.define('article', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Article;
