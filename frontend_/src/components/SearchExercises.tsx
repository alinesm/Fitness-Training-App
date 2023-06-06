import React, { useEffect, useState } from 'react';
import { getAllExercises, getBodyParts } from '../services/externalApi';
import HorizontalScrollbar from './HorizontalScrollbar ';
import data from '../assets/data';

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState('');
  const [bodyPartsList, setBodyPartsList] = useState([]);

  async function bodyParts() {
    // const bodyPartsData = await getBodyParts();
    const bodyPartsData = [
      'back',
      'cardio',
      'chest',
      'lower arms',
      'lower legs',
      'neck',
      'shoulders',
      'upper arms',
      'upper legs',
      'waist',
    ];
    setBodyPartsList(['all', ...bodyPartsData]);
  }

  useEffect(() => {
    bodyParts();
  }, []);

  function handleSearch() {
    if (search) {
      const exercisesData = [...data];
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

  // async function handleSearch() {
  //   if (search) {
  //     // const exercisesData = await getAllExercises();
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

  return (
    <div>
      <input
        placeholder='Search Exercises'
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={handleSearch}>Search</button>
      <HorizontalScrollbar
        data={bodyPartsList}
        bodyParts={bodyPartsList}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </div>
  );
}

export default SearchExercises;
