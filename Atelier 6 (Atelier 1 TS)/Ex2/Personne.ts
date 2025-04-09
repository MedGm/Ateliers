class Personne {
    private nom: string;
    private sexe: string;
    private adresses: Adresse[];

    constructor(nom: string, sexe: string) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = [];
    }

    public getNom(): string {
        return this.nom;
    }
    public getSexe(): string {
        return this.sexe;
    }
    public getAdresses(): Adresse[] {
        return this.adresses;
    }
    
    public setNom(nom: string): void {
        this.nom = nom;
    }
    public setSexe(sexe: string): void {
        this.sexe = sexe;
    }
    public setAdresses(adresses: Adresse[]): void {
        this.adresses = adresses;
    }
}