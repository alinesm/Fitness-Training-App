import React, { useState } from 'react';
import ExerciseInfo from './ExerciseInfo';
import { FaPlusCircle, FaRegHandPaper } from 'react-icons/fa';
import TableHead from './TableHead';
import SupertestSubTable from './SupertestSubTable';
import CircuitsSubTable from './CircuitsSubTable';
import RestRow from './RestRow';
import CircuitModal from './CircuitModal';
import SupertestModal from './SupertestModal';

function Table({
  exercisesList,
  setExercisesList,
  onSaveExerciseInfo,
  setOpenModalSuperset,
  setOpenModalCircuit,
  circuitList,
  setCircuitList,
  supersetsList,
  setSupersetsList,
  openModalCircuit,
  openModalSuperset,
  workOutItialInfo,
  setWorkOutItialInfo,
}) {
  const [rest, setRest] = useState('90');
  const [numRounds, setNumRounds] = useState(1);
  const [indexCircuitEdit, setIndexCircuitEdit] = useState(null); //index of circuit to be edited
  const [isEditing, setIsEditing] = useState(false);

  function addRest() {
    const combinedArray = [...exercisesList, { rest: rest }];
    setExercisesList(combinedArray);
  }

  return (
    <div className='w-full relative bg-white'>
      <div className='p-4'>
        <h1 className='text-sm text-gray-600 font-semibold mb-1'>
          WORKOUT NAME
        </h1>
        <input
          value={workOutItialInfo.workoutName}
          onChange={(e) =>
            setWorkOutItialInfo({
              ...workOutItialInfo,
              workoutName: e.target.value,
            })
          }
          type='text'
          className='w-full h-10 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
      <div className='flex px-4 gap-20'>
        <div className=''>
          <h1 className='text-gray-600 text-sm font-semibold mb-1'>GOAL</h1>
          <select
            onChange={(e) =>
              setWorkOutItialInfo({ ...workOutItialInfo, goal: e.target.value })
            }
            className='h-10 w-36 py-1 px-1 text-sm border rounded-md'
          >
            <option value='cardio'>Cardio training</option>
            <option value='strength'>Strength training</option>
            <option value='hypertrophy'>Hypertrophy training</option>
            <option value='endurance'>Endurance training</option>
            <option value='power'>Power training</option>
          </select>
        </div>

        <div className=''>
          <h1 className='text-sm font-semibold mb-1 text-gray-600'>
            FREQUENCY
          </h1>
          <select
            onChange={(e) =>
              setWorkOutItialInfo({
                ...workOutItialInfo,
                frequency: e.target.value,
              })
            }
            className='h-10 w-36 py-1 px-1 text-sm border rounded-md'
          >
            <option value='once'>once a week</option>
            <option value='twice'>twice a week</option>
            <option value='three'>three times a week</option>
            <option value='four'>four times a week</option>
            <option value='five'>five times a week</option>
            <option value='six'>six times a week</option>
            <option value='seven'>seven times a week</option>
          </select>
        </div>
      </div>

      <div className='p-4'>
        <h1 className='text-sm font-semibold mb-1 text-gray-600'>
          INSTRUCTIONS
        </h1>
        <textarea
          value={workOutItialInfo.description}
          onChange={(e) =>
            setWorkOutItialInfo({
              ...workOutItialInfo,
              description: e.target.value,
            })
          }
          className='w-full h-32 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        ></textarea>
      </div>

      <h1 className='text-gray-600 text-base border-gray-300 border-y font-bold uppercase bg-gray-200 py-3 px-4'>
        Exercises
      </h1>
      <div className='flex justify-between px-4 my-3'>
        <div>
          <button
            onClick={() => setOpenModalSuperset(true)}
            className='mr-3 uppercase text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            <div className='flex items-center gap-1'>
              <FaPlusCircle /> Superset
            </div>
          </button>

          <button
            onClick={() => setOpenModalCircuit(true)}
            className=' uppercase text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          >
            <div className='flex items-center gap-1'>
              <FaPlusCircle /> Circuit
            </div>
          </button>
        </div>

        <button
          onClick={addRest}
          className=' uppercase text-white bg-red-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          <div className='flex items-center gap-1'>
            <FaRegHandPaper />
            ADD Rest
          </div>
        </button>
      </div>

      <div className='w-full text-sm text-left dark:text-gray-400'>
        <TableHead />
        {exercisesList.length === 0 && (
          <div className='flex items-center justify-center'>
            <p className='text-center px-20 text-gray-500 text-sm py-10'>
              No exercises added yet, please click on the exercises aside and
              start to create the workout plan
            </p>
          </div>
        )}

        {exercisesList.map((exerciseInfo, index) =>
          exerciseInfo.supertests ? (
            <SupertestSubTable
              exerciseInfo={exerciseInfo}
              exercisesList={exercisesList}
              setOpenModalSuperset={setOpenModalSuperset}
              index={index}
              setSupersetsList={setSupersetsList}
              setNumRounds={setNumRounds}
              setIndexCircuitEdit={setIndexCircuitEdit}
              setIsEditing={setIsEditing}
            />
          ) : exerciseInfo.circuits ? (
            <CircuitsSubTable
              exerciseInfo={exerciseInfo}
              exercisesList={exercisesList}
              setOpenModalCircuit={setOpenModalCircuit}
              index={index}
              setCircuitList={setCircuitList}
              setNumRounds={setNumRounds}
              setIndexCircuitEdit={setIndexCircuitEdit}
              setIsEditing={setIsEditing}
            />
          ) : exerciseInfo.rest ? (
            <RestRow setRest={setRest} />
          ) : (
            <ExerciseInfo
              key={exerciseInfo.exerciseName}
              exerciseInfo={exerciseInfo}
              index={index}
              onSaveExerciseInfo={onSaveExerciseInfo}
              exercisesList={exercisesList}
              setExercisesList={setExercisesList}
            />
          ),
        )}
      </div>

      <SupertestModal
        supersetsList={supersetsList}
        setOpenModalSuperset={setOpenModalSuperset}
        setSupersetsList={setSupersetsList}
        exercisesList={exercisesList}
        setExercisesList={setExercisesList}
        numRounds={numRounds}
        setNumRounds={setNumRounds}
        indexCircuitEdit={indexCircuitEdit}
        setIndexCircuitEdit={setIndexCircuitEdit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        visible={openModalSuperset}
      />

      <CircuitModal
        circuitList={circuitList}
        setCircuitList={setCircuitList}
        setOpenModalCircuit={setOpenModalCircuit}
        exercisesList={exercisesList}
        setExercisesList={setExercisesList}
        numRounds={numRounds}
        setNumRounds={setNumRounds}
        indexCircuitEdit={indexCircuitEdit}
        setIndexCircuitEdit={setIndexCircuitEdit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        visible={openModalCircuit}
      />
    </div>
  );
}

export default Table;

// {exercisesList.map((exerciseInfo) =>
//     <ExerciseInfo
//       key={exerciseInfo.exerciseName}
//       exercisesList={exercisesList}
//       setExercisesList={setExercisesList}
//       exerciseInfo={exerciseInfo}
//       teste={teste}
//       setTeste={setTeste}
//     />

// )}

// {exercisesList.map((exerciseInfo) => (
//   <ExerciseInfo
//     key={exerciseInfo.exerciseName}
//     exercisesList={exercisesList}
//     setExercisesList={setExercisesList}
//     exerciseInfo={exerciseInfo}
//   />
// ))}

// {supersetsList.length > 0 && (
//   <>
//     <tr className='flex gap-10 py-3 w-full'>
//       <p className=' border-t-4'>Superset of </p>
//       <input
//         type='number'
//         className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
//         placeholder='1'
//         required
//       />
//     </tr>
//     {supersetsList.map((exerciseInfo) => (
//       <SupertestsInfo
//         key={exerciseInfo.exerciseName}
//         exercisesList={exercisesList}
//         setExercisesList={setExercisesList}
//         exerciseInfo={exerciseInfo}
//       />
//     ))}
//   </>
// )}
