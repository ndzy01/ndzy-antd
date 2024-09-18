import React, { useEffect } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { message, Watermark } from 'antd';
import { useInterval } from 'ahooks';
import './index.css';
import AddArticle from './Add';
import EditArticle from './Edit';
import { View } from './View';
import Home from './Home';
import SortTable from './Sort';

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
  {
    path: '/sort/:id',
    element: <SortTable />,
  },
]);

const App: React.FC = () => {
  useEffect(() => {
    fetch('https://www.ndzy01.com/ndzy-antd/version.json')
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('version', res.version);
      });
  }, []);

  useInterval(
    () => {
      fetch('https://www.ndzy01.com/ndzy-antd/version.json')
        .then((res) => res.json())
        .then((res) => {
          const version = localStorage.getItem('version');

          if (version !== String(res.version)) {
            message.info('网站已更新，将会在60秒之后刷新页面', 60);

            setTimeout(() => {
              window.location.reload();
            }, 60 * 1000);
          }
        });
    },
    10 * 60 * 1000,
  );

  return (
    <Watermark content="ndzy">
      <RouterProvider router={router} />
    </Watermark>
  );
};

export default App;
