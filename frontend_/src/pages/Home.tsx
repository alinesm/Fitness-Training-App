import React, { useState } from 'react';
import WorkoutsCreation from '../components/WorkoutsCreation';
import EditWorkout from '../components/WorkoutsList/EditWorkout';

import Sidebar from '../components/Sidebar';
import WorkoutListByClient from '../components/WorkoutListByClient';

function Home() {
  const [openCreateWorkout, setOpenCreateWorkout] = useState(false);
  const [workoutTobeEdited, setWorkoutTobeEdited] = useState([]);
  console.log('openCreateWorkout', openCreateWorkout);
  return (
    <div className='w-full relative'>
      <Sidebar />
      <WorkoutListByClient
        setOpenCreateWorkout={setOpenCreateWorkout}
        openCreateWorkout={openCreateWorkout}
        workoutTobeEdited={workoutTobeEdited}
        setWorkoutTobeEdited={setWorkoutTobeEdited}
      />

      {openCreateWorkout && (
        <WorkoutsCreation setOpenCreateWorkout={setOpenCreateWorkout} />
      )}
    </div>
  );
}

export default Home;

{
  /* <EditWorkout
  workoutTobeEdited={workoutTobeEdited}
  setWorkoutTobeEdited={setWorkoutTobeEdited}
/>  */
}
