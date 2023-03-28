import React from 'react';
import './lk.css';
import ModerProfile from './Profile/ModerProfile';

export default function LkThingsModer() {
  const [page, setPage] = React.useState('Profile');
  const clickHandler = (thisPage) => {
    setPage(thisPage);
  };
  return (
    <div className="lkThings">
      <div className="buttonContent">
        {page === 'Profile'
          && <ModerProfile />}
      </div>
      <div className="buttons">
        <button onClick={() => clickHandler('Profile')} className="button" type="button">Редактировать профиль</button>
      </div>
    </div>
  );
}
