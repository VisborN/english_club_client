import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllChildTasks, getNewChildTask } from '../../redux/slices/childTaskSlice';
// import { newChildTask } from '../../redux/slices/taskSlice';
import './Tasks.scss';

export default function OneTask({
  task, user, childTasks,
}) {
  const currArr = childTasks.map((el) => el.taskId);
  const switcher = currArr.includes(task.id);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllChildTasks());
  }, []);

  const clickHandler = (id) => {
    dispatch(getNewChildTask(id));
  };

  return (
    <div className="oneTaskDiv">
      <div>
        <p className="oneTaskTitle" style={{ color: 'black' }}>{task?.title}</p>
        <p className="author">
          Автор:
          {' '}
          <a href={`/profile/${task?.User?.id}`} style={{ textDecoration: 'none', color: 'grey' }}>{task?.User?.nickname}</a>
        </p>
        <p className="opisanye">
          Описание:
          {' '}
          {task?.body}
        </p>
      </div>
      <div>
        <p className="oneTaskPoints" style={{ color: 'black' }}>
          Баллов:
          {' '}
          {task?.points}
        </p>
        {
          user.status === 10
          && (
            switcher
              ? (<p>В работе</p>)
              : (<button className="choseBtn" onClick={() => clickHandler(task.id)} type="button">Начать</button>)
          )
        }
      </div>
    </div>
  );
}
