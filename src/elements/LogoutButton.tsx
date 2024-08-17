import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../feature/AuthSlice';

import { AppDispatch, RootState } from '../feature/store';

const LogoutButton = () => {
  const dispatch:AppDispatch = useDispatch();
  const user = useSelector((state:RootState) => state.auth.user);

  useEffect(() => {
    if (!user) {
      console.log("User has been logged out");
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
