const fs = require('fs');

function filtrerParCategorie(categorie) {
    const data = JSON.parse(fs.readFileSync('test.json', 'utf8'));
    
    if (!categorie) {
        const categories = [...new Set(data.map(item => item.category))];
        return categories;
    }
    
    return data.filter(item => item.category === categorie);
}

function CalculePrixTotal(categorie) {
    let data;
    
    if (categorie) {
        data = filtrerParCategorie(categorie);
    } else {
        data = JSON.parse(fs.readFileSync('test.json', 'utf8'));
    }
    
    return data.reduce((total, item) => total + item.price, 0);
}

function ProduitsFaibleStock(seuil = 5) {
    const data = JSON.parse(fs.readFileSync('test.json', 'utf8'));
    return data.filter(item => item.stock <= seuil);
}

function TriProduitsParPrix(categorie) {
    const data = filtrerParCategorie(categorie);
    return data.sort((a, b) => a.price - b.price);
}

function TriProduitsParStock(categorie) {
    const data = filtrerParCategorie(categorie);
    return data.sort((a, b) => a.stock - b.stock);
}

function RechercheParNom(nomRecherche) {
    const data = JSON.parse(fs.readFileSync('test.json', 'utf8'));
    if (!nomRecherche) return data;
    
    const nomRechercheLowerCase = nomRecherche.toLowerCase();
    return data.filter(item => 
        item.name.toLowerCase().includes(nomRechercheLowerCase)
    );
}

module.exports = {
    filtrerParCategorie,
    CalculePrixTotal,
    ProduitsFaibleStock,
    TriProduitsParPrix,
    TriProduitsParStock,
    RechercheParNom
};

