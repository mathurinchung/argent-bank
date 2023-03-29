import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../store/actions/user.actions';
import UserServices from '../services/user';

function useUpdateUserProfile() {
  const dispatch = useDispatch();

  const updateUser = async body => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));

      if (token) {
        const serviceData = new UserServices();
        await serviceData.updateUserProfile(body, token);
  
        dispatch(updateUserProfile(body));
      }
    } catch (error) {}
  };

  return { updateUser };
}

export default useUpdateUserProfile;
