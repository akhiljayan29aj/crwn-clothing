import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsToArray} from '../../redux/collections/collections.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps}/>)
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsToArray
})

export default connect(mapStateToProps)(CollectionOverview);