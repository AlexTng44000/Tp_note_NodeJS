const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const express = require('express');
const router = express.Router();


exports.authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token manquant' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token invalide' });
    }
};

exports.authorize = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'Accès interdit' });
        }
        next();
    };
};

const { authenticate, authorize } = require('../middleware/authMiddleware');

router.post('/', authenticate, authorize('formateur'), async (req, res) => {
    const { title, date, formateur_id } = req.body;

    try {
        await db.query('INSERT INTO sessions (title, date, formateur_id) VALUES (?, ?, ?)', [title, date, formateur_id]);
        res.status(201).send('Session ajoutée avec succès !');
    } catch (err) {
        console.error('Erreur lors de la création de la session :', err);
        res.status(500).send('Erreur interne du serveur');
    }
});

