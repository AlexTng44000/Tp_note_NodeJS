const bcrypt = require('bcrypt');
const express = require('express');
const db = require('../models/db');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await db.query(
            'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, role]
        );

        res.status(201).send('Utilisateur ajouté avec succès !');
    } catch (err) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', err);
        res.status(500).send('Erreur interne du serveur');
    }
});

module.exports = router;
