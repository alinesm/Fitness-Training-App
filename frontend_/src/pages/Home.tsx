import React, { useEffect, useState } from 'react';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import WorkoutsCreation from '../components/WorkoutsCreation';

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [workoutsList, setWorkoutsList] = useState([]);
  const [exercisesList, setExercisesList] = useState([]);

  return (
    <div>
      <WorkoutsCreation
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        exercisesList={exercisesList}
        setExercisesList={setExercisesList}
      />
    </div>
  );
}

export default Home;
