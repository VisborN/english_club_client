import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newTask, getAllCounselorTasks } from '../../../../redux/slices/counselorTaskSlice';
import AllTasks from './AllTasks';
import WaitingTasks from './WaitingTasks';
import '../ProfileTasks.css';

export default function CounselorTasks({ user }) {
  const [page, setPage] = React.useState('AllTasks');
  const [input, setInput] = React.useState({
    title: '',
    body: '',
    points: '',
  });

  const tasks = useSelector((state) => state.counselorTasks);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllCounselorTasks());
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(newTask(Object.fromEntries(new FormData(e.target))));
    setInput({
      title: '',
      body: '',
      points: '',
    });
  };

  const clickHandler = (thisPage) => {
    setPage(thisPage);
  };

  return (
    <div className="container">
      <div>
        <h3>Добавить новое задание</h3>
        <form onSubmit={submitHandler}>
          <div className="oneInput">
            <h3>Название</h3>
            <input onChange={inputHandler} name="title" type="text" value={input.title} />
          </div>
          <div className="oneInput">
            <h3>Описание</h3>
            <input onChange={inputHandler} name="body" type="text" value={input.body} />
          </div>
          <div className="oneInput">
            <h3>Очки</h3>
            <input onChange={inputHandler} name="points" type="text" value={input.points} />
          </div>
          <button type="submit">Сохранить</button>
        </form>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <button onClick={() => clickHandler('AllTasks')} type="button">Все задания</button>
          <button onClick={() => clickHandler('WaitingTasks')} type="button">На ожидании</button>
        </div>
        {page === 'AllTasks'
          && <AllTasks tasks={tasks} user={user} />}
        {page === 'WaitingTasks'
          && <WaitingTasks user={user} />}
      </div>
    </div>
  );
}
