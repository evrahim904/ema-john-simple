import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart ,handleClearCart, children}) => {
    // const cart = props.cart;
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        //  if(product.quantity === 0){
        //     product.quantity = 1;
        //  }
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice  + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tex = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tex;
    return (
        <div className='cart'>
            <h4>Cart summary</h4>
            <p>Selcted items: {quantity}</p>
            <p>Total price: {totalPrice}</p>
            <p>Total shipping: {totalShipping}</p>
            <p>tex:{tex.toFixed(2)}</p>
            <h6>Grand total: {grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
               <span> clear cart</span>
            <FontAwesomeIcon  className='delete-icon-bar' icon={faTrashAlt}/>
            </button>
           { children}
        </div>
    );
};

export default Cart;