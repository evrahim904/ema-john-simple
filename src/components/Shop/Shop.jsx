import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data=>setProduct(data))
    },[])

    const handleAddCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                   products.map(product => <Product
                   key = {product.id}
                   product = {product}
                   handleAddCart ={handleAddCart}
                   ></Product>) 
                }
            </div>


            <div className="cart-container">
              {/* <h4>cart summary</h4>
              <p>selected item: {cart.length}</p> */}
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Shop;