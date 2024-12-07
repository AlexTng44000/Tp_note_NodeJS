# Développement d'une API d'Émargement avec Node.js et, Express
## Dans ce projet  
Fonctionnalités implémentées  
1. **Gestion des utilisateurs**  

>    Routes :  
>        `POST` /auth/signup : Inscription des utilisateurs avec un mot de passe haché.  
>        `POST` /auth/login : Connexion des utilisateurs avec génération d'un JWT.  
>        `POST` /users : Ajout d'utilisateurs via un endpoint dédié.  

>>    Fonctionnalités réalisées :  
        Hachage des mots de passe avant leur stockage dans la base de données.  
        Authentification sécurisée avec JWT, incluant des rôles (formateur ou étudiant).  

2. **Gestion des sessions** 

>    Routes :  
>        `GET` /sessions : Récupérer la liste des sessions.  
>        `GET` /sessions/:id : Récupérer les détails d'une session spécifique.  
>        `POST` /sessions : Ajouter une nouvelle session (formateur uniquement).  
>        `PUT` /sessions/:id : Modifier une session existante (formateur uniquement).  
>        `DELETE` /sessions/:id : Supprimer une session (formateur uniquement).  

>>    Fonctionnalités réalisées :  
        CRUD complet pour les sessions.  
        Vérification des autorisations via un middleware (authMiddleware.js).  

3. **Gestion des émargements**  

>    Routes :  
>        `GET` /sessions/:id/emargement : Récupérer la liste des émargements pour une session.  
>        `POST` /sessions/:id/emargement : Ajouter un émargement pour une session (étudiant uniquement).  

 >>   Fonctionnalités réalisées :  
        Gestion des émargements avec enregistrement en base de données.  
        Contrôle des accès basé sur le rôle de l'utilisateur.  

4. **Sécurité**  

 >   Middleware :  
        Authentification par JWT pour protéger les routes.  
        Gestion des rôles (formateur ou étudiant) pour restreindre l'accès à certaines fonctionnalités.  
        Validation des entrées utilisateur (partiellement implémentée).


   
# BDD utilisée dans le cadre de ce projet  
![image](https://github.com/user-attachments/assets/3f56dedb-b858-47fa-8634-a1ac0c396e27)

# Requête POST pour rajouter des emargements
![image](https://github.com/user-attachments/assets/4588fb08-b963-4f1f-919a-23ba0ad3eefe)

# Requete GET pour voir si le POST à fonctionner
![image](https://github.com/user-attachments/assets/a4d8527e-72b9-4b61-8ee6-0374c4782d0b)
