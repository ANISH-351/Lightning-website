import { cart } from "../data/cart.js";
import { getProduct } from "../data/class-project.js";
import { deliveryOption } from "../data/deliveryOption.js";

 

export function paymentSummary() {
    let productPriceCent = 0;
    let shippingPriceCent = 0;
    let taxCent = 0;
    let totalItems = 0;
     

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        

        productPriceCent += product.priceCents * cartItem.quantity;
        totalItems += cartItem.quantity

        let selectedDeliveryOption = deliveryOption[0]; // Default to the first option

        deliveryOption.forEach((option) => {
            if (option.id === cartItem.deliveryOptionId) {
                selectedDeliveryOption = option;
            }
        });

        shippingPriceCent += selectedDeliveryOption.priceCent;
    });

    let totalBeforeTax = productPriceCent + shippingPriceCent;
    taxCent = totalBeforeTax * 0.05;

    let totalCent = totalBeforeTax - taxCent;


    let paymentSummaryHTML = `
        <div class="payment-summary-title js-payment-summary-title">
            Order Summary 
        </div>

        <div class="total-items js-total-items" >(Total Items :${totalItems}) </div>
        
        

        <div class="payment-summary-row">
            <div class="total-item js-cart-quantity">Total MRP</div>
            <div class="payment-summary-money">₹${productPriceCent }</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">₹${shippingPriceCent }</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before discount :</div>
            <div class="payment-summary-money">₹${totalBeforeTax }</div>
        </div>

        <div class="payment-summary-row">
            <div>discount (5%):</div>
            <div class="payment-summary-money">- ₹${Math.round(taxCent)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">₹${Math.round(totalCent) }</div>
        </div>

        <button class="place-order-button button-primary js-place-order">
            Place your order
        </button>
    `;
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML
}
  