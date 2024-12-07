const db = require('./models/db');

async function testConnection() {
    try {
        const [rows] = await db.query('SELECT 1 + 1 AS solution');
        console.log('La solution est :', rows[0].solution);
    } catch (err) {
        console.error('Erreur lors du test de connexion :', err);
    }
}

testConnection();
