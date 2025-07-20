let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

iconCart.addEventListener('click', () => {
    if (cart.style.right === '-100%') {
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    } else {
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
});

close.addEventListener('click', () => {
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
});

// 🧠 IMPORTANT: 'products' not 'product', and fix spelling from 'date' to 'data'
let products = [];

// fetch data from file
fetch('product.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHtml();  // 🛠 function name should match!
    });

// 🧠 Function name fixed: addDateToHtml → addDataToHtml
function addDataToHtml() {
    let listProductHtml = document.querySelector('.listProduct');
    listProductHtml.innerHTML = '';

    if (products != null && products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button>Add To Cart</button>
            `;
            listProductHtml.appendChild(newProduct);
        });
    }
}
