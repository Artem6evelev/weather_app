import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/actions";
import { getCurrentWeather } from "../../api/WeatherAPI";
import { addToLocalStorage, isInFavorites } from "../../helpers/dataHelpers";
import TempretureText from "../TemperatureText";
import Fade from "react-reveal/Fade";

import Tilt from "react-tilt";

function CityData({ city }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const [currentWeather, setCurrentWeather] = useState([]);
  const cityKey = city.Key;
  const isFavorite = isInFavorites(cityKey, favorites);

  const setWeather = () => {
    return getCurrentWeather(cityKey)
      .then((res) => setCurrentWeather(res.data[0]))
      .catch((err) => alert(err));
  };

  const handleAddToFavorites = () => {
    dispatch(addFavorite(city));
    addToLocalStorage("favorites", [...favorites, city]);
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFavorite(cityKey));
    addToLocalStorage("favorites", [
      ...favorites.filter((c) => c.Key !== cityKey),
    ]);
  };

  useEffect(() => {
    if (cityKey) setWeather();
  }, [cityKey]);

  if (!cityKey || currentWeather.length === 0) return null;

  return (
    <div className="d-flex flex-column align-items-center p-4 w-100">
      <div>
        <Fade bottom>
        
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 150, width: 250 }}
          >
            <div className="Tilt-inner">

              <div className="d-flex flex-row justify-content-between w-100">
                <div className="d-flex flex-column">
                  <h5>{`${city.LocalizedName}, ${city.Country.LocalizedName}`}</h5>
                  <TempretureText type="current" data={currentWeather} />
                </div>
                <div>
                  <button
                    className="btn btn-light"
                    onClick={
                      isFavorite
                        ? handleRemoveFromFavorites
                        : handleAddToFavorites
                    }
                  >
                    {isFavorite ? "Remove from favorites" : "Add to favorites"}
                  </button>
                  {isFavorite ? (
                    <i className="fas fa-heart fa-lg p-2" />
                  ) : (
                    <i className="far fa-heart fa-lg p-2" />
                  )}
                </div>
                
              </div>
              <h3>{currentWeather.WeatherText}</h3>
            </div>
          </Tilt>
        </Fade>
      </div>
    </div>
  );
}

export default CityData;
