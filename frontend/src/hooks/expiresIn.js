import { useDispatch } from 'react-redux';
import { getUserProfile } from '@/store/actions/user.actions';

/**
 * A custom hook that handles remembering user login and checking if the login session has expired.
 *
 * @returns {{ rememberMe: void, getExpiresIn: void }} An object with two functions: rememberMe and getExpiresIn.
 */
function useExpiresIn() {
  const dispatch = useDispatch();

  /**
   * Stores the timestamp of the last login in localStorage and sets a new timestamp for the session expiry.
   *
   * @param { Boolean } isChecked - A boolean indicating whether the "Remember Me" checkbox is checked.
   */
  const rememberMe = isChecked => {
    if (!isChecked) {
      const timestamp = new Date();
      localStorage.setItem('timestamp', new Date(timestamp).toISOString());
      // localStorage.setItem('expiresin', new Date(timestamp.getTime() + 24 * 60 * 60 * 1000).toISOString());
      localStorage.setItem('expiresIn', new Date(timestamp.getTime() + 60 * 60 * 1000).toISOString());
    }
  }

  /**
   * Checks if the login session has expired and clears localStorage if it has.
   */
  const getExpiresIn = () => {
    const expiryTime = localStorage.getItem('expiresIn');

    if (expiryTime && new Date() >= new Date(expiryTime)) {
      localStorage.clear();
      dispatch(getUserProfile({ isLoggedIn: false, body: {} }));
    }
  };

  return { rememberMe, getExpiresIn };
}

export default useExpiresIn;
