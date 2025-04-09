# Atelier 6 : Introduction à TypeScript

## Aperçu

Cet atelier (Atelier 6) est consacré à l'apprentissage des concepts fondamentaux de POO avec TypeScript. L'objectif principal est de comprendre et d'implémenter les principes de base de la POO à travers deux exercices pratiques.

## Objectifs d'Apprentissage

- Comprendre les principes fondamentaux de TypeScript
- Maîtriser la déclaration de classes et d'attributs avec modificateurs d'accès
- Implémenter des getters et setters pour l'encapsulation
- Créer des constructeurs et des méthodes personnalisées
- Gérer les relations entre classes
- Utiliser les tableaux d'objets typés
- Implémenter des méthodes de recherche et de filtrage

## Structure du Projet

Cet atelier est divisé en deux exercices progressifs, chacun abordant différents aspects de POO avec TypeScript.

### Exercice 1 : Classe Point et Calcul de Distance

**Dossier**: `Ex1/`

#### Fonctionnalités Implémentées
- Création d'une classe Point avec deux attributs privés (abs et ord)
- Implémentation d'un constructeur avec paramètres
- Définition des getters et setters pour les attributs
- Méthode de calcul de distance entre deux points

#### Technologies Utilisées
- TypeScript
- POO (Programmation Orientée Objet)
- Fonctions mathématiques (Math.sqrt, Math.pow)

#### Fichiers Clés
- `Point.ts` : Définition de la classe Point
- `test.ts` : Script de test pour valider les fonctionnalités

### Exercice 2 : Gestion de Personnes et Adresses

**Dossier**: `Ex2/`

#### Fonctionnalités Implémentées
- Création de classes Adresse et Personne avec encapsulation
- Relation entre classes (Une personne peut avoir plusieurs adresses)
- Implémentation d'une classe ListePersonnes pour gérer un ensemble de personnes
- Méthodes de recherche par nom et code postal
- Méthode de comptage de personnes par ville

#### Technologies Utilisées
- TypeScript
- POO avancée (Relations entre classes)
- Manipulation de tableaux d'objets typés
- Algorithmes de recherche et de filtrage

#### Fichiers Clés
- `Adresse.ts` : Définition de la classe Adresse
- `Personne.ts` : Définition de la classe Personne avec relation vers Adresse
- `ListePersonnes.ts` : Classe de gestion des personnes
- `test.ts` : Script de test pour valider les fonctionnalités

## Configuration et Installation

### Prérequis
- Node.js (version récente)
- TypeScript installé globalement (`npm install -g typescript`)

### Installation
1. Cloner le dépôt
2. Naviguer vers le dossier de l'atelier
3. Compiler les fichiers TypeScript avec la commande `tsc`
4. Exécuter les fichiers JavaScript générés avec Node.js

## Concepts Techniques Clés

1. **Classes et Encapsulation**
   - Définition d'attributs privés
   - Utilisation de getters et setters pour contrôler l'accès

2. **Constructeurs**
   - Initialisation d'objets avec paramètres
   - Utilisation de la syntaxe simplifiée de TypeScript

3. **Relations entre Classes**
   - Composition (Une personne possède des adresses)
   - Manipulation de tableaux d'objets typés

4. **Méthodes de Recherche et Filtrage**
   - Recherche par critères (nom, code postal)
   - Filtrage et comptage d'éléments répondant à certaines conditions

5. **Types en TypeScript**
   - Utilisation de types primitifs (number, string)
   - Types complexes (tableaux d'objets)
   - Union types et valeur de retour conditionnelle

## Conclusion

Cet atelier fournit une base solide pour comprendre les concepts fondamentaux de POO avec TypeScript. Les exercices pratiques permettent d'appliquer ces concepts dans des scénarios réalistes et progressifs. Les compétences acquises dans cet atelier serviront de fondation pour des applications plus complexes et structurées à l'avenir.
