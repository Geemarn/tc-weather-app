import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const NotFound = React.lazy(() => import('./components/NotFound'));
export const App = React.lazy(() => import('./App'));

/** all project routing is done here **/
export const app_router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
]);
