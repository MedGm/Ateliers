class listePersonnes {
    personnes: Personne[];

    constructor() {
        this.personnes = [];
    }

    public getPersonnes(): Personne[] {
        return this.personnes;
    }
    
    public setPersonnes(personnes: Personne[]): void {
        this.personnes = personnes;
    }

    public findByNom(s: string): Personne | string {
        for (let i = 0; i < this.personnes.length; i++) {
            if (this.personnes[i].getNom() === s) {
                return this.personnes[i];
            }
        }
        return s + " n'existe pas";
    }

    public findByCodePostal(cp: string): Personne[] {
        let result: Personne[] = [];
        for (let i = 0; i < this.personnes.length; i++) {
            let adresses = this.personnes[i].getAdresses();
            for (let j = 0; j < adresses.length; j++) {
                if (adresses[j].getCodePostal() === cp) {
                    result.push(this.personnes[i]);
                    break;
                }
            }
        }
        return result;
    }

    public countPersonneVille(ville: string): number {
        let count = 0;
        for (let i = 0; i < this.personnes.length; i++) {
            let adresses = this.personnes[i].getAdresses();
            for (let j = 0; j < adresses.length; j++) {
                if (adresses[j].getVille() === ville) {
                    count++;
                    break;
                }
            }
        }
        return count;
    }
}