import React, { useEffect, useState } from 'react';

import ExerciseInfo from './ExerciseInfo';
import Exercises from '../Exercises';
import SearchExercises from '../SearchExercises';

function AddExercises({
  exercises,
  setExercises,
  bodyPart,
  setBodyPart,
  exercisesList,
  setExercisesList,
  openModalSuperset,
  setSupertestList,
  supertestList,
}) {
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
        <div class='bg-white dark:bg-gray-800'>
          <select
            onChange={(e) => setBodyPart(e.target.value)}
            class='inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
          >
            {bodyPartsList.map((bodyPart) => (
              <option
                key={bodyPart}
                value={bodyPart}
                class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                {bodyPart}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* -----------------  */}
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        exercisesList={exercisesList}
        setExercisesList={setExercisesList}
        openModalSuperset={openModalSuperset}
        setSupertestList={setSupertestList}
        supertestList={supertestList}
      />
    </div>
  );
}

export default AddExercises;
