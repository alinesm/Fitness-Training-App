import React, { useState } from 'react';
import ExerciseInfo from './ExerciseInfo';
import { FaPlusCircle, FaRegHandPaper } from 'react-icons/fa';

function SupertestModal({
  setOpenModalSuperset,
  supertestList,
  setSupertestList,
  exercisesList,
  setExercisesList,
  isSupertest,
  setIsSupertest,
}) {
  // const [aux, setAux] = useState([...supertestList]);

  function handleCreateSupertest() {
    // setAux([]);

    const combinedArray = [
      ...exercisesList,
      { supertests: [...supertestList] },
    ];
    setExercisesList(combinedArray);
    // setExercisesList([...exercisesList, ...supertestList]);
    // setSupertestList([]);
    setOpenModalSuperset(false);
    // setAux([...supertestList]);
    // setSupertestList([]);

    // setIsSupertest(true);
  }
  console.log('lista', exercisesList);

  return (
    <div>
      <div className='flex  items-center justify-between py-3 px-4 '>
        <h1 className='text-base font-bold uppercase '>Add exercises</h1>
        <button
          onClick={handleCreateSupertest}
          className='uppercase text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          <div className='flex items-center gap-1'>
            <FaPlusCircle />
            Create Supertest
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
            {supertestList.map((exerciseInfo) => (
              <ExerciseInfo
                key={exerciseInfo.exerciseName}
                exercisesList={supertestList}
                setExercisesList={setSupertestList}
                exerciseInfo={exerciseInfo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupertestModal;
