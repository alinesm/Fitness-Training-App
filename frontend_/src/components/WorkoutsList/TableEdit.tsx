import React, { useState } from 'react';
import { FaPlusCircle, FaRegHandPaper } from 'react-icons/fa';
import TableHead from '../WorkoutsCreation/TableHead';
import ExerciseInfo from '../WorkoutsCreation/ExerciseInfo';
import RestRow from '../WorkoutsCreation/RestRow';
import SupertestSubTableEdit from './SupersetSubTableEdit';
import SupersetSubTableEdit from './SupersetSubTableEdit';
import SupertestSubTable from '../WorkoutsCreation/SupertestSubTable';
import CircuitsSubTable from '../WorkoutsCreation/CircuitsSubTable';
import CircuitSubTableEdit from './CircuitSubTableEdit';

function TableEdit({
  exercisesList,
  setExercisesList,
  setOpenModalSuperset,
  supersetsList,
  setOpenModalCircuit,
  teste,
  setTeste,
  onSaveExerciseInfo,
  // workoutTobeEdited,
  // setWorkoutTobeEdited,
}) {
  // const [rest, setRest] = useState('90');

  function addRest() {
    const combinedArray = [
      ...exercisesList,
      {
        exerciseId: null,
        exerciseGift: '',
        exerciseName: 'restTime',
        sets: '',
        text: '',
        restSecs: '90',
      },
    ];
    setExercisesList(combinedArray);
  }

  // console.log('workoutTobeEdited2', workoutTobeEdited);
  // console.log('exercisesList2', exercisesList);

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
            onClick={() => setOpenModalSuperset(true)}
            className='mr-3 uppercase text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            <div className='flex items-center gap-1'>
              <FaPlusCircle /> Superset
            </div>
          </button>

          <button
            onClick={() => setOpenModalCircuit(true)}
            className=' uppercase text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            <div className='flex items-center gap-1'>
              <FaPlusCircle /> Circuit
            </div>
          </button>
        </div>

        <button
          onClick={addRest}
          className=' uppercase text-white bg-red-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          <div className='flex items-center gap-1'>
            <FaRegHandPaper />
            ADD Rest
          </div>
        </button>
      </div>
      <div class='sm:rounded-lg w-full'>
        <div class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <TableHead />

          {exercisesList.map((exerciseInfo, index) =>
            exerciseInfo.exerciseId === null ? (
              <RestRow setRest={exerciseInfo.restSecs} />
            ) : exerciseInfo.supertests ? (
              <SupersetSubTableEdit
                exerciseInfo={exerciseInfo}
                exercisesList={exercisesList}
                setExercisesList={setExercisesList}
                // onSaveExerciseInfo={onSaveExerciseInfo}
              />
            ) : exerciseInfo.circuits ? (
              <CircuitSubTableEdit
                exerciseInfo={exerciseInfo}
                exercisesList={exercisesList}
                setExercisesList={setExercisesList}
              />
            ) : (
              <ExerciseInfo
                key={exerciseInfo.exerciseName}
                exerciseInfo={exerciseInfo}
                index={index}
                onSaveExerciseInfo={onSaveExerciseInfo}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
}

export default TableEdit;
