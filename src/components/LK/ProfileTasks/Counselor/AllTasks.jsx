import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCounselorTasks } from '../../../../redux/slices/counselorTaskSlice';
import '../ProfileTasks.css';
import OneTask from './OneTask';

export default function AllTasks() {
  const tasks = useSelector((state) => state.counselorTasks);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllCounselorTasks());
  }, []);
  return (
    <div>
      <h3>Все задания</h3>
      {tasks?.map((el) => (<OneTask key={el.id} task={el} />))}
    </div>
  );
}
