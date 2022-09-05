import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AppTable1 from './AppTable1'
import TodosList from './4-TodosList';
import Layout from './layout/Layout';
import {ConfigProvider as AntProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import 'antd/dist/antd.css'


function App() {

  return (
    <div>
      <BrowserRouter>
        <AppTable1></AppTable1>
        <TodosList ></TodosList>
        <AntProvider  locale={fa_IR} direction='rtl'>
          <Layout></Layout>
        </AntProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
