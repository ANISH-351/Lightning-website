import { cart, removeFromCart, updateDeliveryOption } from "../data/cart.js";
import { getProduct} from "../data/class-project.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOption } from "../data/deliveryOption.js";
import {paymentSummary} from "./paymentSummary.js";
//import '../data/cart-class.js';
//import '../backend/backend-practice.js'


export function renderOrderSummary() {
    let cartHTML = '';

    cart.forEach((cartItem) => { 
        const productIdd = cartItem.productId; //getting product id

        const matchingProduct = getProduct(productIdd)// geting full details about product 


        let selectedDeliveryOption = deliveryOption[0]; // Default to the first option

        deliveryOption.forEach(option => {
          if (option.id === cartItem.deliveryOptionId) {
            selectedDeliveryOption = option;
          }
        });


        
        
        const today = dayjs();
        const deliveryDate = today.add(selectedDeliveryOption.deliveryDate, 'days');
        let date = deliveryDate.format('dddd, MMMM D');

        cartHTML += `
            <div class="cart-item-container js-cart-item-container${matchingProduct.id}">
                <div class="delivery-date">
                    Delivery Date: <span class="js-delivery-date">${date}</span>
                </div>

                <div class="cart-item-details-grid">
                    <img class="product-image" src="${matchingProduct.image}" />

                    <div class="cart-item-details">
                        <div class="product-name">${matchingProduct.name}</div> 
                        <div class="product-price">\u20b9${matchingProduct.priceCents}</div>
                        <div class="product-quantity">
                            <span>
                                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                            </span>
                            <button class="delete-quantity-link link-primary js-delete-link"
                                data-product-id="${matchingProduct.id}">
                                Delete
                            </button>
                        <div>
                            <button class="add-quantity-link js-add-quantity-link" data-product-id="${matchingProduct.id}">
                            Add
                            </button>

                            <button class="remove-quantity-link js-remove-quantity-link" data-product-id="${matchingProduct.id}">
                            Remove
                            </button>
                        </div>    
                        </div>
                    </div>

                    <div class="delivery-options">
                        <div class="delivery-options-title">
                            Choose a delivery option:
                        </div>
                        
                        ${deliveryOptionHTML(matchingProduct, cartItem)}
                    </div>
                </div>
            </div>`;
    });

    function deliveryOptionHTML(matchingProduct, cartItem) {
        let html = '';
        deliveryOption.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDate, 'days');
            const dateString = deliveryDate.format('dddd, MMMM D');

            const priceString = deliveryOption.priceCent === 0
                ? 'Free'
                : `₹${(deliveryOption.priceCent)} -`;

            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

            html += `
                <div class="delivery-option js-delivery-option">
                    <input type="radio"
                           ${isChecked ? 'checked' : ''}
                           class="delivery-option-input js-delivery-option-input"
                           name="${matchingProduct.id}"
                           data-product-id="${matchingProduct.id}"
                           data-delivery-option-id="${deliveryOption.id}">
                    <div>
                        <div class="delivery-option-date">${dateString}</div>
                        <div class="delivery-option-price">${priceString} Shipping</div>
                    </div>
                </div>`;
        });
        return html;
    }

    document.querySelector('.js-order-summary').innerHTML = cartHTML;

    // Event listener for delete buttons
    document.querySelectorAll('.js-delete-link').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);

            const container = document.querySelector(`.js-cart-item-container${productId}`);
            container.remove();

            // Recalculate and update the total quantity and cart item count
            updateCartSummary();
            paymentSummary()
        });
    });

    function updateCartSummary() {
        let cartQuantity = 0;
        cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });

        document.querySelector('.js-return-to-home-link').innerHTML = cartQuantity + ' item';
    }

    // Initial call to set the cart summary
    updateCartSummary();

    // Event listener for delivery option selection
    document.querySelectorAll('.js-delivery-option-input').forEach((input) => {
        input.addEventListener('click', (event) => {
            const productId = event.target.dataset.productId;
            const deliveryOptionId = event.target.dataset.deliveryOptionId;
            updateDeliveryOption(productId, deliveryOptionId);

            // Find the selected delivery option
            const selectedOption = deliveryOption.find(option => option.id === deliveryOptionId);
            const today = dayjs();
            const newDeliveryDate = today.add(selectedOption.deliveryDate, 'days').format('dddd, MMMM D');

            // Update the delivery date in the DOM
            document.querySelector(`.js-cart-item-container${productId} .js-delivery-date`).textContent = newDeliveryDate;
            paymentSummary()
            
        });
    });
        
    document.querySelectorAll('.js-add-quantity-link').forEach((button)=>{
        button.addEventListener('click',()=>{
            const productId = button.dataset.productId

            cart.forEach((cartItem)=>{
                if(cartItem.productId.trim() === productId){
                    cartItem.quantity +=1


            // Update the quantity in the DOM
            document.querySelector(`.js-cart-item-container${productId} .quantity-label`).textContent = cartItem.quantity;
       
            updateCartSummary()
            paymentSummary();
                }
            })
        })
    })    
    

    document.querySelectorAll('.js-remove-quantity-link').forEach((button)=>{
        button.addEventListener('click',()=>{
            const productId = button.dataset.productId

            cart.forEach((cartItem)=>{
                if(cartItem.productId.trim() === productId){
                    cartItem.quantity -=1

                    if(cartItem.quantity <=0){
                        removeFromCart(productId)
                          
                    const container = document.querySelector(`.js-cart-item-container${productId}`);
                    container.remove();
                    }else{ // Update the quantity in the DOM
                        document.querySelector(`.js-cart-item-container${productId} .quantity-label`).textContent = cartItem.quantity;
                     }
   
            updateCartSummary()
            paymentSummary();
                }
            })
        })
    })
      
}

renderOrderSummary();
paymentSummary()
