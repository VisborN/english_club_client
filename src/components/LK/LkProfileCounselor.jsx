import React from 'react';
import { useDispatch } from 'react-redux';
import { checkUser } from '../../redux/slices/userSlice';
import './lk.css';

export default function LkProfileCounselor({ user }) {
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
            <img style={{ border: '1px solid', marginLeft: '10px' }} className="avatar" src={`http://localhost:3003/${user?.photo}`} alt={user?.nickname[0]} />
          </div>
          <div className="namesDiv">
            <div>
              <h1 style={{ marginTop: '30px' }}>{user?.nickname}</h1>
            </div>
            <div>
              <p style={{ marginBottom: '90px' }}>
                Вожатый
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
