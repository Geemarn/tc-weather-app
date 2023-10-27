# Weather application task

## Information
1. This project was bootstrapped with **Create React App** and **typscript** using **Yarn** as package manager
2. It has linting and code formatting setup using **eslint**, **prettier** and **lint-staged**
3. Deployment was carried out using **Vercel**
4. Test was carried out using **React Testing App** in **Jest** environment
5. application uses **openweathermap** see api [https://home.openweathermap.org/](https://home.openweathermap.org/)

# Project architecture
( the weather app searches by city and return itt weather information )
1. the App is split into two components (SearchForm and AppBody)
2. two custom hooks (useSearch and index) handle the app business logic.
   1. useSearch handles the search debounce to 1 request/min (preventing too many api calls)
   2. index handles the api call and set it state
3. There is a Fallback component for handling any form of error boundary component
4. There is a NotFound component for handling routes that are not defined
## Deployment

please visit this link [tc-weather-app](https://tc-weather-app-lemon.vercel.app/)

## Run on local machine
1. NB: Please install **node** on local machine 
In the project directory, you can run:
2. clone project from Github => ### `https://github.com/Geemarn/tc-weather-app.git`
3. Install all packages  => ### `yarn install`
4. Start application on local browser => ### `yarn start`
[http://localhost:3000](http://localhost:3000) to view it in the browser.
5. run test => `yarn test`
