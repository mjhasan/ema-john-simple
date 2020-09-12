import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total, product) => total + product.price, 0)

    function taxInfo(num) {
        const taxAmount = num / 10;
        taxAmount.toFixed(2);
        return Number(taxAmount);
    }
    const tax = taxInfo(totalPrice);

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered : {cart.length}</p>
            <p><small>Tax + Vat : {tax}</small></p>
            <p>Total Price : ${totalPrice + tax}</p>
        </div>
    );
};

export default Cart;