import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signinUser } from '../../redux/slices/userSlice';
import '../Register/Register.scss';

export default function SignUp() {
  const [input, setInput] = useState('');
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signinUser(Object.fromEntries(new FormData(e.target))));
    navigate('/tasks');
  };

  return (
    <div className="main">
      <div className="content">
        <div className="loginPhotoHolder">
          <img className="photo" src="./photo.jpg" alt="x" />
        </div>
        <div className="form-view">
          <form onSubmit={submitHandler} className="form">
            <img
              className="logo-login"
              src="./logoReg.png"
              alt=""
            />
            <p className="title">Авторизация</p>
            <div className="input-group">
              {/* eslint-disable jsx-a11y/label-has-associated-control */}
              <input className="input" placeholder=" " name="email" value={input.email} onChange={inputHandler} type="email" required />
              <span className="highlight" />
              <span className="bar" />
              <label htmlFor="email">Почта</label>
            </div>
            <div className="input-group">
              {/* eslint-disable jsx-a11y/label-has-associated-control */}
              <input className="input" placeholder=" " name="password" value={input.password} onChange={inputHandler} type="password" required />
              <span className="highlight" />
              <span className="bar" />
              <label htmlFor="password">Пароль</label>
            </div>
            <button className="button" type="submit">Войти</button>
            <br />
            <div className="register-text">
              У вас нет аккаунта?
              <NavLink to="/register" style={{ color: 'blue', textDecoration: 'none' }}> Зарегистрироваться</NavLink>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
