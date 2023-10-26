import React, { memo } from 'react';

interface AppBodyProps {
  data: Record<string, any>;
  activeTab: string;
}
const weatherBaseUrl = process.env['REACT_APP_WEATHER_IMAGE'];

function AppBody({ data, activeTab }: AppBodyProps) {
  const { name, main, weather, wind } = data ?? {};
  const { temp, humidity, feels_like, temp_min, temp_max } = main ?? {};
  const weatherIconUrl = `${weatherBaseUrl}/${weather?.[0]?.icon}@2x.png`;
  const units: Record<string, Record<string, string>> = {
    metric: {
      temp: 'C',
      hum: 'M/S',
    },
    imperial: {
      temp: 'F',
      hum: 'MPH',
    },
    standard: {
      temp: 'K',
      hum: 'M/S',
    },
  };
  return (
    <body className={'body'}>
      <section className='top-content'>
        <div className='location'>
          <p>My Location</p>
          <h2>{name}</h2>
        </div>
        <div className='temp'>
          <h1>
            {temp?.toFixed() ?? '-'}°{units[activeTab]['temp']}
          </h1>
          <p>
            {temp_min && <span>H:{temp_min.toFixed()}°</span>}
            {temp_max && <span> L:{temp_max.toFixed()}°</span>}
          </p>
        </div>
        <p className={'desc'}>{weather?.[0].main}</p>
        <img
          src={'https://openweathermap.org/img/wn/01n@4x.png'}
          alt={''}
          className={'icon'}
        />
      </section>

      {main && (
        <section className='bottom-card'>
          <div>
            <p className='bold'>
              {feels_like?.toFixed()}°{units[activeTab]['temp']}
            </p>
            <p>Feels Like</p>
          </div>
          <div>
            <p className='bold'>{humidity}%</p>
            <p>Humidity</p>
          </div>
          <div>
            <p className='bold'>
              {wind?.speed?.toFixed()} {units[activeTab]['hum']}
            </p>
            <p>Wind Speed</p>
          </div>
        </section>
      )}
    </body>
  );
}

export default memo(AppBody);
