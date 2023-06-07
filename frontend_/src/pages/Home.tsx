import React, { useEffect, useState } from 'react';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import WorkoutsCreation from '../components/WorkoutsCreation';

function Home() {
  return (
    <div>
      <WorkoutsCreation />
    </div>
  );
}

export default Home;
