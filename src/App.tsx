import React, { useEffect } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import AddArticle from './Add';
import EditArticle from './Edit';
import { View } from './View';
import Home from './Home';
import { Watermark } from 'antd';
import { useInterval } from 'ahooks';
import { useStore } from 'ndzy-utils';

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
  const store = useStore();
  useEffect(() => {
    store.service
      .get('https://www.ndzy01.com/ndzy-antd/version.json')
      .then((res) => {
        console.log('------ndzy------', res, '------ndzy------');
        // localStorage.setItem('version', '');
      });
  }, []);

  useInterval(() => {}, 1000);
  return (
    <Watermark content="ndzy">
      <RouterProvider router={router} />
    </Watermark>
  );
};

export default App;
