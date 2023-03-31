import { createSlice } from '@reduxjs/toolkit';

const slice = {
  name: "user",
  initialState: { isLoggedIn: false, current: {} },
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn;
      state.current = payload.body;
    },
    setUpdateUser: (state, { payload }) => {
      state.current = { ...state.current, firstName: payload.firstName, lastName: payload.lastName }
    }
  }
};

export const usersSlice = createSlice(slice);

export const { setCurrentUser, setUpdateUser } = usersSlice.actions;
export default usersSlice.reducer;
