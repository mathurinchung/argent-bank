import { useDispatch } from 'react-redux';
import { updateUserProfile } from '@/store/actions/user.actions';
import UserServices from '@/services/user.services';

function useUpdateUserProfile() {
  const dispatch = useDispatch();

  const updateUser = async body => {
    const serviceData = new UserServices();
    await serviceData.updateUserProfile(body);

    dispatch(updateUserProfile(body));
  };

  return { updateUser };
}

export default useUpdateUserProfile;
