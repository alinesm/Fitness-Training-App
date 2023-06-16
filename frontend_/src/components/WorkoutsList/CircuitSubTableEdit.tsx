import React from 'react';
import CircuitsInfo from '../WorkoutsCreation/CircuitsInfo';

function CircuitSubTableEdit({
  exerciseInfo,
  exercisesList,
  setExercisesList,
}) {
  const rounds = exerciseInfo.circuits[0].rounds;

  return (
    <div className='border-y-2 bg-blue-50  border-blue-300'>
      <div className='flex border-b border-gray-300 py-3 gap-5 items-center pl-4 text-base font-semibold'>
        <p>Circuit of</p>
        <input
          value={rounds}
          className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm
        rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='number'
          placeholder='1'
        />
      </div>

      {exerciseInfo.circuits.slice(1).map((exercise, index) => (
        <CircuitsInfo
          key={exercise.exerciseName}
          exercisesList={exercisesList}
          setExercisesList={setExercisesList}
          exerciseInfo={exercise}
          index={index + 1} // Add 1 to the index to adjust for skipping the first element
        />
      ))}
    </div>
  );
}

export default CircuitSubTableEdit;
