import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetUserProfile from './getUser';

function useLogoutUser() {
  const navigate = useNavigate();
  const { getUser } = useGetUserProfile();

  useEffect(() => {
    localStorage.clear();
  
    getUser();
    navigate('/');
  }, []);
}

export default useLogoutUser;
