/**
 * Product Listing Page JavaScript
 * Fetches products from Fake Store API and displays them with filtering and sorting
 */


let allProducts = [];
let filteredProducts = [];


const productsGrid = document.getElementById('productsGrid');
const itemCount = document.getElementById('itemCount');
const sortSelect = document.getElementById('sortSelect');
const filterToggle = document.getElementById('filterToggle');
const sidebar = document.getElementById('sidebar');

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
    setupEventListeners();
});

/**
 * Fetch products from Fake Store API
 */
async function fetchProducts() {
    try {
        showLoading();
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        allProducts = products;
        filteredProducts = [...products];
        
        updateItemCount();
        renderProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
        showError();
    }
}

/**
 * Display loading message
 */
function showLoading() {
    productsGrid.innerHTML = '<div class="loading">Loading products...</div>';
}

/**
 * Display error message
 */
function showError() {
    productsGrid.innerHTML = '<div class="loading">Error loading products. Please try again later.</div>';
}

/**
 * Render products to the grid
 */
function renderProducts() {
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="loading">No products found.</div>';
        return;
    }

    const productsHTML = filteredProducts.map(product => createProductCard(product)).join('');
    productsGrid.innerHTML = productsHTML;
}

/**
 * Create HTML for individual product card
 * @param {Object} product - Product object from API
 * @returns {string} HTML string for product card
 */
function createProductCard(product) {
    const stars = generateStars(product.rating.rate);
    const categoryFormatted = product.category.toUpperCase();
    
    return `
        <div class="product-card">
            <img 
                src="${product.image}" 
                alt="${product.title}" 
                class="product-image"
            >
            <div class="product-info">
                <div class="product-category">${categoryFormatted}</div>
                <h2 class="product-title">${product.title}</h2>
                <div class="product-price">$${product.price}</div>
                <div class="product-rating">
                    <span class="stars">${stars}</span>
                    <span>(${product.rating.count})</span>
                </div>
            </div>
        </div>
    `;
}

/**
 * Generate star rating display
 * @param {number} rating - Rating value (0-5)
 * @returns {string} Star symbols
 */
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    let stars = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    
    // Add empty stars
    for (let i = fullStars; i < 5; i++) {
        stars += '☆';
    }
    
    return stars;
}

/**
 * Update the item count display
 */
function updateItemCount() {
    const count = filteredProducts.length;
    itemCount.textContent = `${count} ITEMS`;
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Sort functionality
    sortSelect.addEventListener('change', function() {
        sortProducts(this.value);
        renderProducts();
    });

    // Filter toggle for mobile
    filterToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(event.target) && !filterToggle.contains(event.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}

/**
 * Sort products based on selected option
 * @param {string} sortType - Type of sorting to apply
 */
function sortProducts(sortType) {
    switch (sortType) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'recommended':
        default:
            filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
            break;
    }
}
