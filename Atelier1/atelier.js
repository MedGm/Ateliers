// Exercice 1: Table de multiplication
function tableMultiplication() {
    let val = parseInt(prompt("Entrez une valeur pour la table de multiplication:"), 10);
    if (isNaN(val)) return;
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${val} x ${i} = ${val * i}\n`;
    }
    document.getElementById("ex1-result").textContent = res;
}

// Exercice 2: PGCD de deux entiers
function pgcd() {
    let a = parseInt(prompt("Entrez le premier entier:"), 10);
    let b = parseInt(prompt("Entrez le deuxième entier:"), 10);
    if (isNaN(a) || isNaN(b)) return;
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    document.getElementById("ex2-result").textContent = "Le PGCD est: " + Math.abs(a);
}

// Exercice 3: Somme des chiffres d’un entier
function sumDigits() {
    const n = document.getElementById("ex3-input").value.trim();
    if (!n.match(/^\d+$/)) {
        document.getElementById("ex3-result").textContent = "Veuillez entrer un entier positif.";
        return;
    }
    let sum = 0;
    for (let ch of n)
        sum += parseInt(ch, 10);
    document.getElementById("ex3-result").textContent = "La somme des chiffres est: " + sum;
}

// Exercice 4: Opérations sur matrices (en utilisant console)
// Les matrices seront de taille 2x2 pour l'exemple.
function addMatrices(m1, m2) {
    return m1.map((row, i) => row.map((val, j) => val + m2[i][j]));
}

function subtractMatrices(m1, m2) {
    return m1.map((row, i) => row.map((val, j) => val - m2[i][j]));
}

function multiplyMatrices(m1, m2) {
    let result = [];
    for (let i = 0; i < m1.length; i++) {
        result[i] = [];
        for (let j = 0; j < m2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function transposeMatrix(m) {
    return m[0].map((_, i) => m.map(row => row[i]));
}

function runMatrixOperations() {
    const A = [[1, 2], [3, 4]];
    const B = [[5, 6], [7, 8]];
    console.log("Addition:", addMatrices(A, B));
    console.log("Soustraction:", subtractMatrices(A, B));
    console.log("Multiplication:", multiplyMatrices(A, B));
    console.log("Transposé de A:", transposeMatrix(A));
    document.getElementById("ex4-result").textContent = "Voir la console pour les résultats des opérations sur matrices.";
}

// Exercice 5: Conversion décimal -> binaire par récursivité
function decToBinary(n) {
    n = parseInt(n, 10);
    if (isNaN(n)) return "";
    if (n === 0) return "0";
    function convert(num) {
        return num === 0 ? "" : convert(Math.floor(num / 2)) + (num % 2);
    }
    return convert(n);
}

function runDecToBinary() {
    let n = prompt("Entrez un nombre décimal:");
    let binary = decToBinary(n);
    document.getElementById("ex5-result").textContent = `Binaire: ${binary}`;
}

// Exercice 6: Calculatrice arithmétique sur deux champs de type text
function calcArithmetic() {
    const num1 = parseFloat(document.getElementById("calc-num1").value);
    const num2 = parseFloat(document.getElementById("calc-num2").value);
    const op = document.querySelector('input[name="calc-op"]:checked').value;
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("calc-result").textContent = "Entrées invalides.";
        return;
    }
    let result;
    switch (op) {
        case "+": result = num1 + num2; 
        break;
        case "-": result = num1 - num2; 
        break;
        case "*": result = num1 * num2; 
        break;
        case "/": result = num2 !== 0 ? num1 / num2 : "Division par zéro"; 
        break;
        default: result = "Opération inconnue";
    }
    document.getElementById("calc-result").textContent = "Résultat: " + result;
}

// Exercice 7: Validation du formulaire d’inscription
function validateForm() {
    const email = document.getElementById("reg-email").value.trim();
    const tel = document.getElementById("reg-tel").value.trim();
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("reg-confirm").value;
    const requiredFields = ["reg-nom", "reg-prenom", "reg-adresse", "reg-email", "reg-login", "reg-password", "reg-confirm", "reg-tel", "reg-civilite", "reg-pays"];
    let errors = [];

    requiredFields.forEach(id => {
        if (!document.getElementById(id).value.trim())
            errors.push(`Le champ ${id.replace("reg-","")} est obligatoire.`);
    });
    // Email regex basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errors.push("L'email n'est pas valide.");
    // Numéro de téléphone (ex: chiffres et espaces autorisés)
    const telRegex = /^[0-9\s\-()+]+$/;
    if (!telRegex.test(tel)) errors.push("Le numéro de téléphone n'est pas valide.");
    if (password !== confirmPassword) errors.push("Les mots de passe doivent être identiques.");

    let resDiv = document.getElementById("ex7-result");
    if (errors.length > 0) {
        resDiv.textContent = errors.join(" ");
    } else {
        resDiv.textContent = "Formulaire validé.";
    }
}

// Exercice 8: Carrousel d'images
let carouselImages = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
let currentImageIndex = 0;
function showCarouselImage() {
    document.getElementById("carousel-img").src = carouselImages[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showCarouselImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showCarouselImage();
}

// Attacher les événements une fois le DOM chargé
document.addEventListener("DOMContentLoaded", () => {
    // Exercice 1
    document.getElementById("ex1-btn").addEventListener("click", tableMultiplication);
    // Exercice 2
    document.getElementById("ex2-btn").addEventListener("click", pgcd);
    // Exercice 3
    document.getElementById("ex3-btn").addEventListener("click", sumDigits);
    // Exercice 4
    document.getElementById("ex4-btn").addEventListener("click", runMatrixOperations);
    // Exercice 5
    document.getElementById("ex5-btn").addEventListener("click", runDecToBinary);
    // Exercice 6
    document.getElementById("calc-btn").addEventListener("click", calcArithmetic);
    // Exercice 7
    document.getElementById("reg-btn").addEventListener("click", validateForm);
    // Exercice 8
    document.getElementById("next-btn").addEventListener("click", nextImage);
    document.getElementById("prev-btn").addEventListener("click", prevImage);
    showCarouselImage();
});
