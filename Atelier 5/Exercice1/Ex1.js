const userData = {
    nom: 'John Doe',
    email: 'johndoe@exemple.com',
    avatar: 'avatar.png',
    genre: 'M',
    identifiant: 'johndoe123',
    motDePasse: 'motdepasse',
    adresse: 'Boukhalef, Tanger, Maroc',
    telephone: '+123456789',
    dateNaissance: '08-01-2005'
};

//fonction asynchrone
function getData(data, delai) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject(new Error("Erreur lors de la récupération des données"));
            }
        }, delai);
    });
}

const getUserData = () => getData(userData, 3000);

//fonction qui retourne une promise pour les commandes de user
const getUserCommands = idUtilisateur => getData([
    { id: 1, produit: 'PC Portable', prix: 4000 },
    { id: 2, produit: 'Téléphone', prix: 1500 },
    { id: 3, produit: 'Écouteurs', prix: 50 }
], 1500);

const updateElement = (idElement, html) => {
    const element = document.getElementById(idElement);
    if (element) element.innerHTML = html;
};

//afficher les informations du profil user
async function showUserProfile() {
    try {
        const utilisateur = await getUserData();
        
        updateElement('profile-container', `
            <div class="profile">
                <div class="profile-header">
                    <img src="${utilisateur.avatar}" alt="${utilisateur.nom}" class="avatar">
                    <h2>${utilisateur.nom}</h2>
                </div>
                <div class="profile-info">
                    <p><strong>Email:</strong> ${utilisateur.email}</p>
                    <p><strong>Genre:</strong> ${utilisateur.genre === 'M' ? 'Homme' : 'Femme'}</p>
                    <p><strong>Identifiant:</strong> ${utilisateur.identifiant}</p>
                    <p><strong>Adresse:</strong> ${utilisateur.adresse}</p>
                    <p><strong>Téléphone:</strong> ${utilisateur.telephone}</p>
                    <p><strong>Date de naissance:</strong> ${utilisateur.dateNaissance}</p>
                </div>
            </div>
        `);
        
        //chainer les promises
        const commandes = await getUserCommands(utilisateur.identifiant);
        showUserCommands(commandes);
        
    } catch (erreur) {
        console.error('Erreur:', erreur);
        updateElement('profile-container', '<div class="error">Échec du chargement du profil</div>');
    }
}

// Afficher la liste des commandes de l'utilisateur
function showUserCommands(commandes) {
    const htmlCommandes = `
        <div class="orders">
            <h3>Commandes de l'utilisateur</h3>
            <ul>
                ${commandes.map(commande => `<li>Commande n°${commande.id}: ${commande.produit} - ${commande.prix} DH</li>`).join('')}
            </ul>
        </div>
    `;
    
    updateElement('orders-container', htmlCommandes);
}

function showUserTable(utilisateurs) {
    updateElement('users-table-container', `
        <table class="users-table">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Identifiant</th>
                    <th>Adresse</th>
                    <th>Téléphone</th>
                </tr>
            </thead>
            <tbody>
                ${utilisateurs.map(utilisateur => `
                    <tr>
                        <td>${utilisateur.nom || utilisateur.name}</td>
                        <td>${utilisateur.email}</td>
                        <td>${utilisateur.identifiant || utilisateur.login}</td>
                        <td>${utilisateur.adresse || utilisateur.address}</td>
                        <td>${utilisateur.telephone || utilisateur.phone}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `);
}

window.onload = function() {
    showUserProfile();
    
    //plusieurs users dans un tableau
    showUserTable([
        userData,
        {
            nom: 'JavaScript Developer',
            email: 'js.dev@exemple.com',
            avatar: 'js-avatar.png',
            genre: 'M',
            identifiant: 'jsNinja42',
            motDePasse: 'EcmaScript',
            adresse: '123 Promise Av, NodeJS City',
            telephone: '+1234567891',
            dateNaissance: '04-12-1995'
        }
    ]);
};