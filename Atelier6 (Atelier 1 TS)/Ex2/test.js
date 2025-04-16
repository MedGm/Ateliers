//cet fichier a ete cree par le compilateur typescript "tsc"

var AdresseJS = /** @class */ (function () {
    function AdresseJS(rue, ville, codePostal) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
    AdresseJS.prototype.getRue = function () {
        return this.rue;
    };
    AdresseJS.prototype.getVille = function () {
        return this.ville;
    };
    AdresseJS.prototype.getCodePostal = function () {
        return this.codePostal;
    };
    AdresseJS.prototype.setRue = function (rue) {
        this.rue = rue;
    };
    AdresseJS.prototype.setVille = function (ville) {
        this.ville = ville;
    };
    AdresseJS.prototype.setCodePostal = function (codePostal) {
        this.codePostal = codePostal;
    };
    return AdresseJS;
}());

var PersonneJS = /** @class */ (function () {
    function PersonneJS(nom, sexe) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = [];
    }
    PersonneJS.prototype.getNom = function () {
        return this.nom;
    };
    PersonneJS.prototype.getSexe = function () {
        return this.sexe;
    };
    PersonneJS.prototype.getAdresses = function () {
        return this.adresses;
    };
    PersonneJS.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    PersonneJS.prototype.setSexe = function (sexe) {
        this.sexe = sexe;
    };
    PersonneJS.prototype.setAdresses = function (adresses) {
        this.adresses = adresses;
    };
    return PersonneJS;
}());

var listePersonnesJS = /** @class */ (function () {
    function listePersonnesJS() {
        this.personnes = [];
    }
    listePersonnesJS.prototype.getPersonnes = function () {
        return this.personnes;
    };
    listePersonnesJS.prototype.setPersonnes = function (personnes) {
        this.personnes = personnes;
    };
    listePersonnesJS.prototype.findByNom = function (s) {
        for (var i = 0; i < this.personnes.length; i++) {
            if (this.personnes[i].getNom() === s) {
                return this.personnes[i];
            }
        }
        return s + " n'existe pas";
    };
    listePersonnesJS.prototype.findByCodePostal = function (cp) {
        var result = [];
        for (var i = 0; i < this.personnes.length; i++) {
            var adresses = this.personnes[i].getAdresses();
            for (var j = 0; j < adresses.length; j++) {
                if (adresses[j].getCodePostal() === cp) {
                    result.push(this.personnes[i]);
                    break;
                }
            }
        }
        return result;
    };
    listePersonnesJS.prototype.countPersonneVille = function (ville) {
        var count = 0;
        for (var i = 0; i < this.personnes.length; i++) {
            var adresses = this.personnes[i].getAdresses();
            for (var j = 0; j < adresses.length; j++) {
                if (adresses[j].getVille() === ville) {
                    count++;
                    break;
                }
            }
        }
        return count;
    };
    return listePersonnesJS;
}());

//on va faire un petit test

var a1 = new AdresseJS("Av Rif", "Tetouan", "93020");
var a2 = new AdresseJS("Av FAR", "Tetouan", "93000");
var a3 = new AdresseJS("Av Mhanech II", "Tetouan", "93000");

var liste = new listePersonnesJS();

var p1 = new PersonneJS("Mohamed", "Homme");
var p2 = new PersonneJS("Moussa", "Homme");
var p3 = new PersonneJS("Ismail", "Homme");
var p4 = new PersonneJS("Ikram", "Femme");

p1.setAdresses([a1]);
p2.setAdresses([a2]);
p3.setAdresses([a3]);
p4.setAdresses([a1, a2]);
liste.setPersonnes([p1, p2, p3, p4]);

console.log(liste.findByNom("Mohamed"));
console.log(liste.findByNom("Said"));

var result = liste.findByNom("Ikram");
if (result instanceof PersonneJS) {
    console.log(result.getNom());
    console.log(result.getSexe());
    console.log(result.getAdresses());
    console.log(result.getAdresses()[0].getCodePostal());
    console.log(result.getAdresses()[0].getVille());
    console.log(result.getAdresses()[0].getRue());
    console.log(result.getAdresses()[1].getCodePostal());
    console.log(result.getAdresses()[1].getVille());
    console.log(result.getAdresses()[1].getRue());
}
else {
    console.log("Personne pas trouvee");
}

console.log(liste.findByCodePostal("93000"));
console.log(liste.findByCodePostal("93020"));
console.log(liste.countPersonneVille("Tetouan"));
console.log(liste.countPersonneVille("Marrakech"));
