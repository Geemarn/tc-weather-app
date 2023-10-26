import { KeyboardEvent, useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'd07fd3460ad51ea39bb91b0dd5edda60';

interface useWeatherApiReturnProps {
  handleSearchLocation: (e: KeyboardEvent<HTMLInputElement>) => void;
  data: Record<string, any>;
}

interface useWeatherApiProps {
  location: string;
}

export default function useWeatherApi({
  location,
}: useWeatherApiProps): useWeatherApiReturnProps {
  const [data, setData] = useState({});
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
    location || 'berlin'
  }&units=imperial&appid=${API_KEY}`;

  const handleSearchLocation = () => {
    axios
      .get(apiUrl)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // handleSearchLocation();
  }, [location]);

  return {
    handleSearchLocation,
    data,
  };
}
