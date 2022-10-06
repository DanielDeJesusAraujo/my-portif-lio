import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/my-portif-lio" element={ <Login /> }/>
    </Routes>
  )
}

export default MainRoutes;
