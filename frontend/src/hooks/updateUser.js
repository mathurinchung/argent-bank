import { useDispatch } from 'react-redux';
import { updateUserProfile } from '@/store/actions/user.actions';
import UserServices from '@/services/user.services';

/**
 * A custom hook that updates a user's profile by dispatching an action to update the user's profile and calling the updateUserProfile method from the UserServices class.
 *
 * @returns {{ updateUser: void }} An object with a single function: updateUser.
 */
function useUpdateUserProfile() {
  const dispatch = useDispatch();

  /**
   * Updates the current user's profile by calling the updateUserProfile method from the UserServices class and dispatching an action to update the user's profile in the Redux store.
   *
   * @param { Object } body - The updated user profile data.
   * @returns { void }
   */
  const updateUser = async body => {
    const serviceData = new UserServices();
    await serviceData.updateUserProfile(body);

    dispatch(updateUserProfile(body));
  };

  return { updateUser };
}

export default useUpdateUserProfile;
