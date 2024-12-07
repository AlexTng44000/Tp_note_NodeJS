const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Liste des sessions');
});

module.exports = router;


router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [session] = await db.query('SELECT * FROM sessions WHERE id = ?', [id]);

        if (session.length === 0) {
            return res.status(404).send('Session non trouvée');
        }

        res.json(session[0]);
    } catch (err) {
        console.error('Erreur lors de la récupération de la session :', err);
        res.status(500).send('Erreur interne du serveur');
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, date, formateur_id } = req.body;

    try {
        await db.query(
            'UPDATE sessions SET title = ?, date = ?, formateur_id = ? WHERE id = ?',
            [title, date, formateur_id, id]
        );

        res.send('Session mise à jour avec succès !');
    } catch (err) {
        console.error('Erreur lors de la mise à jour de la session :', err);
        res.status(500).send('Erreur interne du serveur');
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await db.query('DELETE FROM sessions WHERE id = ?', [id]);
        res.send('Session supprimée avec succès !');
    } catch (err) {
        console.error('Erreur lors de la suppression de la session :', err);
        res.status(500).send('Erreur interne du serveur');
    }
});


