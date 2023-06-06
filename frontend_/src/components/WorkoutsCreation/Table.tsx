import React, { useState } from 'react';
import ExerciseInfo from './ExerciseInfo';
import { FaPlusCircle, FaRegHandPaper } from 'react-icons/fa';

function Table({ exercisesList, setExercisesList, setOpenModalSuperset }) {
  function handleCreateSuperset() {
    setOpenModalSuperset(true);
  }
  return (
    <>
      <div className='p-4'>
        <h1 className='text-sm font-semibold'>INSTRUCTIONS</h1>
        <textarea className='w-full h-32 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></textarea>
      </div>

      <h1 className='text-base font-bold uppercase bg-gray-300 py-3 px-4'>
        Exercises
      </h1>
      <div className='flex justify-between px-4 my-3'>
        <div>
          <button
            onClick={handleCreateSuperset}
            className='mr-3 uppercase text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            <div className='flex items-center gap-1'>
              <FaPlusCircle /> Superset
            </div>
          </button>

          <button className=' uppercase text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
            <div className='flex items-center gap-1'>
              <FaPlusCircle /> Circuit
            </div>
          </button>
        </div>

        <button className=' uppercase text-white bg-red-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
          <div className='flex items-center gap-1'>
            <FaRegHandPaper />
            ADD Rest
          </div>
        </button>
      </div>
      <div class='sm:rounded-lg'>
        <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs bg-gray-200 border-gray-300 border-y text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' class=' py-3'>
                <span class='sr-only'>Image</span>
              </th>
              <th scope='col' class='px-1 py-3'>
                Exercise Name
              </th>
              <th scope='col' class=' py-3'>
                Sets
              </th>
              <th scope='col' class='y-3'>
                Target
              </th>
              <th scope='col' class='py-3'>
                Rest Period
              </th>
              <th scope='col' class='py-3'>
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {exercisesList.map((exerciseInfo) => (
              <ExerciseInfo
                key={exerciseInfo.exerciseName}
                exercisesList={exercisesList}
                setExercisesList={setExercisesList}
                exerciseInfo={exerciseInfo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
