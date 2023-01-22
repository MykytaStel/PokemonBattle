import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  user: null,
  loading: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLogin: (data, action) => {
      data.loading = true;
      data.user = action.payload;
    },
  },
});

export const {userLogin} = slice.actions;

export default slice.reducer;
