import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/my-portif-lio" element={ <Login /> }/>
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default MainRoutes;
