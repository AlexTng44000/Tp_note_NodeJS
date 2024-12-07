const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../models/db');
const router = express.Router();
const { JWT_SECRET } = process.env;

// Route pour login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

        if (users.length === 0) {
            return res.status(401).send('Email ou mot de passe incorrect');
        }

        const user = users[0];
        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error('Erreur lors de la connexion :', err);
        res.status(500).send('Erreur interne du serveur');
    }
});

module.exports = router;
