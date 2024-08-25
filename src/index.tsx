import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { App as AntdApp } from 'antd';
import { App as NdzyApp } from 'ndzy-utils';
import 'ndzy-utils/dist/style.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <AntdApp>
        <NdzyApp>
          <App />
        </NdzyApp>
      </AntdApp>
    </React.StrictMode>,
  );
}
