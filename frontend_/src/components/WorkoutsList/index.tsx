import React, { useState, useEffect } from 'react';
import { getListOfWorkouts, getWorkoutById } from '../../services/workoutApi';

function WorkoutsList({
  setOpenCreateWorkout,
  workoutTobeEdited,
  setWorkoutTobeEdited,
}) {
  const [workoutsList, setWorkoutsList] = useState([]);

  useEffect(() => {
    async function getWorkouts() {
      const data = await getListOfWorkouts();
      setWorkoutsList(data);
    }
    getWorkouts();
  }, []);
  console.log('workoutsList', workoutsList);

  async function handleEditWorkout(id) {
    console.log(id);
    setOpenCreateWorkout(true);
    const editWorkout = await getWorkoutById(id);
    console.log('edit', editWorkout);

    setWorkoutTobeEdited(editWorkout);
  }
  console.log('workoutTobeEdited', workoutTobeEdited);

  return (
    <div>
      <button onClick={() => setOpenCreateWorkout(true)}>new workout</button>
      {workoutsList.length !== 0 && (
        <div>
          {workoutsList?.map((workout) => (
            <div key={workout.id}>
              <h1>{workout.name}</h1>
              <p>{workout.description}</p>
              <button onClick={() => handleEditWorkout(workout.id)}>
                Edit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WorkoutsList;
