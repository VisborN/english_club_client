import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from '../../redux/slices/userSlice';
import './lk.css';

export default function LkProfile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <div style={{ backgroundColor: '#D2E6F7' }}>
      <h1 style={{ paddingLeft: '15px' }}>Личный кабинет</h1>
      <div className="lkProfile">
        <div style={{ display: 'flex' }}>
          <div>
            <img style={{ border: '1px solid', marginLeft: '10px' }} className="avatar" src={`http://localhost:3003/${user.photo}`} alt={user.nickname[0]} />
          </div>
          <div className="namesDiv">
            <div>
              <h1 style={{ marginTop: '30px' }}>{user.nickname}</h1>
            </div>
          </div>
        </div>
        <div className="points">
          <h1>Ваши баллы:</h1>
          {user.points}
        </div>
      </div>
    </div>
  );
}
