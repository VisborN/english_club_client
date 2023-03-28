import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkUser, logoutUser } from '../../redux/slices/userSlice';
import './Navbar.scss';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate('/');
  };
  React.useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <div className="con">
      <img className="navLogo" src="./logoReg.png" alt="" />
      <div className="navDivAva">
        <img className="navAva" src={`http://localhost:3003/${user.photo}`} alt="" />
        <div className="navPoint">
          {user.status === 11
            && <p>Вожатый</p>}
          {user.status === 10
            && (
              <p>
                {' '}
                {user.points}
                {' '}
                Баллов
              </p>
            )}
          {user.status === 12
            && <p>Админ</p>}

        </div>
      </div>
      <div className="nameAndEmail">
        <p
          className="name"
        >
          {user.nickname}

        </p>
        <p
          className="email"
        >
          {user.email}

        </p>
      </div>
      <div>
        <div style={{ marginTop: '50px' }} className="navElementsItem">
          <img src="./Home.svg" alt="x" />
          <p><a href="/">Главная</a></p>
        </div>
        <div className="navElementsItem">
          <img src="./User.svg" alt="x" />
          <p><a href="/Lk">Профиль</a></p>
        </div>
        <div className="navElementsItem">
          <img src="./Bell.svg" alt="x" />
          <p><a href="/news">Новости</a></p>
        </div>
        <div className="navElementsItem">
          <img src="./Wallet.svg" alt="x" />
          <p><a href="/shifts">Смены</a></p>
        </div>
        <div className="navElementsItem">
          <img src="./Check.svg" alt="x" />
          <p><a href="/tasks">Задания</a></p>
        </div>
      </div>
      <div>
        <div className="navExit">
          <button type="button" onClick={() => logoutHandler()}>
            <img src="./Login.svg" alt="x" />
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
}
