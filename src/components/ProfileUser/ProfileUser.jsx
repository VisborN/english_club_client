import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllTasks } from '../../redux/slices/taskSlice';
import LkProfileCounselor from '../LK/LkProfileCounselor';

export default function ProfileUser() {
  const tasks = useSelector((state) => state.tasks);
  const { id } = useParams();
  const oneTask = tasks?.find((el) => el.author === +id);
  const oneUser = oneTask?.User;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllTasks());
  }, []);
  return (
    <div>
      <LkProfileCounselor user={oneUser} />
    </div>
  );
}
