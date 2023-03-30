import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart = props.cart;
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice  + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tex = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tex;
    return (
        <div className='cart'>
            <h4>Cart summary</h4>
            <p>Selcted items: {cart.length}</p>
            <p>Total price: {totalPrice}</p>
            <p>Total shipping: {totalShipping}</p>
            <p>tex:{tex.toFixed(2)}</p>
            <h6>Grand total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;