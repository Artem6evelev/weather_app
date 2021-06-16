import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCity } from "../../store/actions";
import { getSuggestions } from "../../api/WeatherAPI";
import Autocomplete from "react-autocomplete";

function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [hintData, setHintData] = useState([]);

  const setData = () => {
    return getSuggestions(searchText)
      .then((res) => setHintData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (searchText.length > 0 && /^[A-Za-z -]*$/.test(searchText)) setData();
  }, [searchText]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSelectCity = (cityName) => {
    const city = hintData.find((c) => c.LocalizedName === cityName);

    dispatch(updateCity(city));
    setHintData([]);
    setSearchText("");
  };

  const style = { width: "100%", marginTop: "2rem" };

  return (
    <Autocomplete
      wrapperStyle={{ width: "50%", zIndex: "1" }}
      inputProps={{ style }}
      getItemValue={(item) => item.LocalizedName}
      items={hintData}
      renderItem={(item, isHighlighted) => (
        <div
          key={item.Key}
          style={{ background: isHighlighted ? "lightgray" : "white" }}
        >{`${item.LocalizedName}, ${item.Country.LocalizedName}`}</div>
      )}
      value={searchText}
      onChange={handleChange}
      onSelect={handleSelectCity}
    />
  );
}

export default SearchBar;
