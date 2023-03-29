import { useDispatch } from 'react-redux';
import { getUserProfile } from '../store/actions/user.actions';
import UserServices from '../services/user';

function useGetUserProfile() {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
  
      if (token) {
        const serviceData = new UserServices();
        const response = await serviceData.getUserProfile(token);
        const body = response.data.body;
  
        dispatch(getUserProfile({ success: true, body }));
      } else {
        dispatch(getUserProfile({ success: false, body: {} }));
      }
    } catch (error) {
      console.error(error)
    }
  };

  return { getUser };
}

export default useGetUserProfile;
