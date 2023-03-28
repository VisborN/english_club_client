import React from 'react';
import { useDispatch } from 'react-redux';
import { childTaskCansel, childTaskWaiting } from '../../../../redux/slices/childTaskSlice';
import '../ProfileTasks.css';

export default function OneChildTask({ task }) {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(childTaskWaiting(id));
  };
  const cancelHandler = (id) => {
    dispatch(childTaskCansel(id));
  };
  return (
    <div className="oneChildTask">
      <div>
        <h3>{task?.Task?.title}</h3>
        <p>
          Автор:
          {' '}
          {task?.Task?.User.nickname}
        </p>
        <p>
          Описание:
          {' '}
          <br />
          {task?.Task?.body}
        </p>
      </div>
      <div style={{ width: '130px' }}>
        <p>
          Очки:
          {' '}
          {task?.Task?.points}
        </p>
        {task?.stateId === 7
          && (
            <>
              <p>Ожидание</p>
              <button onClick={() => cancelHandler(task?.id)} type="button">Отмена</button>
            </>
          )}
        {task?.stateId === 10
          && (
            <button onClick={() => clickHandler(task?.id)} type="button">Выполнить</button>
          )}
        {task?.stateId === 8
          && (
            <p>Выполненно</p>
          )}
        {task?.stateId === 9
          && (
            <button onClick={() => clickHandler(task?.id)} type="button">Выполнить</button>
          )}
      </div>
    </div>
  );
}
