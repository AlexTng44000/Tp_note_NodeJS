const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Importation des routes
const authRoutes = require('./routes/authRoutes'); // Doit être un router
const emargementRoutes = require('./routes/emargementRoutes'); // Doit être un router

// Utilisation des routes
app.use('/auth', authRoutes); // S'assure que authRoutes est un router valide
app.use('/emargements', emargementRoutes);

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
