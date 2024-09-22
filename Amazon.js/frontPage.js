import {cart, addToCart} from '../data/cart.js';
import { product } from '../data/class-project.js';
let productHTML = '';

product.forEach((product) =>{
  productHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>
          \u20b9${product.priceCents }

          <div class="product-price">
          </div> 

          ${product.extraInfoHTML()}

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;       
});

document.querySelector('.js-products').innerHTML = productHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    const productId = button.dataset.productId;
    addToCart(productId)
    updateCartQuantity()

 function updateCartQuantity(){
      
    let cartQuantity = 0;
    cart.forEach((cartItem)=>{
      cartQuantity += cartItem.quantity
    })
   let orderTotal = document.querySelector('.js-cart-quantity')
   .innerHTML = cartQuantity
    }

  });
});

