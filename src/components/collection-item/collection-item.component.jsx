import React from 'react';
import { connect } from 'react-redux'

import {addItems} from '../../redux/cart/cart.actions'

import {CollectionItemContainer,CollectionItemImage,CollectionFooterContainer,CustomButtonForCollectionItem} from './collection-item.styles';

const CollectionItem = ({ item, addItems }) => {
	const {imageUrl, price, name} = item;
	return(
	<CollectionItemContainer>
		<CollectionItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
		<CollectionFooterContainer>
			<span>{name}</span>
			<span>{price}</span>
		</CollectionFooterContainer>
		<CustomButtonForCollectionItem onClick={() => addItems(item)} inverted> ADD TO CART </CustomButtonForCollectionItem>
	</CollectionItemContainer>
)};

const mapDispatchToProps = (dispatch) => ({
	addItems: (item) => dispatch(addItems(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
