import React, { Component } from 'react';
import { FilterButtons, Gallery } from './components';
import { mockData } from 'constants/mockData';

class Dashboard extends Component {
	state = {
		filter: Object.keys(mockData)[0]
	};

	handleFilterPress = (filter) => {
		if (this.state.filter === filter) {
			return;
		}
		this.setState({ filter });
	}
	render() {
		const dataForGallery = mockData[this.state.filter];
		return (
			<div>
				<FilterButtons
					onPress={this.handleFilterPress}
					selectedButton={this.state.filter}
				/>
				<Gallery data={dataForGallery} />
			</div>
		);
	}
}

export default Dashboard;
