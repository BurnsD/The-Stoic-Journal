import React from 'react';
import Login from '../src/components/Login';
import { Navbar } from "./components/Navbar";
import Journal from '../src/components/Journal';
import Home from '../src/components/Home';
import Qoutes from '../src/components/Qoutes';
import Dashboard from './components/Dashboard';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/journal' element={<Journal/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/qoutes' element={<Qoutes/>}/>
      </Routes>
    </>
  );
}

export default App;
