const selectedCityReducer = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_CITY':
			return action.payload.city;
		default:
			return state;
	}
};

export default selectedCityReducer;
