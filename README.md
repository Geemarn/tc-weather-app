# Weather application task

## Information
1. All features requested in the app were implemented however, the api I used can only fetch weather image
for a location and not the location image itself.
2. This project was bootstrapped with **Create React App** and **typscript** using **Yarn** as package manager
3. It has linting and code formatting setup using **eslint**, **prettier** and **lint-staged**
4. Deployment was carried out using **Vercel**
5. Test was carried out using **React Testing App** in **Jest** environment
6. application uses **openweathermap** api see api [https://home.openweathermap.org/](https://home.openweathermap.org/)
**NB: api makes about 60 request/min**

## Project architecture
1. Entry point is Index.tsx => App.tsx => Components folder
2. Two custom hooks (useSearch and index) handle the app business logic.
   1. useSearch handles the search debounce to 1.5 request/min (preventing too many api calls)
   2. useWeatherApi handles the api call and setting of state
3. There is a Fallback component for handling any form of error boundary component
4. There is a NotFound component for handling routes that are not defined

## Deployment
please visit this live link [tc-weather-app](https://tc-weather-app-lemon.vercel.app/)

## Run on local machine
1. Install **Node environment** on local machine 
Inside the project directory: (run command)
2. clone project from Github => ### `git clone https://github.com/Geemarn/tc-weather-app.git`
3. Install all packages  => ### `yarn install`
4. Start application on local browser => ### `yarn start`
[http://localhost:3000](http://localhost:3000) to view it in the browser.
5. run test => `yarn test`

### Thank you
