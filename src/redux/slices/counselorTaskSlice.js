import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const counselorTaskSlice = createSlice({
  name: 'counselorTasks',
  initialState: [],
  reducers: {
    setCounselorTasks: (state, action) => action.payload,
    newCounselorTask: (state, action) => [...state, action.payload],
  },
});

export const { setCounselorTasks, newCounselorTask } = counselorTaskSlice.actions;

export const getAllCounselorTasks = () => (dispatch) => {
  axios('/usertask/counselor')
    .then((res) => dispatch(setCounselorTasks(res.data)))
    .catch(console.log);
};

export const getAllWaitingTasks = () => (dispatch) => {
  axios('/usertask/counselor/waiting')
    .then((res) => dispatch(setCounselorTasks(res.data)))
    .catch(console.log);
};

export const confirmTask = (id, data) => (dispatch) => {
  axios.post(`/usertask/counselor/confirm/${id}`, data)
    .then((res) => dispatch(setCounselorTasks(res.data)))
    .catch(console.log);
};

export const notConfirmTask = (id) => (dispatch) => {
  axios(`/usertask/counselor/notconfirm/${id}`)
    .then((res) => dispatch(setCounselorTasks(res.data)))
    .catch(console.log);
};

export const newTask = (task) => (dispatch) => {
  axios.post('/usertask/new', task)
    .then((res) => dispatch(newCounselorTask(res.data)))
    .catch(console.log);
};

export const deleteTask = (id) => (dispatch) => {
  axios(`/usertask/del/${id}`)
    .then((res) => dispatch(setCounselorTasks(res.data)))
    .catch(console.log);
};

export default counselorTaskSlice.reducer;
