const unitsReducer = (state = 'Metric', action) => {
	switch (action.type) {
		case 'UPDATE_UNITS':
			return action.payload.units;
		default:
			return state;
	}
};

export default unitsReducer;
