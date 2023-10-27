import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import { useSearch } from './hooks/useSearch';
import AppBody from './components/AppBody';
import Favourite, { IFavourite } from './components/Favourite';
import './styles/app.css';
import Tabs from './components/Tab';
import useWeatherApi from './hooks/useWeatherApi';

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

  const { data } = useWeatherApi({
    location: searchValue,
    unit: activeTab,
  });

  return (
    <main className='tc-app-container' data-testid={'tc-app'}>
      <header className={'header'} data-testid={'tc-header'}>
        <SearchForm setLocation={debouncedSearch} />
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
