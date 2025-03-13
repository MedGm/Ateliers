# Atelier 3 : Javascript et Functional Programming

## Objectif
L’objectif principal de cet atelier est de se familiariser avec les concepts de la programmation fonctionnelle en JavaScript. Ce travail pratique vous invite à utiliser des méthodes fonctionnelles pour transformer des données et traiter des ensembles d'informations de manière concise et expressive.

## Exercices

### Exercice 1 : Filtrage et tri d'une liste de nombres
Écrire un programme fonctionnel qui prend une liste et renvoie une nouvelle liste ne contenant que des nombres pairs triés par ordre croissant.  
**Exemple :**  
`const numbers = [1, 7, 10, 9, 8, 2];`  
résultat attendu: `[2, 8, 10]`

### Exercice 2 : Calcul de factorielle sur une liste
Écrire un programme fonctionnel qui prend une liste de nombres et renvoie une nouvelle liste où chaque nombre est remplacé par sa factorielle.  
**Exemple :**  
`const numbers = [1, 3, 4];`  
résultat attendu: `[1, 6, 24]`

### Exercice 3 : Transformation de texte
Écrire un programme fonctionnel qui divise un texte en lignes, convertit chaque ligne en majuscules, filtre les lignes contenant la lettre "I" (majuscule ou minuscule), puis les affiche.  
**Exemple :**  
Texte d'entrée :  
```
Hello LSI
On va tester le filtre
Je suis un étudiant
pas un developpeur
```  
Chaque ligne correspondant à la condition doit être affichée dans la console.

### Exercice 4 : Recherche du nombre maximum
À partir d'une liste de nombres, trouvez le nombre maximum.  
**Exemple :**  
`const numbers = [1, 7, 10, 9, 8];`  
résultat attendu: `10`

### Exercice 5 : Calcul du prix total TTC d'une liste de produits
Écrire un programme fonctionnel qui prend un tableau d'objets représentant des produits et calcule le prix total TTC en appliquant une TVA de 25%.  
**Exemple :**  
```javascript
const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
];
```  
résultat attendu: la somme de `(price * 1.25)` pour chaque produit.

### Exercice 6 : Traitement des données de produits
Vous êtes chargé de traiter un grand ensemble de données représentant des produits. Chaque produit possède les attributs suivants : nom, prix, catégorie et stock. Les produits sont stockés dans un fichier JSON au format :
```json
{ "name": "Ordinateur portable", "price": 999, "category": "Électronique", "stock": 10 }
```
Les objectifs de cet exercice sont :
1. Filtrer les produits par catégorie.
2. Calculer le prix total des produits :
   - Le total sans prendre en compte le stock.
   - Le total en multipliant le prix par la quantité en stock.
3. Trouver les produits en faible stock.
4. Trier les produits par prix ou par quantité en stock.
5. Intégrer une barre de recherche pour permettre à l'utilisateur de rechercher des produits par nom.
6. Afficher un dashboard en utilisant Chart.js qui présente graphiquement :
   - La distribution des produits par catégorie.
   - Le prix des produits.
   - Le niveau de stock des produits.

## Structure du projet
```
├── index.html          # Fichier principal pour l'atelier
├── ex6.js              # Script pour le traitement des données des produits (Exercice 6)
├── ex1-5.js            # Scripts pour les exercices 1 à 5 de programmation fonctionnelle
├── test.json           # Fichier JSON contenant les données de produits
└── README_Atelier3.md  # Ce fichier
```

## Technologies utilisées
- JavaScript (ES6+)
- Programmation fonctionnelle en JavaScript (map, filter, reduce, sort, etc.)
- Chart.js pour la visualisation des données
- HTML5 et Bootstrap pour l'interface utilisateur

## Comment exécuter le projet
1. Cloner ce dépôt.
2. Pour les exercices fonctionnels (Exercices 1 à 5), ouvrez le fichier `ex1-5.js` et consultez la console du navigateur.
3. Pour l'Exercice 6 :
   - Ouvrez le fichier `page.html` dans un navigateur web.
   - Le script `ex6.js` traitera les données contenues dans `test.json` et affichera les résultats ainsi que les graphiques sur le dashboard.

## Photos :
![Screenshot from 2025-03-13 13-01-31](https://github.com/user-attachments/assets/c30f4b98-94e0-4439-8f3b-9583f0d5be45)
![Screenshot from 2025-03-13 13-01-36](https://github.com/user-attachments/assets/ee22c607-7c40-4cbd-9faa-42aaa015270a)


## Conclusion
Cet atelier permet de mettre en pratique des techniques de programmation fonctionnelle ainsi que de développer une application web interactive pour le traitement et la visualisation de données produits. L'approche fonctionnelle simplifie la manipulation des données et favorise un code concis et lisible.
