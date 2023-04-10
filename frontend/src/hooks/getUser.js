import { useDispatch } from 'react-redux';
import { getUserProfile } from '@/store/actions/user.actions';
import UserServices from '@/services/user.services';

/**
 * A custom hook that fetches user profile data and dispatches the getUserProfile action with the retrieved data.
 *
 * @returns {{ getUser: Promise<void> }} An object with a single function: getUser.
 */
function useGetUserProfile() {
  const dispatch = useDispatch();

  /**
   * Fetches user profile data from the server and dispatches the getUserProfile action with the retrieved data.
   *
   * @returns { Promise<void> } A Promise that resolves when the user profile data has been fetched and the getUserProfile action has been dispatched.
   */
  const getUser = async () => {
    const token = JSON.parse(localStorage.getItem('accessToken'));

    if (token) {
      const serviceData = new UserServices();
      const response = await serviceData.getUserProfile();
      const body = response.data.body;

      dispatch(getUserProfile({ isLoggedIn: true, body }));
    }
  };

  return { getUser };
}

export default useGetUserProfile;
