import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { updateUser, updateAvatar } from '../../../redux/slices/userSlice';

export default function Profile() {
  const user = useSelector((state) => state.user);
  const [img, setImg] = React.useState(null);
  const [avatar, setAvatar] = React.useState(null);
  const [input, setInput] = React.useState({
    fullName: user.fullName,
    nickname: user.nickname,
    age: user.age,
    email: user.email,
  });

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendFile = useCallback(async () => {
    try {
      const data = new FormData();
      data.append('avatar', img);
      await axios.post('/upload/avatar', data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
        .then((res) => {
          setAvatar(res.data.path);
          dispatch(updateAvatar((res.data.path)));
        });
    } catch (error) { console.log(error); }
  }, [img]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(Object.fromEntries(new FormData(e.target))));
    navigate('/Lk');
  };

  return (
    <div>
      <h1 style={{ margin: 0 }}>Редактировать профиль</h1>
      <div className="inputDiv">
        <div className="oneInput">
          <div
            className="avatar"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid',
              backgroundColor: 'black',
            }}
          >
            {
              avatar
                ? (
                  <img
                    className="logo"
                    src={`${avatar}`}
                    alt="avatar"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                )
                : (
                  <img
                    className="logo"
                    src={`http://localhost:3001/${user.photo}` || '/css/images/avatar-scaled.jpeg'}
                    alt="avatar"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                )
            }

          </div>
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
          <button
            type="submit"
            style={{ marginTop: '10px' }}
            className="btn"
            onClick={sendFile}
          >
            Добавить фото

          </button>
        </div>
        <form onSubmit={submitHandler} action="">
          <div className="oneInput">
            <h3>ФИО</h3>
            <input onChange={inputHandler} name="fullName" type="text" value={input.fullName} />
          </div>
          <div className="oneInput">
            <h3>Ник</h3>
            <input onChange={inputHandler} name="nickname" type="text" value={input.nickname} />
          </div>
          <div className="oneInput">
            <h3>Возраст</h3>
            <input onChange={inputHandler} name="age" type="text" value={input.age} />
          </div>
          <div className="oneInput">
            <h3>Почта</h3>
            <input onChange={inputHandler} name="email" type="text" value={input.email} />
          </div>
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
}
