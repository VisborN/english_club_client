import React from 'react';
import './lk.css';
import Profile from './Profile/Profile';
import ProfileAchives from './ProfileAchives/ProfileAchives';
import ProfileShifts from './ProfileShifts/ProfileShifts';
import ProfileTasks from './ProfileTasks/Child/ProfileTasks';

export default function LkThings() {
  const [page, setPage] = React.useState('ProfileTasks');
  const clickHandler = (thisPage) => {
    setPage(thisPage);
  };
  return (
    <div className="lkThings">
      <div className="buttonContent">
        {page === 'ProfileTasks'
          && <ProfileTasks />}
        {page === 'Profile'
          && <Profile />}
        {page === 'ProfileAchives'
          && <ProfileAchives />}
        {page === 'ProfileShifts'
          && <ProfileShifts />}
      </div>
      <div className="buttons">
        <button onClick={() => clickHandler('ProfileShifts')} className="lkButton" type="button">Мои смены</button>
        <button onClick={() => clickHandler('ProfileTasks')} className="lkButton" type="button">Мои задания</button>
        <button onClick={() => clickHandler('ProfileAchives')} className="lkButton" type="button">Мои достижения</button>
        <button onClick={() => clickHandler('Profile')} className="lkButton" type="button">Редактировать профиль</button>
      </div>
    </div>
  );
}
