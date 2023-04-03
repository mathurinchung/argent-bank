import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '@/store/actions/user.actions';

function useLogoutUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.clear();
    dispatch(getUserProfile({ isLoggedIn: false, body: {} }));
    navigate('/');
  };

  return { logoutUser };
}

export default useLogoutUser;
