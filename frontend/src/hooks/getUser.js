import { useDispatch } from 'react-redux';
import { getUserProfile } from '@/store/actions/user.actions';
import UserServices from '@/services/user.services';

function useGetUserProfile() {
  const dispatch = useDispatch();

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
