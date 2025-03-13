let products = [];
let filteredProducts = [];
const LOW_STOCK_THRESHOLD = 5;
let categoryChart, priceChart, stockChart;

async function loadProducts() {
    try {
        const response = await fetch('./test.json');
        if (response.ok) {
            products = await response.json();
        } else {
            products = [{ "name": "Ordinateur portable", "price": 999, "category": "Électronique", "stock": 10 }];
        }
        filteredProducts = [...products];
        populateCategoryFilter();
        renderProducts();
        updateSummary();
        initializeCharts();
        setupEventListeners();
    } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
        document.getElementById('fileStatus').innerHTML =
            '<div class="alert alert-info">Veuillez charger un fichier JSON contenant vos données de produits.</div>';
    }
}

function populateCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');

    categoryFilter.innerHTML = '<option value="">Toutes les catégories</option>';
    
    const categories = [...new Set(products.map(product => product.category))];
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function setupEventListeners() {
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('sortBy').addEventListener('change', applyFilters);
    document.getElementById('lowStockBtn').addEventListener('click', showLowStockProducts);
    
    if (document.getElementById('loadFileBtn')) {
        document.getElementById('loadFileBtn').addEventListener('click', loadProductsFromFile);
    }
}

function loadProductsFromFile() {
    const fileInput = document.getElementById('fileInput');
    const statusDiv = document.getElementById('fileStatus');
    
    if (!fileInput.files || fileInput.files.length === 0) {
        statusDiv.innerHTML = '<div class="alert alert-danger">Veuillez sélectionner un fichier JSON.</div>';
        return;
    }
    
    const file = fileInput.files[0];
    if (!file.name.endsWith('.json')) {
        statusDiv.innerHTML = '<div class="alert alert-danger">Le fichier doit être au format JSON.</div>';
        return;
    }
    
    statusDiv.innerHTML = '<div class="alert alert-info">Chargement du fichier...</div>';
    
    const reader = new FileReader();
    
    reader.onload = function(event) {
        try {
            const jsonData = JSON.parse(event.target.result);
            processProductData(jsonData);
            statusDiv.innerHTML = '<div class="alert alert-success">Fichier chargé avec succès!</div>';
        } catch (error) {
            console.error('Erreur lors de l\'analyse du fichier JSON:', error);
            statusDiv.innerHTML = `<div class="alert alert-danger">Le fichier n'est pas un JSON valide. Erreur: ${error.message}</div>`;
        }
    };
    reader.onerror = function() {
        statusDiv.innerHTML = '<div class="alert alert-danger">Erreur lors de la lecture du fichier.</div>';
    };
    
    reader.readAsText(file);
}

function processProductData(data) {
    products = data;
    filteredProducts = [...products];
    populateCategoryFilter();
    renderProducts();
    updateSummary();
    initializeCharts();
}

function filterProductsByCategory(category) {
    if (!category) return products;
    return products.filter(product => product.category === category);
}

function searchProductsByName(query) {
    if (!query) return products;
    const normalizedQuery = query.toLowerCase();
    return products.filter(product => product.name.toLowerCase().includes(normalizedQuery));
}

function findLowStockProducts() {
    return products.filter(product => product.stock <= LOW_STOCK_THRESHOLD);
}

function sortProducts(productsToSort, sortCriterion) {
    return [...productsToSort].sort((a, b) => {
        if (sortCriterion === 'price') return a.price - b.price;
        if (sortCriterion === 'stock') return a.stock - b.stock;
        return a.name.localeCompare(b.name);
    });
}

function calculateTotalPrice(productsToCalculate) {
    return productsToCalculate.reduce((sum, product) => sum + product.price, 0);
}

function renderProducts() {
    const productsListElement = document.getElementById('productsList');
    productsListElement.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsListElement.innerHTML = '<div class="col-12"><p class="alert alert-info">Aucun produit trouvé</p></div>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCol = document.createElement('div');
        productCol.className = 'col-md-4 col-lg-3';
        const productCard = document.createElement('div');
        productCard.className = 'card h-100';
        if (product.stock <= LOW_STOCK_THRESHOLD) {
            productCard.classList.add('border-danger');
        }
        
        productCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text"><strong>Prix:</strong> ${product.price} DH</p>
                <p class="card-text"><strong>Catégorie:</strong> ${product.category}</p>
                <p class="card-text">
                    <strong>Stock:</strong> 
                    <span class="${product.stock <= LOW_STOCK_THRESHOLD ? 'text-danger fw-bold' : ''}">${product.stock}</span>
                </p>
            </div>
        `;
        
        productCol.appendChild(productCard);
        productsListElement.appendChild(productCol);
    });
}

function calculerPrixTotalSansStock(produitsCalcul) {
	return produitsCalcul.reduce((sum, produit) => sum + produit.price, 0);
}

function calculerPrixTotalAvecStock(produitsCalcul) {
	return produitsCalcul.reduce((sum, produit) => sum + (produit.price * produit.stock), 0);
}

function updateSummary() {
	document.getElementById('productCount').textContent = filteredProducts.length;
	document.getElementById('totalPrice').textContent = `${calculerPrixTotalSansStock(filteredProducts)} DH `;
	document.getElementById('totalPriceWithStock').textContent = `${calculerPrixTotalAvecStock(filteredProducts)} DH    `;
}

function applyFilters() {
    const categoryValue = document.getElementById('categoryFilter').value;
    const searchValue = document.getElementById('searchInput').value;
    const sortValue = document.getElementById('sortBy').value;
    let results = products;
    
    if (categoryValue) {
        results = results.filter(product => product.category === categoryValue);
    }
    
    if (searchValue) {
        results = results.filter(product => 
            product.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
    
    results = sortProducts(results, sortValue);
    filteredProducts = results;
    renderProducts();
    updateSummary();
}

function showLowStockProducts() {
    filteredProducts = findLowStockProducts();
    renderProducts();
    updateSummary();
    
    document.getElementById('categoryFilter').value = '';
    document.getElementById('searchInput').value = '';
}

function initializeCharts() {
    if (categoryChart) categoryChart.destroy();
    if (priceChart) priceChart.destroy();
    if (stockChart) stockChart.destroy();
    
    createCategoryChart();
    createPriceChart();
    createStockChart();
}

function createCategoryChart() {
    const categoryData = {};
    products.forEach(product => {
        if (categoryData[product.category]) {
            categoryData[product.category]++;
        } else {
            categoryData[product.category] = 1;
        }
    });
    
    const ctx = document.getElementById('categoryChart').getContext('2d');
    categoryChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(categoryData),
            datasets: [{
                label: 'Produits par catégorie',
                data: Object.values(categoryData),
                backgroundColor: [
                    '#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6',
                    '#1abc9c', '#d35400', '#34495e', '#7f8c8d', '#2c3e50'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribution par catégorie'
                }
            }
        }
    });
}

function createPriceChart() {
    const ctx = document.getElementById('priceChart').getContext('2d');
    priceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: products.map(product => product.name),
            datasets: [{
                label: 'Prix (DH)',
                data: products.map(product => product.price),
                backgroundColor: 'rgba(52, 152, 219, 0.7)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Prix des produits'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Prix (DH)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Produit'
                    },
                    ticks: {
                        maxRotation: 90,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

function createStockChart() {
    const ctx = document.getElementById('stockChart').getContext('2d');
    stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: products.map(product => product.name),
            datasets: [{
                label: 'Niveau de stock',
                data: products.map(product => product.stock),
                borderColor: 'rgba(46, 204, 113, 1)',
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                tension: 0.1,
                fill: true
            }, {
                label: 'Seuil de stock faible',
                data: products.map(() => LOW_STOCK_THRESHOLD),
                borderColor: 'rgba(231, 76, 60, 1)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Niveaux de stock'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Quantité en stock'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Produit'
                    },
                    ticks: {
                        maxRotation: 90,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);