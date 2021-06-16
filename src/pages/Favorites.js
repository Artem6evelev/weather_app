import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteData from '../components/favorites/FavoriteData';

function Favorites() {
	const favorites = useSelector((state) => state.favorites);

	if (favorites.length === 0) {
		return <h2 className="text-center mt-5 text-white">No favorites yet...</h2>;
	}

	return (
		<div className="FavoritesContainer d-flex flex-row flex-wrap p-4 w-100">
			{favorites.map((city) => <FavoriteData key={city.Key} city={city} />)}
		</div>
	);
}

export default Favorites;
