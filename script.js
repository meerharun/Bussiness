// script.js

// Toggle Menu
const navbar = document.getElementById('navbar');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Cart Item Counter
const cartIcon = document.querySelector('.cart');
const cartCounter = document.createElement('span');
cartCounter.className = 'cart-counter';
cartCounter.textContent = '0';
cartIcon.appendChild(cartCounter);

let cartItemCount = 0;

document.querySelectorAll('.pro .cart').forEach(cartButton => {
    cartButton.addEventListener('click', () => {
        cartItemCount++;
        cartCounter.textContent = cartItemCount;
    });
});
