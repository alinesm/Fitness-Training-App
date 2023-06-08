import ExerciseInfo from './ExerciseInfo';
import { FaPlusCircle } from 'react-icons/fa';
import TableHead from './TableHead';
import SupertestsInfo from './SupertestsInfo';

function SupertestModal({
  setOpenModalSuperset,
  supersetsList,
  setSupersetsList,
  exercisesList,
  setExercisesList,
}) {
  // const handleSaveExerciseInfo = (updatedExerciseInfo, index) => {
  //   setExercisesList((prevList) => {
  //     const newList = [...prevList];
  //     newList[index] = updatedExerciseInfo;
  //     return newList;
  //   });
  // };

  // function handleSaveButtonClick() {
  //   supersetsList.forEach((exerciseInfo, index) => {
  //     handleSaveExerciseInfo(exerciseInfo, index);
  //   });
  // }

  function handleCreateSupertest() {
    // handleSaveButtonClick();
    const combinedArray = [
      ...exercisesList,
      { supertests: [...supersetsList] },
    ];
    setExercisesList(combinedArray);

    // setExercisesList([...exercisesList, ...supersetsList]);
    setSupersetsList([]);
    setOpenModalSuperset(false);
  }
  console.log('lista com supertsets', exercisesList);

  return (
    <div>
      <div className='flex  items-center justify-between py-3 px-4 '>
        <h1 className='text-base font-bold uppercase '>Add exercises</h1>
        <button
          onClick={handleCreateSupertest}
          className='uppercase text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          <div className='flex items-center gap-1'>
            <FaPlusCircle />
            Create Supertest
          </div>
        </button>
      </div>

      <div class='sm:rounded-lg'>
        <div class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <TableHead />
          {supersetsList.map((exerciseInfo, index) => (
            // <ExerciseInfo
            //   key={exerciseInfo.exerciseName}
            //   exercisesList={supersetsList}
            //   setExercisesList={setSupersetsList}
            //   exerciseInfo={exerciseInfo}
            // />
            <SupertestsInfo
              key={exerciseInfo.exerciseName}
              exercisesList={supersetsList}
              setExercisesList={setSupersetsList}
              // onSaveExerciseInfo={handleSaveExerciseInfo}
              index={index}
              exerciseInfo={exerciseInfo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SupertestModal;
