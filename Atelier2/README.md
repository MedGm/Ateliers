# Atelier 2 : JavaScript et POO

## Introduction
Ce dépôt contient mon travail pour l'Atelier 2 portant sur JavaScript et la Programmation Orientée Objet. L'objectif était de comprendre et mettre en pratique les concepts de POO en JavaScript.

## Exercices réalisés

### Exercice 1 : Héritage en JavaScript
J'ai créé une classe `voiture` avec les attributs demandés (modèle, marque, année, type, carburant), puis implémenté un mécanisme d'héritage avec deux classes dérivées :
- Classe `Hyundai` avec les attributs série et hybride, et une méthode alarmer()
- Classe `Ford` avec un attribut options (tableau)

J'ai également créé une liste de voitures et implémenté une fonction pour les trier par année.

### Exercice 2 : Objets natifs et prototypes
J'ai créé deux objets natifs :
- `Etudiant` avec nom, prénom, age, cne
- `Professeur` avec nom, age, cin

J'ai ajouté les méthodes etudier() et enseigner() à leurs prototypes respectifs, puis implémenté une fonction pour trier les étudiants par ordre alphabétique.

### Exercice 3 : Classes (ES6)
J'ai défini plusieurs classes selon les spécifications :
- Classe `Vecteur2D` avec méthodes d'affichage et d'addition
- Classes `Rectangle` et `Carre` (héritage)
- Classes `Point` et `Segment` (composition)

### Exercice 4 : Mini Blog
Pour cet exercice, j'ai développé une application web de blog utilisant les principes de la POO en JavaScript. L'application comprend :

- Une interface utilisateur intuitive développée avec TailwindCSS
- Un système d'authentification (connexion/inscription)
- La possibilité de créer et lister des posts
- Le stockage des données dans localStorage avec conversion entre objets et JSON

## Structure du projet
```
├── index.html       # Interface utilisateur du blog
├── blog.js          # Classes et logique du blog
├── script.js        # Exercices 1, 2 et 3
└── README.md        # Ce fichier
```

## Technologies utilisées
- JavaScript ES6+
- Tailwind CSS
- HTML5
- localStorage pour la persistance des données

## Fonctionnalités du blog
- Inscription et connexion des utilisateurs
- Création de posts avec titre et contenu
- Affichage des posts avec nom d'auteur et date
- Persistance des données entre sessions

## Comment exécuter le projet
1. Cloner ce dépôt
2. Ouvrir le fichier `index.html` dans un navigateur web
3. Pour les exercices 1, 2 et 3, ouvrir la console du navigateur après avoir chargé la page

## Conclusion
Cet atelier m'a permis de mieux comprendre les concepts de la POO en JavaScript et d'appliquer ces concepts dans des exemples concrets, notamment avec la création d'un mini blog fonctionnel.