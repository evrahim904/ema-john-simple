import React, { useState } from 'react';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviwItems from '../reviewItem/ReviwItems';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
      const savedCart = useLoaderData();
      const [cart , setCart] = useState(savedCart)
      console.log(savedCart);
      const handleRemoveCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
      }
      const handleClearCart = ()=>{
        setCart([]);
        deleteShoppingCart()

      }
    return (
        <div className='shop-container'>
           <div className="review-container">
            <h3>orders : {cart.length}</h3>
           {
            cart.map(product =><ReviwItems
            key = {product.id}
            product = {product}
            handleRemoveCart = {handleRemoveCart}
            ></ReviwItems>)
           }
           </div>
           <div className="cart-container">
            <Cart cart={cart}
            handleClearCart = {handleClearCart}
            >
            <Link to="checkout">procced checkout</Link>

            </Cart>
           </div>
        </div>
    );
};

export default Orders;