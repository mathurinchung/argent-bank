import { useDispatch } from 'react-redux';
import { getUserProfile } from '../store/actions/user.actions';

function useExpiresIn() {
  const dispatch = useDispatch();

  const rememberMe = isChecked => {
    if (!isChecked) {
      const timestamp = new Date();
      localStorage.setItem('timestamp', new Date(timestamp).toISOString());
      // localStorage.setItem('expiresin', new Date(timestamp.getTime() + 24 * 60 * 60 * 1000).toISOString());
      localStorage.setItem('expiresIn', new Date(timestamp.getTime() + 60 * 1000).toISOString());
    }
  }

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
