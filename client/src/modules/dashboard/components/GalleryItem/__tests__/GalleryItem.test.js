import React from 'react';
import renderer from 'react-test-renderer';
import GalleryItem from '../GalleryItem';
import { mockData } from 'constants/mockData';

const filter = Object.keys(mockData)[0];
const data = mockData[filter];
describe('GalleryItem', () => {
	let renderedInstance;
	beforeEach(() => {
		renderedInstance = renderer.create(
			<GalleryItem item={data[1]} />
		);
	});
	it('should render correctly', () => {
		expect(renderedInstance).toMatchSnapshot();
	});
});