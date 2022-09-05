import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AppTable1 from './AppTable1'
import TodosList from './4-TodosList';
import Layout from './layout/Layout';


function App() {

  return (
    <div>
      <BrowserRouter>
      <AppTable1></AppTable1>
      <TodosList ></TodosList>
      <Layout></Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
