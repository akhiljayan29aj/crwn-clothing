import React from 'react';


import './check-out-item.styles.scss';

const CheckoutItem = ({cartItem:{imageUrl, name, price, quantity}}) => (
    <div className="checkout-item">
        <dive className="image-container">
            <img src={imageUrl} alt='item'/>
        </dive>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">&#10005;</div>


    </div>
);



export default CheckoutItem;