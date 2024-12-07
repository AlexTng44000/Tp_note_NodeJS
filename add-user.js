const bcrypt = require('bcrypt');
const db = require('./models/db');

//-----------------------------------
// Fonction : addUser
// Role : Ajouter un utilisateur avec un mot de passe haché dans la base de données
async function addUser(name, email, password, role) {
    try {
        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insertion de l'utilisateur dans la base de données
        await db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [name, email, hashedPassword, role]);
        console.log('Utilisateur ajouté avec succès');
    } catch (err) {
        console.error('Erreur lors de la création de l\'utilisateur :', err);
    }
}

//-------------------------------
// Lancement de la fonction addUser
// Role : Tester la création d'un utilisateur
addUser('Formateur', 'formateur@example.com', 'password123', 'formateur');
