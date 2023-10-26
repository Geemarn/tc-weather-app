import React from 'react';

interface AppBodyProps {
  data: Record<string, any>;
}

export default function AppBody({ data }: AppBodyProps) {
  const { name, main, weather, wind } = data ?? {};
  const { temp, humidity, feels_like, temp_min, temp_max } = main ?? {};
  return (
    <body className={'body'}>
      <section className='top-content'>
        <div className='location'>
          <p>My Location</p>
          <h2>{name}</h2>
        </div>
        <div className='temp'>
          <h1>{temp?.toFixed() ?? '-'}°F</h1>
          <p>
            {temp_min && <span>H:{temp_min.toFixed()}°</span>}
            {temp_max && <span> L:{temp_max.toFixed()}°</span>}
          </p>
        </div>
        <p className={'desc'}>{weather?.[0].main ?? 'Cloudy'}</p>
      </section>

      {main && (
        <section className='bottom-card'>
          <div>
            <p className='bold'>{feels_like?.toFixed()}°F</p>
            <p>Feels Like</p>
          </div>
          <div>
            <p className='bold'>{humidity}%</p>
            <p>Humidity</p>
          </div>
          <div>
            <p className='bold'>{wind?.speed?.toFixed()} MPH</p>
            <p>Wind Speed</p>
          </div>
        </section>
      )}
    </body>
  );
}
