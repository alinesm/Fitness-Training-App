import React, { useState } from 'react';
import { FaEdit, FaPlusCircle } from 'react-icons/fa';
import TableHead from './TableHead';
import CircuitsInfo from './CircuitsInfo';

function CircuitModal({
  circuitList,
  setCircuitList,
  setOpenModalCircuit,
  exercisesList,
  setExercisesList,
  numRounds,
  setNumRounds,
  indexCircuitEdit,
  setIndexCircuitEdit,
  isEditing,
  setIsEditing,
  visible,
}) {
  if (!visible) return null;

  function handleCreateEditCircuit() {
    const updatedExercisesList = [...exercisesList];
    //if isEditing and the user deleted all the exercises
    //from the circuit, the circuit should be deleted from exercisesList

    if (isEditing) {
      updatedExercisesList[indexCircuitEdit].circuits = [
        { circuitOf: numRounds },
        ...circuitList,
      ];
      setExercisesList(updatedExercisesList);
      setIsEditing(false);
    } else if (circuitList.length > 0) {
      const circuitObject = {
        circuits: [{ circuitOf: numRounds }, ...circuitList],
      };
      setExercisesList([...updatedExercisesList, circuitObject]);
    }

    setCircuitList([]);
    setNumRounds('');
    setOpenModalCircuit(false);
    setIndexCircuitEdit(null);
  }
  console.log('exerciseList', exercisesList);

  // function handleCreateCircuit() {
  //   const circuitObject = {
  //     circuits: [{ circuitOf: numRounds }, ...circuitList],
  //   };
  //   const updatedExercisesList = [...exercisesList, circuitObject];

  //   setExercisesList(updatedExercisesList);
  //   setCircuitList([]);
  //   setOpenModalCircuit(false);
  // }

  // function handleCreateCircuit() {
  //   const combinedArray = [...exercisesList, { circuits: [...circuitList] }];
  //   setExercisesList(combinedArray);
  //   // setExercisesList([...exercisesList, ...supersetsList]);
  //   setCircuitList([]);
  //   setOpenModalCircuit(false);
  // }

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
            <p>Circuit of</p>
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
            rounds
          </div>

          <button
            onClick={handleCreateEditCircuit}
            className='uppercase text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            {isEditing ? (
              <div className='flex items-center gap-1'>
                <FaEdit />
                Edit Circuit
              </div>
            ) : (
              <div className='flex items-center gap-1'>
                <FaPlusCircle />
                Create Circuit
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
            {circuitList.length === 0 ? (
              <div className='flex items-center justify-center py-4'>
                <p className='text-sm text-gray-500'>No exercises added yet</p>
              </div>
            ) : (
              <div>
                {' '}
                {circuitList.map((exerciseInfo, index) => (
                  <CircuitsInfo
                    key={exerciseInfo.exerciseName}
                    exercisesList={circuitList}
                    setExercisesList={setCircuitList}
                    exerciseInfo={exerciseInfo}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setOpenModalCircuit(false)}
        type='button'
        className='absolute text-lg font-bold right-1 top-1 flex justify-items-end rounded-lg bg-transparent px-3 py-1 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
      >
        X
      </button>
    </div>
  );
}

export default CircuitModal;
