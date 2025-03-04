
// Exercice 1 :

console.log("Exercice 1 :");
class voiture {

    constructor(marque, modele, annee, type, carburant) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }   
}

class Hyundai extends voiture {
    
    constructor(marque, modele, annee, type, carburant, serie, hybride) {
        super(marque, modele, annee, type, carburant);
        this.serie = serie;
        this.hybride = hybride;
    }

    alarmer() {
        console.log("Beep Beep");
    }
}

class Ford extends voiture {
    
    constructor(marque, modele, annee, type, carburant, options = []) {
        super(marque, modele, annee, type, carburant);
        this.options = options;
    }
}

const listeVoitures = [
    new voiture("Renault", "Clio", 2018, "Berline", "Essence"),
    new voiture("Peugeot", "308", 2019, "Compact", "Diesel"),
    new Hyundai("Hyundai", "Tucson", 2020, "SUV", "Diesel", "Premium", true),
    new Hyundai("Hyundai", "i30", 2017, "Compact", "Essence", "Style", false),
    new Ford("Ford", "Focus", 2021, "Berline", "Essence", ["GPS", "Toit ouvrant"]),
    new Ford("Ford", "Mustang", 2016, "Coupé", "Essence", ["Cuir", "Climatisation"])
];

function trierVoituresParAnnee(voitures) {
    return voitures.sort((a, b) => a.annee - b.annee);
}

function afficherVoitures(voitures) {
    console.log("Liste des voitures triées par année croissante :");
    voitures.forEach(voiture => {
        let details = `${voiture.marque} ${voiture.modele} (${voiture.annee}) - Type: ${voiture.type}, Carburant: ${voiture.carburant}`;
        
        if (voiture instanceof Hyundai) {
            details += `, Série: ${voiture.serie}, Hybride: ${voiture.hybride ? "Oui" : "Non"}`;
        } else if (voiture instanceof Ford) {
            details += `, Options: ${voiture.options.join(", ")}`;
        }
        
        console.log(details);
    });
}

const voituresTriees = trierVoituresParAnnee(listeVoitures);
afficherVoitures(voituresTriees);

// Exercice 2 :

console.log("\nExercice 2 :");
// Creer 2 objts natives Etudiant et Prof
function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
}

function Professeur(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;
}

Etudiant.prototype.etudier = function() {
    console.log(`${this.prenom} ${this.nom} est en train d etudier.`);
};

Professeur.prototype.enseigner = function() {
    console.log(`Professeur ${this.nom} est en train d enseigner.`);
};

const listeEtudiants = [
    new Etudiant("El Gorrim", "Mohamed", 20, "CNE12345"),
    new Etudiant("A", "etudiant", 22, "CNE54321"),
    new Etudiant("D", "etudiant", 19, "CNE11223"),
    new Etudiant("Z", "etudiant", 21, "CNE44556"),
];

// fonction de trie
function trierEtudiants(etudiants) {
    return etudiants.sort((a, b) => {
        if (a.nom === b.nom) {
            return a.prenom.localeCompare(b.prenom);
        }
        return a.nom.localeCompare(b.nom);
    });
}

// affiche des etudiants
console.log("Liste des étudiants triés par ordre alphabétique :");
const etudiantsTries = trierEtudiants(listeEtudiants);
etudiantsTries.forEach(etudiant => {
    console.log(`${etudiant.nom} ${etudiant.prenom}, ${etudiant.age} ans, CNE: ${etudiant.cne}`);
});

// Exercice 3 :

console.log("\nExercice 3 :");

class Vecteur2D {
    constructor(x = 1, y = 1) {
        this.x = x;
        this.y = y;
    }
    
    afficher() {
        console.log(`Vecteur(${this.x}, ${this.y})`);
    }
    
    additionner(autreVecteur) {
        return new Vecteur2D(this.x + autreVecteur.x, this.y + autreVecteur.y);
    }
}

class Rectangle {
    constructor(longueur = 0, largeur = 0) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }
    
    afficher() {
        console.log(`${this.nom} de longueur ${this.longueur} et de largeur ${this.largeur}`);
    }
    
    surface() {
        return this.longueur * this.largeur;
    }
}

// une classe Carre qui va heriter de classe Rectangle
class Carre extends Rectangle {
    constructor(cote = 0) {
        super(cote, cote);
        this.nom = "carré";
    }
}

class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
    
    afficher() {
        console.log(`Point(${this.x}, ${this.y})`);
    }
}

class Segment {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
    
    afficher() {
        console.log("Segment:");
        console.log("  Origine: "); this.orig.afficher();
        console.log("  Extrémité: "); this.extrem.afficher();
    }
}

//le programme principal pour cette exercice 3
console.log("\n--- Test Vecteur2D ---");
const v1 = new Vecteur2D();
const v2 = new Vecteur2D(3, 4);
console.log("Vecteur 1:");
v1.afficher();
console.log("Vecteur 2:");
v2.afficher();

console.log("\n--- Test Addition Vecteurs ---");
const v3 = new Vecteur2D(1, 2);
const v4 = new Vecteur2D(5, 7);
console.log("Vecteur 3:");
v3.afficher();
console.log("Vecteur 4:");
v4.afficher();
console.log("Somme des vecteurs:");
const somme = v3.additionner(v4);
somme.afficher();

console.log("\n--- Test Rectangle et Carré ---");
const rect = new Rectangle(5, 3);
const carre = new Carre(4);
rect.afficher();
console.log(`Surface du rectangle: ${rect.surface()}`);
carre.afficher();
console.log(`Surface du carré: ${carre.surface()}`);

console.log("\n--- Test Point et Segment ---");
const p1 = new Point(1, 2);
const p2 = new Point(4, 6);
console.log("Point 1:");
p1.afficher();
console.log("Point 2:");
p2.afficher();

const segment = new Segment(1, 2, 5, 6);
segment.afficher();
