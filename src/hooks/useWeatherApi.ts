import { KeyboardEvent, useEffect, useState } from 'react';
import axios from 'axios';
const apiKey = process.env['REACT_APP_API_KEY'];

interface useWeatherApiReturnProps {
  handleSearchLocation: (e: KeyboardEvent<HTMLInputElement>) => void;
  data: Record<string, any>;
}
interface useWeatherApiProps {
  location: string;
  unit: string;
}

export default function useWeatherApi({
  location,
  unit,
}: useWeatherApiProps): useWeatherApiReturnProps {
  const [data, setData] = useState({});

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
    location || 'berlin'
  }&units=${unit}&appid=${apiKey}`;

  const handleSearchLocation = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  /**function is only called when location and units changes**/
  useEffect(() => {
    handleSearchLocation();
  }, [apiUrl]);

  return {
    handleSearchLocation,
    data,
  };
}
