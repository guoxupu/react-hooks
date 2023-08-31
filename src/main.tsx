import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { PageLoading } from '@ant-design/pro-layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<PageLoading />} />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
);
