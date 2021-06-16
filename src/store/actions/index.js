export const addFavorite = (city) => {
	return {
		type: 'ADD_FAVORITE',
		payload: {
			city
		}
	};
};

export const removeFavorite = (key) => {
	return {
		type: 'REMOVE_FAVORITE',
		payload: {
			key
		}
	};
};

export const updateCity = (city) => {
	return {
		type: 'UPDATE_CITY',
		payload: {
			city
		}
	};
};

export const updateUnits = (units) => {
	return {
		type: 'UPDATE_UNITS',
		payload: {
			units
		}
	};
};
