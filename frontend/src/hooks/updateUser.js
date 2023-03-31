import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../store/actions/user.actions';
import UserServices from '../services/user.services';

function useUpdateUserProfile() {
  const dispatch = useDispatch();

  const updateUser = async body => {
    try {
      const serviceData = new UserServices();
      await serviceData.updateUserProfile(body);

      dispatch(updateUserProfile(body));
    } catch (error) {
      console.error(error);
    }
  };

  return { updateUser };
}

export default useUpdateUserProfile;
