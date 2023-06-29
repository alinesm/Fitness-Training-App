import React, { useEffect, useState } from 'react';
import { getAllExercises, getBodyParts } from '../services/externalApi';
import HorizontalScrollbar from './HorizontalScrollbar ';
import data from '../assets/data';

function SearchExercises({
  setBodyPartsList,
  setExercises,
  bodyPart,
  setBodyPart,
}) {
  const [search, setSearch] = useState('');

  async function bodyParts() {
    const bodyPartsData = await getBodyParts();
    // const bodyPartsData = [
    //   'back',
    //   'cardio',
    //   'chest',
    //   'lower arms',
    //   'lower legs',
    //   'neck',
    //   'shoulders',
    //   'upper arms',
    //   'upper legs',
    //   'waist',
    // ];
    setBodyPartsList(['all', ...bodyPartsData]);
  }

  useEffect(() => {
    bodyParts();
  }, []);

  // function handleSearch() {
  //   if (search) {
  //     const exercisesData = [...data];
  //     console.log(exercisesData);
  //     setSearch('');

  //     const filteredExercises = exercisesData.filter(
  //       (item) =>
  //         item.name.toLowerCase().includes(search) ||
  //         item.target.toLowerCase().includes(search) ||
  //         item.equipment.toLowerCase().includes(search) ||
  //         item.bodyPart.toLowerCase().includes(search),
  //     );
  //     setExercises(filteredExercises);
  //   }
  // }

  async function handleSearch() {
    if (search) {
      const exercisesData = await getAllExercises();
      console.log(exercisesData);
      setSearch('');

      const filteredExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search),
      );
      setExercises(filteredExercises);
    }
  }

  return (
    <div class='relative'>
      <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <svg
          class='w-5 h-5 text-gray-500 dark:text-gray-400'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            clip-rule='evenodd'
          ></path>
        </svg>
      </div>
      <input
        placeholder='Type a exercise'
        type='text'
        value={search}
        class='block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button
        className='absolute top-1.5 right-1.5 text-xs  bg-gray-500 rounded-md px-2 py-1.5 text-white'
        onClick={handleSearch}
      >
        Search
      </button>
      {/* <HorizontalScrollbar
        data={bodyPartsList}
        bodyParts={bodyPartsList}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      /> */}
    </div>
  );
}

export default SearchExercises;
