import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import TableHead from './TableHead';
import CircuitsInfo from './CircuitsInfo';

function CircuitModal({
  circuitList,
  setCircuitList,
  setOpenModalCircuit,
  exercisesList,
  setExercisesList,
}) {
  const [numRounds, setNumRounds] = useState('');

  function handleCreateCircuit() {
    const circuitObject = {
      circuits: [{ circuitOf: numRounds }, ...circuitList],
    };
    const updatedExercisesList = [...exercisesList, circuitObject];
    setExercisesList(updatedExercisesList);
    setCircuitList([]);
    setOpenModalCircuit(false);
  }
  console.log('lista com circuitos', exercisesList);

  // function handleCreateCircuit() {
  //   const combinedArray = [...exercisesList, { circuits: [...circuitList] }];
  //   setExercisesList(combinedArray);
  //   // setExercisesList([...exercisesList, ...supersetsList]);
  //   setCircuitList([]);
  //   setOpenModalCircuit(false);
  // }

  return (
    <div>
      <div className='flex  items-center justify-between py-3 px-4 '>
        <h1 className='text-base font-bold uppercase '>Add exercises</h1>
        <button
          onClick={handleCreateCircuit}
          className='uppercase text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          <div className='flex items-center gap-1'>
            <FaPlusCircle />
            Create Circuit
          </div>
        </button>
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
      </div>

      <div class='sm:rounded-lg'>
        <div class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <TableHead />
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
      </div>
    </div>
  );
}

export default CircuitModal;
