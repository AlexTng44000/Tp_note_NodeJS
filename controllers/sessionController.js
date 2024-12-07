const db = require('../models/db');

// Récupérer toutes les sessions
exports.getSessions = async (req, res) => {
    try {
        const [sessions] = await db.query('SELECT * FROM sessions');
        res.json(sessions);
    } catch (err) {
        console.error('Erreur lors de la récupération des sessions :', err);
        res.status(500).send('Erreur interne du serveur');
    }
};

// Ajouter une session
exports.addSession = async (req, res) => {
    const { title, date, formateur_id } = req.body;

    try {
        await db.query('INSERT INTO sessions (title, date, formateur_id) VALUES (?, ?, ?)', [title, date, formateur_id]);
        res.status(201).send('Session ajoutée avec succès !');
    } catch (err) {
        console.error('Erreur lors de l\'ajout de la session :', err);
        res.status(500).send('Erreur interne du serveur');
    }
};
