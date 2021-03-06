import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';

import {updateCollections} from '../../redux/collections/collections.actions'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
	state = {
		loading: true
	}
	unsubscribeFromSnapshot = null;

	componentDidMount(){
		const {updateCollections} = this.props;
		const collectionRef = firestore.collection('collections');

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({loading: false})
		})
	}

	render(){
		const {match} = this.props;
		const {loading} = this.state;
		return (<div className="shop-page">
			<Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner {...props} isLoading={loading}/>} />
			<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner {...props} isLoading={loading}/>}/>
		</div>)
	}
} 


const mapDispatchToProps = dispatch => ({
	updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
