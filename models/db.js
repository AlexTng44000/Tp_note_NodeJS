const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

pool.getConnection()
    .then(() => {
        console.log('Connexion à la base de données réussie !');
    })
    .catch((err) => {
        console.error('Erreur lors de la connexion à la base de données :', err);
    });

module.exports = pool;
