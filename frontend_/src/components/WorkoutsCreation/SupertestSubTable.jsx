import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import SupersetModalInfo from './SupersetModalInfo';

function SupertestSubTable({
  exerciseInfo,
  exercisesList,
  index,
  setOpenModalSuperset,
  setNumRounds,
  setIndexCircuitEdit,
  setSupersetsList,
  setIsEditing,
  setExercisesList,
  handleDelete,
}) {
  function handleEditSuperset(index) {
    setOpenModalSuperset(true);
    setIndexCircuitEdit(index);
    setIsEditing(true);
    const circuitExercises = exercisesList.find((item, idx) => idx === index);
    setNumRounds(circuitExercises.supertests[0].supersetOf);
    setSupersetsList(circuitExercises.supertests.slice(1));
  }

  return (
    <div>
      {exerciseInfo.supertests.slice(1).length > 0 && (
        <div className='border-y-2 bg-blue-50  border-blue-300'>
          <div className='flex justify-between border-b border-gray-300 py-1 tems-center px-4 text-base font-medium'>
            <div className='flex text-gray-600 items-center gap-2'>
              <p>Superset of</p>
              <span className='font-extrabold'>
                {exerciseInfo.supertests[0].supersetOf}
              </span>
              <p>sets</p>
            </div>

            <div className='flex gap-2'>
              <button onClick={() => handleDelete(index)}>
                <FaTrash color='gray' />
              </button>
              <button onClick={() => handleEditSuperset(index)}>
                <FaEdit color='gray' />
              </button>
            </div>
          </div>

          {exerciseInfo.supertests.slice(1).map((exercise, index) => (
            <SupersetModalInfo
              key={exercise.exerciseName}
              exerciseInfo={exercise}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SupertestSubTable;
