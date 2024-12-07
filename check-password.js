const pool = require('./models/db');
const bcrypt = require('bcrypt');

//-----------------------------------
// Fonction principale : Vérifier un mot de passe
// Role : Vérifier si le mot de passe fourni correspond à celui stocké en base
const checkPassword = async () => {
    try {
        // Récupération des informations de l'utilisateur dans la base de données
        const [rows] = await pool.query(
            `SELECT password FROM users WHERE email = ?`,
            ['formateur@example.com']
        );

        if (rows.length === 0) {
            console.log('Utilisateur non trouvé');
            return;
        }

        const hashedPassword = rows[0].password;

        // Vérification du mot de passe
        const isMatch = await bcrypt.compare('password123', hashedPassword);
        console.log('Le mot de passe correspond-il ? ', isMatch);
    } catch (err) {
        console.error('Erreur lors de la vérification du mot de passe :', err);
    }
};

//-----------------------------------
// Exécution de la fonction de vérification
// Role : Permet de lancer le script
checkPassword();
