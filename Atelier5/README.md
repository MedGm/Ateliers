# Atelier 5 : Programmation Asynchrone

## Aperçu

Cet atelier (Atelier 5) est consacré à la programmation asynchrone en JavaScript et son intégration avec des APIs backend Laravel. L'objectif principal est de comprendre et d'implémenter divers concepts de programmation asynchrone à travers quatre exercices pratiques de complexité croissante.

## Objectifs d'Apprentissage

- Comprendre les principes fondamentaux de la programmation asynchrone
- Maîtriser l'utilisation des Promises et des fonctions async/await
- Implémenter des requêtes HTTP asynchrones avec l'API Fetch
- Manipuler le DOM en fonction des résultats de requêtes asynchrones
- Créer des interfaces utilisateur réactives
- Intégrer les WebSockets pour des applications en temps réel
- Visualiser des données dynamiques avec Highcharts

## Structure du Projet

Cet atelier est divisé en quatre exercices progressifs, chacun abordant différents aspects de la programmation asynchrone.

### Exercice 1 : Manipulation de Données Utilisateur Asynchrones

**Dossier**: `Exercice1/`

#### Fonctionnalités Implémentées
- Création d'une fonction asynchrone simulant la récupération de données utilisateur avec délai
- Affichage des informations utilisateur dans une interface de profil
- Chaînage de Promises pour simuler des actions asynchrones séquentielles (récupération des données utilisateur, puis des commandes)
- Affichage de plusieurs utilisateurs dans un tableau

#### Technologies Utilisées
- JavaScript natif
- HTML/CSS
- Promises et async/await

#### Fichiers Clés
- `Ex1.html` : Structure HTML et CSS pour l'interface utilisateur
- `Ex1.js` : Implémentation des fonctions asynchrones et manipulation du DOM

### Exercice 2 : Gestion de Fichiers avec API Laravel

**Dossier**: `Exercice2/`

#### Fonctionnalités Implémentées
- Interface utilisateur pour téléverser et lister des fichiers
- API Laravel pour la gestion des fichiers (téléversement et récupération)
- Utilisation de `fetch()` pour les requêtes asynchrones à l'API
- Gestion des réponses asynchrones avec des Promises

#### Technologies Utilisées
- Frontend : JavaScript, HTML/CSS
- Backend : Laravel (PHP)
- API Fetch pour les requêtes HTTP
- Laravel Storage pour la gestion des fichiers

#### Fichiers Clés
- Frontend :
  - `Ex2.html` : Interface utilisateur pour la gestion des fichiers
  - `Ex2.js` : Fonctions JavaScript pour interagir avec l'API
- Backend :
  - `FileController.php` : Contrôleur Laravel pour le téléversement et la récupération des fichiers
  - `api.php` : Définition des routes API

### Exercice 3 : CRUD des Salles avec API Laravel

**Dossier**: `Exercice3/`

#### Fonctionnalités Implémentées
- Interface complète pour la gestion des salles (Create, Read, Update, Delete)
- API Laravel pour les opérations CRUD
- Migration et modèle pour les salles (Room)
- Requêtes HTTP asynchrones pour chaque opération

#### Technologies Utilisées
- Frontend : JavaScript natif, Bootstrap 5 pour l'UI
- Backend : Laravel avec Eloquent ORM
- API Fetch pour les requêtes HTTP
- Validation des données côté serveur

#### Fichiers Clés
- Frontend :
  - `Ex3.html` : Interface utilisateur avec formulaires et tableau des salles
  - `Ex3.js` : Fonctions JavaScript pour les opérations CRUD
- Backend :
  - `RoomController.php` : Contrôleur Laravel pour les opérations CRUD
  - Migrations pour la création de la table `rooms`

### Exercice 4 : Application de Suivi des Stocks en Temps Réel

**Dossier**: `Exercice4/`

#### Fonctionnalités Implémentées
- Dashboard de visualisation des stocks en temps réel avec Highcharts
- Interface de gestion des produits (ajout, modification, suppression)
- Implémentation de WebSockets pour les mises à jour en temps réel
- Broadcast d'événements lors des modifications des stocks

#### Technologies Utilisées
- Frontend : JavaScript, Bootstrap 5, Highcharts pour les graphiques
- Backend : Laravel avec WebSockets (Laravel Echo, Pusher)
- Communication en temps réel avec Pusher
- Laravel Events et Broadcasting

#### Fichiers Clés
- Frontend :
  - `index.html` : Dashboard de visualisation des stocks
  - `manage-stocks.html` : Interface pour la gestion des produits
  - `styles.css` : Styles
- Backend :
  - `StockController.php` : Contrôleur avec méthodes CRUD et broadcasting d'événements
  - `StockUpdated.php` : Événement Laravel pour la mise à jour des stocks
  - Migrations pour la table `stocks`

## Configuration et Installation

### Prérequis
- PHP 8.3.6
- Composer 2.7.1
- Node.js 18.20.6
- Laravel 12
- Serveur Laravel configuré pour WebSockets (Exercice 4)

## Concepts Techniques Clés

1. **Promises et Async/Await**
   - Gestion des opérations asynchrones
   - Chaînage des Promises pour les opérations séquentielles
   - Utilisation de async/await pour un code plus lisible

2. **API Fetch**
   - Création de requêtes HTTP (GET, POST, PUT, DELETE)
   - Manipulation des réponses JSON
   - Gestion des erreurs HTTP

3. **Laravel API**
   - Création de routes API
   - Contrôleurs pour les opérations CRUD
   - Validation des données entrantes
   - Utilisation d'Eloquent ORM

4. **WebSockets et Événements en Temps Réel**
   - Configuration de Laravel Reverb et Pusher
   - Création et dispatch d'événements
   - Écoute des événements côté client
   - Mise à jour en temps réel de l'interface utilisateur

5. **Visualisation des Données**
   - Utilisation de Highcharts pour créer des graphiques interactifs
   - Mise à jour dynamique des graphiques en fonction des événements reçus

## Conclusion

C'Atelier fournit une expérience pratique complète des techniques de programmation asynchrone en JavaScript, ainsi que leur intégration avec un backend Laravel. En progressant à travers les exercices, les étudiants développent des compétences essentielles pour la création d'applications web modernes, réactives et en temps réel.
