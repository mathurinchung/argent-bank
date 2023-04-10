import { setCurrentUser, setUpdateUser } from '../reducers/user.reducer';

/**
 * Action creator to set the current user profile.
 *
 * @param { Object } payload - The new user profile data.
 * @returns { Function } - A Redux Thunk function that dispatches the `setCurrentUser` action with the given payload.
 * @throws { Error } - If an error occurs during dispatching of the `setCurrentUser` action, the error is logged to the console.
 */
export const getUserProfile = payload => {
  return dispatch => {
    try {
      return dispatch(setCurrentUser(payload));
    } catch (error) {
      console.error(error);
    }
  };
};

/**
 * Action creator to update the current user profile.
 *
 * @param { Object } payload - The updated user profile data.
 * @returns { Function } - A Redux Thunk function that dispatches the `setUpdateUser` action with the given payload.
 * @throws { Error } - If an error occurs during dispatching of the `setUpdateUser` action, the error is logged to the console.
 */
export const updateUserProfile = payload => {
  return dispatch => {
    try {
      return dispatch(setUpdateUser(payload));
    } catch (error) {
      console.error(error);
    }
  };
};
