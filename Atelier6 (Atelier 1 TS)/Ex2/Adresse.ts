class Adresse {
    private rue: string;
    private ville: string;
    private codePostal: string;

    constructor(rue: string, ville: string, codePostal: string) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }


    public getRue(): string {   
        return this.rue;
    }
    public getVille(): string {
        return this.ville;
    }
    public getCodePostal(): string {
        return this.codePostal;
    }

    public setRue(rue: string): void {
        this.rue = rue;
    }
    public setVille(ville: string): void {
        this.ville = ville;
    }
    public setCodePostal(codePostal: string): void {
        this.codePostal = codePostal;
    }
}

