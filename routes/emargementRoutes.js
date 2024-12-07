const express = require('express');
const { getEmargements, addEmargement } = require('../controllers/emargementController');
const router = express.Router();

router.get('/', getEmargements);
router.post('/', addEmargement);

module.exports = router;


router.get('/sessions/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [emargements] = await db.query(
            'SELECT * FROM emargements WHERE session_id = ?',
            [id]
        );

        res.json(emargements);
    } catch (err) {
        console.error('Erreur lors de la récupération des émargements :', err);
        res.status(500).send('Erreur interne du serveur');
    }
});


