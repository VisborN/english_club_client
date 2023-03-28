import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWaitingTasks } from '../../../../redux/slices/counselorTaskSlice';
import '../ProfileTasks.css';
import OneTask from './OneTask';

export default function WaitingTasks() {
  const tasks = useSelector((state) => state.counselorTasks);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllWaitingTasks());
  }, []);
  return (
    <div>
      <h3>Задания на ожидании:</h3>
      {tasks?.map((el) => (<OneTask key={el.id} task={el} />))}
    </div>
  );
}
