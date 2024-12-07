const db = require('../models/db');

// Récupérer les émargements
exports.getEmargements = async (req, res) => {
    A
    try {
        const [emargements] = await db.query('SELECT * FROM emargements');
        res.json(emargements);
    } catch (err) {
        console.error('Erreur lors de la récupération des émargements :', err);
        res.status(500).send('Erreur interne du serveur');
    }
};

// Ajouter un émargement
exports.addEmargement = async (req, res) => {
    const { session_id, etudiant_id, status } = req.body;

    try {
        await db.query('INSERT INTO emargements (session_id, etudiant_id, status) VALUES (?, ?, ?)', [session_id, etudiant_id, status]);
        res.status(201).send('Émargement ajouté avec succès !');
    } catch (err) {
        console.error('Erreur lors de l\'ajout de l\'émargement :', err);
        res.status(500).send('Erreur interne du serveur');
    }
};
