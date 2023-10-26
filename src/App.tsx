import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import useWeatherApi from './hooks/useWeatherApi';
import { useSearch } from './hooks/useSearch';
import AppBody from './components/AppBody';
import Favourite, { IFavourite } from './components/Favourite';
import './styles/app.css';
import Tabs from './components/tabs';

function App() {
  /**handles location search debounce**/
  const { searchValue, debouncedSearch } = useSearch();
  /**handles units update**/
  const [activeTab, setActiveTab] = useState('metric');
  /**handles favourite updates**/
  const [favourite, setFavorite] = useState<IFavourite>({
    data: [],
    isTrue: false,
    openDropDown: false,
  });

  const { handleSearchLocation, data } = useWeatherApi({
    location: searchValue,
    unit: activeTab,
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
          locationName={data?.name}
        />
      </header>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <AppBody data={data} activeTab={activeTab} />
    </main>
  );
}

export default App;
