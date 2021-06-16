import favoritesReducer from './favorites';
import selectedCityReducer from './selectedCity';
import unitsReducer from './units';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
	favorites: favoritesReducer,
	selectedCity: selectedCityReducer,
	units: unitsReducer
});

export default rootReducers;
