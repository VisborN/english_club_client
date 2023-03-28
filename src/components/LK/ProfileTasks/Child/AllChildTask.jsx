import React from 'react';
import { useSelector } from 'react-redux';
import OneChildTask from './OneChildTask';

export default function AllChildTask() {
  const tasks = useSelector((state) => state.childTasks);
  return (
    <div>
      {tasks?.map((el) => (
        <OneChildTask key={el.id} task={el} />
      ))}
    </div>
  );
}
