import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUnits } from '../store/actions';

const Button = ({ label, onClick }) => {
	return (
		<button className="dropdown-item" type="button" onClick={onClick}>
			{label}
		</button>
	);
};

function UnitSwitch() {
	const dispatch = useDispatch();

	const setUnits = (val) => {
		dispatch(updateUnits(val));
	};

	return (
		<div className="dropdown">
			<button
				className="btn btn-secondary dropdown-toggle"
				type="button"
				id="dropdownMenu2"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
			>
				Units
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
				<Button label="Metric" onClick={() => setUnits('Metric')} />
				<Button label="Imperial" onClick={() => setUnits('Imperial')} />
			</div>
		</div>
	);
}

export default UnitSwitch;
