import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

function GalleryItem({ item }) {
	return (
		<Col
			xs={12}
			sm={6}
			md={4}
			lg={2}
			style={{
				background: `url(${item.src}) center center no-repeat`,
				height: '300px',
				backgroundSize: 'cover',
			}}	
			className={'col animated fadeInUp gallery-col'}
		>
			<div className={'gallery-item-title'}>
				<span>{item.title}</span>
			</div>
			<div className={'gallery-item-description'}>
				<span>{item.description}</span>
			</div>
		</Col>
	);
}

GalleryItem.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		src: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	})
};

export default GalleryItem;