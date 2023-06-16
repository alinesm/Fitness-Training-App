import ExerciseInfo from './ExerciseInfo';
import { FaPlusCircle } from 'react-icons/fa';
import TableHead from './TableHead';
import SupertestsInfo from './SupertestsInfo';
import { useState } from 'react';
import AddSupersetsExercises from './AddSupersetsExercises';

function SupertestModal({
  setOpenModalSuperset,
  supersetsList,
  setSupersetsList,
  exercisesList,
  setExercisesList,
}) {
  const [numSets, setNumSets] = useState('');
  // function handleCreateSupertest() {
  //   const combinedArray = [
  //     ...exercisesList,
  //     { supertests: [...supersetsList] },
  //   ];
  //   setExercisesList(combinedArray);
  //   setSupersetsList([]);
  //   setOpenModalSuperset(false);
  // }

  // function handleCreateSupertest() {
  //   const supertestObject = {
  //     supertests: [{ supersetOf: numSets }, ...supersetsList],
  //   };
  //   const updatedExercisesList = [...exercisesList, supertestObject];
  //   setExercisesList(updatedExercisesList);
  //   setSupersetsList([]);
  //   setOpenModalSuperset(false);
  // }
  console.log('super', supersetsList);

  function handleCreateSupertest() {
    const supertestObject = {
      supertests: [{ rounds: '' }, ...supersetsList],
    };
    const updatedExercisesList = [...exercisesList, supertestObject];
    setExercisesList(updatedExercisesList);
    setSupersetsList([]);
    setOpenModalSuperset(false);
  }
  console.log('lista com supertsets', exercisesList);

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
        {/* <p>Superset of</p> */}
        {/* <input
          value={numSets}
          onChange={(e) => setNumSets(e.target.value)}
          className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm
        rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='number'
          placeholder='1'
        /> */}
      </div>

      <div class='sm:rounded-lg'>
        <div class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <TableHead />
          {supersetsList.map((exerciseInfo, index) => (
            <AddSupersetsExercises
              key={exerciseInfo.exerciseName}
              exercisesList={supersetsList}
              setExercisesList={setSupersetsList}
              index={index}
              exerciseInfo={exerciseInfo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SupertestModal;
