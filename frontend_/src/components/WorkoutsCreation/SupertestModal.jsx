import ExerciseInfo from './ExerciseInfo';
import { FaEdit, FaPlusCircle } from 'react-icons/fa';
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
  visible,
  numRounds,
  setNumRounds,
  indexCircuitEdit,
  setIndexCircuitEdit,
  isEditing,
  setIsEditing,
}) {
  if (!visible) return null;

  function handleCreateEditSuperset() {
    const updatedExercisesList = [...exercisesList];
    if (isEditing) {
      updatedExercisesList[indexCircuitEdit].supertests = [
        { supersetOf: numRounds },
        ...supersetsList,
      ];
      setExercisesList(updatedExercisesList);
      setIsEditing(false);
    } else if (supersetsList.length > 0) {
      const supersetObject = {
        supertests: [{ supersetOf: numRounds }, ...supersetsList],
      };
      setExercisesList([...updatedExercisesList, supersetObject]);
    }

    setSupersetsList([]);
    setNumRounds('');
    setOpenModalSuperset(false);
    setIndexCircuitEdit(null);
  }
  console.log('lista com supertsets', exercisesList);

  return (
    <div className='absolute w-full inset-0 z-40 flex bg-black bg-opacity-80'>
      <div
        className={
          (visible ? '' : 'relative') +
          'h-fit  mt-20 rounded-sm mx-auto w-10/12 overflow-y-auto bg-white transition-transform'
        }
      >
        <div className='flex  items-center justify-between py-3 px-4 '>
          <div className='flex items-center gap-3'>
            <p>Superset of</p>
            <input
              value={numRounds}
              onChange={(e) => setNumRounds(e.target.value)}
              className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm
      rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              type='number'
              placeholder='1'
            />
            sets
          </div>

          <button
            onClick={handleCreateEditSuperset}
            className='uppercase text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            {isEditing ? (
              <div className='flex items-center gap-1'>
                <FaEdit />
                Save Changes
              </div>
            ) : (
              <div className='flex items-center gap-1'>
                <FaPlusCircle />
                Create Superset
              </div>
            )}
          </button>
        </div>

        <div class='sm:rounded-lg'>
          <div class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <div class=' w-full text-xs font-semibold bg-gray-200 border-gray-300 border-y text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400'>
              <div className='flex items-center px-4'>
                <p class=' w-20'></p>
                <p class='py-3 pl-3 w-32 '>Exercise Name</p>
                <p class='py-3 w-48 '>Target</p>
                <p class='py-3 w-32'>Rest Period</p>
                <p class='py-3'>Action</p>
              </div>
            </div>
            {supersetsList.length === 0 ? (
              <div className='flex items-center justify-center py-4'>
                <p className='text-sm text-gray-500'>No exercises added yet</p>
              </div>
            ) : (
              <div>
                {' '}
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
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setOpenModalSuperset(false)}
        type='button'
        className='absolute text-lg font-bold right-1 top-1 flex justify-items-end rounded-lg bg-transparent px-3 py-1 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
      >
        X
      </button>
    </div>

    // <div className='absolute w-full inset-0 z-40 flex bg-black bg-opacity-80'>
    //   <div className='flex  items-center justify-between py-3 px-4 '>
    //     <h1 className='text-base font-bold uppercase '>Add exercises</h1>
    //     <button
    //       onClick={handleCreateEditSuperset}
    //       className='uppercase text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
    //     >
    //       <div className='flex items-center gap-1'>
    //         <FaPlusCircle />
    //         Create Supertest
    //       </div>
    //     </button>
    //   </div>

    //   <div class='sm:rounded-lg'>
    //     <div class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
    //       <TableHead />
    // {supersetsList.map((exerciseInfo, index) => (
    //   <AddSupersetsExercises
    //     key={exerciseInfo.exerciseName}
    //     exercisesList={supersetsList}
    //     setExercisesList={setSupersetsList}
    //     index={index}
    //     exerciseInfo={exerciseInfo}
    //   />
    // ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default SupertestModal;
