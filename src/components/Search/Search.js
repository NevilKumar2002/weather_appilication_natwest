import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/OpenWeatherService';

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      })),
    };
  };

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);

    // Update search history
    setSearchHistory((prevHistory) => [
      ...prevHistory,
      {
        value: enteredData.value,
        label: enteredData.label,
      },
    ]);
  };

  const toggleHistoryVisibility = () => {
    setShowHistory((prevShowHistory) => !prevShowHistory);
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for cities"
        debounceTimeout={600}
        value={searchValue}
        onChange={onChangeHandler}
        loadOptions={loadOptions}
      />
      <button onClick={toggleHistoryVisibility}>Toggle History</button>
      {showHistory && (
        <div>
          <h3>Search History:</h3>
          <ul>
            {searchHistory.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
