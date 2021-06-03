import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectSections} from '../../redux/directory/directory.selectors'

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';



const Directory = ({sections}) => (
	
	<div className="directory-menu">
		{sections.map(({ id, ...otherSectionprops }) => (
			<MenuItem {...otherSectionprops} key={id} />
		))}
	</div>
	
)

const mapStatesToProps = createStructuredSelector({
	sections: selectSections
})

export default connect(mapStatesToProps)(Directory);
