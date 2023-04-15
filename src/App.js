import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Upload from './components/Upload';
import Loader from './components/Loader';
import Details from './components/Details';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/upload" element={<Upload />}></Route>
      <Route path="/load" element={<Loader />}></Route>
      <Route path="/details" element={<Details />}></Route>
    </Routes>
  )
}

export default App