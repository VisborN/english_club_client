import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllChildTasks } from '../../../../redux/slices/childTaskSlice';
import '../ProfileTasks.css';
import AllChildTask from './AllChildTask';
import ConfirmedTasks from './ConfirmedTasks';
import NotConfirmedTasks from './NotConfirmedTasks';

export default function ProfileTasks() {
  const [page, setPage] = React.useState('AllTasks');
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllChildTasks());
  }, []);

  const clickHandler = (thisPage) => {
    setPage(thisPage);
  };

  return (
    <div>
      <div>
        <h1>Мои задания</h1>
        <div>
          <button onClick={() => clickHandler('AllTasks')} type="button">Все Задания</button>
          <button onClick={() => clickHandler('ConfirmedTasks')} type="button">Выполненные</button>
          <button onClick={() => clickHandler('NotConfirmedTasks')} type="button">Отклоненные</button>
        </div>
      </div>
      <div>
        {page === 'AllTasks'
          && (<AllChildTask />)}
        {page === 'ConfirmedTasks'
          && (<ConfirmedTasks />)}
        {page === 'NotConfirmedTasks'
          && (<NotConfirmedTasks />)}
      </div>
    </div>
  );
}
