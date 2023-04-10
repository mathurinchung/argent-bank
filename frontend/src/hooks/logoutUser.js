import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '@/store/actions/user.actions';

/**
 * A custom hook that logs out a user by clearing the local storage, dispatching an action to update the user's profile, and navigating to the home page.
 *
 * @returns {{ logoutUser: void }} An object with a single function: logoutUser.
 */
function useLogoutUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Logs out the current user by clearing the local storage, dispatching an action to update the user's profile, and navigating to the home page.
   *
   * @returns { void }
   */
  const logoutUser = () => {
    localStorage.clear();
    dispatch(getUserProfile({ isLoggedIn: false, body: {} }));
    navigate('/');
  };

  return { logoutUser };
}

export default useLogoutUser;
