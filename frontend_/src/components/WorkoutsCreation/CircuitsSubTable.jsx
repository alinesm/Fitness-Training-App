import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import CircuitModalInfo from './CircuitModalInfo';

function CircuitsSubTable({
  exerciseInfo,
  exercisesList,
  setOpenModalCircuit,
  index,
  setCircuitList,
  setNumRounds,
  setIndexCircuitEdit,
  setIsEditing,
  handleDelete,
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
    <div>
      {exerciseInfo.circuits.slice(1).length > 0 && (
        <div className='border-y-2 bg-green-50  border-green-300'>
          <div className='flex justify-between border-b border-gray-300 py-1 tems-center px-4 text-base font-medium'>
            <div className='flex text-gray-600 items-center gap-2'>
              <p>Circuit of</p>
              <span className='font-extrabold'>
                {exerciseInfo.circuits[0].circuitOf}
              </span>
              <p>rounds</p>
            </div>

            <div className='flex gap-2'>
              <button onClick={() => handleDelete(index)}>
                <FaTrash color='gray' />
              </button>
              <button onClick={() => handleEditCircuit(index)}>
                <FaEdit color='gray' />
              </button>
            </div>
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
      )}
    </div>
  );
}

export default CircuitsSubTable;
