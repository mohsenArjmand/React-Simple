import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import AppTable1 from './AppTable1'
import TodosList from './4-TodosList';
import Layout from './layout/Layout';
import { ConfigProvider as AntProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import 'antd/dist/antd.css'
import {Provider as ReduxProvider} from 'react-redux'
import store from './layout/redux/states/state'


function App() {

  return (
    <div>
      <BrowserRouter>
      <ReduxProvider store={store} >
        <AppTable1></AppTable1>
        <TodosList ></TodosList>
        <AntProvider locale={fa_IR} direction='rtl'>
          <Layout></Layout>
        </AntProvider>
        </ReduxProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
