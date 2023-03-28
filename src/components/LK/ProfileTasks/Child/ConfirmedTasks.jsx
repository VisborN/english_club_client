import React from 'react';
import { useSelector } from 'react-redux';
import OneChildTask from './OneChildTask';

export default function ConfirmedTasks() {
  const tasks = useSelector((state) => state.childTasks);
  const currTasks = tasks.filter((el) => el.stateId === 8);
  return (
    <div>
      {currTasks.length === 0
      && (<p>Нет выполненных заданий</p>)}
      {currTasks?.map((el) => (
        <OneChildTask key={el.id} task={el} />
      ))}
    </div>
  );
}
