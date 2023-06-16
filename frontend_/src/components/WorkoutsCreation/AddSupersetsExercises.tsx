import React from 'react';
import { FaTrash, FaRegEdit } from 'react-icons/fa';

function AddSupersetsExercises({
  exerciseInfo,
  index,
  exercisesList,
  setExercisesList,
}) {
  const maxLength = 13;

  return (
    <>
      <div className='bg-blue-50 flex items-center justify-between px-4 border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 '>
        <div className='w-20'>
          <img
            className='w-full h-full'
            src={exerciseInfo.exerciseGift}
            alt='gif'
          />
        </div>
        <div className='px-1 text-gray-900 dark:text-white capitalize'>
          {exerciseInfo.exerciseName.length <= 13
            ? exerciseInfo.exerciseName
            : `${exerciseInfo.exerciseName.substring(0, maxLength)}...`}
        </div>
      </div>
    </>
  );
}

export default AddSupersetsExercises;
