import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentWeather } from '../../api/WeatherAPI';
import { updateCity } from '../../store/actions';
import TempretureText from '../TemperatureText';

function FavoriteData({ city }) {
	const dispatch = useDispatch();
	const cityKey = city.Key;
	const [ currentWeather, setCurrentWeather ] = useState([]);

	const setWeather = () => {
		return getCurrentWeather(cityKey).then((res) => setCurrentWeather(res.data[0])).catch((err) => alert(err));
	};

	const handleSelectCity = () => {
		dispatch(updateCity(city));
	};

	useEffect(
		() => {
			if (cityKey) setWeather();
		},
		[ cityKey ]
	);

	if (!cityKey || currentWeather.length === 0) return null;

	return (
		<Link
			className="d-flex flex-column align-items-center card p-4 mt-4 mr-4 justify-content-between text-decoration-none text-reset text-center"
			style={{ height: '200px', width: '200px' }}
			onClick={handleSelectCity}
			to="/"
		>
			<div className="d-flex flex-column align-items-center">
				<h5>{city.LocalizedName}</h5>
				<TempretureText type="current" data={currentWeather} />
			</div>

			<h4>{currentWeather.WeatherText}</h4>
		</Link>
	);
}

export default FavoriteData;
