import { setCurrentUser, setUpdateUser } from '../reducers/user.reducer';

export const getUserProfile = payload => {
  return dispatch => {
    try {
      return dispatch(setCurrentUser(payload));
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateUserProfile = payload => {
  return async dispatch => {
    try {
      return dispatch(setUpdateUser(payload));
    } catch (error) {
      console.error(error);
    }
  };
};