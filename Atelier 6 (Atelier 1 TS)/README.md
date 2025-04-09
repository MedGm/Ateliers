# Atelier 6 : TypeScript & POO

## Objectif
Cet atelier vise à pratiquer la programmation orientée objet avec TypeScript à travers deux exercices concrets.

## Exercice 1 : Classe Point
**Implémentation :**
- Classe Point avec attributs privés (abs, ord)
- Getters et setters
- Méthode calculerDistance(p: Point) pour calculer la distance entre deux points

**Fichiers :**
- `Point.ts` : Classe Point
- `test.ts` : Tests de validation

**Code clé :**
```typescript
class Point {
  constructor(private abs: number, private ord: number) {}
  
  // Getters & setters
  
  calculerDistance(p: Point): number {
    return Math.sqrt(Math.pow(this.abs - p.abs, 2) + Math.pow(this.ord - p.ord, 2));
  }
}
```

## Exercice 2 : Classes Adresse, Personne et ListePersonnes
**Implémentation :**
- Classes Adresse et Personne avec attributs privés
- Relations entre classes (Personne contient un tableau d'Adresse)
- Méthodes de recherche et comptage

**Fichiers :**
- `Adresse.ts` : Classe pour gérer rue, ville et code postal
- `Personne.ts` : Classe avec nom, sexe et tableau d'adresses
- `ListePersonnes.ts` : Classe de gestion avec méthodes de recherche
- `test.ts` : Tests de validation

**Fonctionnalités :**
1. **findByNom(s: string)** : Recherche une personne par son nom
2. **findByCodePostal(cp: string)** : Trouve les personnes résidant à un code postal
3. **countPersonneVille(ville: string)** : Compte les personnes habitant dans une ville

**Code clé :**
```typescript
class ListePersonnes {
  constructor(private personnes: Personne[] = []) {}
  
  // Getters & setters
  
  findByNom(s: string): Personne | string {
    for (let p of this.personnes) {
      if (p.getNom() === s) return p;
    }
    return `${s} n'existe pas`;
  }
  
  findByCodePostal(cp: string): Personne[] {
    return this.personnes.filter(p => 
      p.getAdresses().some(a => a.getCodePostal() === cp)
    );
  }
  
  countPersonneVille(ville: string): number {
    return this.personnes.filter(p => 
      p.getAdresses().some(a => a.getVille() === ville)
    ).length;
  }
}
```

## Installation & Exécution
1. Compiler : `tsc`
2. Exécuter : `node test.js`

## Technologies
- TypeScript 
- Node.js
