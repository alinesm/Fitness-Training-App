import React, { useState } from 'react';

import AddExercises from './AddExercises';
import Table from './Table';
import SupertestModal from './SupertestModal';

function WorkoutsCreation({
  setExercises,
  exercises,
  bodyPart,
  exercisesList,
  setExercisesList,
}) {
  const [openModalSuperset, setOpenModalSuperset] = useState(false);
  const [supertestList, setSupertestList] = useState([]);
  return (
    <div className='grid grid-cols-2 bg-slate-600 py-20 px-7 w-full'>
      {openModalSuperset ? (
        <div className='w-full h-fit bg-white'>
          <SupertestModal
            supertestList={supertestList}
            setOpenModalSuperset={setOpenModalSuperset}
            setSupertestList={setSupertestList}
            exercisesList={exercisesList}
            setExercisesList={setExercisesList}
          />
        </div>
      ) : (
        <div className='w-full bg-white'>
          <Table
            exercisesList={exercisesList}
            setExercisesList={setExercisesList}
            setOpenModalSuperset={setOpenModalSuperset}
          />
        </div>
      )}

      <AddExercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        exercisesList={exercisesList}
        setExercisesList={setExercisesList}
        openModalSuperset={openModalSuperset}
        setSupertestList={setSupertestList}
        supertestList={supertestList}
      />
    </div>
  );
}

export default WorkoutsCreation;
