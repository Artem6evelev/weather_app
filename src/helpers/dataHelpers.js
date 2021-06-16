export const addToLocalStorage = (key, value) => {
	window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
	return JSON.parse(window.localStorage.getItem(key)) || [];
};

export const isInFavorites = (cityKey, favorites) => {
	return favorites && favorites.filter((f) => f.Key === cityKey).length > 0;
};
