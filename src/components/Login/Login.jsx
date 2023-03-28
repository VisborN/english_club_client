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
        <img className="photo" src="./photo.jpg" alt="x" />
        <form onSubmit={submitHandler} className="form">
          <img
            style={{
              width: '156px',
              height: '156px',
              marginTop: '50px',
              marginBottom: '90px',
            }}
            src="./logoReg.png"
            alt=""
          />
          <p style={{ marginBottom: '90px' }} className="title">Авторизация</p>
          <div>
            <input className="input" placeholder="Почта" name="email" value={input.email} onChange={inputHandler} type="email" required />
          </div>
          <div>
            <input className="input" placeholder="Пароль" name="password" value={input.password} onChange={inputHandler} type="password" required />
          </div>
          <button className="button" type="submit">Войти</button>
          <br />
          У вас нет аккаунта?
          <NavLink to="/register" style={{ color: 'blue', textDecoration: 'none' }}> Зарегистрироваться</NavLink>
        </form>
      </div>
    </div>
  );
}
