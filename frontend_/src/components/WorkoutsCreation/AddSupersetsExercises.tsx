import React from 'react';
import { FaTrash, FaRegEdit } from 'react-icons/fa';

function AddSupersetsExercises({
  exerciseInfo,
  index,
  exercisesList,
  setExercisesList,
}) {
  const maxLength = 13;

  function handleDeleteExercise(id) {
    // console.log(arr.map((item) => item.supertests ? item.supertests.map((subItem) => subItem) : item).flat())

    const updatedExercise = exercisesList.filter(
      (item) => item.exerciseId !== id,
    );
    setExercisesList(updatedExercise);
  }

  const handleTextChange = (e) => {
    const updatedExerciseInfo = {
      ...exerciseInfo,
      text: e.target.value,
    };
    const updatedExercisesList = [...exercisesList];
    updatedExercisesList[index] = updatedExerciseInfo;
    setExercisesList(updatedExercisesList);
  };

  const handleRestSecsChange = (e) => {
    const updatedExerciseInfo = {
      ...exerciseInfo,
      restSecs: e.target.value,
    };
    const updatedExercisesList = [...exercisesList];
    updatedExercisesList[index] = updatedExerciseInfo;
    setExercisesList(updatedExercisesList);
  };

  return (
    <>
      <div className='bg-white rounded-md flex items-center  px-4 border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 '>
        <div className='w-20'>
          <img
            className='w-full h-full'
            src={exerciseInfo.exerciseGift}
            alt='gif'
          />
        </div>
        <div className='pl-3 w-32 text-gray-900 dark:text-white capitalize'>
          {exerciseInfo.exerciseName.length <= 13
            ? exerciseInfo.exerciseName
            : `${exerciseInfo.exerciseName.substring(0, maxLength)}...`}
        </div>
        <div className='w-48 text-gray-900 dark:text-white'>
          <input
            value={exerciseInfo.text}
            onChange={handleTextChange}
            type='text'
            className='bg-gray-50 w-40 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='reps, weight, time, etc'
            required
          />
        </div>
        <div className='w-36 text-gray-900 dark:text-white'>
          <select
            value={exerciseInfo.restSecs}
            onChange={handleRestSecsChange}
            className='bg-gray-50 w-24 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='none'>None</option>
            <option value='45'>45 sec</option>
            <option value='90'>90 sec</option>
          </select>
        </div>
        <div className='py-8'>
          <FaTrash
            size={16}
            style={{ cursor: 'pointer' }}
            onClick={() => handleDeleteExercise(exerciseInfo.exerciseId)}
          />
        </div>
      </div>
    </>
  );
}

export default AddSupersetsExercises;
