document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const cartProducts = document.querySelector('.cart__products');

    products.forEach(product => {
        const productId = product.getAttribute('data-id');
        const addButton = product.querySelector('.product__add');
        const quantityValue = product.querySelector('.product__quantity-value');
        
        addButton.addEventListener('click', function() {
            const quantity = parseInt(quantityValue.textContent);
            
            let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}}`);
                
            if (cartProduct) {
                const cartProductCount = cartProduct.querySelector('.cart__product-count');
                const currentCount = parseInt(cartProductCount.textContent);
                cartProductCount.textContent = currentCount + quantity;
            } else {
                const productTitle = product.querySelector('.product__title').textContent;
                const productImage = product.querySelector('.product__image').src;
                    
                const newCartProduct = document.createElement('div');
                newCartProduct.className = 'cart__product';
                newCartProduct.setAttribute('data-id', productId);
                    
                newCartProduct.innerHTML = `
                    <img class="cart__product-image" src="${productImage}">
                    <div class="cart__product-count">${quantity}</div>
                `;
                    
                cartProducts.appendChild(newCartProduct);
            }
                
            quantityValue.textContent = '1'; // Сброс количества товара после добавления в корзину
        });
        
        const decButton = product.querySelector('.product__quantity-control_dec');
        const incButton = product.querySelector('.product__quantity-control_inc');
        
        decButton.addEventListener('click', function() {
            let quantity = parseInt(quantityValue.textContent);
            if (quantity > 1) {
                quantity--;
                quantityValue.textContent = quantity;
            }
        });
        
        incButton.addEventListener('click', function() {
            let quantity = parseInt(quantityValue.textContent);
            quantity++;
            quantityValue.textContent = quantity;
        });
    });
});