import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSuggestions } from '../../api/WeatherAPI';
import { updateCity } from '../../store/actions';
import CityData from './CityData';
import Forcasts from './Forcasts';

const DEFAULT_CITY_NAME = 'tel aviv';

function City() {
	const dispatch = useDispatch();
	const city = useSelector((state) => state.selectedCity);
	const cityKey = city.Key;

	const setDefaultCity = () => {
		return getSuggestions(DEFAULT_CITY_NAME)
			.then((res) => dispatch(updateCity(res.data[0])))
			.catch((err) => alert(err));
	};

	useEffect(
		() => {
			if (!cityKey) {
				setDefaultCity();
			}
		},
		[ cityKey ]
	);

	if (city.length === 0 && !cityKey) return null;

	return (
		<div
			className="d-flex flex-column align-items-center p-10 mt-5 w-100 card"
			style={{ background: 'rgba(100, 100, 100, 0.1)' }}
		>
			<CityData city={city} />
			<Forcasts cityKey={cityKey} />
		</div>
	);
}

export default City;
