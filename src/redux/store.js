import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './slices/taskSlice';
import userSlice from './slices/userSlice';
import counselorTaskSlice from './slices/counselorTaskSlice';
import childTaskSlice from './slices/childTaskSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    counselorTasks: counselorTaskSlice,
    childTasks: childTaskSlice,
    tasks: taskSlice,
  },
});

export default store;
