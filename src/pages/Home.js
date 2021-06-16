import React from 'react';
import SearchBar from '../components/home/SearchBar';
import City from '../components/home/City';

function Home() {
	return (
		<div className="d-flex flex-column align-items-center">
			<SearchBar />
			<City />
		</div>
	);
}

export default Home;
