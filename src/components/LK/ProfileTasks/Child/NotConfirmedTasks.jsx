import React from 'react';
import { useSelector } from 'react-redux';
import OneChildTask from './OneChildTask';

export default function NotConfirmedTasks() {
  const tasks = useSelector((state) => state.childTasks);
  const currTasks = tasks.filter((el) => el.stateId === 9);
  return (
    <div>
      {currTasks.length === 0
        && (<p>Нет отклоненных заданий</p>)}
      {currTasks?.map((el) => (
        <OneChildTask key={el.id} task={el} />
      ))}
    </div>
  );
}
