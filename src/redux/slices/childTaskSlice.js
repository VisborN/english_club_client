import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const childTaskSlice = createSlice({
  name: 'childTasks',
  initialState: [],
  reducers: {
    setChildTasks: (state, action) => action.payload,
    newChildTask: (state, action) => [...state, action.payload],
  },
});

export const { setChildTasks, newChildTask } = childTaskSlice.actions;

export const getAllChildTasks = () => (dispatch) => {
  axios('/usertask/child')
    .then((res) => dispatch(setChildTasks(res.data)))
    .catch(console.log);
};

export const getNewChildTask = (id) => (dispatch) => {
  axios(`/tasks/child/new/${id}`)
    .then((res) => dispatch(newChildTask(res.data)))
    .catch(console.log);
};

export const childTaskWaiting = (id) => (dispatch) => {
  axios(`/usertask/child/waiting/${id}`)
    .then((res) => dispatch(setChildTasks(res.data)))
    .catch(console.log);
};

export const childTaskCansel = (id) => (dispatch) => {
  axios(`/usertask/child/cancel/${id}`)
    .then((res) => dispatch(setChildTasks(res.data)))
    .catch(console.log);
};

export default childTaskSlice.reducer;
