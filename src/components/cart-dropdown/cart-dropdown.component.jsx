import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import {selectCartItems} from '../../redux/cart/cart.selectors'

import CartItem from '../cart-item/cart-item.component'

import {CartDropdownContainer, CartItemsContainer, EmptyMessage, CustomButtonForDropdown} from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {   cartItems[0]
                ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
                :
                <EmptyMessage>Your cart is empty</EmptyMessage>
            }
        </CartItemsContainer>
        <CustomButtonForDropdown onClick={() => {toggleCartHidden();history.push('/checkout')}}>GO TO CHECKOUT</CustomButtonForDropdown>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));