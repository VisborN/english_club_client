import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './lk.css';
import LkProfile from './LkProfile';
import LkThings from './LkThings';
import LkProfileCounselor from './LkProfileCounselor';
import LkThingsCounselor from './LkThingsCounselor';
import { checkUser } from '../../redux/slices/userSlice';
import LkProfileModer from './LkProfileModer';
import LkThingsModer from './LkThingsModer';

export default function Lk() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <div className="lkContent">
      {user.status === 10
        && (
          <>
            <LkProfile user={user} />
            <LkThings user={user} />
          </>
        )}
      {user.status === 11
        && (
          <>
            <LkProfileCounselor user={user} />
            <LkThingsCounselor user={user} />
          </>
        )}
      {user.status === 12
        && (
          <>
            <LkProfileModer user={user} />
            <LkThingsModer user={user} />
          </>
        )}
    </div>
  );
}
