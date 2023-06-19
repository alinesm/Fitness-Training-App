import React, { useEffect, useState } from 'react';
import WorkoutsCreation from '../components/WorkoutsCreation';
import WorkoutsList from '../components/WorkoutsList';
import EditWorkout from '../components/WorkoutsList/EditWorkout';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';
import {
  FaEdit,
  FaHome,
  FaMoneyCheckAlt,
  FaRegUser,
  FaTrash,
  FaUserFriends,
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import WorkoutListByClient from '../components/WorkoutListByClient';

function Home() {
  const [openCreateWorkout, setOpenCreateWorkout] = useState(false);
  const [workoutTobeEdited, setWorkoutTobeEdited] = useState([]);
  console.log('openCreateWorkout', openCreateWorkout);
  return (
    <div className='w-full relative'>
      <Sidebar />
      <WorkoutListByClient setOpenCreateWorkout={setOpenCreateWorkout} />
      {/* <WorkoutsCreation visible={openCreateWorkout} /> */}
      {openCreateWorkout && (
        <WorkoutsCreation setOpenCreateWorkout={setOpenCreateWorkout} />
      )}
    </div>
  );
}

export default Home;

{
  /* <WorkoutsList
setOpenCreateWorkout={setOpenCreateWorkout}
workoutTobeEdited={workoutTobeEdited}
setWorkoutTobeEdited={setWorkoutTobeEdited}
/> 
{openCreateWorkout && <WorkoutsCreation />}
<EditWorkout
  workoutTobeEdited={workoutTobeEdited}
  setWorkoutTobeEdited={setWorkoutTobeEdited}
/> */
}
