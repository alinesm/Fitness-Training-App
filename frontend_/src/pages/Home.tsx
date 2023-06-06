import React, { useEffect, useState } from 'react';

import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import TrainigTable from '../components/TrainigTable';
import WorkoutsCreation from '../components/WorkoutsCreation';

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [workoutsList, setWorkoutsList] = useState([]);
  const [exercisesList, setExercisesList] = useState([]);

  return (
    <div>
      {/* <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        exercisesList={exercisesList}
        setExercisesList={setExercisesList}
      /> */}
      <WorkoutsCreation
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        exercisesList={exercisesList}
        setExercisesList={setExercisesList}
      />
    </div>
  );
}

export default Home;
