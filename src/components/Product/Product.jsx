import React from 'react';
import './/Product.css'
const Product = (props) => {
    // console.log(props.product)
    const {img, name, seller,ratings, quantity,price} =props.product;

    const handleAddCart = props.handleAddCart;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
           <p>price: {price}</p>
           <p>manufactuurar: {seller}</p>
           <p>rate: {ratings}stars</p>
           </div>
           <button onClick={() =>handleAddCart(props.product)} className='btn-cart'>add to cart</button>
        </div>
    );
};

export default Product;