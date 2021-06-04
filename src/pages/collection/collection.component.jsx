import React from 'react';
import {connect} from 'react-redux'
import { selectCollection} from '../../redux/collections/collections.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss'

const CollectionPage = ({collection}) => {
    return(
    <div className="collection-page">
        <h2 className="title">{collection.title.toUpperCase()} PAGE</h2>
        <div className="items">

        {
            collection.items.map(item => (<CollectionItem key={item.id} item={item} />))
        }
        </div>
    </div>
)}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);