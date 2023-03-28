import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const taskSlice = createSlice({
  name: 'Tasks',
  initialState: [],
  reducers: {
    setTasks: (state, action) => action.payload,
  },
});

export const { setTasks, newUserTask } = taskSlice.actions;

export const getAllTasks = () => (dispatch) => {
  axios('/tasks')
    .then((res) => dispatch(setTasks(res.data)))
    .catch(console.log);
};

export const filterTasks = (str) => (dispatch) => {
  axios.post('/tasks/search', str)
    .then((res) => dispatch(setTasks(res.data)))
    .catch(console.log);
};

export const newChildTask = (id) => (dispatch) => {
  axios(`/tasks/child/new/${id}`)
    .then((res) => dispatch(setTasks(res.data)))
    .catch(console.log);
};

export default taskSlice.reducer;
