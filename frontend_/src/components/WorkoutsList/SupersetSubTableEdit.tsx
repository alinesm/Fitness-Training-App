import React, { useState } from 'react';
import SupertestsInfo from '../WorkoutsCreation/SupertestsInfo';
import SupersestInfoEdit from './SupersetInfoEdit';

function SupersetSubTableEdit({
  exerciseInfo,
  exercisesList,
  setExercisesList,
}) {
  const supersetOf = exerciseInfo.supertests[0].rounds;
  const [rounds, setRounds] = useState(supersetOf);
  console.log('exerciseInfo', exerciseInfo);
  console.log('exerceocelist', exercisesList);
  console.log('rounds', rounds);

  // const handleRoundsChange = (e) => {
  //   const updatedRounds = e.target.value;
  //   setRounds(updatedRounds);

  //   updateExerciseInfo(updatedRounds);
  // };

  // const updateExerciseInfo = (updatedRounds) => {
  //   const updatedExerciseInfo = {
  //     // ...exerciseInfo,
  //     supertests: [
  //       {
  //         rounds: updatedRounds,
  //         // ...exerciseInfo.supertests[0],
  //       },
  //       ...exerciseInfo.supertests.slice(1),
  //     ],
  //   };
  //   // const updatedExercisesList = exercisesList.map((item) => {
  //   //   if (item.id === exerciseInfo.id) {
  //   //     return updatedExerciseInfo;
  //   //   }
  //   //   return item;
  //   // });
  //   setExercisesList(updatedExerciseInfo);
  //   // setExercisesList(updatedExercisesList);
  // };

  return (
    <div className='border-y-2 bg-blue-50  border-blue-300'>
      <div className='flex border-b border-gray-300 py-3 gap-5 items-center pl-4 text-base font-semibold'>
        <p>Superset of</p>
        <input
          value={rounds}
          // onChange={handleRoundsChange}
          className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm
        rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='number'
          placeholder='1'
        />
      </div>

      {exerciseInfo.supertests.slice(1).map((exercise, index) => (
        <SupersestInfoEdit
          key={exercise.exerciseName}
          exercisesList={exercisesList}
          setExercisesList={setExercisesList}
          supersetArray={exerciseInfo}
          exerciseInfo={exercise}
          index={index} // Add 1 to the index to adjust for skipping the first element
        />
      ))}
    </div>
  );
}

export default SupersetSubTableEdit;
