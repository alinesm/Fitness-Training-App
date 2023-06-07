import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ExerciseCard({
  openModalSuperset,
  exercise,
  exercisesList,
  setExercisesList,
  setSupertestList,
  supertestList,
}) {
  // console.log('exercise', exercise);
  const [exerciseInfo, setExerciseInfo] = useState({
    exerciseId: '',
    exerciseGift: '',
    exerciseName: '',
    sets: '',
    text: '',
    restSecs: '',
  });

  const maxLength = 32;

  function handleAddExercise() {
    const addExercise = {
      ...exerciseInfo,
      exerciseId: exercise.id,
      exerciseName: exercise.name,
      exerciseGift: exercise.gifUrl,
    };
    if (!openModalSuperset) {
      setExerciseInfo(addExercise);
      setExercisesList([...exercisesList, addExercise]);
    } else {
      setExerciseInfo(addExercise);
      setSupertestList([...supertestList, addExercise]);
    }
  }
  console.log('exercisesList', exercisesList);
  console.log('supertestList', supertestList);

  return (
    <div className='flex flex-col items-center  w-40 relative rounded-md shadow-md h-60 border px-2 py-3 bg-gray-100'>
      <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img
          className='w-36 rounded-md shadow-sm h-32'
          src={exercise.gifUrl}
          alt={exercise.name}
        />
      </Link>
      <div className='mt-2 mb-3'>
        <button className='text-white mr-2 text-xs bg-orange-300 px-2 py-1 text-center rounded-full'>
          {exercise.bodyPart}
        </button>
        <button className='text-white text-xs bg-yellow-300 px-2 py-1 text-center rounded-full'>
          {exercise.target}
        </button>
      </div>
      <p className='text-sm font-semibold capitalize text-center'>
        {exercise.name.length <= maxLength
          ? exercise.name
          : `${exercise.name.substring(0, maxLength)}...`}
      </p>
      <button
        onClick={handleAddExercise}
        class='absolute right-1 top-1 px-1 h-fit text-gray-400 bg-white  hover:bg-gray-200 hover:text-gray-900 text-3xl rounded-md items-center dark:hover:bg-gray-600 dark:hover:text-white'
      >
        +
      </button>
    </div>
  );
}

export default ExerciseCard;
