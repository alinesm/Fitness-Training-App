import React, { useEffect, useState } from 'react';

import ExerciseCard from './ExerciseCard';
import {
  getAllExercises,
  getExercisesByBodyPart,
  exerciseData,
  setExerciseData,
} from '../services/externalApi';
import data from '../assets/data';

function Exercises({
  exercises,
  setExercises,
  bodyPart,
  exercisesList,
  setExercisesList,
  openModalSuperset,
  setSupersetsList,
  supersetsList,
  circuitList,
  openModalCircuit,
  setCircuitList,
  teste,
  setTeste,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function exercisesByBodyPart() {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = [...data];
      } else {
        exercisesData = data.filter((exercise) =>
          exercise.bodyPart.includes(bodyPart),
        );
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
  // console.log('bodypart', bodyPart);

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
            setSupersetsList={setSupersetsList}
            supersetsList={supersetsList}
            circuitList={circuitList}
            setCircuitList={setCircuitList}
            openModalCircuit={openModalCircuit}
            teste={teste}
            setTeste={setTeste}
          />
        ))
      )}
    </div>
  );
}

export default Exercises;
