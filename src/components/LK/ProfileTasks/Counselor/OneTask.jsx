import React from 'react';
import { useDispatch } from 'react-redux';
import { confirmTask, deleteTask, notConfirmTask } from '../../../../redux/slices/counselorTaskSlice';

export default function OneTask({ task }) {
  console.log(task);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteTask(id));
  };
  const confirm = (id, userId, points) => {
    const data = {};
    data.userId = userId;
    data.points = points;
    dispatch(confirmTask(id, data));
  };
  const notConfirm = (id) => {
    dispatch(notConfirmTask(id));
  };
  return (
    <div>
      {
        task.Task
          ? (
            <div className="oneChildTask">
              <div>
                <h3>{task?.Task?.title}</h3>
                <p style={{ fontSize: '20px' }}>
                  Описание:
                </p>
                <p>{task?.Task?.body}</p>
                <p style={{ fontSize: '20px' }}>
                  Исполнитель:
                </p>
                <p style={{ color: 'grey' }}>{task?.User?.nickname}</p>
              </div>
              <div style={{ width: '80px' }}>
                <p>
                  Очки:
                  {' '}
                  {task?.Task?.points}
                </p>
                <div>
                  <button onClick={() => confirm(task?.id, task?.User?.id, task?.Task?.points)} type="button" style={{ backgroundColor: '#B8F49E' }}>Принять</button>
                  <button onClick={() => notConfirm(task?.id)} type="button" style={{ backgroundColor: '#F5C1B3' }}>Отклонить</button>
                </div>
              </div>
            </div>
          )
          : (
            <div className="oneChildTask">
              <div>
                <h3>{task.title}</h3>
                <p>
                  Описание:
                  {' '}
                  <br />
                  {task.body}
                </p>
              </div>
              <div style={{ width: '80px' }}>
                <p>
                  Очки:
                  {' '}
                  {task?.points}
                </p>
                <button onClick={() => deleteHandler(task.id)} type="button">Удалить</button>
              </div>
            </div>
          )
      }
    </div>
  );
}
