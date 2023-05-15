import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signupUser } from '../../redux/slices/userSlice';
import './Register.scss';

export default function RegisterUser() {
  // const [Visibility, setVisibility] = React.useState(false);
  const [input, setInput] = useState('');
  const [hasError, setError] = React.useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const res = dispatch(signupUser(Object.fromEntries(new FormData(e.target))));
    if (res.ok) {
      navigate('/news');
    } else {
      setError(true);
    }
  };

  return (
    <div className="main">
      <div className="content">
        <div className="loginPhotoHolder">
          <img className="photo" src="./photo.jpg" alt="x" />
        </div>
        <form onSubmit={submitHandler} className="form">
          <img style={{ width: '156px', height: '156px', marginTop: '50px' }} src="./logoReg.png" alt="" />
          <p className="title">Регистрация</p>
          <div>
            <input className="input" placeholder="ФИО" name="fullName" type="text" value={input.name} onChange={inputHandler} required />
          </div>
          <div>
            <input className="input" placeholder="Ник" name="nickname" type="text" value={input.nickname} onChange={inputHandler} required />
          </div>
          <div>
            <p style={{ color: 'grey', marginRight: '374px' }}>Дата рождения:</p>
            <input className="input" value={input.about} onChange={inputHandler} type="date" id="date" name="age" required />
          </div>
          <div>
            <input className="input" placeholder="Почта" name="email" value={input.email} onChange={inputHandler} type="email" required />
          </div>
          <div>
            <input className="input" placeholder="Пароль" name="password" value={input.password} onChange={inputHandler} type="password" required />
          </div>
          <div style={{ display: 'flex' }}>
            <input
              style={{
                width: '14px',
                height: '14px',
                marginLeft: '124px',
                marginRight: '6px',
                cursor: 'pointer',
                marginBottom: '42px',
              }}
              type="checkbox"
              required
            />
            <p
              style={{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '13px',
                color: '#2B2B2B',
                height: '24px',
              }}
            >
              Согласен с обработкой персональных данных
            </p>
          </div>
          <button className="button" type="submit">Зарегистрироваться</button>
          <br />
          Есть аккаунт?
          <NavLink to="/login" style={{ color: 'blue', textDecoration: 'none' }}> Войти</NavLink>
          {hasError
            && <p style={{ color: 'red' }}>Такой пользователь существует</p>}
        </form>

      </div>
    </div>
  );
}
