import React from 'react';

import { mockData } from 'constants/mockData';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import FilterButtons from '../FilterButtons';

describe('FilterButtons', () => {
	let instance;
	let renderedInstance;
	let onPressFn = jest.fn();

	beforeEach(() => {
		onPressFn.mockReset();
		instance = mount(
			<FilterButtons
				selectedButton={Object.keys(mockData)[0]}
				onPress={onPressFn}
			/>
		);
		renderedInstance = renderer.create(
			<FilterButtons
				selectedButton={Object.keys(mockData)[0]}
				onPress={onPressFn}
			/>
		);
	})
	it('should render correctly', () => {
		expect(renderedInstance).toMatchSnapshot();
	});
	it('should highlight selected button', () => {
		expect(instance.find('button').first().hasClass('selected-button')).toBe(true)
	});
	it('should invoke onPress prop', () => {
		const button = instance.find('button').first();
		const selectedFilter = Object.keys(mockData)[0];
		button.simulate('click');

		expect(onPressFn).toHaveBeenCalledWith(selectedFilter);
	});
});