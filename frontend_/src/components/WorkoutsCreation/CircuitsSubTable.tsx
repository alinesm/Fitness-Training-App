import React, { useState } from 'react';
import CircuitsInfo from './CircuitsInfo';
import { FaTrash, FaEdit } from 'react-icons/fa';
import CircuitModal from './CircuitModal';
import CircuitModalInfo from './CircuitModalInfo';

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
        <span>{exerciseInfo.circuits[0].circuitOf}</span>
        <p>rounds</p>
        <FaTrash />
        <button onClick={() => handleEditCircuit(index)}>
          <FaEdit />
        </button>
      </div>

      {exerciseInfo.circuits.slice(1).map((exercise, index) => (
        <CircuitModalInfo
          key={exercise.exerciseName}
          exerciseInfo={exercise}
          //nao lembro pq tem que somar mais um
          // index={index + 1} // Add 1 to the index to adjust for skipping the first element
        />
      ))}
    </div>
  );
}

export default CircuitsSubTable;
