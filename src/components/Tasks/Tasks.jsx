import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllChildTasks } from '../../redux/slices/childTaskSlice';
import { filterTasks, getAllTasks } from '../../redux/slices/taskSlice';
import OneTask from './OneTask';
import Pagination from './Pagination';
import Navbar from '../Navbar/Navbar';
import './Tasks.scss';

export default function Tasks() {
  const [menu, setMenu] = React.useState(false);
  const tasks = useSelector((state) => state.tasks);
  const user = useSelector((state) => state.user);
  const childTasks = useSelector((state) => state.childTasks);

  const [input, setInput] = React.useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(filterTasks(Object.fromEntries(new FormData(e.target))));
  };

  React.useEffect(() => {
    dispatch(getAllTasks());
    dispatch(getAllChildTasks());
  }, []);

  // пагинация
  const itemsPerPage = 4;
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = React.useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = tasks.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(tasks.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tasks.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="allTaskContent">
      <div className={menu ? 'closeMenu' : 'taskNavDiv'}>
        <Navbar />
      </div>
      <div className="taskContent">
        <div className="All">
          <div className="allTasksHead">
            <div className="allTasksTitleDiv">
              <h1 className="allTasksTitle">Все задания</h1>
              <img className="allTasksImg" src="./Layers.svg" alt="" />
            </div>
            <div className="searchAndMenu">
              <form onSubmit={submitHandler}>
                <input className="allTasksSearch" value={input} style={{ paddingLeft: '10px' }} placeholder="Поиск" onChange={inputHandler} type="text" name="search" />
              </form>
              <button type="button" onClick={() => setMenu(true)} className="burgerMenuBtn">
                <img src="./burgerMenu.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="tasksPaginations">
            <div className="taskDivs">
              {currentItems?.map((el) => (
                <OneTask key={el.id} task={el} user={user} childTasks={childTasks} pageCount={pageCount} />
              ))}
            </div>
            <div>
              <Pagination tasks={tasks} handlePageClick={handlePageClick} pageCount={pageCount} />
            </div>
          </div>
        </div>
      </div>
      <div className="advertising">
        <img src="http://localhost:3003/first.jpg" alt="" />
        <img src="http://localhost:3003/second.jpg" alt="" />
      </div>
    </div>
  );
}
