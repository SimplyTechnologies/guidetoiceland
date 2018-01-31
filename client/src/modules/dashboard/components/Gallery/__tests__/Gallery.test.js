import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { mockData } from 'constants/mockData';
import Gallery from '../Gallery';
import GalleryItem from '../../GalleryItem';

const data = mockData[Object.keys(mockData)[0]];

describe('Gallery', () => {
	let instance;
	let _rendered;

	beforeEach(() => {
		const component = (
			<Gallery
				data={data}
			/>
		);
		instance = mount(component);
		_rendered = renderer.create(component);
	});

	it('should render correctly', () => {
		expect(_rendered).toMatchSnapshot();
	});
	it(`should contain ${data.length} GalleryItem components`, () => {
		expect(instance.find(GalleryItem).length).toBe(data.length);
	});
});