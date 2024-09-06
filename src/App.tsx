import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddArticle from './Add';
import EditArticle from './Edit';
import { View } from './View';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/view',
    element: <View />,
  },
  {
    path: '/add',
    element: <AddArticle />,
  },
  {
    path: '/edit',
    element: <EditArticle />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
