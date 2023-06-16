import React, { useState } from 'react';
import CircuitsInfo from './CircuitsInfo';
import { FaTrash, FaEdit } from 'react-icons/fa';

function CircuitsSubTable({
  exerciseInfo,
  exercisesList,
  setExercisesList,
  setOpenModalCircuit,
  index,
  circuitList,
  setCircuitList,
  numRounds,
  setNumRounds,
  indexCircuitEdit,
  setIndexCircuitEdit,
  isEditing,
  setIsEditing,
}) {
  // const [rounds, setRounds] = useState(exerciseInfo.circuits[0].circuitOf);
  // const circuitOf = exerciseInfo.circuits[0].circuitOf;

  function handleEditCircuit(index) {
    setOpenModalCircuit(true);
    setIndexCircuitEdit(index);
    setIsEditing(true);
    const circuitExercises = exercisesList.find((item, idx) => idx === index);
    setNumRounds(circuitExercises.circuits[0].circuitOf);
    setCircuitList(circuitExercises.circuits.slice(1));
  }

  return (
    <div className='border-y-2 bg-green-50  border-green-300'>
      <div className='flex border-b border-gray-300 py-3 gap-5 items-center pl-4 text-base font-semibold'>
        <p>Circuit of</p>
        <input
          value={numRounds}
          className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm
        rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='number'
          placeholder='1'
        />
        <p>rounds</p>
        <FaTrash />
        <button onClick={() => handleEditCircuit(index)}>
          <FaEdit />
        </button>
      </div>

      {exerciseInfo.circuits.slice(1).map((exercise, index) => (
        <CircuitsInfo
          key={exercise.exerciseName}
          exercisesList={exercisesList}
          setExercisesList={setExercisesList}
          exerciseInfo={exercise}
          //nao lembro pq tem que somar mais um
          index={index + 1} // Add 1 to the index to adjust for skipping the first element
        />
      ))}
    </div>
  );
}

export default CircuitsSubTable;
