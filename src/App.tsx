import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import useWeatherApi from './hooks/useWeatherApi';
import './styles/app.css';
import { useSearch } from './hooks/useSearch';
import AppBody from './components/AppBody';
import Favourite from './components/Favourite';
import isEmpty from 'lodash/isEmpty';

function App() {
  const { searchValue, debouncedSearch } = useSearch();
  const [favourite, setFavorite] = useState({
    isTrue: false,
    data: [],
  });
  const { handleSearchLocation, data } = useWeatherApi({
    location: searchValue,
  });

  return (
    <main className='app-container'>
      <header className={'header'}>
        <SearchForm
          setLocation={debouncedSearch}
          handleSearchLocation={handleSearchLocation}
        />
        <Favourite
          favourite={favourite}
          setFavorite={setFavorite}
          allowFavourite={!isEmpty(data)}
        />
      </header>
      <AppBody data={data} />
    </main>
  );
}

export default App;
