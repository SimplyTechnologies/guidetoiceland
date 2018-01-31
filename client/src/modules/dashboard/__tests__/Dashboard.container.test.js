import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Dashboard from '../Dashboard.container';
import { FilterButtons, Gallery } from '../components'
describe('Dashboard.container', () => {
	let instance;
	let rendered;
	
	beforeEach(() => {
		const component = <Dashboard />
		instance = mount(component);
		rendered = renderer.create(component);
	});

	it('should render correctly', () => {
		expect(rendered).toMatchSnapshot();
	});
	it('should container FilterButons and Gallery components', () => {
		expect(instance.find(FilterButtons).length).toBe(1);
		expect(instance.find(Gallery).length).toBe(1);
	})
});