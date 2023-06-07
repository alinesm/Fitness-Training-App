import React from 'react';
import { FaTrash, FaRegEdit } from 'react-icons/fa';

function SupertestsInfo({ exercisesList, setExercisesList, exerciseInfo }) {
  // console.log('exerciseInfo', exerciseInfo);
  const maxLength = 13;

  function handleDeleteExercise(id) {
    // console.log(arr.map((item) => item.supertests ? item.supertests.map((subItem) => subItem) : item).flat())

    const updatedExercise = exercisesList.filter(
      (item) => item.exerciseId !== id,
    );
    setExercisesList(updatedExercise);
  }

  return (
    <>
      <tr className='bg-blue-500 border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        <td className='w-20 '>
          <img
            className='w-full h-full'
            src={exerciseInfo.exerciseGift}
            alt='Apple Watch'
          />
        </td>
        <td className='px-1 text-gray-900 dark:text-white capitalize'>
          {exerciseInfo.exerciseName.length <= 13
            ? exerciseInfo.exerciseName
            : `${exerciseInfo.exerciseName.substring(0, maxLength)}...`}
        </td>
        <td>
          <div className='flex items-center space-x-3'>
            <div>
              <input
                type='number'
                className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='1'
                required
              />
            </div>
          </div>
        </td>
        <td className='font-semibold text-gray-900 dark:text-white'>
          <div>
            <input
              type='text'
              className='bg-gray-50 w-32 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='reps, weight, time, etc'
              required
            />
          </div>
        </td>
        <td className='text-gray-900 dark:text-white'>
          <div>
            <select className='bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              <option>None</option>
              <option>45 sec</option>
              <option>90 sec</option>
            </select>
          </div>
        </td>
        <td className='py-8 flex gap-3'>
          <FaTrash
            onClick={() => handleDeleteExercise(exerciseInfo.exerciseId)}
          />
        </td>
      </tr>
    </>
  );
}

export default SupertestsInfo;
