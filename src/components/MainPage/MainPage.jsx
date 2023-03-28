import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login/Login';
import Tasks from '../Tasks/Tasks';
import { checkUser } from '../../redux/slices/userSlice';

export default function MainPage() {
  const [loader, setLoader] = React.useState(true);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(checkUser());
    setTimeout(() => {
      setLoader(false);
    }, 300);
  }, []);
  return (
    <div>
      {loader
        ? (
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%',
          }}
          >
            <img style={{ height: '500px', width: '500px' }} src="./logoReg.png" alt="/" />
          </div>
        )
        : (
          <div>
            {user?.fullName
              ? (
                <Tasks />
              )
              : (
                <Login />
              )}
          </div>
        )}
    </div>
  );
}
