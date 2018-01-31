import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import GalleryItem from '../GalleryItem';

function Gallery({ data }) {
	return (
		<Row style={{ justifyContent: 'space-between' }}>
			{data.map(item => (
				<GalleryItem
					key={item.id}
					item={item}
				/>
			))}
		</Row>
	)
}

Gallery.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Gallery;