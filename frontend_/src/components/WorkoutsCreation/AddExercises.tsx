import React, { useState } from 'react';
import Exercises from '../Exercises';
import SearchExercises from '../SearchExercises';
import FilterByBodyPart from './FilterByBodyPart';

function AddExercises({
  exercisesList,
  setExercisesList,
  openModalSuperset,
  setSupersetsList,
  supersetsList,
  circuitList,
  setCircuitList,
  openModalCircuit,
}) {
  const [exercises, setExercises] = useState([]); // exercisses from Api
  const [bodyPart, setBodyPart] = useState('all');
  const [bodyPartsList, setBodyPartsList] = useState([]);

  return (
    <div className=' bg-white border-l py-4 px-4'>
      <div class='flex mb-4 items-center justify-between overflow-y-auto sm:rounded-lg'>
        <div>
          <SearchExercises
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            setBodyPartsList={setBodyPartsList}
          />
        </div>
        <FilterByBodyPart
          bodyPartsList={bodyPartsList}
          setBodyPart={setBodyPart}
        />
      </div>

      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        exercisesList={exercisesList}
        setExercisesList={setExercisesList}
        openModalSuperset={openModalSuperset}
        setSupersetsList={setSupersetsList}
        supersetsList={supersetsList}
        circuitList={circuitList}
        setCircuitList={setCircuitList}
        openModalCircuit={openModalCircuit}
      />
    </div>
  );
}

export default AddExercises;
