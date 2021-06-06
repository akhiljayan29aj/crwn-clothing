import React from 'react';
import { connect } from 'react-redux';
import { removeItems, removeItem, addItems } from '../../redux/cart/cart.actions';


import {CheckoutItemContainer,ImageContainer,TextContainer,QuantityContainer,RemoveCheckoutItemButton} from './check-out-item.styles';

const CheckoutItem = ({cartItem,removeItems, removeItem, addItems}) => {
    const {imageUrl, name, price, quantity} = cartItem;
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item'/>
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span>
            {quantity}
            </span>
            <div onClick={() => addItems(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveCheckoutItemButton onClick={() => removeItems(cartItem)}>&#10005;</RemoveCheckoutItemButton>


    </CheckoutItemContainer>
)};


const mapDispatchToProps = (dispatch) => ({
    removeItems: item => dispatch(removeItems(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItems: item => dispatch(addItems(item))
})




export default connect(null, mapDispatchToProps)(CheckoutItem);