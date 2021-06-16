import { getFromLocalStorage } from '../../helpers/dataHelpers';

const favoritesReducer = (state = getFromLocalStorage('favorites'), action) => {
	switch (action.type) {
		case 'ADD_FAVORITE':
			return [ ...state, action.payload.city ];
		case 'REMOVE_FAVORITE':
			return [ ...state.filter((f) => f.Key !== action.payload.key) ];
		default:
			return state;
	}
};

export default favoritesReducer;
