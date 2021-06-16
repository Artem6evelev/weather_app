import React, { useEffect, useState } from 'react';
import { getForcast } from '../../api/WeatherAPI';
import { useSelector } from 'react-redux';
import Forcast from './Forcast';

function Forcasts({ cityKey }) {
	const units = useSelector((state) => state.units);
	const [ forcasts, setForcasts ] = useState([]);

	const setData = () => {
		return getForcast(cityKey, units === 'Metric').then((res) => setForcasts(res.data)).catch((err) => alert(err));
	};

	useEffect(
		() => {
			if (cityKey) setData();
		},
		[ cityKey, units ]
	);

	if (!cityKey || forcasts.length === 0) return null;

	return (
		<div className="ForcastsContainer d-flex flex-row justify-content-between flex-wrap p-3 w-100">
			{forcasts.DailyForecasts.map((d) => <Forcast key={d.EpochDate} day={d} />)}
		</div>
	);
}

export default Forcasts;
