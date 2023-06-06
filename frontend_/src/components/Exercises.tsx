import React, { useEffect, useState } from 'react';

import ExerciseCard from './ExerciseCard';
import {
  getAllExercises,
  getExercisesByBodyPart,
} from '../services/externalApi';
import data from '../assets/data';

function Exercises({
  exercises,
  setExercises,
  bodyPart,
  exercisesList,
  setExercisesList,
  openModalSuperset,
  setSupertestList,
  supertestList,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function exercisesByBodyPart() {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = [...data];
      }
      setExercises(exercisesData);
      setIsLoading(false);
    }
    exercisesByBodyPart();
  }, [bodyPart, setExercises]);

  // useEffect(() => {
  //   async function exercisesByBodyPart() {
  //     let exercisesData = [];

  //     if (bodyPart === 'all') {
  //       exercisesData = await getAllExercises();
  //     } else {
  //       exercisesData = await getExercisesByBodyPart(bodyPart);
  //     }

  //     setExercises(exercisesData);
  //     setIsLoading(false);
  //   }
  //   exercisesByBodyPart();
  // }, [bodyPart, setExercises]);

  return (
    <div className='flex flex-wrap gap-4'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        exercises.map((exercise, idx) => (
          <ExerciseCard
            key={idx}
            exercise={exercise}
            exercisesList={exercisesList}
            setExercisesList={setExercisesList}
            openModalSuperset={openModalSuperset}
            setSupertestList={setSupertestList}
            supertestList={supertestList}
          />
        ))
      )}
    </div>
  );
}

export default Exercises;
