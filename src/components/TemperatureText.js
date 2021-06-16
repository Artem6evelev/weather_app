import React from 'react';
import { useSelector } from 'react-redux';

function TemperatureText({ type, data }) {
	const units = useSelector((state) => state.units);

	if (!type || data.length === 0) return null;

	switch (type) {
		case 'current':
			if (units === 'Metric') {
				return <span>{data.Temperature.Metric.Value} &#8451;</span>;
			}
			return <span>{data.Temperature.Imperial.Value} &#8457;</span>;
		case 'forcast-lo':
			if (units === 'Metric') {
				return <span>{data.Temperature.Minimum.Value} &#8451;</span>;
			}
			return <span>{data.Temperature.Minimum.Value} &#8457;</span>;
		case 'forcast-hi':
			if (units === 'Metric') {
				return <span>{data.Temperature.Maximum.Value} &#8451;</span>;
			}
			return <span>{data.Temperature.Maximum.Value} &#8457;</span>;
		default:
			return null;
	}
}

export default TemperatureText;
