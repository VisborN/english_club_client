import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: { isFetching: true },
  reducers: {
    setUser: (state, action) => action.payload,
    updateAvatar: (state, action) => ({ ...state, photo: action.payload }),
  },
});

export const { setUser, updateAvatar } = userSlice.actions;

export const signupUser = (user) => (dispatch) => {
  axios.post('user/signup', user)
    .then((res) => dispatch(setUser(res.data)));
};

export const signupCounselor = (user) => (dispatch) => {
  axios.post('user/counselor/signup', user)
    .then((res) => dispatch(setUser(res.data)));
};

export const signupModer = (user) => (dispatch) => {
  axios.post('user/moder/signup', user)
    .then((res) => dispatch(setUser(res.data)));
};

export const signinUser = (user) => (dispatch) => {
  axios.post('user/signin', user)
    .then((res) => dispatch(setUser(res.data)));
};

export const logoutUser = (user) => (dispatch) => {
  axios('user/logout', user)
    .then(() => dispatch(setUser({})));
};

export const checkUser = () => (dispatch) => {
  axios('user/check')
    .then((res) => dispatch(setUser(res.data)));
  // .catch((err) => setTimeout(() => {
  //   dispatch(setUser({}));
  // }, 500));
};

// Редактирование профиля, компонент Profile
export const updateUser = (user) => (dispatch) => {
  axios.patch('user/updateprofile', user)
    .then((res) => dispatch(setUser(res.data)));
};

export default userSlice.reducer;
