import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import AddArticle from './Add';
import EditArticle from './Edit';
import { View } from './View';
import Home from './Home';
import { Watermark } from 'antd';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/view/:id',
    element: <View />,
  },
  {
    path: '/add',
    element: <AddArticle />,
  },
  {
    path: '/edit/:id',
    element: <EditArticle />,
  },
]);

const App: React.FC = () => {
  return (
    <Watermark content="ndzy">
      <RouterProvider router={router} />
    </Watermark>
  );
};

export default App;
