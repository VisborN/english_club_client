import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Lk from './components/LK/Lk';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import News from './components/News/News';
import ProfileUser from './components/ProfileUser/ProfileUser';
import RegisterCounselor from './components/Register/RegisterCounselor';
import RegisterModers from './components/Register/RegisterModers';
import RegisterUser from './components/Register/RegisterUser';
import Shifts from './components/Shifts/Shifts';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/registercounselor" element={<RegisterCounselor />} />
      <Route path="/registermoder" element={<RegisterModers />} />
      <Route path="/profile/:id" element={<ProfileUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<News />} />
      <Route path="/shifts" element={<Shifts />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/Lk" element={<Lk />} />
    </Routes>
  );
}

export default App;
