import React from 'react';
import './reviewItmes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviwItems = ({product, handleRemoveCart}) => {
    const {id ,name ,price ,quantity,img} = product;
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-details'>
            <p className='product-title'>{name}</p>
            <p>price : <span className='orange-text'>{price}</span></p>
            <p>order quantity : <span className='orange-text'>{quantity}</span></p>
           </div>
           <button onClick={() =>handleRemoveCart(id)} className='btn-delete'> <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviwItems;