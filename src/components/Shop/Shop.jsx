import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    
    useEffect(()=>{
        const storedCart = getShoppingCart();
        // console.log(storedCart)
        const savedCart =[];
        for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
    }
        console.log(addedProduct)
        }
        setCart(savedCart)
    },[products])

    const handleAddCart = (product)=>{
        // const newCart = [...cart, product];
        let newCart =[];
        const exist = cart.find(pd => pd.id === product.id)
        if(!exist){
            product.quantity = 1;
            newCart =[...cart, product]
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter( pd => pd.id !== product.id);
            newCart =[...remaining, exist]
        }
        setCart(newCart);
        addToDb(product.id)
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