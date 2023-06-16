import React, { useEffect, useState } from 'react';
import WorkoutsCreation from '../components/WorkoutsCreation';
import WorkoutsList from '../components/WorkoutsList';
import EditWorkout from '../components/WorkoutsList/EditWorkout';

function Home() {
  const [openCreateWorkout, setOpenCreateWorkout] = useState(false);
  const [workoutTobeEdited, setWorkoutTobeEdited] = useState([]);
  return (
    <div>
      <WorkoutsList
        setOpenCreateWorkout={setOpenCreateWorkout}
        workoutTobeEdited={workoutTobeEdited}
        setWorkoutTobeEdited={setWorkoutTobeEdited}
      />
      {openCreateWorkout && <WorkoutsCreation />}
      {/* {openCreateWorkout && (
        <EditWorkout
          workoutTobeEdited={workoutTobeEdited}
          setWorkoutTobeEdited={setWorkoutTobeEdited}
        />
      )} */}
    </div>
  );
}

export default Home;
