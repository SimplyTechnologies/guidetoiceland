import React from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { mockData } from 'constants/mockData';
import classNames from 'classnames';
const buttons = Object.keys(mockData);

const isButtonSelected = (selectedButton, btn) => selectedButton === btn;

const addButtonColor = (selectedButton, btn) =>
	isButtonSelected(selectedButton, btn)
		? 'success'
		: 'secondary'

function FilterButtons({
	onPress,
	selectedButton
}) {
	return (
		<Container>
			<Row>
				{buttons.map(btn => (
					<Col
						key={btn}
						size={4}
						className={'filter-buttons-col'}
					>
						<Button
							className={
								classNames({
									'button': true,
									'unselected-button': !isButtonSelected(selectedButton, btn),
									'selected-button': isButtonSelected(selectedButton, btn)
								})
							}
							onClick={() => onPress(btn)}
						>
							{btn}
						</Button>
					</Col>
				))}
			</Row>
		</Container>
	)
}

FilterButtons.propTypes = {
	onPress: PropTypes.func.isRequired,
	selectedButton: PropTypes.string.isRequired
}

export default FilterButtons;