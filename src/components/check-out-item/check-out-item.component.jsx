import React from 'react';
import { connect } from 'react-redux';
import { removeItems, removeItem, addItems } from '../../redux/cart/cart.actions';


import './check-out-item.styles.scss';

const CheckoutItem = ({cartItem,removeItems, removeItem, addItems}) => {
    const {imageUrl, name, price, quantity} = cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item'/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <div className="value">
            {quantity}
            </div>
            <div className="arrow" onClick={() => addItems(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => removeItems(cartItem)}>&#10005;</div>


    </div>
)};


const mapDispatchToProps = (dispatch) => ({
    removeItems: item => dispatch(removeItems(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItems: item => dispatch(addItems(item))
})




export default connect(null, mapDispatchToProps)(CheckoutItem);