const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');
const articleRoutes = require('./routes/articles');

require('dotenv').config({ path: '../.env' });

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/articles', articleRoutes);

// Connexion à la base de données
db.authenticate()
    .then(() => console.log('Connexion à la base de données établie avec succès'))
    .catch(err => console.error('Impossible de se connecter à la base de données :', err));

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
