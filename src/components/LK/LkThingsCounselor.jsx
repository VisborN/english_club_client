import React from 'react';
import './lk.css';
import CounselorProfile from './Profile/CounselorProfile';
import CounselorShifts from './ProfileShifts/CounselorShifts';
import CounselorTasks from './ProfileTasks/Counselor/CounselorTasks';

export default function LkThingsCounselor({ user }) {
  const [page, setPage] = React.useState('ProfileTasks');
  const clickHandler = (thisPage) => {
    setPage(thisPage);
  };
  return (
    <div className="lkThings">
      <div className="buttonContent">
        {page === 'ProfileTasks'
          && <CounselorTasks user={user} />}
        {page === 'Profile'
          && <CounselorProfile />}
        {page === 'ProfileShifts'
          && <CounselorShifts />}
      </div>
      <div className="buttons">
        <button onClick={() => clickHandler('ProfileShifts')} className="button" type="button">Мои смены</button>
        <button onClick={() => clickHandler('ProfileTasks')} className="button" type="button">Мои задания</button>
        <button onClick={() => clickHandler('Profile')} className="button" type="button">Редактировать профиль</button>
      </div>
    </div>
  );
}
