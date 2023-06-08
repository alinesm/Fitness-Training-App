import React, { useState } from 'react';
import ExerciseInfo from './ExerciseInfo';
import { FaPlusCircle, FaRegHandPaper } from 'react-icons/fa';
import SupertestsInfo from './SupertestsInfo';
import TableHead from './TableHead';
import SupertestSubTable from './SupertestSubTable';
import { Circle } from '@mui/icons-material';
import CircuitsSubTable from './CircuitsSubTable';
import RestRow from './RestRow';

function Table({
  exercisesList,
  setExercisesList,
  setOpenModalSuperset,
  supersetsList,
  setOpenModalCircuit,
  teste,
  setTeste,
  onSaveExerciseInfo,
}) {
  const [rest, setRest] = useState('90');

  function addRest() {
    const combinedArray = [...exercisesList, { rest: rest }];
    setExercisesList(combinedArray);
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
            exerciseInfo.supertests ? (
              <SupertestSubTable
                exerciseInfo={exerciseInfo}
                exercisesList={exercisesList}
                setExercisesList={setExercisesList}
              />
            ) : exerciseInfo.circuits ? (
              <CircuitsSubTable
                exerciseInfo={exerciseInfo}
                exercisesList={exercisesList}
                setExercisesList={setExercisesList}
              />
            ) : exerciseInfo.rest ? (
              <RestRow setRest={setRest} />
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

export default Table;

// {exercisesList.map((exerciseInfo) =>
//     <ExerciseInfo
//       key={exerciseInfo.exerciseName}
//       exercisesList={exercisesList}
//       setExercisesList={setExercisesList}
//       exerciseInfo={exerciseInfo}
//       teste={teste}
//       setTeste={setTeste}
//     />

// )}

// {exercisesList.map((exerciseInfo) => (
//   <ExerciseInfo
//     key={exerciseInfo.exerciseName}
//     exercisesList={exercisesList}
//     setExercisesList={setExercisesList}
//     exerciseInfo={exerciseInfo}
//   />
// ))}

// {supersetsList.length > 0 && (
//   <>
//     <tr className='flex gap-10 py-3 w-full'>
//       <p className=' border-t-4'>Superset of </p>
//       <input
//         type='number'
//         className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//         placeholder='1'
//         required
//       />
//     </tr>
//     {supersetsList.map((exerciseInfo) => (
//       <SupertestsInfo
//         key={exerciseInfo.exerciseName}
//         exercisesList={exercisesList}
//         setExercisesList={setExercisesList}
//         exerciseInfo={exerciseInfo}
//       />
//     ))}
//   </>
// )}
