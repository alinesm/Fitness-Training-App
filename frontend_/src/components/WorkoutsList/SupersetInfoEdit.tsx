import React from 'react';
import { useState, useEffect } from 'react';

import { FaTrash, FaRegEdit } from 'react-icons/fa';

function SupersestInfoEdit({
  supersetArray,
  index,
  exercisesList,
  setExercisesList,
  exerciseInfo,
}) {
  console.log('inex', index);
  const maxLength = 13;
  const [text, setText] = useState(exerciseInfo.text);
  const [restSecs, setRestSecs] = useState(exerciseInfo.restSecs);

  const handleTextChange = (e) => {
    const updatedText = e.target.value;
    setText(updatedText);
    const updatedExerciseInfo = {
      ...exerciseInfo,
      text: updatedText,
    };
    const updatedSupersetArray = { ...supersetArray };

    // updatedSupersetArray.supertests
    //   .slice(1)
    //   .map((item, idx) =>
    //     idx === index ? { ...item, text: updatedText } : item,
    //   );
    updatedSupersetArray.supertests.slice(1)[index] = updatedExerciseInfo;
    console.log('updatedSupersetArray', {
      ...updatedSupersetArray,
      updatedExerciseInfo,
    });
    // const updatedExercisesList = [...exercisesList];
    // updatedExercisesList[index] = updatedSupersetArray;
    // setExercisesList(updatedExercisesList);
  };

  // const handleRestSecsChange = (e) => {
  // const updatedExerciseInfo = {
  //   ...exerciseInfo,
  //   restSecs: e.target.value,
  // };
  //   const updatedExercisesList = [...exercisesList];
  //   updatedExercisesList[index] = updatedExerciseInfo;
  //   setExercisesList(updatedExercisesList);
  // };

  console.log('exerciselisttt', exercisesList);

  // const handleTextChange = (e) => {
  //   const updatedText = e.target.value;
  //   setText(updatedText);
  //   const updatedExerciseInfo = {
  //     ...exerciseInfo,
  //     text: updatedText,
  //   };
  //   console.log('updatedExerciseInfo', updatedExerciseInfo);
  //   const aux = { ...exerciseInfoInfo };
  //   console.log('index', index);
  //   console.log(
  //     'updatedExercisesList',
  //     aux.supertests
  //       .slice(1)
  //       .map((item, idx) =>
  //         idx === index
  //           ? ( { ...item, text: updatedText })
  //           : (item),
  //       ),
  //   );

  // aux.supertests.slice(1)[index] = {
  //   ...aux.supertests.slice(1)[index],
  //   text: updatedText,
  // };

  // updatedExercisesList[index] = updatedExerciseInfo;
  // console.log('uptadesindex', updatedExercisesList[index]);
  // console.log('updatedExerciseInfo', updatedExerciseInfo);
  // setExercisesList(updatedExercisesList);

  const handleRestSecsChange = (e) => {
    const updatedExerciseInfo = {
      ...exerciseInfo,
      restSecs: e.target.value,
    };
    const updatedExercisesList = [...exercisesList];
    updatedExercisesList[index] = updatedExerciseInfo;
    setExercisesList(updatedExercisesList);

    // const handleTextChange = (e) => {
    // const updatedText = e.target.value;
    // setText(updatedText);
    //   updateExerciseInfo(updatedText, restSecs);
    // };

    // const handleRestSecsChange = (e) => {
    //   const updatedRestSecs = e.target.value;
    //   setRestSecs(updatedRestSecs);
    //   updateExerciseInfo(text, updatedRestSecs);
    // };

    // const updateExerciseInfo = (updatedText, updatedRestSecs) => {
    //   const updatedExercisesList = [...exercisesList];
    //   console.log(
    //     'updatedText, updatedRestSecs',
    //     updatedText,
    //     index,
    //     updatedRestSecs,
    //   );
    //   console.log('updatedExercisesList', updatedExercisesList);
    // updatedExercisesList[index].supertests = updatedExercisesList[
    //   index
    // ].supertests.map((item) => {
    //   if (item.exerciseId) {
    //     return {
    //       ...item,
    //       text: updatedText,
    //       restSecs: updatedRestSecs,
    //     };
    //   }
    //   return item;
    // });
    // setExercisesList(updatedExercisesList);
  };
  console.log('exercisesListsss', exercisesList);
  // console.log('text', text);

  return (
    <>
      <div className='bg-blue-50 flex items-center justify-between px-4 border-gray-300 border-b dark:bg-gray-800 dark:border-gray-700 '>
        <div className='w-20'>
          <img
            className='w-full h-full'
            src={exerciseInfo.exerciseGift}
            alt='gif'
          />
        </div>
        <div className='px-1 text-gray-900 dark:text-white capitalize'>
          {exerciseInfo.exerciseName.length <= maxLength
            ? exerciseInfo.exerciseName
            : `${exerciseInfo.exerciseName.substring(0, maxLength)}...`}
        </div>
        <div className='font-semibold text-gray-900 dark:text-white'>
          <div>
            <input
              value={text}
              onChange={handleTextChange}
              type='text'
              className='bg-gray-50 w-32 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='reps, weight, time, etc'
              required
            />
          </div>
        </div>
        <div className='text-gray-900 dark:text-white'>
          <div>
            <select
              value={restSecs}
              onChange={handleRestSecsChange}
              className='bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option value='none'>None</option>
              <option value='45'>45 sec</option>
              <option value='90'>90 sec</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupersestInfoEdit;
